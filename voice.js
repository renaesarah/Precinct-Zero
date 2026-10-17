/* Precinct Zero: live voice chat for Case Rooms.
   Audio goes directly between players' browsers (WebRTC). Firestore only carries
   the short connection handshake. Load AFTER game.js and directory-firebase.js.
   Needs HTTPS hosting (GitHub Pages is fine) and microphone permission. */
(function () {
  if (!window.RTCPeerConnection || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;

  const ICE = { iceServers: [{ urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] }] };
  const STALE = 90000;   // a voice entry not refreshed for 90 s counts as gone
  const V = { on: false, code: null, stream: null, muted: false, sess: null, started: 0,
    list: [], listLoaded: false, peers: {}, early: {}, speaking: {}, analysers: {},
    unsub: [], beat: null, meter: null, ctx: null };
  window.PZVoice = { state: V, join: joinVoice, leave: leaveVoice, mute: toggleMute };

  const col = n => SYNC.store.collection(`rooms/${V.code || ROOM.code}/${n}`);
  const now = () => Date.now();
  const nm = () => (G.profile && G.profile.name) || "Detective";
  const isIn = uid => V.list.some(v => v.id === uid);

  /* ---------- connection handshake ---------- */
  function send(to, msg) {
    return col("signal").add(Object.assign({ from: SYNC.uid, to, sess: V.sess, at: now() }, msg)).catch(() => {});
  }
  function makePeer(uid) {
    dropPeer(uid, true);
    const pc = new RTCPeerConnection(ICE);
    const audio = document.createElement("audio");
    audio.autoplay = true; audio.playsInline = true; audio.hidden = true;
    document.body.appendChild(audio);
    const p = { pc, audio, ice: V.early[uid] || [] };
    delete V.early[uid];
    V.stream.getTracks().forEach(t => pc.addTrack(t, V.stream));
    pc.ontrack = e => { audio.srcObject = e.streams[0]; audio.play().catch(() => {}); meterFor(uid, e.streams[0]); };
    pc.onicecandidate = e => { if (e.candidate) send(uid, { type: "ice", cand: JSON.stringify(e.candidate) }); };
    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "failed") {
        dropPeer(uid);
        if (SYNC.uid < uid) setTimeout(() => { if (V.on && !V.peers[uid] && isIn(uid)) call(uid); }, 2000);
      }
      renderVoice();
    };
    V.peers[uid] = p;
    return p;
  }
  function dropPeer(uid, quiet) {
    const p = V.peers[uid]; if (!p) return;
    try { p.pc.close(); } catch (e) {}
    p.audio.srcObject = null; p.audio.remove();
    delete V.peers[uid]; delete V.analysers[uid]; delete V.speaking[uid];
    if (!quiet) renderVoice();
  }
  async function flush(p) { for (const c of p.ice.splice(0)) { try { await p.pc.addIceCandidate(c); } catch (e) {} } }
  async function call(uid) {
    const p = makePeer(uid);
    try {
      const o = await p.pc.createOffer();
      await p.pc.setLocalDescription(o);
      await send(uid, { type: "offer", sdp: o.sdp });
    } catch (e) { dropPeer(uid); }
  }
  async function onSignal(s) {
    if (!V.on || (s.at || 0) < V.started - 2000) return;
    try {
      if (s.type === "offer") {
        const p = makePeer(s.from);
        await p.pc.setRemoteDescription({ type: "offer", sdp: s.sdp });
        const a = await p.pc.createAnswer();
        await p.pc.setLocalDescription(a);
        await send(s.from, { type: "answer", sdp: a.sdp });
        await flush(p);
      } else if (s.type === "answer") {
        const p = V.peers[s.from];
        if (!p || p.pc.signalingState !== "have-local-offer") return;
        await p.pc.setRemoteDescription({ type: "answer", sdp: s.sdp });
        await flush(p);
      } else if (s.type === "ice") {
        const c = JSON.parse(s.cand), p = V.peers[s.from];
        if (p && p.pc.remoteDescription) await p.pc.addIceCandidate(c).catch(() => {});
        else if (p) p.ice.push(c);
        else (V.early[s.from] = V.early[s.from] || []).push(c);
      }
    } catch (e) {}
  }

  /* ---------- who is on voice ---------- */
  function onVoiceList(snap) {
    const t = now(), before = new Set(V.list.map(v => v.id)), first = !V.listLoaded;
    V.listLoaded = true;
    V.list = snap.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(v => t - (v.at || 0) < STALE);
    if (!first) V.list.forEach(v => {
      if (v.id === SYNC.uid || before.has(v.id)) return;
      sfx("radio");
      toast(V.on ? `${v.name} joined voice` : `${v.name} is on voice. Open Room radio to join.`);
    });
    if (V.on) {
      V.list.forEach(v => { if (v.id !== SYNC.uid && !V.peers[v.id] && SYNC.uid < v.id) call(v.id); });
      Object.keys(V.peers).forEach(uid => { if (!isIn(uid)) dropPeer(uid); });
    }
    renderVoice(); renderChrome();
  }
  function beat() {
    if (!V.on) return Promise.resolve();
    return col("voice").doc(SYNC.uid).set({ name: nm(), at: now(), muted: V.muted, sess: V.sess }).catch(() => {});
  }

  /* ---------- join / leave / mute ---------- */
  async function joinVoice() {
    if (V.on || !ROOM.on || !SYNC.store) return;
    try {
      V.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    } catch (e) {
      toast("Microphone blocked. Allow it from the icon in the address bar, then try again.");
      return;
    }
    V.on = true; V.muted = false; V.code = ROOM.code; V.started = now();
    V.sess = Math.random().toString(36).slice(2);
    try { V.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
    meterFor(SYNC.uid, V.stream);
    V.unsub.push(col("signal").where("to", "==", SYNC.uid).onSnapshot(snap => {
      snap.docChanges().forEach(ch => {
        if (ch.type !== "added") return;
        const s = ch.doc.data();
        ch.doc.ref.delete().catch(() => {});
        onSignal(s);
      });
    }, () => {}));
    await beat();
    V.beat = setInterval(beat, 20000);
    V.meter = setInterval(meterTick, 150);
    sfx("radio");
    toast("You're on voice. Your team can hear you.");
    renderVoice(); renderChrome();
  }
  function leaveVoice() {
    if (!V.on) return;
    V.on = false;
    clearInterval(V.beat); clearInterval(V.meter);
    V.unsub.forEach(u => { try { u(); } catch (e) {} }); V.unsub = [];
    Object.keys(V.peers).forEach(uid => dropPeer(uid, true));
    if (V.stream) V.stream.getTracks().forEach(t => t.stop());
    V.stream = null;
    if (V.ctx) { V.ctx.close().catch(() => {}); V.ctx = null; }
    V.analysers = {}; V.speaking = {};
    col("voice").doc(SYNC.uid).delete().catch(() => {});
    V.code = null;
    renderVoice(); renderChrome();
  }
  function toggleMute() {
    if (!V.on) return;
    V.muted = !V.muted;
    V.stream.getAudioTracks().forEach(t => { t.enabled = !V.muted; });
    beat(); renderVoice(); renderChrome();
  }

  /* ---------- speaking indicator ---------- */
  function meterFor(uid, stream) {
    if (!V.ctx) return;
    try {
      const src = V.ctx.createMediaStreamSource(stream), an = V.ctx.createAnalyser();
      an.fftSize = 512; src.connect(an);
      V.analysers[uid] = { an, buf: new Uint8Array(an.fftSize) };
    } catch (e) {}
  }
  function meterTick() {
    for (const [uid, a] of Object.entries(V.analysers)) {
      a.an.getByteTimeDomainData(a.buf);
      let s = 0; for (const v of a.buf) { const x = (v - 128) / 128; s += x * x; }
      const talk = Math.sqrt(s / a.buf.length) > 0.035 && !(uid === SYNC.uid && V.muted);
      if (!!V.speaking[uid] !== talk) {
        V.speaking[uid] = talk;
        document.querySelectorAll(`[data-vuid="${uid}"]`).forEach(el => el.classList.toggle("talk", talk));
      }
    }
  }

  /* ---------- UI ---------- */
  function renderVoice() {
    const host = document.getElementById("rcVoice"); if (!host) return;
    const others = V.list.filter(v => v.id !== SYNC.uid);
    if (!V.on) {
      host.innerHTML = `<button class="btn primary small" data-act="vJoin">Join voice</button><span class="vtxt">${others.length ? `${others.length} on voice: ${others.map(v => esc(v.name)).join(", ")}` : "Nobody on voice yet"}</span>`;
      return;
    }
    const people = isIn(SYNC.uid) ? V.list : [{ id: SYNC.uid, name: nm(), muted: V.muted }].concat(V.list);
    host.innerHTML = `<div class="vppl">${people.map(v => {
      const me = v.id === SYNC.uid, m = ROOM.members[v.id] || { name: v.name, color: 0 };
      const st = me ? "" : (V.peers[v.id] ? V.peers[v.id].pc.connectionState : "connecting");
      const muted = me ? V.muted : v.muted, waiting = st && st !== "connected";
      return `<span class="vp ${V.speaking[v.id] ? "talk" : ""} ${muted ? "muted" : ""} ${waiting ? "wait" : ""}" data-vuid="${esc(v.id)}" title="${esc(v.name)}${me ? " (you)" : ""}${muted ? " · muted" : ""}${waiting ? " · " + st : ""}">${detAvatar(m)}</span>`;
    }).join("")}</div><button class="btn small" data-act="vMute">${V.muted ? "Unmute" : "Mute"}</button><button class="btn small" data-act="vLeave">Leave voice</button>`;
  }

  // Add the voice bar to the Room radio panel.
  const _renderChat = renderChat;
  renderChat = function () {
    _renderChat();
    const log = document.getElementById("rcLog");
    if (log && !document.getElementById("rcVoice")) {
      const d = document.createElement("div"); d.id = "rcVoice"; d.className = "rcvoice";
      log.parentNode.insertBefore(d, log);
    }
    renderVoice();
  };
  // Mic button in the room bar at the top.
  const _chip = roomChipHTML;
  roomChipHTML = function () {
    const others = V.list.filter(v => v.id !== SYNC.uid).length;
    return _chip() + (V.on
      ? `<button class="iconbtn vchip ${V.muted ? "" : "live"}" data-act="vMute">${V.muted ? "Mic off" : "Mic on"}</button>`
      : (others ? `<button class="iconbtn vchip" data-act="vOpen">${others} on voice</button>` : ""));
  };
  // Watch who's on voice whenever you're in a room; hang up when leaving it.
  const _sub = subscribeRoom;
  subscribeRoom = function () {
    _sub();
    V.list = []; V.listLoaded = false;
    ROOM.unsub.push(SYNC.store.collection(`rooms/${ROOM.code}/voice`).onSnapshot(onVoiceList, () => {}));
  };
  const _leave = leaveRoom;
  leaveRoom = function (s) { leaveVoice(); return _leave(s); };
  const _join = joinRoom;
  joinRoom = function (c, s) { leaveVoice(); return _join(c, s); };

  document.addEventListener("click", e => {
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act;
    if (act === "vJoin") joinVoice();
    if (act === "vMute") toggleMute();
    if (act === "vLeave") leaveVoice();
    if (act === "vOpen") { chatOpen = true; chatUnread = 0; renderChat(); renderChrome(); }
  });
  window.addEventListener("pagehide", () => { if (V.on && SYNC.store) col("voice").doc(SYNC.uid).delete().catch(() => {}); });

  const css = document.createElement("style");
  css.textContent = `
.rcvoice{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:8px 10px;border-bottom:1px solid var(--line);background:#120b0a}
.rcvoice .vtxt{font-size:12px;color:var(--muted)}
.vppl{display:flex;gap:6px;margin-right:auto;flex-wrap:wrap}
.vp{width:32px;height:32px;border-radius:50%;overflow:hidden;border:2px solid var(--line);transition:box-shadow .12s,border-color .12s;position:relative;display:block}
.vp .av{width:100%;height:100%;display:grid;place-items:center;border-radius:50%;font-size:12px;color:#11161b;font-family:var(--display);font-weight:800}
.vp.talk{border-color:#5fb380;box-shadow:0 0 0 3px rgba(95,179,128,.45)}
.vp.muted{opacity:.55}
.vp.muted::after{content:"";position:absolute;inset:0;background:linear-gradient(45deg,transparent 46%,#d9634f 46% 54%,transparent 54%)}
.vp.wait{filter:grayscale(1)}
.vchip.live{border-color:#5fb380;color:#8fd1a8}`;
  document.head.appendChild(css);
})();
