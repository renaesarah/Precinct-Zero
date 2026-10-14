/* Precinct Zero: Precinct Directory + radio via Firebase (for GitHub Pages or any static host).
   Load AFTER game.js, together with the three Firebase "compat" scripts (see index.html).
   Paste your project's config below. Until you do, the game runs normally and the
   directory shows its "not reachable" notice. */
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyBkO6hgOCTvNWrLdOl1y0zCj3m8f9zHamY",
    authDomain: "precinct-zero.firebaseapp.com",
    projectId: "precinct-zero",
    appId: "1:353983930170:web:c37a2a6a03f0b88a2f7a03"
  };
  if (!window.firebase || firebaseConfig.apiKey.startsWith("PASTE")) return;

  firebase.initializeApp(firebaseConfig);
  const fs = firebase.firestore();
  const auth = firebase.auth();

  // Replace the claude.ai-only versions in game.js.
  initDirectory = function () {};
  pushProfile = function (extra) {
    if (!G.profile || !DIR.ready || !DIR.uid) return Promise.resolve();
    const me = DIR.dets.find(d => d.id === DIR.uid) || {};
    const body = {
      face: cleanFace(G.profile.face) || null,
      name: G.profile.name,
      badge: G.profile.badge,
      color: G.profile.color || 0,
      motto: G.profile.motto || "",
      stars: totalStars(),
      rank: rankOf(totalStars()),
      solved: solvedIds(),
      posts: ((extra && extra.posts) || me.posts || []).slice(-25),
      updated: new Date().toISOString()
    };
    return fs.collection("detectives").doc(DIR.uid).set(body)
      .catch(() => toast("Couldn't reach the precinct server."));
  };

  // Each browser gets a stable anonymous identity, so a detective keeps their entry.
  DIR.failed = false;
  renderDirectory();
  auth.signInAnonymously().then(cred => {
    DIR.uid = cred.user.uid;
    DIR.db = { firebase: true };
    DIR.canWrite = true;
        SYNC.kind = "firebase"; SYNC.store = fs; SYNC.uid = cred.user.uid; syncReady();
    fs.collection("detectives").orderBy("updated", "desc").limit(200).onSnapshot(snap => {
      DIR.dets = snap.docs.map(d => Object.assign({ id: d.id }, d.data()));
      const first = !DIR.ready;
      DIR.ready = true;
      DIR.failed = false;
      if (first) syncProfile();
      renderDirectory();
    }, () => { DIR.failed = true; renderDirectory(); });
  }).catch(() => { DIR.failed = true; renderDirectory(); });
})();
