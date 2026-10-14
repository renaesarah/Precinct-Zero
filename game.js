/* Precinct Zero: game engine (load after cases.js) */
/* ======================= VAULT, DISPATCH EXHIBITS, INTERVIEWS ======================= */
CASES.cold.clearance=1; CASES.static.clearance=2; CASES.ninth.clearance=3;
(function(){
  const c1=CASES.cold, c2=CASES.static, c3=CASES.ninth;
  c1.ev("tipcleaner","Statements","Night cleaner's tip","Dispatch tip","dispatch",()=>D("DISPATCH · CHANNEL 2","WITNESS TIP",`<p>Caller Rosa Lim, night cleaner at Meridian Tower: around 23:15 on 13 Oct she saw a white SUV come up ramp G2 from the basement with its headlights off.</p><p>"The driver had a lanyard on. Orange, like the security people wear."</p>`));
  c1.ev("tiphsm","Records","HSM vendor statement","Dispatch development","dispatch",()=>D("VENDOR STATEMENT · KEYVAULT HSM","VIA DISPATCH",`<p>Halcyon's hardware security module has two administrator smartcards: card 1 issued to D. Okafor, card 2 issued to P. Raman.</p><p>All 31 key exports between 28 Aug and 12 Oct were signed with <b>card 2</b>.</p>`));
  c1.POINTS.tipcleaner=["priya"]; c1.POINTS.tiphsm=["priya"]; c1.verdict.pillars[0].ev.push("tiphsm");
  c2.ev("tipfisher","Statements","Pier 4 fisherman's tip","Dispatch tip","dispatch",()=>D("DISPATCH · CHANNEL 2","WITNESS TIP",`<p>Night fisherman at Pier 4: at about 03:20 on 3 Oct a man in a dark jacket and glasses got out of a blue estate, left it locked, and walked fast toward Old Harbour Rd.</p><p>"He wasn't carrying anything. He was rubbing his hands on his trousers."</p>`));
  c2.POINTS.tipfisher=["joel"];
  c3.ev("tipmalta","Records","Malta police liaison","Dispatch development","dispatch",()=>D("INTERPOL LIAISON · VALLETTA","VIA DISPATCH",`<p>A woman matching the airport CCTV checked into a guesthouse in Sliema at 03:55 on 12 Oct, paying cash. Reception copied her ID card: <b>Lucia REYES</b>.</p><p>She checked out at 07:00 the same morning.</p>`));
  c3.POINTS.tipmalta=["tomas","elena"]; c3.verdict.pillars[2].ev.push("tipmalta");
})();

const INTERVIEWS={
  cold:{
    mara:[["Where were you last night?","At the Aster, hosting the Children's Fund gala. Four hundred people saw me. I was on stage at eleven giving the pledge total."],["Your text told him not to do 'anything stupid'.","Daniel and I disagreed about how we report revenue. That's what CEOs and CTOs do."],["Had he been acting differently?","He'd been secretive all week. He kept his laptop locked and wouldn't say why."],["Who has admin rights on the key vault?","Daniel and our head of security. I'm not technical enough to be trusted with it, apparently."]],
    ethan:[["Where did you go after you were fired?","Driftwood in the Marina. Three beers. I took a RideNow home around quarter to eleven."],["Your badge opened B2 at 22:47.","That's impossible. I lost my badge last week. Priya reissued it yesterday morning and HR took it off me at four when they walked me out."],["You texted 'you'll pay for this'.","I was angry. I meant a bad review online, not this."]],
    priya:[["Where were you last night?","I left at six and was home all night, alone. I hadn't been down to B2 since the afternoon."],["How did you hear about Daniel?","When the morning shift called me, I couldn't believe it. Daniel, hit with the extinguisher like that. It's awful."],["Why was the camera off?","Those cameras drop all the time. The recorder is old."],["Who could have used Ethan's badge?","If Ethan's badge was used, I'd be looking at Ethan."]],
    leon:[["Where were you last night?","I landed at twenty to midnight. Check the flight."],["You threatened him.","Yes, I sent that text. I was angry about the money, not angry enough to hurt him."],["How were things between you?","He was family. My sister is going to fall apart."]]
  },
  static:{
    joel:[["Walk me through the night.","I was in the control room with him until about quarter to two. I went down for a coffee and talked to Ollie on the desk."],["What did you find?","When I came back, the studio was empty and we were in dead air. I called it in."],["Where did you go afterwards?","Your officers took my statement. I drove home to Westgate about five to three."],["You run the Appeal fund?","Treasurer. It's a lot of paperwork for not much thanks."]],
    mika:[["Where were you at 01:45?","Joel told me to take my break early, around half one. I didn't hear anything from the break room."],["Why did you delete the recording?","I deleted the logger file because Joel said a caller defamed someone."]],
    felix:[["Why were you at the station?","I only wanted to see him. I left when the guard told me to."],["Did you contact him that night?","I called in at quarter to two and the line was busy."],["Did you hurt him?","I'd never hurt Cal."]],
    dana:[["Where were you that night?","On the ward all night. Ask anyone on six."],["You're on his life policy.","Yes, I'm still on the policy. I emailed him to sign the renewal. That's all."]],
    harlan:[["You wanted the show gone.","I wanted the show gone, not the man."],["Did Cal ask to see you?","He wanted twenty minutes with me on Friday. He wouldn't say why."]]
  },
  ninth:{
    tomas:[["What happened on the bus?","I always keep the case on my lap. That night I put it on the seat, I was so tired."],["When was it switched?","She must have switched it while I dozed off near the bridge."],["When did you notice?","I only noticed at airport security."],["The coded texts on your phone?","Gran's puzzles. She used to send me mirror puzzles."]],
    ivo:[["How many passengers?","Eight tickets, eight passengers. I count them."],["Did you stop at Canal St?","Canal St is a request stop. Nobody requested it."],["Did you see the passengers?","I don't look in the mirror much at night."]],
    viktor:[["What were you doing on the ride?","I was on my phone the whole ride. Some racing game."],["Your record?","I've done my time. I don't do that any more."],["Did you see anything?","Someone in a red coat sat across from the guy with the case."]],
    margot:[["The insurance went up.","The insurer asked for the higher cover after the reappraisal."],["Do you trust Tomas?","Tomas has done this run twenty times."],["Who packed the stones?","I packed the pouch myself at nine."]]
  }
};

/* ======================= FACES ======================= */
const FACES={
  "cold:mara":{skin:"#e8c3a6",hair:"#2b1d18",style:"bob",shirt:"#7a1f2b",collar:"suit",mood:"smirk",eye:"#3d5a3a",bg:"#2c2530",acc:"earrings"},
  "cold:ethan":{skin:"#d9a882",hair:"#5a3b22",style:"curly",shirt:"#3e5c4a",collar:"hoodie",beard:"stubble",mood:"frown",bg:"#22302a"},
  "cold:priya":{skin:"#a8714d",hair:"#14100e",style:"bun",shirt:"#22304a",collar:"suit",glasses:true,acc:"lanyard",mood:"neutral",bg:"#1f2a36"},
  "cold:leon":{skin:"#d8a98a",hair:"#9a9a98",style:"slick",shirt:"#2c2c34",collar:"suit",beard:"full",age:1,mood:"frown",bg:"#2d2a26"},
  "static:joel":{skin:"#cf9f7c",hair:"#2a2220",style:"short",glasses:true,beard:"stubble",shirt:"#4a4f58",collar:"tee",acc:"headphones",mood:"smile",bg:"#262230"},
  "static:dana":{skin:"#efcfb5",hair:"#b38a4a",style:"bob",shirt:"#2f8a86",collar:"scrubs",age:1,mood:"neutral",bg:"#1f2d2c"},
  "static:felix":{skin:"#efd6c4",hair:"#3a2c22",style:"hood",shirt:"#3a3d44",collar:"hoodie",beard:"stubble",mood:"frown",bg:"#1d1d24",eye:"#6a7d9a"},
  "static:harlan":{skin:"#d6a17e",hair:"#7a7570",style:"bald",shirt:"#1f2633",collar:"suit",beard:"mustache",age:1,mood:"smirk",bg:"#2e2620"},
  "static:mika":{skin:"#f0cfae",hair:"#0f0d10",style:"fringe",shirt:"#5b3a6a",collar:"tee",acc:"headphones",mood:"neutral",bg:"#2a2232"},
  "ninth:tomas":{skin:"#b77e57",hair:"#1d1512",style:"curly",shirt:"#3b4656",collar:"shirt",mood:"neutral",bg:"#1f2733"},
  "ninth:ivo":{skin:"#e0b393",hair:"#bdbab4",style:"cap",shirt:"#2c4a7a",collar:"uniform",beard:"full",age:1,mood:"frown",bg:"#202b3a"},
  "ninth:viktor":{skin:"#e9c2a4",hair:"#6b5a4a",style:"shaved",shirt:"#2b2522",collar:"leather",beard:"stubble",mood:"smirk",bg:"#272220"},
  "ninth:margot":{skin:"#f0d2bf",hair:"#d9d6d0",style:"bun",shirt:"#3a2a40",collar:"suit",acc:"pearls",age:1,mood:"neutral",bg:"#2c2530"},
  "ninth:elena":{skin:"#c48a62",hair:"#1a1210",style:"hood",shirt:"#a8261c",collar:"hoodie",mood:"neutral",bg:"#1a1416",mystery:true},
  "ninth:lucia":{skin:"#b98258",hair:"#1a1210",style:"long",shirt:"#a8261c",collar:"tee",mood:"neutral",bg:"#1a1416"},
  "aziz":{skin:"#b9825f",hair:"#1a1412",style:"bun",shirt:"#2c4a5c",collar:"uniform",mood:"smile",bg:"#22303a"}
};
function shade(hex,amt){ const n=parseInt(hex.slice(1),16); let r=n>>16,g=n>>8&255,b=n&255; const f=v=>Math.max(0,Math.min(255,Math.round(amt<0?v*(1+amt):v+(255-v)*amt))); return "#"+[f(r),f(g),f(b)].map(v=>v.toString(16).padStart(2,"0")).join(""); }
function hashStr(s){ let h=0; for(const ch of s) h=(h*31+ch.charCodeAt(0))|0; return Math.abs(h); }
function faceSVG(sp,o){
  o=o||{}; const s=Object.assign({skin:"#c68a62",hair:"#2a1d16",style:"short",eye:"#3b2a1e",shirt:"#3b4a5a",collar:"shirt",beard:"none",glasses:false,mood:"neutral",bg:"#2a3640",age:0,acc:""},sp,o.mood?{mood:o.mood}:{});
  const sh=shade(s.skin,-.2), H=s.hair, dl=((hashStr(JSON.stringify(sp))%40)/10).toFixed(1);
  let back="";
  if(s.style==="long") back=`<path d="M25 52 Q22 16 50 15 Q78 16 75 52 L79 96 Q50 102 21 96Z" fill="${H}"/>`;
  if(s.style==="bob") back=`<path d="M25 54 Q22 16 50 15 Q78 16 75 54 L76 78 Q50 84 24 78Z" fill="${H}"/>`;
  if(s.style==="bun") back=`<circle cx="50" cy="17" r="10" fill="${H}"/>`;
  if(s.style==="hood") back=`<path d="M12 120 L16 52 Q18 5 50 5 Q82 5 84 52 L88 120Z" fill="${s.shirt}"/><path d="M24 60 Q24 17 50 16 Q76 17 76 60 L76 90 Q50 98 24 90Z" fill="${shade(s.shirt,-.45)}"/>`;
  const sd=shade(s.shirt,-.3);
  const collar={
    shirt:`<path d="M40 88 L50 102 L60 88 L56 86 L50 94 L44 86Z" fill="#e9e4da"/>`,
    suit:`<path d="M30 92 L44 87 L50 114Z M70 92 L56 87 L50 114Z" fill="${shade(s.shirt,-.22)}"/><path d="M42 88 L50 104 L58 88 L55 86 L50 94 L45 86Z" fill="#e9e4da"/><path d="M48.5 96 L50 112 L51.5 96Z" fill="${sd}"/>`,
    tee:`<path d="M40 87 Q50 96 60 87" stroke="${sd}" stroke-width="2" fill="none"/>`,
    hoodie:`<path d="M33 88 Q50 101 67 88" stroke="${sd}" stroke-width="5" fill="none"/><line x1="45" y1="97" x2="44" y2="112" stroke="#d9d4ca" stroke-width="1.2"/><line x1="55" y1="97" x2="56" y2="112" stroke="#d9d4ca" stroke-width="1.2"/>`,
    scrubs:`<path d="M40 87 L50 101 L60 87" stroke="${sd}" stroke-width="2.5" fill="none"/>`,
    uniform:`<path d="M40 88 L50 99 L60 88 L57 86 L50 93 L43 86Z" fill="${shade(s.shirt,.3)}"/><path d="M66 99 l2 4 4 .5 -3 3 .8 4 -3.8-2 -3.8 2 .8-4 -3-3 4-.5z" fill="#e2b13f"/>`,
    leather:`<path d="M32 91 L46 87 L50 115Z M68 91 L54 87 L50 115Z" fill="${shade(s.shirt,.15)}"/><path d="M45 87 Q50 93 55 87" fill="${sh}"/>`
  ,chef:`<path d="M36 89 L50 104 L64 89" stroke="${shade(s.shirt,-.18)}" stroke-width="2" fill="none"/>${[[44,103],[44,111],[56,103],[56,111]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.6" fill="${shade(s.shirt,-.3)}"/>`).join("")}`
  }[s.collar]||"";
  const acc={lanyard:`<path d="M43 90 L48 120 M57 90 L52 120" stroke="#e37a24" stroke-width="2.6"/>`,
    headphones:`<path d="M31 93 Q50 105 69 93" stroke="#15171a" stroke-width="4" fill="none"/><circle cx="31" cy="92" r="5.5" fill="#15171a"/><circle cx="69" cy="92" r="5.5" fill="#15171a"/>`,
    pearls:Array.from({length:9},(_,i)=>{const a=Math.PI*(.15+.7*i/8);return `<circle cx="${(50-Math.cos(a)*12).toFixed(1)}" cy="${(88+Math.sin(a)*6).toFixed(1)}" r="1.6" fill="#f4efe6"/>`;}).join(""),
    earrings:`<circle cx="27" cy="64" r="1.9" fill="#e2b13f"/><circle cx="73" cy="64" r="1.9" fill="#e2b13f"/>`}[s.acc]||"";
  let top="";
  switch(s.style){
    case "short": top=`<path d="M27 46 Q25 21 50 21 Q75 21 73 46 Q71 31 50 30 Q30 31 27 46Z" fill="${H}"/>`; break;
    case "slick": top=`<path d="M27 44 Q27 19 52 20 Q75 22 73 44 Q67 29 46 29 Q34 31 27 44Z" fill="${H}"/><path d="M44 21 Q48 26 47 30" stroke="${shade(H,-.3)}" stroke-width="1" fill="none"/>`; break;
    case "curly": top=Array.from({length:11},(_,i)=>{const a=Math.PI*(1.05+.9*i/10);return `<circle cx="${(50+Math.cos(a)*24).toFixed(1)}" cy="${(45+Math.sin(a)*22).toFixed(1)}" r="7" fill="${H}"/>`;}).join("")+`<ellipse cx="50" cy="28" rx="18" ry="8" fill="${H}"/>`; break;
    case "bald": top=`<path d="M26.5 54 Q26 42 29.5 37 L31 52Z M73.5 54 Q74 42 70.5 37 L69 52Z" fill="${H}"/>`; break;
    case "bob": case "long": top=`<path d="M27 50 Q26 21 50 21 Q74 21 73 50 Q63 33 42 35 Q32 39 27 50Z" fill="${H}"/>`; break;
    case "bun": top=`<path d="M27 46 Q28 23 50 23 Q72 23 73 46 Q66 30 50 30 Q34 30 27 46Z" fill="${H}"/>`; break;
    case "fringe": top=`<path d="M26 50 Q26 20 50 20 Q74 20 74 50 L74 41 Q50 45 26 41Z" fill="${H}"/>`; break;
    case "hood": top=`<path d="M28 44 Q30 26 50 26 Q70 26 72 44 Q60 36 50 38 Q40 36 28 44Z" fill="${H}"/>`; break;
    case "shaved": top=`<path d="M27 46 Q25 22 50 22 Q75 22 73 46 Q71 31 50 30 Q30 31 27 46Z" fill="${H}" opacity=".35"/>`; break;
    case "cap": top=`<path d="M27 42 L27 54 L30.5 52 L30.5 42Z M73 42 L73 54 L69.5 52 L69.5 42Z" fill="${H}"/><path d="M25 41 Q25 17 50 17 Q75 17 75 41Z" fill="#1d2a44"/><rect x="41" y="24" width="18" height="6" rx="1" fill="#e2b13f"/><path d="M23 40 Q50 46 79 40 L79 44 Q50 51 23 44Z" fill="#141c2e"/>`; break;
  }
  const brows={neutral:`M35 44 Q40 42 45 44 M55 44 Q60 42 65 44`,frown:`M35 42 L45 45.5 M55 45.5 L65 42`,smile:`M35 43 Q40 40.5 45 43 M55 43 Q60 40.5 65 43`,smirk:`M35 44 Q40 42.5 45 44 M55 42.5 Q60 40 65 42`}[s.mood];
  const mouth={neutral:`M43 72 Q50 74 57 72`,smile:`M42 70 Q50 78 58 70`,frown:`M43 74.5 Q50 69.5 57 74.5`,smirk:`M43 72.5 Q52 74.5 58 69.5`}[s.mood];
  const beard=s.beard==="stubble"?`<path d="M28 58 Q30 85 50 87 Q70 85 72 58 Q68 72 58 74 Q50 78 42 74 Q32 72 28 58Z" fill="${H}" opacity=".3"/>`
    :s.beard==="full"?`<path d="M27 56 Q28 88 50 90 Q72 88 73 56 Q69 72 58 73 Q50 77 42 73 Q31 72 27 56Z" fill="${H}"/><path d="M41 69 Q50 64 59 69 Q50 71 41 69Z" fill="${H}"/>`
    :s.beard==="mustache"?`<path d="M40 69.5 Q50 63 60 69.5 Q50 71.5 40 69.5Z" fill="${H}"/>`:"";
  const age=s.age?`<path d="M40 34 Q50 32 60 34 M42 38 Q50 36 58 38 M34 60 Q36 66 38 68 M66 60 Q64 66 62 68" stroke="${sh}" stroke-width=".8" fill="none"/>`:"";
  const glasses=s.glasses?`<g fill="rgba(200,220,235,.12)" stroke="#15171a" stroke-width="1.6"><rect x="33" y="45" width="14" height="10" rx="3"/><rect x="53" y="45" width="14" height="10" rx="3"/><path d="M47 49 Q50 47 53 49" fill="none"/></g>`:"";
  const myst=s.mystery?`<ellipse cx="50" cy="54" rx="25" ry="30" fill="#000" opacity=".78"/><text x="50" y="64" text-anchor="middle" font-size="24" fill="#e2b13f" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800">?</text>`:"";
  return `<svg class="face" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" style="--d:${dl}s" aria-hidden="true"><rect width="100" height="120" fill="${s.bg}"/>
  <g class="bob">${back}<path d="M43 70 L43 90 Q50 95 57 90 L57 70Z" fill="${sh}"/><path d="M6 120 Q10 89 50 85 Q90 89 94 120Z" fill="${s.shirt}"/>${collar}${acc}
  <ellipse cx="27" cy="56" rx="4" ry="6.5" fill="${s.skin}"/><ellipse cx="73" cy="56" rx="4" ry="6.5" fill="${s.skin}"/><ellipse cx="50" cy="52" rx="23" ry="28" fill="${s.skin}"/>${age}${beard}${top}
  <path d="${brows}" stroke="${shade(H,-.2)}" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <g class="eyes"><ellipse cx="40" cy="50" rx="4.6" ry="3.1" fill="#f4f1ea"/><ellipse cx="60" cy="50" rx="4.6" ry="3.1" fill="#f4f1ea"/><g class="pup"><circle cx="40.4" cy="50.2" r="2.3" fill="${s.eye}"/><circle cx="60.4" cy="50.2" r="2.3" fill="${s.eye}"/><circle cx="40.6" cy="50.2" r="1" fill="#0d0d0d"/><circle cx="60.6" cy="50.2" r="1" fill="#0d0d0d"/><circle cx="41.4" cy="49.4" r=".55" fill="#fff" opacity=".8"/><circle cx="61.4" cy="49.4" r=".55" fill="#fff" opacity=".8"/></g></g>${glasses}
  <path d="M50 52 Q47 61 49.5 63 Q51.5 63.6 53.5 62" stroke="${sh}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <g class="mouth"><path d="${mouth}" stroke="#7a3b34" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>${myst}<path class="sweat" d="M71 36 q3.2 5 0 7.4 q-3.2-2.4 0-7.4z" fill="#cfe9ff" opacity="0"/></g></svg>`;
}
function faceOf(k,o){ const sp=FACES[K.id+":"+k]||FACES[k]; return sp?faceSVG(sp,o):`<span>${esc((K.SUS[k]||{}).init||"?")}</span>`; }
const JURORS=(()=>{ const r=rng(42), skins=["#f1d3bd","#e2b796","#c68f68","#a26e4a","#7d5236","#5c3a26"], hairs=["#1a1412","#3a2a20","#7a5232","#b38a4a","#9a9a98","#d9d6d0","#5a1f1a"], styles=["short","bob","long","curly","bald","bun","slick","fringe"], cols=["shirt","tee","suit","hoodie","scrubs"], shirts=["#3b4a5a","#5a3b4a","#2f5a4a","#6a5a3a","#3a3a5a","#5a2f2f","#4a4f58"];
  const p=a=>a[Math.floor(r()*a.length)];
  return Array.from({length:12},()=>{ const st=p(styles); return {skin:p(skins),hair:p(hairs),style:st,shirt:p(shirts),collar:p(cols),beard:(st==="bald"||st==="short"||st==="slick")&&r()<.5?p(["stubble","full","mustache"]):"none",glasses:r()<.3,age:r()<.35?1:0,bg:"#1e2830"}; }); })();

/* ======================= DISPATCH ======================= */
const nDone=id=>Object.keys(((G.cases[id]||{}).done)||{}).length;
const solved=id=>!!(G.cases[id]&&G.cases[id].stars);
const DISPATCH=[
  {id:"cold_tip",case:"cold",kind:"Witness tip",title:"Meridian Tower, ramp G2",when:()=>!!(G.cases.cold&&G.cases.cold.done.scene),unlock:["cold","tipcleaner"],
   text:"Dispatch to {name}. Caller is a night cleaner at Meridian Tower. Says a white SUV came up ramp G2 around 23:15 last night with its lights off, and the driver wore an orange lanyard. Logged to your case file."},
  {id:"cold_dev",case:"cold",kind:"Case development",title:"Key vault vendor",when:()=>nDone("cold")>=3,unlock:["cold","tiphsm"],
   text:"Dispatch to {name}. Halcyon's security-module vendor answered your request. There are two admin smartcards, and every key export was signed with card number two. Statement added to your file."},
  {id:"lead_static",case:"any",kind:"Emergency call",title:"Harbour patrol, Pier 4",when:()=>nDone("cold")>=4||solved("cold"),opens:"static",
   text:"All units. Harbour patrol has recovered the body of radio host Cal Brennan, missing since he went off the air on KNOX 98.1. His producer's alibi rests on a broadcast that thousands heard. Major Crimes requested. {name}, it's yours if you want it."},
  {id:"static_tip",case:"static",kind:"Witness tip",title:"Pier 4 fisherman",when:()=>!!(G.cases.static&&G.cases.static.done.scene),unlock:["static","tipfisher"],
   text:"Dispatch to {name}. A night fisherman at Pier 4 says he watched a man in glasses lock a blue estate around 03:20 and walk off fast toward Old Harbour Road. Logged to your case file."},
  {id:"lead_ninth",case:"any",kind:"Emergency call",title:"PMR Airport police post",when:()=>nDone("static")>=4||solved("static"),opens:"ninth",
   text:"Airport police report a courier's diamonds turned to gravel on the N9 night bus. Eight tickets were sold and nine passengers got off. The ninth has already flown out. Major Crimes requested. {name}, you're up."},
  {id:"ninth_dev",case:"ninth",kind:"Case development",title:"Valletta liaison",when:()=>!!(G.cases.ninth&&G.cases.ninth.done.mrz),unlock:["ninth","tipmalta"],
   text:"Dispatch to {name}. Malta police came back on the red coat. A guesthouse in Sliema copied an ID card at 03:55 on the 12th. Report added to your file."},
  {id:"pike",case:"any",kind:"Case development",title:"Owen Pike",when:()=>solved("ninth"),
   text:"All units. Missing contractor Owen Pike has appeared on a Meridian Tower loading-bay camera from last night. The file is in the Case Vault, sealed pending clearance."},
  {id:"amb1",case:"any",kind:"Emergency call",title:"Unit 14, Marina",when:()=>G.screen==="case"&&(G.disp.secs||0)>=150,
   text:"Unit 14 to dispatch. The noise complaint at the Marina is a birthday party. Advised and cleared. No further action."},
  {id:"amb2",case:"any",kind:"Traffic",title:"Coast Road eastbound",when:()=>G.screen==="case"&&(G.disp.secs||0)>=480,
   text:"Collision with injuries on Coast Road eastbound. Uniform units attending. Major Crimes not required."},
  {id:"amb3",case:"any",kind:"Anonymous tip",title:"Unknown caller",when:()=>G.screen==="case"&&(G.disp.secs||0)>=900,
   text:"Anonymous caller for {name}: 'The person with the loudest motive is never the one.' Then the line went dead. Make of that what you will."}
];
let dispOpen=null;
function unlockIn(caseId,ev){
  if(caseId===K.id){ unlock(ev,true); return; }
  const st=G.cases[caseId]=Object.assign(freshCase(CASES[caseId]),G.cases[caseId]||{}); if(!st.unlocked.includes(ev)) st.unlocked.push(ev);
}
function dispatchCheck(){
  if(dispOpen||document.querySelector(".intro")||document.querySelector(".juror:not(.y):not(.n)")) return;
  const d=DISPATCH.find(x=>!G.disp.seen.includes(x.id)&&(x.case==="any"||(G.screen==="case"&&K.id===x.case))&&x.when());
  if(d) showDispatch(d);
}
function showDispatch(d){
  G.disp.seen.push(d.id); G.disp.log.unshift({id:d.id,at:new Date().toISOString()}); G.disp.unread=(G.disp.unread||0)+1;
  if(d.unlock) unlockIn(d.unlock[0],d.unlock[1]);
  if(d.opens&&!G.open.includes(d.opens)) G.open.push(d.opens);
  save(); dispOpen=d; if(G.screen==="case") renderChrome();
  const el=document.createElement("div"); el.className="dispatch"+(d.sinister?" sinister":""); el.setAttribute("role","alert");
  if(d.sinister) flashRed();
  el.innerHTML=`<div class="dhead"><span class="dled"></span>${d.sinister?"UNKNOWN NUMBER · NO CALLER ID":"INCOMING TRANSMISSION"}<span class="dkind">${esc(d.kind)}</span></div>
  <div class="dbody"><div class="dtitle">${esc(d.title)}</div><p class="dtext" id="dText"></p><div class="dacts" id="dActs" hidden>
  ${d.opens?`<button class="btn primary small" data-act="dispTake" data-id="${d.opens}">Take the lead</button>`:""}
  ${d.unlock?`<button class="btn primary small" data-act="dispView" data-id="${d.unlock[0]}:${d.unlock[1]}">View the exhibit</button>`:""}
  <button class="btn small" data-act="dispClose">${d.sinister?"Hang up":d.opens||d.unlock?"Log it":"Copy that"}</button></div></div>`;
  document.body.appendChild(el); sfx(d.sinister?"creep":"radio");
  const p=document.getElementById("partner"); if(p) p.classList.add("min");
  typeInto(document.getElementById("dText"),d.text.replace(/\{name\}/g,detName()),d.sinister?34:14,()=>{ const a=document.getElementById("dActs"); if(a) a.hidden=false; });
}
function closeDispatch(){ const el=document.querySelector(".dispatch"); if(el) el.remove(); dispOpen=null; setTimeout(dispatchCheck,1500); }
function dispLogHTML(){
  if(!G.disp.log.length) return `<div class="notice">No transmissions yet. Dispatch will call you with tips, developments and new cases as you work.</div>`;
  return `<div class="dlog">${G.disp.log.map(l=>{ const d=DISPATCH.find(x=>x.id===l.id); if(!d) return ""; const taken=d.opens&&G.cases[d.opens]&&G.cases[d.opens].introSeen;
    return `<div class="dentry"><small>${esc(l.at.slice(5,16).replace("T"," "))} · ${esc(d.kind)}</small><b>${esc(d.title)}</b><p>${esc(d.text.replace("{name}",detName()))}</p>
    ${d.opens&&!taken?`<button class="btn small primary" data-act="dispTake" data-id="${d.opens}">Take the lead: ${esc(CASES[d.opens].title)}</button>`:""}${d.unlock?`<button class="btn small" data-act="dispView" data-id="${d.unlock[0]}:${d.unlock[1]}">View the exhibit</button>`:""}</div>`; }).join("")}</div>`;
}
function dispatchHTML(){ G.disp.unread=0; save(); return `<div class="officehead"><h2>Dispatch</h2><span class="muted">Every transmission you've received, newest first.</span></div>${dispLogHTML()}`; }
setInterval(()=>{ if(G.screen==="case"&&document.visibilityState==="visible") G.disp.secs=(G.disp.secs||0)+10; dispatchCheck(); },10000);

/* ======================= INTERVIEW ROOM ======================= */
let ivTalking=false;
function interviewHTML(){
  const iv=INTERVIEWS[K.id], keys=Object.keys(iv); if(!keys.includes(C.ivWho)) C.ivWho=keys[0];
  const who=C.ivWho, asked=(C.ivAsked&&C.ivAsked[who])||[], s=K.SUS[who];
  const list=keys.map(k=>`<button class="ivp ${k===who?"on":""}" data-act="ivWho" data-id="${k}"><span class="ivmini">${faceOf(k)}</span><span><b>${esc(K.SUS[k].name)}</b><small>${esc(K.SUS[k].short)}</small></span></button>`).join("");
  const last=asked.length?iv[who][asked[asked.length-1]]:null;
  const away=Object.keys(K.SUS).filter(k=>!keys.includes(k)).map(k=>`<p class="muted" style="font-size:13px;margin:6px 0 0">${esc(K.SUS[k].name)}: not available for interview.</p>`).join("");
  return `<div class="officehead"><h2>Interview room 3</h2><span class="muted">Pick who sits across the table, then ask your questions. Watch what they say, and what they shouldn't know.</span></div>
  <div class="iv"><div class="ivlist">${list}${away}</div>
  <div class="ivstage"><div class="ivwall"></div><div class="ivface" id="ivFace">${faceOf(who)}</div><div class="ivyou" title="You">${myFace()}<span>You</span></div><div class="ivtable"><span class="ivplate">${esc(s.name)}</span><span class="ivmic"></span></div>
  <div class="ivbubble" id="ivBubble">${last?`<b>${esc(s.name)}:</b> <span id="ivA">${esc(last[1])}</span>`:`<span class="muted">${esc(s.name.split(" ")[0])} is waiting. Ask a question.</span>`}</div></div>
  <div class="ivqs"><p class="eyebrow" style="margin-bottom:8px">Questions for ${esc(s.name.split(" ")[0])}</p>${iv[who].map(([q],i)=>`<button class="ivq ${asked.includes(i)?"done":""}" data-act="ask" data-id="${i}">${esc(q)}</button>`).join("")}
  ${last?`<button class="btn small" data-act="pinIv" style="margin-top:10px">Pin last answer to notebook</button><button class="btn small" data-act="ivWall" style="margin-top:6px">Clip last answer to wall</button>`:""}</div></div>`;
}
function ask(i){
  const iv=INTERVIEWS[K.id], who=C.ivWho; C.ivAsked=C.ivAsked||{}; const arr=C.ivAsked[who]=C.ivAsked[who]||[]; const j=arr.indexOf(i); if(j>=0) arr.splice(j,1); arr.push(i); save();
  renderPanel();
  const face=document.querySelector("#ivFace .face"), out=document.getElementById("ivA"); if(!face||!out) return;
  face.classList.add("talk"); if(who===K.verdict.culprit) face.classList.add("nervous"); ivTalking=true;
  typeInto(out,iv[who][i][1],22,()=>{ face.classList.remove("talk"); ivTalking=false; setTimeout(()=>face.classList.remove("nervous"),2500); });
}

/* ======================= CASE VAULT ======================= */
function clearance(){ return Math.min(5,1+solvedIds().length); }
function vaultHTML(){
  const tiers=[1,2,3,4,5].map(lv=>{ const ids=CASE_ORDER.filter(id=>CASES[id].clearance===lv);
    return `<div class="tier"><div class="tierhead"><span class="clv">Clearance ${lv}</span><span class="muted">${lv===1?"Open to all detectives":`Arrives by dispatch, or after ${lv-1} closed case${lv>2?"s":""}`}</span></div>
    <div class="cases">${ids.map(id=>vaultCard(id)).join("")}</div></div>`; }).join("");
  return tiers;
}
function vaultCard(id){
  const k=CASES[id], s=G.cases[id], open=G.open.includes(id)||clearance()>=k.clearance, started=s&&(Object.keys(s.done||{}).length||s.introSeen), st=s&&s.stars;
  const prevK=K; K=k; const faces=Object.keys(k.SUS).map(sk=>`<span class="vface" title="${esc(k.SUS[sk].name)}">${faceOf(sk)}</span>`).join(""); K=prevK;
  return `<div class="casecard ${open?"":"sealed"}"><div class="cover">${coverSVG(k.cover)}${open?"":`<div class="seal">SEALED · CLEARANCE ${k.clearance}</div>`}</div><div class="info">
  <div class="meta"><span class="chip">${k.code}</span>${st?`<span class="chip solved">Closed <span class="stars">${"★".repeat(st)}${"☆".repeat(3-st)}</span></span>`:open?`<span class="chip live">${started?"In progress":"Open"}</span>`:`<span class="chip">Sealed</span>`}<span class="chip">${k.crime}</span></div>
  <h2>${k.title}</h2><p>${k.blurb}</p>
  <div class="vfaces" aria-label="Suspects">${faces}</div>
  <div class="meta"><span class="chip">${Object.keys(k.SUS).length} suspects</span><span class="chip">${k.order.length} exhibits</span><span class="chip">${k.OBJ.length} objectives</span><span class="chip diff">Difficulty&nbsp;${[1,2,3,4,5].map(i=>`<i class="${i<=k.diff?"on":""}"></i>`).join("")}</span></div>
  <div class="acts">${open?`<button class="btn primary small" data-act="open" data-id="${id}">${started?"Continue":"Take the case"}</button>${started?`<button class="btn small" data-act="resetCase" data-id="${id}">Restart</button>`:""}`:`<button class="btn small" data-act="override" data-id="${id}">Request override</button>`}</div></div></div>`;
}
function openCase(id){
  if(!G.profile){ toast("Create your detective ID first"); const f=document.getElementById("idName"); if(f) f.focus(); return; }
  setCase(id); G.screen="case"; save(); render(); window.scrollTo(0,0);
  if(!C.introSeen){ C.tab="office"; renderPanel(); showIntro(); } else partnerSay(`Back on ${K.title}, ${detName()}. Tap me if you need a hint.`);
}

/* ======================= STATE ======================= */
const KEY="precinct-zero-v2";
function freshCase(k){ return {tab:"office",introSeen:false,visited:[],unlocked:k.order.filter(id=>!k.EV[id].lock),seen:[],done:{},found:[],notes:"",clues:[],
  theories:[{id:"t1",name:"Theory A",suspect:"",cards:[],links:[]}],active:"t1",evSel:k.order[0],lab:k.OBJ[0].id,
  ciph:{shift:0,mirror:false,key:""},tl:shuffle(k.timeline.ev.map(x=>x.id),7),stmt:[],hand:null,printPick:null,printAngle:0,termLog:[],verdict:null,
  hintLv:{},hints:0,wrong:0,attempts:0,stars:0,mrzTried:[]}; }
let G; try{ G=JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){ G={}; }
G=Object.assign({screen:"library",cur:"cold",mute:false,profile:null,cases:{},open:["cold"],disp:{seen:[],log:[],secs:0,unread:0}},G);
let K, C;
function setCase(id){ G.cur=id; K=CASES[id]; C=G.cases[id]=Object.assign(freshCase(K),G.cases[id]||{}); }
setCase(CASES[G.cur]?G.cur:"cold");
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(G)); }catch(e){} }
const has = id => C.unlocked.includes(id);
const exNo = id => "E"+String(K.order.indexOf(id)+1).padStart(2,"0");
const suspName = k => (K.SUS[k]&&K.SUS[k].name) || (K.prints&&K.prints.names&&K.prints.names[k]) || k;
const detName = () => G.profile ? G.profile.name : "Detective";
const RANKS=[[0,"Probationer"],[1,"Detective Constable"],[3,"Detective"],[5,"Detective Sergeant"],[7,"Inspector"],[9,"Chief Inspector"]];
function totalStars(){ return CASE_ORDER.reduce((a,id)=>a+((G.cases[id]&&G.cases[id].stars)||0),0); }
function solvedIds(){ return CASE_ORDER.filter(id=>G.cases[id]&&G.cases[id].stars>0); }
function rankOf(st){ let r=RANKS[0][1]; for(const [n,l] of RANKS) if(st>=n) r=l; return r; }
const SWATCH=["#e2b13f","#5fb380","#6fa8dc","#d9634f","#b48ead","#c9c2b0"];

/* ======================= SOUND / TOAST ======================= */
let AC=null;
function sfx(t){
  if(G.mute) return;
  try{
    if(!AC) AC=new (window.AudioContext||window.webkitAudioContext)();
    const a=AC, now=a.currentTime;
    const tone=(f,d,type,v,at=0)=>{const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(v,now+at);g.gain.exponentialRampToValueAtTime(.0001,now+at+d);o.connect(g);g.connect(a.destination);o.start(now+at);o.stop(now+at+d+.03);};
    const noise=(d,v,f)=>{const len=Math.floor(a.sampleRate*d),b=a.createBuffer(1,len,a.sampleRate),c=b.getChannelData(0);for(let i=0;i<len;i++)c[i]=(Math.random()*2-1)*(1-i/len);const s=a.createBufferSource();s.buffer=b;const fl=a.createBiquadFilter();fl.type="bandpass";fl.frequency.value=f;const g=a.createGain();g.gain.value=v;s.connect(fl);fl.connect(g);g.connect(a.destination);s.start();};
    switch(t){
      case "click": tone(900,.04,"square",.025); break;
      case "type": tone(1500+Math.random()*500,.018,"square",.012); break;
      case "paper": noise(.22,.3,2600); break;
      case "whoosh": noise(.4,.22,700); break;
      case "stamp": tone(85,.28,"sine",.3); noise(.08,.35,400); break;
      case "unlock": tone(660,.18,"triangle",.07); tone(990,.32,"triangle",.07,.12); break;
      case "ring": [0,.16,.5,.66].forEach(d=>tone(1250,.12,"sine",.05,d)); break;
      case "wrong": tone(170,.22,"sawtooth",.035); break;
      case "vote": tone(520,.06,"triangle",.045); break;
      case "gavel": tone(130,.2,"sine",.35); noise(.07,.45,300); break;
      case "radio": noise(.15,.25,1800); tone(1100,.05,"square",.03,.15); break;
      case "creep": tone(55,1.8,"sawtooth",.07); tone(58.3,1.8,"sawtooth",.05); noise(.9,.3,260); tone(1760,1.2,"sine",.012,.4); tone(1702,1.2,"sine",.012,.4); break;
      case "thunder": noise(2.6,.7,80); noise(1.4,.35,180); break;
      case "heart": tone(62,.13,"sine",.4); tone(56,.15,"sine",.3,.2); break;
      case "siren": { const o=a.createOscillator(),g=a.createGain(),l=a.createOscillator(),lg=a.createGain(); o.type="triangle"; o.frequency.value=720; l.frequency.value=.55; lg.gain.value=190; l.connect(lg); lg.connect(o.frequency); g.gain.setValueAtTime(0,now); g.gain.linearRampToValueAtTime(.012,now+1.2); g.gain.linearRampToValueAtTime(0,now+4.5); o.connect(g); g.connect(a.destination); o.start(now); l.start(now); o.stop(now+4.6); l.stop(now+4.6); break; }
    }
  }catch(e){}
}
let toastTimer;
function toast(m){ const t=document.getElementById("toast"); t.textContent=m; t.hidden=false; clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.hidden=true,3400); }

/* ======================= GAME LOGIC ======================= */
function unlock(id,quiet){ if(has(id)) return; C.unlocked.push(id); if(!quiet){ toast(`New evidence unsealed: ${exNo(id)} ${K.EV[id].title}`); sfx("unlock"); partnerSay(`New record in the archive: ${K.EV[id].title}. ${K.unlockLines[id]||""}`); } }
function complete(oid){
  if(C.done[oid]) return; C.done[oid]=true;
  const o=K.OBJ.find(x=>x.id===oid); o.reward.forEach(r=>unlock(r,true));
  toast(o.reward.length?`Objective complete. Unsealed: ${o.reward.map(r=>K.EV[r].title).join(", ")}`:`Objective complete: ${o.t}`);
  stampFX(o.reward.length?"UNSEALED":"CONFIRMED"); sfx("unlock"); setTimeout(()=>partnerSay(K.react[oid]),350); save();
  setTimeout(dispatchCheck,4500);
}
function miss(){ C.wrong++; sfx("wrong"); save(); }
function addClue(t,src){ if(C.clues.some(c=>c.t===t)){ toast("Already in your notebook"); return; } C.clues.push({t,src}); save(); toast("Saved to notebook"); }
function checkRecords(){ const n=K.records.ev.filter(has).length; if(n>=K.records.n) complete("records"); }
function nextObj(){ return K.OBJ.find(o=>!C.done[o.id]&&!(o.needs&&!C.done[o.needs])); }

/* ======================= SCENE ======================= */
function sceneSVG(interactive){
  const found=new Set(C.found), hots=K.scene.hots;
  const tents=hots.map(h=>found.has(h.id)?`<g transform="translate(${h.x+h.r-4},${h.y-h.r-18})"><polygon points="10,0 20,18 0,18" fill="#e2b13f"/><text x="10" y="16" font-size="9" font-family="IBM Plex Mono, monospace" text-anchor="middle" fill="#1b1606">${C.found.indexOf(h.id)+1}</text></g>`:"").join("");
  const hs=interactive?hots.map(h=>`<g class="hot" data-act="hot" data-id="${h.id}"><circle cx="${h.x}" cy="${h.y}" r="${h.r}"/></g>`).join(""):"";
  return `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scene photograph" style="width:100%;height:auto">${K.scene.draw()}
  <defs><filter id="grain"><feTurbulence baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .09 0"/></filter></defs>
  <rect width="800" height="500" filter="url(#grain)" pointer-events="none"/>${tents}${hs}</svg>`;
}

/* ======================= FINGERPRINTS ======================= */
const printCache={};
function printMask(key){
  const ck=K.id+":"+key; if(printCache[ck]) return printCache[ck];
  const p=K.prints.P[key], W=200, H=240, r=rng(p.seed), noise=[];
  for(let i=0;i<40*48;i++) noise.push(r());
  const a=new Uint8ClampedArray(W*H);
  for(let y=0;y<H;y++) for(let x=0;x<W;x++){
    const ex=(x-100)/86, ey=(y-122)/112, e=ex*ex+ey*ey; if(e>1) continue;
    const nx=x-p.cx, ny=y-p.cy; let v;
    if(p.type==="whorl"){ v=Math.sqrt(nx*nx*p.sx+ny*ny)+p.a*Math.sin(Math.atan2(ny,nx)*2+p.ph); }
    else if(p.type==="loop"){ v=ny<0?Math.hypot(nx,ny):Math.abs(nx)+ny*.12; if(ny<-60) v+=(-60-ny)*.4; }
    else { v=ny+p.a*Math.exp(-nx*nx/(p.b*p.b)); }
    v+=p.w*Math.sin(x*.045+p.ph)+p.w*Math.cos(y*.038+p.ph*1.7);
    let s=Math.sin(v*p.k); if(noise[((y/5)|0)*40+((x/5)|0)]<.035) s=-s*.6;
    let al=s>.05?Math.min(1,(s-.05)*3):0; al*=Math.min(1,(1-e)*6); a[y*W+x]=al*255;
  }
  return printCache[ck]={a,W,H};
}
function maskCanvas(key,color){ const m=printMask(key), c=document.createElement("canvas"); c.width=m.W; c.height=m.H; const ctx=c.getContext("2d"), img=ctx.createImageData(m.W,m.H), [r,g,b]=color; for(let i=0;i<m.a.length;i++){ img.data[i*4]=r; img.data[i*4+1]=g; img.data[i*4+2]=b; img.data[i*4+3]=m.a[i]; } ctx.putImageData(img,0,0); return c; }
function latentCanvas(color){
  const src=maskCanvas(K.prints.culprit,color), c=document.createElement("canvas"); c.width=200; c.height=240; const ctx=c.getContext("2d");
  ctx.save(); ctx.translate(100,120); ctx.rotate(-K.prints.rot*Math.PI/180); ctx.translate(-100,-120); ctx.drawImage(src,0,0); ctx.restore();
  ctx.globalCompositeOperation="destination-in"; const gr=ctx.createRadialGradient(112,110,10,112,110,74); gr.addColorStop(0,"rgba(0,0,0,1)"); gr.addColorStop(.75,"rgba(0,0,0,.85)"); gr.addColorStop(1,"rgba(0,0,0,0)");
  ctx.fillStyle=gr; ctx.beginPath(); ctx.ellipse(112,110,76,62,.4,0,Math.PI*2); ctx.fill();
  ctx.globalCompositeOperation="destination-out"; const r=rng(9+K.id.length); for(let i=0;i<1100;i++){ ctx.fillStyle=`rgba(0,0,0,${r()*.8})`; ctx.fillRect(r()*200,r()*240,1+r()*2,1+r()*2); }
  return c;
}
function drawPrints(){
  document.querySelectorAll("canvas[data-print]").forEach(cv=>{ const ctx=cv.getContext("2d"); ctx.fillStyle="#eee8da"; ctx.fillRect(0,0,200,240); ctx.drawImage(maskCanvas(cv.dataset.print,[35,38,42]),0,0); });
  const lat=document.getElementById("latent"); if(lat){ const ctx=lat.getContext("2d"); ctx.fillStyle="#2a1512"; ctx.fillRect(0,0,200,240); ctx.drawImage(latentCanvas([236,226,214]),0,0); }
  drawCompare();
}
function drawCompare(){
  const cv=document.getElementById("compare"); if(!cv) return; const ctx=cv.getContext("2d"); ctx.fillStyle="#eee8da"; ctx.fillRect(0,0,200,240);
  if(C.printPick) ctx.drawImage(maskCanvas(C.printPick,[35,38,42]),0,0);
  const op=(document.getElementById("pOp")||{value:65}).value/100;
  ctx.save(); ctx.globalAlpha=op; ctx.translate(100,120); ctx.rotate(C.printAngle*Math.PI/180); ctx.translate(-100,-120); ctx.drawImage(latentCanvas([207,74,60]),0,0); ctx.restore();
}

/* ======================= TERMINAL ======================= */
function runCmd(raw){
  const line=raw.trim(); if(!line) return;
  const parts=line.split(/\s+/), cmd=parts[0].toLowerCase(), rest=parts.slice(1).join(" "), T=K.term;
  let out="", cls="", unl=null;
  if(cmd==="clear"){ C.termLog=[]; save(); renderPanel(); return; }
  if(cmd==="help"){ out=T.help; }
  else {
    const toks=rest.toLowerCase().split(/[\s,]+/).filter(Boolean); let argN=null;
    for(const t of toks) if(T.alias[t]){ argN=T.alias[t]; break; }
    if(!argN) argN=rest.toLowerCase().replace(/[^a-z0-9]/g,"");
    const hit=T.cmds[(cmd+" "+argN).trim()] || (!rest && T.cmds[cmd]);
    if(hit){ out=hit.out; cls=hit.cls||""; unl=hit.unl||null; }
    else if(T.miss[cmd]||Object.keys(T.cmds).some(k=>k.split(" ")[0]===cmd)){ out=(T.miss[cmd]||"No record.")+(rest?` (${rest})`:""); cls="err"; }
    else { out=`Unknown command "${parts[0]}". Type help.`; cls="err"; }
  }
  C.termLog.push({cmd:line,out,cls});
  if(unl&&!has(unl)){ unlock(unl); checkRecords(); }
  save(); renderPanel();
  const o=document.querySelector(".term .out"); if(o) o.scrollTop=o.scrollHeight;
  const i=document.getElementById("termIn"); if(i) i.focus();
}

/* ======================= PROFILES / DOCS ======================= */
function profileDoc(k){ const s=K.SUS[k]; return D("PERSON OF INTEREST",`${s.init}-${K.short.replace(/\D/g,"")}`,`<div class="profile"><div class="mug">${faceOf(k)}</div><div><h4 style="margin-top:0">${s.name}${s.age!=="?"?", "+s.age:""}</h4><p>${s.role}</p><dl class="kv"><dt>Relation</dt><dd>${s.rel}</dd><dt>Motive</dt><dd>${s.motive}</dd><dt>Stated alibi</dt><dd>${s.alibi}</dd><dt>Phone</dt><dd>${s.phone}</dd><dt>Vehicle</dt><dd>${s.car}</dd></dl></div></div>`); }
function passportHTML(interactive){
  const M=K.mrz, dd=M.data;
  const l2=M.parts.map(([f,t])=>{ if(!f||!interactive) return esc(t); const cls=C.done.mrz&&f===M.correct?"right":(C.mrzTried.includes(f)?"wrong":""); return `<button class="${cls}" data-act="mrz" data-id="${f}" aria-label="Field ${f}">${esc(t)}</button>`; }).join("");
  return `<div class="passport"><div class="pp"><div class="ph" aria-hidden="true"></div><dl><dt>Surname</dt><dd>${dd.Surname}</dd><dt>Given names</dt><dd>${dd.Given}</dd><dt>Nationality</dt><dd>${dd.Nationality}</dd><dt>Date of birth</dt><dd>${dd.Born}</dd><dt>Sex</dt><dd>${dd.Sex}</dd><dt>Expiry</dt><dd>${dd.Expires}</dd><dt>Document no.</dt><dd>${dd.No}</dd></dl></div><div class="mrz">${esc(M.line1)}\n${l2}</div></div>`;
}

/* ======================= RENDER ======================= */
const app=document.getElementById("app");
let lastTab=null;
function render(){
  document.getElementById("partner").hidden = G.screen!=="case";
  if(G.screen==="library"){ app.innerHTML=libraryHTML(); lastTab=null; startDirectory(); return; }
  app.innerHTML=`<header class="bar"><div class="row gut">
    <button class="btn small" id="backBtn" data-act="library">← Cases</button>
    <h1>${K.title}</h1><span class="cid">${K.code}</span>
    <div class="prog" id="prog"></div>
    <span class="mechip" id="mechip"></span>
    <button class="iconbtn" id="muteBtn" data-act="mute"></button></div>
    <nav class="tabs gut" id="tabs"></nav></header><main class="gut" id="panel"></main>`;
  renderPanel();
}
function renderChrome(){
  const bb=document.getElementById("backBtn");
  if(bb){ if(C.tab==="office"){ bb.dataset.act="library"; delete bb.dataset.id; bb.textContent="← Cases"; } else { bb.dataset.act="tab"; bb.dataset.id="office"; bb.textContent="← Office"; } }
  const mb=document.getElementById("muteBtn"); if(mb) mb.textContent=G.mute?"Sound off":"Sound on";
  const me=document.getElementById("mechip"); if(me&&G.profile) me.innerHTML=`<i class="mface">${myFace()}</i>${esc(G.profile.name)} · ${esc(G.profile.badge)}`;
  const n=Object.keys(C.done).length;
  const p=document.getElementById("prog");
  if(p) p.innerHTML=`<span>${n}/${K.OBJ.length} objectives</span><div class="track"><div class="fill" style="width:${n/K.OBJ.length*100}%"></div></div><span>${C.unlocked.length}/${K.order.length} exhibits</span><span>Hints ${C.hints}</span>`;
  const unseen=C.unlocked.filter(id=>!C.seen.includes(id)).length;
  const tabs=[["office","Office"],["brief","Case file"],["interview","Interview room"],["evidence","Evidence",unseen||""],["dispatch","Dispatch",G.disp.unread||""],["lab","Forensics lab"],["terminal","Police terminal"],["wall","Evidence wall"],["notebook","Notebook",C.clues.length||""],["verdict","Courtroom"]];
  const t=document.getElementById("tabs"); if(t) t.innerHTML=tabs.map(([k,l,c])=>`<button class="tab ${C.tab===k?"on":""}" data-act="tab" data-id="${k}">${l}${c?`<span class="n">${c}</span>`:""}</button>`).join("");
}
function renderPanel(){
  renderChrome();
  const P=document.getElementById("panel"); if(!P) return;
  const f={office:officeHTML,interview:interviewHTML,dispatch:dispatchHTML,brief:briefHTML,evidence:evidenceHTML,lab:labHTML,terminal:termHTML,wall:wallHTML,notebook:notebookHTML,verdict:verdictHTML}[C.tab]||officeHTML;
  P.innerHTML=f();
  if(C.tab!==lastTab){ P.classList.remove("enter"); void P.offsetWidth; P.classList.add("enter"); lastTab=C.tab; }
  if(C.tab==="office") tickClock();
  if(C.tab==="lab"&&C.lab==="prints") drawPrints();
  clipTarget=null;
  if(C.tab==="wall"){ drawStrings(); drawRings(); }
  if(C.tab==="evidence"&&has(C.evSel)&&!C.seen.includes(C.evSel)){ C.seen.push(C.evSel); save(); renderChrome(); }
}

/* --- library --- */
function coverSVG(kind){
  if(kind==="cold") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#0c1216"/>${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${20+i*48}" y="20" width="40" height="110" fill="#151d23" stroke="#25313a"/>${[0,1,2,3,4,5,6,7].map(r=>`<circle cx="${30+i*48}" cy="${30+r*12}" r="1.6" fill="${(i+r)%4?'#3fbf7f':'#e2b13f'}"/>`).join("")}`).join("")}<path d="M0 132 L400 118" stroke="#e2b13f" stroke-width="10"/><text x="200" y="130" fill="#1b1606" font-family="IBM Plex Mono, monospace" font-size="8" text-anchor="middle" transform="rotate(-2 200 125)">POLICE LINE · DO NOT CROSS · POLICE LINE · DO NOT CROSS</text></svg>`;
  if(kind==="dinner") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#140c0a"/><ellipse cx="200" cy="112" rx="180" ry="52" fill="#e9e3d6" opacity=".92"/><circle cx="130" cy="108" r="24" fill="#fbfaf6"/><circle cx="270" cy="108" r="24" fill="#fbfaf6"/><circle cx="270" cy="108" r="10" fill="#f0b8c8"/><g transform="rotate(-40 320 80)"><rect x="300" y="70" width="40" height="18" rx="8" fill="#cfe3ee" opacity=".7"/></g><ellipse cx="335" cy="100" rx="30" ry="9" fill="#9fbccc" opacity=".5"/><rect x="196" y="76" width="8" height="22" fill="#efe7d4"/><circle class="blink" cx="200" cy="72" r="4" fill="#f2b33f"/><rect x="60" y="138" width="14" height="4" fill="#2b4a7a"/></svg>`;
  if(kind==="bay") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#1c1e21"/><rect x="40" y="16" width="320" height="104" fill="#2a2d31"/>${Array.from({length:12},(_,i)=>`<rect x="40" y="${20+i*8.5}" width="320" height="2" fill="#1f2124"/>`).join("")}<rect x="40" y="116" width="320" height="10" fill="#0c0d0f"/>${Array.from({length:22},(_,i)=>`<rect x="${i*20-6}" y="132" width="10" height="18" fill="#e2b13f" transform="skewX(-30)"/>`).join("")}<rect x="300" y="60" width="26" height="12" fill="#0d0e10"/><circle class="blink" cx="320" cy="66" r="2" fill="#4bd37a"/></svg>`;
  if(kind==="radio") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#16131b"/>${Array.from({length:40},(_,i)=>{const h=Math.abs(Math.sin(i*.7))*100*(i>28?.08:1);return `<rect x="${10+i*9.5}" y="${75-h/2}" width="5" height="${h+2}" fill="${i>28?'#5a2b26':'#4a4458'}"/>`;}).join("")}<text x="372" y="30" fill="#ff5a45" font-family="IBM Plex Mono, monospace" font-size="14" text-anchor="end">01:49</text></svg>`;
  return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#0f141d"/><rect y="40" width="400" height="50" fill="#0a1220"/>${Array.from({length:18},(_,i)=>`<rect x="${(i*53)%400}" y="${50+(i*13)%30}" width="${30+(i*17)%60}" height="2" fill="${i%2?'#f2c96b':'#9fd0ff'}" opacity=".6"/>`).join("")}${Array.from({length:9},(_,i)=>`<rect x="${20+i*42}" y="100" width="30" height="34" rx="5" fill="${i===4?'#b23a2e':'#2c3a55'}"/>`).join("")}<text x="188" y="146" font-family="IBM Plex Mono, monospace" font-size="9" fill="#e2b13f">9</text></svg>`;
}
function libraryHTML(){
  const cards=CASE_ORDER.map(id=>{ const k=CASES[id], s=G.cases[id]; const started=s&&(Object.keys(s.done||{}).length||s.introSeen); const st=s&&s.stars;
    return `<div class="casecard"><div class="cover">${coverSVG(k.cover)}</div><div class="info">
    <div class="meta">${st?`<span class="chip solved">Solved <span class="stars">${"★".repeat(st)}${"☆".repeat(3-st)}</span></span>`:`<span class="chip live">${started?"In progress":"Open"}</span>`}<span class="chip">${k.crime}</span><span class="chip">${k.genre}</span></div>
    <h2>${k.title}</h2><p>${k.blurb}</p>
    <div class="meta"><span class="chip">${Object.keys(k.SUS).length} suspects</span><span class="chip">${k.order.length} exhibits</span><span class="chip diff">Difficulty&nbsp;${[1,2,3,4,5].map(i=>`<i class="${i<=k.diff?"on":""}"></i>`).join("")}</span></div>
    <div class="acts"><button class="btn primary small" data-act="open" data-id="${id}">${started?"Continue":"Take the case"}</button>${started?`<button class="btn small" data-act="resetCase" data-id="${id}">Restart</button>`:""}</div></div></div>`; }).join("");
  return `<div class="lib gut">
  <div class="brand"><span class="mark">Precinct Zero</span><span class="eyebrow">Port Meridian Police · Major Crimes</span></div>
  <div class="libtop"><div><h1 class="flickh">The Case <span>V</span>ault</h1>
  <p class="lede"><b class="sinlede">Every file in this vault ended with someone not going home.</b> Every case is a sealed box: reports, photos, phone dumps, lab benches and a police terminal. The obvious suspect is rarely the right one. Hints cost you rating, wrong answers count against you, and the defence will tear apart anything you can't back up.</p></div>
  <div id="idslot">${idCardHTML()}</div></div>
  <div class="tapeband" aria-hidden="true"></div>
  ${vaultHTML()}
  <section class="dfeed"><h2>Dispatch feed</h2>${dispLogHTML()}</section>
  <section class="precinct" aria-label="Precinct directory and radio"><div><h2>Precinct directory</h2><p class="muted" style="margin:0 0 10px;font-size:14px">Detectives working out of Precinct Zero. Find colleagues by name and badge, and radio them.</p><div id="dirList"><div class="notice">Connecting to the precinct…</div></div></div>
  <div><h2>Precinct radio</h2><div id="radioBox"><div class="notice">Connecting to the precinct…</div></div></div></section>
  </div>`;
}
let editingId=false;
function idCardHTML_old(){
  const p=G.profile;
  if(!p||editingId){
    const col=p?p.color:0;
    return `<form class="idcard idform" id="idForm" autocomplete="off"><span class="eyebrow">${p?"Edit your ID":"Create your detective"}</span>
    <label class="l" for="idName">Detective name</label><input class="field" id="idName" maxlength="28" required value="${esc(p?p.name:"")}" placeholder="What other detectives call you">
    <label class="l" for="idMotto">Calling card</label><input class="field" id="idMotto" maxlength="70" value="${esc(p?p.motto:"")}" placeholder="One line, e.g. Follow the money.">
    <span class="l" style="font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)">Badge colour</span>
    <div class="swatches">${SWATCH.map((c,i)=>`<label style="background:${c}" aria-label="Colour ${i+1}"><input type="radio" name="idCol" value="${i}" ${i===col?"checked":""}></label>`).join("")}</div>
    <div class="idacts"><button class="btn primary" type="submit">${p?"Save ID":"Issue my badge"}</button>${p?`<button class="btn" type="button" data-act="cancelId">Cancel</button>`:""}</div></form>`;
  }
  const st=totalStars();
  return `<div class="idcard"><span class="eyebrow">Warrant card · Precinct Zero</span><div class="idrow" style="margin-top:10px"><div class="idav" style="background:${SWATCH[p.color||0]}">${esc((p.name[0]||"?").toUpperCase())}</div>
  <div><div class="idname">${esc(p.name)}</div><div class="idbadge">Badge ${esc(p.badge)}</div><div class="idrank">${rankOf(st)} · Clearance ${clearance()} · ${solvedIds().length}/${CASE_ORDER.length} cases closed · <span class="stars">${"★".repeat(st)}</span>${st?"":"no stars yet"}</div></div></div>
  ${p.motto?`<div class="idmotto">“${esc(p.motto)}”</div>`:""}
  <div class="idacts"><button class="btn small" data-act="editId">Edit ID</button></div></div>`;
}

/* --- office --- */
const STATIONS=[{id:"brief",label:"Case file"},{id:"interview",label:"Interview room"},{id:"dispatch",label:"Dispatch log"},{id:"evidence",label:"Evidence archive"},{id:"lab",label:"Forensics lab"},{id:"terminal",label:"Police terminal"},{id:"wall",label:"Evidence wall"},{id:"notebook",label:"Notebook"},{id:"verdict",label:"Courtroom"},{id:"call",label:"Call Sgt. Aziz"}];
function objG(id,label,lx,ly,inner,badge){ const w=Math.round(label.length*7.3+22);
  return `<g class="obj" data-act="station" data-id="${id}" tabindex="0" role="button" aria-label="${label}"><g class="hl">${inner}</g><g class="lbl" transform="translate(${lx},${ly})"><rect x="${-w/2}" y="-15" width="${w}" height="24" rx="3"/><text text-anchor="middle" y="2">${label}</text></g>${badge||""}</g>`; }
function badgeG(x,y,n){ return n?`<g class="obadge" pointer-events="none"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y+4}" text-anchor="middle">${n}</text></g>`:""; }
function officeSVG(){
  const r=rng(5); let sky="", x=476;
  while(x<784){ const w=22+Math.floor(r()*28), h=50+Math.floor(r()*150); sky+=`<rect x="${x}" y="${294-h}" width="${w}" height="${h}" fill="#0d1622"/>`;
    for(let yy=294-h+6; yy<288; yy+=10) for(let xx=x+4; xx<x+w-5; xx+=7) if(r()<.28) sky+=`<rect class="${r()<.25?"win":""}" style="animation-delay:${(r()*7).toFixed(1)}s" x="${xx}" y="${yy}" width="3" height="4" fill="#f2c96b" opacity="${(.45+r()*.5).toFixed(2)}"/>`; x+=w+2; }
  sky+=`<rect x="684" y="70" width="34" height="224" fill="#111d2b"/><path d="M684 70 L701 46 L718 70z" fill="#111d2b"/><circle class="blink" cx="701" cy="44" r="3" fill="#ff4b3a"/>`;
  let blinds=""; for(let i=0;i<7;i++) blinds+=`<rect x="476" y="${66+i*9}" width="308" height="6" fill="#c9c2b0" opacity="${.55-i*.05}"/>`;
  const minis=[[96,118,-4],[188,108,3],[296,120,-2],[116,214,5],[222,212,-3],[318,226,4]];
  const cork=minis.map(([cx,cy,a],i)=>`<g transform="rotate(${a} ${cx+28} ${cy+21})"><rect x="${cx}" y="${cy}" width="56" height="42" fill="${i%3===1?"#dfe6e8":"#eee8da"}"/>${i%2?`<rect x="${cx+6}" y="${cy+6}" width="22" height="22" fill="#5d6870"/>`:""}<rect x="${cx+6}" y="${cy+32}" width="40" height="3" fill="#9a927f"/><circle cx="${cx+28}" cy="${cy+2}" r="4" fill="#d04a3c"/></g>`).join("");
  let ticks=""; for(let i=0;i<12;i++){ const a=i*Math.PI/6; ticks+=`<line x1="${950+Math.sin(a)*22}" y1="${70-Math.cos(a)*22}" x2="${950+Math.sin(a)*26}" y2="${70-Math.cos(a)*26}" stroke="#2a333b" stroke-width="2"/>`; }
  const unseen=C.unlocked.filter(id=>!C.seen.includes(id)).length, left=K.OBJ.filter(o=>!C.done[o.id]).length, allDone=left===0;
  const pc=G.profile?SWATCH[G.profile.color||0]:"#e2b13f";
  return `<svg viewBox="0 0 1200 680" xmlns="http://www.w3.org/2000/svg" aria-label="Your office. Click an object to work.">
  <defs><linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#081320"/><stop offset="1" stop-color="#26364d"/></linearGradient><radialGradient id="lampL" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#ffd98a" stop-opacity=".38"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient><linearGradient id="woodG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#55392a"/><stop offset="1" stop-color="#2e1f15"/></linearGradient><pattern id="corkP" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#7a5b3e"/><circle cx="2" cy="2" r="1" fill="#6b4f35"/><circle cx="6" cy="5" r="1.2" fill="#8a6a4a"/></pattern><clipPath id="winClip"><rect x="476" y="66" width="308" height="228"/></clipPath><radialGradient id="vigG" cx=".5" cy=".45" r=".78"><stop offset=".62" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient><radialGradient id="scrG" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#0c2a1c"/><stop offset="1" stop-color="#05110b"/></radialGradient></defs>
  <rect width="1200" height="680" fill="#1b252d"/>${Array.from({length:30},(_,i)=>`<rect x="${i*40}" y="40" width="1" height="390" fill="#202c35"/>`).join("")}<rect width="1200" height="40" fill="#141b21"/><rect y="430" width="1200" height="44" fill="#151c22"/><rect y="428" width="1200" height="3" fill="#2a3640"/>
  <rect x="466" y="56" width="328" height="248" fill="#2a333b"/><g clip-path="url(#winClip)"><rect x="476" y="66" width="308" height="228" fill="url(#skyG)"/><circle cx="540" cy="104" r="14" fill="#e8e2cc" opacity=".5"/>${sky}<g class="rain">${Array.from({length:80},(_,i)=>`<line x1="${476+((i*37)%320)}" y1="${20+((i*53)%300)}" x2="${471+((i*37)%320)}" y2="${36+((i*53)%300)}" stroke="#9fb6d6" stroke-width="1" opacity=".35"/>`).join("")}</g>${blinds}<rect id="winFlash" class="wflash" x="476" y="66" width="308" height="228" fill="#e6eeff" opacity="0"/></g><rect x="628" y="66" width="4" height="228" fill="#2a333b"/><rect x="476" y="178" width="308" height="4" fill="#2a333b"/><rect x="456" y="300" width="348" height="10" fill="#323d46"/>
  <circle cx="950" cy="70" r="30" fill="#e9e4d6" stroke="#2a333b" stroke-width="5"/>${ticks}<line id="clkH" x1="950" y1="70" x2="950" y2="56" stroke="#1d2328" stroke-width="3.5" stroke-linecap="round"/><line id="clkM" x1="950" y1="70" x2="950" y2="50" stroke="#1d2328" stroke-width="2.5" stroke-linecap="round"/><line id="clkS" x1="950" y1="74" x2="950" y2="48" stroke="#cf4a3c" stroke-width="1.2"/><circle cx="950" cy="70" r="2.5" fill="#cf4a3c"/>
  ${objG("wall","Evidence wall",236,74,`<rect x="64" y="84" width="344" height="252" fill="#3a2a1c"/><rect x="74" y="94" width="324" height="232" fill="url(#corkP)"/>${cork}<polyline points="124,120 216,110 324,122" fill="none" stroke="#cf4a3c" stroke-width="1.6"/><polyline points="216,110 144,216 250,214 346,228" fill="none" stroke="#cf4a3c" stroke-width="1.6"/>`)}
  ${objG("verdict","Courtroom",955,152,`<rect x="878" y="108" width="154" height="324" fill="#3a2a1c"/><rect x="884" y="114" width="142" height="314" fill="#2b2117"/><rect x="900" y="130" width="110" height="128" fill="#9fb3bf" opacity=".3"/><text x="955" y="186" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="20" fill="#e2e7ea" opacity=".75" letter-spacing="2">HEARING</text><text x="955" y="208" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="20" fill="#e2e7ea" opacity=".75" letter-spacing="2">ROOM 2</text><rect x="900" y="276" width="110" height="130" fill="none" stroke="#3a2c1f" stroke-width="3"/><circle cx="1012" cy="300" r="6" fill="#c9a24a"/><rect class="${allDone?"doorglow":""}" x="886" y="426" width="138" height="4" fill="#ffd98a" opacity="${allDone?.8:.3}"/>`,allDone?badgeG(1028,116,"!"):"")}
  ${objG("evidence","Evidence archive",1112,184,`<rect x="1058" y="196" width="108" height="34" fill="#b79a62"/><text x="1112" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="#3a2e18" letter-spacing="1">EVIDENCE</text><rect x="1048" y="230" width="128" height="244" fill="#4b5761"/>${[0,1,2].map(i=>`<rect x="1056" y="${240+i*76}" width="112" height="68" fill="#56636e" stroke="#3a444c"/><rect x="1094" y="${252+i*76}" width="36" height="12" fill="#e9e4d6"/><rect x="1098" y="${276+i*76}" width="28" height="6" rx="3" fill="#9aa6af"/>`).join("")}`,badgeG(1170,206,unseen))}
  <rect x="0" y="474" width="1200" height="206" fill="url(#woodG)"/><polygon points="20,470 1180,470 1200,512 0,512" fill="#6a4a31"/><rect y="512" width="1200" height="3" fill="#7d593b"/><rect x="80" y="560" width="300" height="80" fill="none" stroke="#24180f" stroke-width="2"/><rect x="820" y="560" width="300" height="80" fill="none" stroke="#24180f" stroke-width="2"/><rect x="215" y="596" width="30" height="6" rx="3" fill="#a88a5a"/><rect x="955" y="596" width="30" height="6" rx="3" fill="#a88a5a"/>
  <polygon class="lampcone" points="96,350 152,350 280,512 -20,512" fill="url(#lampL)"/><ellipse cx="66" cy="496" rx="34" ry="8" fill="#1f2a2f"/><path d="M66 494 L92 410 L124 344" stroke="#2c383f" stroke-width="7" fill="none" stroke-linecap="round"/><polygon points="96,350 156,350 144,318 108,318" fill="#2f5d4f"/><ellipse cx="126" cy="350" rx="30" ry="4" fill="#ffe7a8" opacity=".8"/>
  ${objG("lab","Forensics lab",256,404,`<rect x="186" y="486" width="74" height="12" rx="3" fill="#d7dde0"/><path d="M246 488 C270 470 268 440 244 420" stroke="#c4ccd0" stroke-width="12" fill="none" stroke-linecap="round"/><rect x="196" y="462" width="46" height="6" fill="#aab4b9"/><g transform="rotate(-22 228 440)"><rect x="220" y="414" width="16" height="44" rx="3" fill="#e6eaec"/><rect x="216" y="408" width="24" height="10" rx="2" fill="#7f8b91"/></g><rect x="216" y="468" width="8" height="18" fill="#aab4b9"/><rect x="280" y="482" width="62" height="14" rx="2" fill="#6b5e4c"/>${[0,1,2,3].map(i=>`<rect x="${285+i*14}" y="452" width="8" height="34" rx="4" fill="#d9e2e6" opacity=".9"/><rect x="${285+i*14}" y="${470-i*3}" width="8" height="${16+i*3}" rx="4" fill="${["#cf4a3c","#e2b13f","#5fb380","#5b8fd1"][i]}" opacity=".85"/>`).join("")}`)}
  ${objG("brief","Case file",392,466,`<polygon points="360,482 486,480 494,500 352,503" fill="#eee8da"/><polygon points="356,486 482,486 494,506 346,506" fill="#d9c48b"/><polygon points="362,486 398,486 400,481 366,481" fill="#d9c48b"/><text x="420" y="501" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#3a2e18">${K.short}</text><rect x="352" y="494" width="22" height="7" fill="#cf4a3c" opacity=".85"/>`,badgeG(492,478,left))}
  <rect x="508" y="456" width="30" height="34" rx="4" fill="#c8453a"/><path d="M538 464 q12 6 0 16" stroke="#c8453a" stroke-width="4" fill="none"/><ellipse cx="523" cy="457" rx="15" ry="3" fill="#3a1d12"/><path class="steam" d="M516 448 q-6 -10 2 -18 q6 -8 -2 -16" stroke="#dfe5e9" stroke-width="2" fill="none"/><path class="steam s2" d="M528 448 q6 -10 -2 -18 q-6 -8 2 -16" stroke="#dfe5e9" stroke-width="2" fill="none"/>
  ${objG("terminal","Police terminal",680,286,`<rect x="570" y="298" width="220" height="152" rx="6" fill="#1d2328"/><rect x="582" y="310" width="196" height="124" fill="url(#scrG)"/><g class="scr" font-family="IBM Plex Mono, monospace" font-size="10" fill="#7fe3a8">${K.screen.map((s,i)=>`<text x="592" y="${330+i*16}" opacity="${i%2?.75:i?.55:1}">${esc(s)}</text>`).join("")}<text x="592" y="416">&gt;</text></g><rect class="blink" x="602" y="408" width="7" height="10" fill="#7fe3a8"/><rect x="668" y="450" width="24" height="22" fill="#2a3238"/><ellipse cx="680" cy="476" rx="50" ry="7" fill="#20272c"/><polygon points="610,488 752,488 762,504 600,504" fill="#2a3238"/>${Array.from({length:14},(_,i)=>`<rect x="${614+i*10}" y="492" width="7" height="4" fill="#3c464d"/>`).join("")}`)}
  ${objG("notebook","Notebook",846,466,`<polygon points="806,482 884,482 892,506 798,506" fill="#2b2b30"/><line x1="870" y1="482" x2="878" y2="506" stroke="#cf4a3c" stroke-width="2"/><rect x="800" y="504" width="92" height="3" fill="#e9e4d6"/><line x1="900" y1="500" x2="944" y2="484" stroke="#c9a24a" stroke-width="4" stroke-linecap="round"/>`,badgeG(892,480,C.clues.length))}
  ${objG("call","Call Sgt. Aziz",1004,458,`<polygon points="966,484 1044,484 1054,506 956,506" fill="#26292d"/><rect x="968" y="470" width="78" height="14" rx="7" fill="#1b1d20"/><rect x="984" y="488" width="38" height="12" fill="#3a3f45"/><circle class="blink" cx="1036" cy="494" r="3.5" fill="#cf4a3c"/>`)}
  <g pointer-events="none"><rect x="1090" y="488" width="64" height="22" rx="3" fill="#20262c"/><circle cx="1104" cy="499" r="7" fill="${pc}"/><rect x="1116" y="494" width="32" height="3" fill="#8e9ba6"/><rect x="1116" y="501" width="22" height="3" fill="#8e9ba6"/></g>
  <rect width="1200" height="680" fill="url(#vigG)" pointer-events="none"/></svg>`;
}
function officeHTML(){
  const unseen=C.unlocked.filter(id=>!C.seen.includes(id)).length, counts={evidence:unseen,notebook:C.clues.length};
  return `<div class="officehead"><span class="headface">${myFace()}</span><h2>${esc(detName())}'s desk</h2><span class="muted">Click anything in the office to start working.</span></div>
  <div class="office-scene" id="officeScene">${officeSVG()}</div>
  <div class="quickrow" aria-label="Stations">${STATIONS.map(s=>`<button class="qbtn" data-act="station" data-id="${s.id}">${s.label}${counts[s.id]?`<span class="n">${counts[s.id]}</span>`:""}</button>`).join("")}</div>`;
}
function tickClock(){ const h=document.getElementById("clkH"); if(!h) return; const d=new Date(), s=d.getSeconds(), m=d.getMinutes()+s/60, hr=(d.getHours()%12)+m/60;
  h.setAttribute("transform",`rotate(${hr*30} 950 70)`); document.getElementById("clkM").setAttribute("transform",`rotate(${m*6} 950 70)`); document.getElementById("clkS").setAttribute("transform",`rotate(${s*6} 950 70)`); }
setInterval(tickClock,1000);

/* --- brief --- */
function briefHTML(){
  const objs=K.OBJ.map(o=>{ const done=C.done[o.id], locked=o.needs&&!C.done[o.needs];
    return `<li class="${done?"done":""} ${locked?"locked":""}"><span class="box">${done?"✓":""}</span><div><div class="t">${o.t}</div><div class="d">${locked?`Unlocks after: ${K.OBJ.find(x=>x.id===o.needs).t}`:o.d}${o.reward.length?` · Unseals ${o.reward.length} exhibit${o.reward.length>1?"s":""}`:""}</div></div>${locked?"":`<button class="btn small" data-act="goObj" data-id="${o.id}">${done?"Review":"Go"}</button>`}</li>`; }).join("");
  const sus=Object.entries(K.SUS).map(([k,s])=>`<button class="suscard" data-act="openEv" data-id="s_${k}"><span class="avatar">${faceOf(k)}</span><span><b>${s.name}</b><span>${s.short}</span></span></button>`).join("");
  return `<div class="brief"><div><p class="eyebrow">Briefing for ${esc(detName())} · ${K.briefDate}</p><h2 style="margin-top:6px">${K.headline}</h2>
  <div class="summary">${K.summary.map(p=>`<p>${p}</p>`).join("")}<p>Work the objectives to unseal more evidence. When you're ready, take your case to the courtroom. You need 9 of 12 jurors to charge, and you'll have to answer the defence and explain how it was done.</p></div>
  <h2 style="margin-top:28px;font-size:24px">Objectives</h2><ul class="objs">${objs}</ul></div>
  <div><h2 style="font-size:24px">Persons of interest</h2><div class="sus">${sus}</div>
  <h2 style="font-size:24px;margin-top:28px">Your rating</h2><p class="muted" style="margin:0">Hints used: ${C.hints} · Wrong answers: ${C.wrong} · Court attempts: ${C.attempts}${C.stars?` · Best: <span class="stars">${"★".repeat(C.stars)}</span>`:""}</p>
  <p class="muted" style="font-size:13px">Three stars need a first-time charge with at most two hints and few wrong answers.</p></div></div>`;
}

/* --- evidence --- */
function evidenceHTML(){
  const CATS=["Reports","Scene","Suspects","Statements","Digital","Records","Press"];
  const list=CATS.map(cat=>{ const items=K.order.filter(id=>K.EV[id].cat===cat); if(!items.length) return "";
    return `<div class="evgroup"><h3>${cat}</h3>${items.map(id=>{ const e=K.EV[id], u=has(id), isNew=u&&!C.seen.includes(id);
      const req=e.lock==="term"?"Turn it up on the police terminal":e.lock==="dispatch"?"Arrives by dispatch":e.lock?`Complete: ${K.OBJ.find(o=>o.id===e.lock).t}`:"";
      return `<button class="evitem ${C.evSel===id?"on":""} ${u?"":"sealed"}" data-act="ev" data-id="${id}"><span class="no">${exNo(id)}</span><span class="tt">${u?esc(e.title):"Sealed exhibit"}${isNew?'<span class="new">NEW</span>':""}${u?"":`<span class="req">${req}</span>`}</span></button>`; }).join("")}</div>`; }).join("");
  const e=K.EV[C.evSel], u=has(C.evSel);
  const view=u?`<div class="vhead"><div><p class="eyebrow">${exNo(e.id)} · ${e.type}</p><h2>${esc(e.title)}</h2></div><div class="acts"><button class="btn small" data-act="pinEv">Pin to notebook</button><button class="btn small" data-act="toWall">Add to wall</button><button class="btn small" data-act="clipText">Clip selected text</button>${e.id==="scene"?`<button class="btn small" data-act="clipMode">Clip part of photo</button>`:""}</div></div>${e.body()}`
    :`<div class="sealedmsg"><b>Sealed</b>${e.lock==="term"?"This record turns up when you run the right search on the police terminal.":e.lock==="dispatch"?"This arrives by radio from dispatch as the case develops.":`Complete "${K.OBJ.find(o=>o.id===e.lock).t}" to unseal it.`}</div>`;
  return `<div class="evid"><nav class="evlist" aria-label="Exhibits">${list}</nav><section class="viewer">${view}</section></div>`;
}

/* --- lab --- */
let zoom=1;
function labHTML(){
  const labs=K.OBJ.filter(o=>o.lab);
  if(!labs.some(o=>o.id===C.lab)) C.lab=labs[0].id;
  const nav=labs.map(o=>`<button class="${C.lab===o.id?"on":""}" data-act="lab" data-id="${o.id}">${o.lab}${C.done[o.id]?'<span class="ck">✓</span>':""}</button>`).join("");
  const f={scene:labScene,statements:labStatements,cipher:labCipher,prints:labPrints,hand:labHand,timeline:labTimeline,code:labCode,mrz:labMrz}[C.lab];
  const ob=K.OBJ.find(x=>x.id===C.lab), blocked=ob.needs&&!C.done[ob.needs]&&ob.id!=="timeline";
  return `<div class="lab"><div class="labnav">${nav}</div>${blocked?`<div class="sealedmsg"><b>Not yet</b>Complete "${K.OBJ.find(x=>x.id===ob.needs).t}" first.</div>`:f()}</div>`;
}
function labScene(){
  const S=K.scene; const fl=C.found.map((id,i)=>`<div class="finding"><span class="tent">${i+1}</span><div>${S.hots.find(h=>h.id===id).t}</div></div>`).join("");
  return `<h2>${S.title}</h2><p class="instr">${S.intro}</p>
  <div class="scenebar"><button class="btn small" data-act="zoom" data-id="-1" aria-label="Zoom out">−</button><span>${Math.round(zoom*100)}%</span><button class="btn small" data-act="zoom" data-id="1" aria-label="Zoom in">+</button><span>Found ${C.found.length}/${S.hots.length}</span><button class="btn small" data-act="clipMode" style="margin-left:auto">Clip part of photo to wall</button></div>
  <div class="scene-wrap" id="sceneWrap"><div style="width:${zoom*100}%">${sceneSVG(true)}</div></div><div class="findings">${fl}</div>`;
}
function labStatements(){
  const S=K.statements, done=C.done.statements;
  const blocks=S.blocks.map(b=>`<div class="stmt"><h4>${b.who}</h4>${b.s.map(([id,t])=>`<button class="sent ${(done&&id===S.correct)?"right":C.stmt.includes(id)?"wrong":""}" data-act="stmt" data-id="${id}">${esc(t)}</button> `).join("")}</div>`).join("");
  const last=C.stmt[C.stmt.length-1];
  const fb=done?`<div class="feedback good"><b>Caught it.</b> ${S.success}</div>`:last?`<div class="feedback badf">${S.fb[last]||"Not quite."}</div>`:"";
  return `<h2>Statement analysis</h2><p class="instr">${S.intro}</p><div class="stmts">${blocks}</div>${fb}`;
}
function decodeC(){ let t=K.cipher.ct; if(C.ciph.mirror) t=atbash(t); if(C.ciph.key) t=vig(t,C.ciph.key,-1); return shiftTxt(t,-C.ciph.shift); }
function labCipher(){
  const Q=K.cipher, solved=C.done.cipher;
  return `<div class="cipher"><h2>${Q.title}</h2><p class="instr">${Q.intro} You can combine tools: mirror first, then keyword, then shift.</p>
  <p class="eyebrow">Ciphertext</p><div class="ct">${Q.ct}</div>
  <div class="tools"><div class="tool"><span class="eyebrow">Shift back</span><div class="dial"><button class="btn" data-act="shift" data-id="-1" aria-label="Shift less">◀</button><span class="v">${C.ciph.shift}</span><button class="btn" data-act="shift" data-id="1" aria-label="Shift more">▶</button></div></div>
  <div class="tool"><span class="eyebrow">Mirror alphabet</span><label class="toggle"><input type="checkbox" id="cMirror" ${C.ciph.mirror?"checked":""}> A↔Z, B↔Y, C↔X…</label></div>
  <div class="tool"><span class="eyebrow">Keyword</span><input class="field" id="cKey" maxlength="16" value="${esc(C.ciph.key)}" placeholder="Letters only" autocomplete="off"></div></div>
  <p class="eyebrow">Plaintext</p><div class="pt ${solved?"solved":""}" id="cOut">${esc(solved?Q.plain:decodeC())}</div>
  ${solved?`<div class="feedback good"><b>Decoded.</b> ${Q.success}</div>`:""}</div>`;
}
function labPrints(){
  const P=K.prints;
  const cands=P.cands.map(k=>`<button class="pc ${C.printPick===k?"on":""}" data-act="pick" data-id="${k}"><canvas width="200" height="240" data-print="${k}"></canvas>${esc(suspName(k))}</button>`).join("");
  return `<h2>${P.title}</h2><p class="instr">Pick a reference print, then rotate the latent (red) over it until the ridges line up. When ridges, core and delta run on without a break, declare the match. A wrong declaration counts against you.</p>
  <div class="prints"><div><p class="eyebrow">${P.latentLabel}</p><div class="canvasbox"><canvas id="latent" width="200" height="240"></canvas></div></div>
  <div><p class="eyebrow">Reference prints</p><div class="pcands">${cands}</div>
  <p class="eyebrow" style="margin-top:16px">Overlay</p><div class="canvasbox"><canvas id="compare" width="200" height="240"></canvas>
  <div class="range"><label for="pAng">Rotate latent</label><input type="range" id="pAng" min="-60" max="60" value="${C.printAngle}"><span id="pAngV">${C.printAngle}°</span></div>
  <div class="range"><label for="pOp">Latent opacity</label><input type="range" id="pOp" min="10" max="100" value="65"><span></span></div>
  <p style="margin-top:12px"><button class="btn primary" data-act="declare" ${C.printPick&&!C.done.prints?"":"disabled"}>Declare match</button></p></div>
  <div id="printFb">${C.done.prints?`<div class="feedback good"><b>Match.</b> ${P.success}</div>`:""}</div></div></div>`;
}
function labHand(){
  const H=K.hand;
  const ex=H.cands.map(h=>`<button class="ex ${C.hand===h.k?"on":""}" data-act="hand" data-id="${h.k}"><span class="w" style="font-family:${h.f};font-size:${h.sz}px">${H.exemplar}</span><small>Exemplar · ${esc(suspName(h.k))}</small></button>`).join("");
  const fb=C.done.hand?`<div class="feedback good"><b>${H.success}</b> The examiner's report is unsealed.</div>`:C.hand?`<div class="feedback badf">Those letterforms don't agree with the questioned document. Look again at individual characters.</div>`:"";
  return `<h2>Questioned document</h2><p class="instr">${H.intro}</p><div class="hand"><div><p class="eyebrow">Questioned document</p><div style="padding:16px 0"><div class="sticky" style="font-family:${H.noteFont};font-size:${H.noteSize}px">${H.note}</div></div></div><div><p class="eyebrow">Exemplars</p><div class="exemplars">${ex}</div>${fb}</div></div>`;
}
function labTimeline(){
  const T=K.timeline, o=K.OBJ.find(x=>x.id==="timeline");
  if(o.needs&&!C.done[o.needs]) return `<div class="sealedmsg"><b>Not yet</b>Complete "${K.OBJ.find(x=>x.id===o.needs).t}" first.</div>`;
  const done=C.done.timeline;
  const items=C.tl.map((id,i)=>{ const e=T.ev.find(x=>x.id===id); return `<li class="${done?"ok":""}"><span class="ix">${i+1}</span><span>${done?`<span class="tm">${e.tm}</span>`:""}${e.t}</span>${done?"":`<span class="mv"><button data-act="tl" data-id="${i}:-1" aria-label="Move up">↑</button><button data-act="tl" data-id="${i}:1" aria-label="Move down">↓</button></span>`}</li>`; }).join("");
  return `<h2>Reconstruct the timeline</h2><p class="instr">${T.intro}</p><ol class="tl">${items}</ol><p style="margin-top:14px">${done?"":`<button class="btn primary" data-act="tlCheck">Check order</button>`}</p><div id="tlFb">${done?`<div class="feedback good"><b>That's it.</b> ${T.success}</div>`:""}</div>`;
}
function labCode(){
  const Q=K.code, done=C.done.code;
  return `<h2>${Q.title}</h2><p class="instr">${Q.intro}</p><p><b>${Q.q}</b></p>
  ${done?`<div class="feedback good"><b>Correct.</b> ${Q.success}</div>`:`<form class="codeform" id="codeForm" autocomplete="off"><input class="field" id="codeIn" placeholder="${Q.placeholder}" aria-label="Answer"><button class="btn primary" type="submit">Check</button></form><div id="codeFb"></div>`}`;
}
function labMrz(){
  const M=K.mrz, done=C.done.mrz;
  return `<h2>Machine-readable zone</h2><p class="instr">Each field on the passport's second MRZ line ends in a check digit. Multiply each character by 7, 3, 1, 7, 3, 1… (digits as themselves, A=10 … Z=35, &lt; = 0), add them up and keep the last digit. Forgers who reprint one field often forget to fix its digit. Click the field (highlighted) that doesn't check out. Wrong picks count against you.</p>
  ${passportHTML(true)}
  <div class="tool" style="margin-top:14px;max-width:520px"><span class="eyebrow">Check-digit calculator</span><div style="display:flex;gap:8px;align-items:center"><input class="field" id="mrzCalc" maxlength="20" placeholder="Type field characters (without its check digit)" autocomplete="off" style="font-family:var(--mono)"><span style="font-family:var(--display);font-weight:800;font-size:32px;min-width:28px;text-align:center" id="mrzOut">–</span></div></div>
  ${done?`<div class="feedback good"><b>Forgery found.</b> ${M.success}</div>`:C.mrzTried.length?`<div class="feedback badf">That field's check digit is valid.</div>`:""}`;
}

/* --- terminal --- */
function termHTML(){
  const log=C.termLog.map((l,i)=>`<div class="blk"><div class="cmd">pmpd&gt; ${esc(l.cmd)}</div><div class="${l.cls}">${esc(l.out)}</div>${l.cls!=="err"&&l.cmd!=="help"?`<button class="pin" data-act="pinTerm" data-id="${i}">Pin to notebook</button> <button class="pin" data-act="termWall" data-id="${i}">Clip to wall</button>`:""}</div>`).join("");
  return `<div class="termside"><div class="term"><div class="tbar"><b>PMPD</b> Records terminal · ${esc(G.profile?G.profile.badge:"")} · ${K.code}</div>
  <div class="out">${C.termLog.length?log:`<div class="muted">PORT MERIDIAN POLICE DEPARTMENT\nWelcome, ${esc(detName())}. All queries are logged.\n\nType <span class="cmd">help</span> for a list of commands.</div>`}</div>
  <form id="termForm" autocomplete="off"><span style="color:var(--tape)">pmpd&gt;</span><input id="termIn" aria-label="Terminal command" placeholder="type a command" spellcheck="false"></form></div>
  <aside><p class="eyebrow">Tips</p><p class="muted" style="font-size:14px">Names, plates, numbers and IDs all come from the exhibits. Some searches add new exhibits. Not every lead is in this list.</p>
  <p class="eyebrow" style="margin-top:14px">Try</p><div class="quick">${K.term.quick.map(q=>`<code data-act="quick" data-id="${esc(q)}" tabindex="0">${esc(q)}</code>`).join("")}</div></aside></div>`;
}

/* --- wall --- */
function curT(){ return C.theories.find(t=>t.id===C.active)||C.theories[0]; }
let stringMode=false, selCard=null, tested=false;
function wallHTML(){
  const T=curT(), onBoard=new Set(T.cards.map(c=>c.id));
  const tabs=C.theories.map(t=>`<button class="${t.id===T.id?"on":""}" data-act="theory" data-id="${t.id}">${esc(t.name)}${t.suspect?` · ${esc(suspName(t.suspect).split(" ")[0])}`:""}</button>`).join("");
  const pool=K.order.filter(id=>has(id)&&!onBoard.has(id)).map(id=>`<button data-act="wallAdd" data-id="${id}"><span class="no">${exNo(id)}</span><span>${esc(K.EV[id].title)}</span></button>`).join("")||`<p class="muted" style="font-size:13px;margin:4px">Every unsealed exhibit is on this board.</p>`;
  const cards=T.cards.map(c=>{ if(c.kind) return extraCardHTML(c); const e=K.EV[c.id]; if(!e) return ""; const s=e.cat==="Suspects"; let cls="",flag="";
    if(tested&&T.suspect){ if((K.CLEARS[c.id]||[]).includes(T.suspect)){cls="contra";flag="contradicts";} else if((K.POINTS[c.id]||[]).includes(T.suspect)){cls="supp";flag="supports";} }
    return `<div class="card ${s?"sus":""} ${cls} ${selCard===c.id?"sel":""}" data-card="${c.id}" style="left:${c.x}px;top:${c.y}px"><button class="x" data-act="wallRm" data-id="${c.id}" aria-label="Remove from board">×</button>${s?`<span class="cface">${faceOf(c.id.slice(2))}</span>`:""}<span class="ctag">${exNo(c.id)} · ${s?"Suspect":e.type}</span><b>${esc(e.title)}</b>${flag?`<span class="flag">${flag}</span>`:""}</div>`; }).join("");
  let res="";
  if(tested&&T.suspect){ const con=T.cards.filter(c=>(K.CLEARS[c.id]||[]).includes(T.suspect)).map(c=>K.EV[c.id].title), sup=T.cards.filter(c=>(K.POINTS[c.id]||[]).includes(T.suspect)).map(c=>K.EV[c.id].title);
    res=`<div class="testresult"><b>${sup.length} support · ${con.length} contradict</b> the theory that ${esc(suspName(T.suspect))} did it.${con.length?`<ul>${con.map(t=>`<li style="color:var(--bad)">${esc(t)}</li>`).join("")}</ul>`:""}${!con.length&&!sup.length?`<p class="muted" style="margin:6px 0 0">Nothing on this board speaks to this suspect yet.</p>`:""}<p class="muted" style="margin:6px 0 0;font-size:13px">Support isn't proof. An exhibit can look bad for an innocent person.</p></div>`; }
  else if(tested) res=`<div class="testresult">Choose a prime suspect for this theory first.</div>`;
  return `<div class="wallbar"><div class="theorytabs">${tabs}<button data-act="theoryNew">+ New theory</button></div></div>
  <div class="wallbar"><label class="muted" for="tName" style="font-size:13px">Name</label><input id="tName" class="field" value="${esc(T.name)}" style="width:160px">
  <label class="muted" for="tSus" style="font-size:13px">Prime suspect</label><select id="tSus" style="width:auto"><option value="">—</option>${Object.entries(K.SUS).map(([k,s])=>`<option value="${k}" ${T.suspect===k?"selected":""}>${s.name}</option>`).join("")}</select>
  <button class="btn small ${stringMode?"primary":""}" data-act="string">${stringMode?"Stringing: click two cards":"Add string"}</button><button class="btn small" data-act="test">Test theory</button><button class="btn small" data-act="addNote">+ Sticky note</button><button class="btn small ${penMode?"pen-on":""}" data-act="pen">${penMode?"Red pen on: drag to circle":"Red pen"}</button>${(T.rings||[]).length?`<button class="btn small" data-act="undoRing">Undo circle</button>`:""}${C.theories.length>1?`<button class="btn small" data-act="theoryDel">Delete theory</button>`:""}</div>
  <div class="wall"><aside><p class="eyebrow" style="margin-bottom:6px">Unsealed exhibits · click to pin</p><div class="pool">${pool}</div></aside>
  <div><div class="boardwrap"><div class="board ${penMode?"pen":""}" id="board"><svg id="strings"></svg>${cards}<svg id="rings"></svg></div></div><p class="muted" style="font-size:13px;margin-top:6px">Drag cards to arrange them. Click a string to remove it. Clip text or part of a photo from any exhibit, interview, terminal result or notebook clue, then circle what matters with the red pen.</p>${res}</div></div>`;
}
function drawStrings(){ const T=curT(), svg=document.getElementById("strings"); if(!svg) return;
  const pos=id=>{ const el=document.querySelector(`[data-card="${id}"]`); return el?[el.offsetLeft+el.offsetWidth/2,el.offsetTop+10]:null; };
  svg.innerHTML=T.links.map((l,i)=>{ const a=pos(l[0]),b=pos(l[1]); if(!a||!b) return ""; const mx=(a[0]+b[0])/2, my=Math.max(a[1],b[1])+30+Math.abs(a[0]-b[0])*.06; return `<path data-act="unstring" data-id="${i}" d="M${a[0]} ${a[1]} Q${mx} ${my} ${b[0]} ${b[1]}"/>`; }).join(""); }
function wallAdd(id){ const T=curT(); if(T.cards.some(c=>c.id===id)) return; const n=T.cards.length; T.cards.push({id,x:40+(n%6)*185,y:40+Math.floor(n/6)*170+(n%2)*14}); save(); }

/* --- notebook --- */
function notebookHTML(){
  const cl=C.clues.length?C.clues.map((c,i)=>`<div class="clue"><div>${esc(c.t)}<small>${esc(c.src)}</small></div><span class="cbtns"><button data-act="clueWall" data-id="${i}" title="Clip to wall" aria-label="Clip to wall">⤴ wall</button><button data-act="clueRm" data-id="${i}" aria-label="Remove">×</button></span></div>`).join(""):`<p class="muted">Nothing pinned yet. Use "Pin to notebook" on exhibits and terminal results. Scene findings land here automatically.</p>`;
  return `<div class="nb"><div><p class="eyebrow" style="margin-bottom:8px">${esc(detName())}'s notes</p><textarea id="notes" aria-label="Detective notes" placeholder="Who had the motive, the means and the opportunity? What will the defence say?">${esc(C.notes)}</textarea></div>
  <div><p class="eyebrow" style="margin-bottom:8px">Pinned clues</p><div class="clues">${cl}</div><p class="eyebrow" style="margin:20px 0 6px">Theories</p><ul style="margin:0;padding-left:18px">${C.theories.map(t=>`<li><b>${esc(t.name)}</b>: ${t.suspect?esc(suspName(t.suspect)):"no suspect yet"} · ${t.cards.length} cards, ${t.links.length} strings</li>`).join("")}</ul></div></div>`;
}

/* --- verdict --- */
function verdictHTML(){
  if(C.verdict) return courtHTML(C.verdict,false);
  const V=K.verdict;
  const sus=Object.entries(K.SUS).map(([k,s])=>`<label><input type="radio" name="vs" value="${k}"><span class="vsface">${faceOf(k)}</span><span>${s.name}</span></label>`).join("");
  const exh=K.order.filter(id=>has(id)&&K.EV[id].cat!=="Suspects").map(id=>`<label><input type="checkbox" name="vx" value="${id}"><span>${exNo(id)} ${esc(K.EV[id].title)}</span></label>`).join("");
  const qs=V.questions.map((q,i)=>`<div class="qblock"><p>${i+1}. ${q.q}</p><div class="qopts">${q.o.map((o,j)=>`<label><input type="radio" name="vq${i}" value="${j}"><span>${o}</span></label>`).join("")}</div></div>`).join("");
  return `<form class="vform" id="vform"><div><p class="eyebrow" style="display:flex;align-items:center;gap:10px"><span class="headface">${myFace()}</span>Charging hearing · presented by ${esc(detName())}</p><h2 style="font-size:40px;font-weight:800;text-transform:uppercase;margin-top:4px">Present your case</h2>
  <p class="muted" style="max-width:64ch">Name the accused, how it was done and why. Pick up to six exhibits, then explain the key facts to the jury. You need nine of twelve votes. The defence will raise two objections; answer them with your exhibits or lose votes. Each attempt counts toward your rating.</p></div>
  <div><h3>The accused</h3><div class="vsus">${sus}</div></div>
  <div class="selects"><div><h3><label for="vw">${V.methodLabel}</label></h3><select id="vw"><option value="">Choose…</option>${Object.entries(V.methods).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select></div>
  <div><h3><label for="vm">Motive</label></h3><select id="vm"><option value="">Choose…</option>${Object.entries(V.motives).map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select></div></div>
  <div><h3>Exhibits to present <span id="xc">(0/6)</span></h3><div class="exh">${exh}</div></div>
  <div><h3>Explain the evidence</h3><div style="display:flex;flex-direction:column;gap:14px">${qs}</div></div>
  <div id="vErr" class="muted"></div><div><button class="btn primary" type="submit">Present to the jury</button></div></form>`;
}
function judge(v){
  const V=K.verdict, R=[], ex=new Set(v.ex); let score=0;
  if(v.sus===V.culprit){
    V.pillars.forEach(p=>{ if(p.ev.some(x=>ex.has(x))){ score+=p.pts; R.push(["p",p.hit]); } else R.push(["m",p.miss]); });
    (V.bonus||[]).forEach(b=>{ if(ex.has(b.ev)){ score+=b.pts; R.push(["p",b.hit]); } });
    V.defence.forEach(d=>{ const reb=d.rebut.filter(x=>ex.has(x)); if(reb.length) R.push(["p",`Defence: "${d.claim}" You answered it with ${reb.map(x=>K.EV[x].title).join(", ")}.`]); else { score-=Math.max(3,d.pts); R.push(["m",`Defence: "${d.claim}" Nothing you presented answered that.`]); } });
  } else {
    const sup=v.ex.filter(x=>(K.POINTS[x]||[]).includes(v.sus)).length; score=Math.min(3,sup);
    R.push(sup?["p",`${sup} exhibit${sup>1?"s":""} point toward ${suspName(v.sus)}.`]:["m",`Nothing presented points to ${suspName(v.sus)}.`]);
    const def=Object.keys(K.CLEARS).filter(x=>K.CLEARS[x].includes(v.sus));
    R.push(["m",def.length?`Defence introduces ${def.map(x=>K.EV[x].title).join(" and ")}, which clear${def.length>1?"":"s"} ${suspName(v.sus)}.`:`The defence argues the case against ${suspName(v.sus)} is circumstantial, and the jury agrees.`]);
    if(v.ex.some(x=>(K.CLEARS[x]||[]).includes(v.sus))){ score=Math.max(0,score-2); R.push(["m","You presented evidence that clears your own suspect."]); }
  }
  V.questions.forEach((q,i)=>{ if(+v.q[i]===q.a) score+=1; else { score-=1; R.push(["m",`The jury didn't accept your answer to: ${q.q}`]); } });
  if(v.method===V.method) score+=1; else R.push(["m",V.methodMiss]);
  if(v.motive===V.motive&&v.sus===V.culprit) score+=1; else R.push(["m","The stated motive doesn't fit the evidence."]);
  const votes=Math.max(0,Math.min(12,score-3));
  return {votes,R,charged:votes>=9&&v.sus===V.culprit};
}
function starsFor(){ let s=3; if(C.hints>2) s--; if(C.hints>5) s--; if(C.attempts>1) s--; if(C.wrong>6) s--; return Math.max(1,s); }
function courtHTML(v,animate){
  const j=judge(v), V=K.verdict;
  const seats=Array.from({length:12},(_,i)=>{ const yes=i<j.votes; return `<div class="juror ${animate?"":(yes?"y":"n")}" data-v="${yes?"y":"n"}" data-i="${i}"><span class="jf">${faceSVG(JURORS[i],animate?{}:{mood:yes?"smile":"frown"})}</span><span class="jl">${animate?`Juror ${i+1}`:(yes?"CHARGE":"NO")}</span></div>`; }).join("");
  return `<div class="court"><p class="eyebrow">The jury · ${esc(suspName(v.sus))} · ${esc(V.methods[v.method])}</p><div class="jury" id="jury">${seats}</div>
  <div id="outcome" ${animate?"hidden":""}><div class="outcome ${j.charged?"y":"n"}">${j.charged?"Charged":"Not enough to charge"}</div>
  <p class="muted" style="margin-top:6px">${j.votes} of 12 jurors voted to charge. Nine were needed.${j.charged?` Case closed by ${esc(detName())} · <span class="stars">${"★".repeat(C.stars)}${"☆".repeat(3-C.stars)}</span>`:""}</p>
  <ul class="reasons">${j.R.map(([k,t])=>`<li class="${k}">${esc(t)}</li>`).join("")}</ul>
  ${j.charged?`<div class="feedback good" style="margin-top:16px"><b>What happened.</b> ${V.solution}</div>`:`<p style="margin-top:14px">${v.sus===V.culprit?"The jury thinks you might have the right person, but the case has holes.":"The defence took that apart. Back to the evidence."}</p>`}
  <p style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="retry">Rebuild the case</button>${j.charged?`<button class="btn" data-act="library">Back to the case library</button>`:`<button class="btn" data-act="reveal">Give up and show the solution</button>`}</p><div id="sol"></div></div></div>`;
}

/* ======================= PARTNER / INTRO / STATIONS ======================= */
const STATION_LINES={interview:"Interview room three. Ask everything, then compare it with the file. Liars repeat themselves; guilty people add details.",dispatch:"Everything dispatch has sent us. Leads on new cases land here too.",brief:"Case file and objectives. If you're stuck, start there.",evidence:"Everything we have is in the archive. Sealed folders open as we make progress.",lab:"The lab's yours. Each bench can unseal something.",terminal:"Records terminal. Type help. It takes names, plates, numbers and IDs from the exhibits.",wall:"Pin the exhibits, string them up, then test each theory. Red means something breaks it. Green doesn't mean proof.",notebook:"Write it down. The jury will want it straight.",verdict:"Once we walk in there, the jury decides. Nine of twelve, and the defence gets its say."};
const reduceMotion=()=>window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function typeInto(el,text,speed,done){ clearInterval(el._t); if(reduceMotion()){ el.textContent=text; done&&done(); return; } let i=0; el.textContent=""; el._t=setInterval(()=>{ el.textContent=text.slice(0,++i); if(i%4===0) sfx("type"); if(i>=text.length){ clearInterval(el._t); done&&done(); } },speed); }
function partnerSay(t){ if(G.screen!=="case"||!t) return; const p=document.getElementById("partner"); p.hidden=false; p.classList.remove("min"); p.classList.remove("ping"); void p.offsetWidth; p.classList.add("ping"); typeInto(document.getElementById("pText"),t,16); }
function partnerHint(){
  const o=nextObj();
  if(!o){ partnerSay(`Everything's unsealed, ${detName()}. Get the courtroom answers straight: who, how, why, and how you'll answer the defence.`); return; }
  const lv=C.hintLv[o.id]||0; C.hintLv[o.id]=lv+1; C.hints++; save(); renderChrome();
  partnerSay(`${o.t}: ${K.hints[o.id][Math.min(lv,1)]} (Hint ${C.hints}. It'll show on your rating.)`);
}
function stationLine(id){ if(C.visited.includes(id)) return; C.visited.push(id); save(); if(STATION_LINES[id]) partnerSay(STATION_LINES[id]); }
function goStation(id,el){
  if(id==="call"){ sfx("ring"); setTimeout(partnerHint,500); return; }
  const go=()=>{ C.tab=id; save(); renderPanel(); window.scrollTo(0,0); stationLine(id); };
  const scene=document.getElementById("officeScene"), svg=scene&&scene.querySelector("svg");
  if(!el||!svg||!svg.contains(el)||reduceMotion()){ sfx("whoosh"); go(); return; }
  const sb=svg.getBoundingClientRect(), b=el.getBoundingClientRect();
  svg.style.transformOrigin=`${b.left-sb.left+b.width/2}px ${b.top-sb.top+b.height/2}px`; svg.style.transform="scale(2.6)"; scene.classList.add("zoom"); sfx("whoosh"); setTimeout(go,470);
}
function showIntro(){
  const ov=document.createElement("div"); ov.className="intro";
  ov.innerHTML=`<div class="folder" role="dialog" aria-label="New case"><span class="ftag">${K.code}</span><span class="stampx" id="stampx">ASSIGNED</span>
  <p class="eyebrow" style="color:#5d5a52;margin:0 0 14px">Major Crimes · ${K.briefDate}</p><div class="lines" id="introLines"></div>
  <div class="fbtns"><button class="btn primary" data-act="takeCase" id="takeCase" hidden>Take the case</button><button class="skip" data-act="skipIntro">Skip</button></div></div>`;
  document.body.appendChild(ov);
  const L=K.intro.map(s=>s.replace("{name}",detName())), box=document.getElementById("introLines"); let k=0;
  const next=()=>{ if(!document.body.contains(ov)) return; if(k>=L.length){ document.getElementById("takeCase").hidden=false; return; } const p=document.createElement("p"); box.appendChild(p); typeInto(p,L[k++],22,()=>setTimeout(next,260)); };
  setTimeout(next,500);
}
function closeIntro(stamp){
  const ov=document.querySelector(".intro"); if(!ov) return; C.introSeen=true; save();
  const end=()=>{ ov.remove(); partnerSay(`Morning, ${detName()}. Aziz, your partner on this one. Open the case file on the desk, or click anything in the office. Ask me for hints if you must, but the brass are counting.`); };
  if(stamp){ document.getElementById("stampx").classList.add("on"); sfx("stamp"); setTimeout(end,700); } else end();
}

/* ======================= DIRECTORY (shared) ======================= */
const DIR={db:null,uid:null,dets:[],ready:false,failed:false,unsub:null,lastSeen:0,canWrite:true};
function myDoc(){ return DIR.db&&DIR.uid?DIR.db.doc("detectives/"+DIR.uid):null; }
async function initDirectory(){
  try{
    if(!window.claude||!window.claude.use){ throw 0; }
    const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
    if(!db||!user){ throw 0; }
    DIR.db=db; DIR.uid=await user.id();
    try{ const cw=await user.can("data.write"); if(cw===false) DIR.canWrite=false; }catch(e){}
    DIR.unsub=db.collection("detectives").onSnapshot(snap=>{
      DIR.dets=snap.docs.map(d=>Object.assign({id:d.id},d.data())); const first=!DIR.ready; DIR.ready=true;
      if(first&&!snap.metadata.fromCache) syncProfile();
      renderDirectory();
    }, ()=>{ DIR.failed=true; renderDirectory(); });
  }catch(e){ DIR.failed=true; renderDirectory(); }
}
function startDirectory(){ renderDirectory(); }
let pushing=Promise.resolve();
function syncProfile(){
  if(!G.profile) return; const me=DIR.dets.find(d=>d.id===DIR.uid);
  const same=me&&me.name===G.profile.name&&me.badge===G.profile.badge&&+me.color===+(G.profile.color||0)&&(me.motto||"")===(G.profile.motto||"")&&+me.stars===totalStars()&&(me.solved||[]).join()===solvedIds().join()&&JSON.stringify(cleanFace(me.face))===JSON.stringify(cleanFace(G.profile.face));
  if(!same) pushProfile();
}
function pushProfile(extra){
  const ref=myDoc(); if(!ref||!G.profile||!DIR.canWrite||!DIR.ready) return;
  const me=DIR.dets.find(d=>d.id===DIR.uid)||{};
  const body={face:cleanFace(G.profile.face)||null,name:G.profile.name,badge:G.profile.badge,color:G.profile.color||0,motto:G.profile.motto||"",stars:totalStars(),rank:rankOf(totalStars()),solved:solvedIds(),posts:(extra&&extra.posts)||me.posts||[],updated:new Date().toISOString()};
  pushing=pushing.then(()=>ref.set(body)).catch(()=>{ DIR.canWrite=false; renderDirectory(); });
  return pushing;
}
function renderDirectory(){
  const dl=document.getElementById("dirList"), rb=document.getElementById("radioBox"); if(!dl||!rb) return;
  if(DIR.failed){ const msg=`<div class="notice">The precinct directory isn't reachable from this view. It works when the page is opened while signed in, and other detectives can join once the page is shared with them with Contributor access. Your ID still works in your own game.</div>`; dl.innerHTML=msg; rb.innerHTML=msg; return; }
  if(!DIR.ready){ dl.innerHTML=`<div class="notice">Connecting to the precinct…</div>`; return; }
  const dets=DIR.dets.slice().sort((a,b)=>(b.stars||0)-(a.stars||0)||String(a.name||"").localeCompare(String(b.name||"")));
  dl.innerHTML=dets.length?`<div class="dir">${dets.map(d=>`<div class="det">${detAvatar(d)}
    <div><b>${esc(d.name||"Unnamed")}${d.id===DIR.uid?'<span class="you">YOU</span>':""}</b><small>Badge ${esc(d.badge||"—")} · ${esc(d.rank||"Probationer")} · ${(d.solved||[]).length} closed · ${"★".repeat(Math.min(9,+d.stars||0))}</small>${d.motto?`<small style="font-family:var(--type)">“${esc(d.motto)}”</small>`:""}</div>
    ${d.id!==DIR.uid?`<button class="btn small" data-act="radioTo" data-id="${esc(d.badge)}">Radio</button>`:""}</div>`).join("")}</div>`
    :`<div class="notice">No detectives have signed in yet. ${G.profile?"":"Create your ID above to be the first."}</div>`;
  if(!DIR.canWrite) dl.insertAdjacentHTML("beforeend",`<p class="muted" style="font-size:13px;margin-top:8px">You can read the directory, but your access level doesn't let you list yourself or send messages. Ask the owner for Contributor access.</p>`);
  const myBadge=G.profile&&G.profile.badge;
  const posts=[]; DIR.dets.forEach(d=>(d.posts||[]).forEach(p=>posts.push(Object.assign({fromName:d.name,fromBadge:d.badge,fromId:d.id},p))));
  posts.sort((a,b)=>String(b.at).localeCompare(String(a.at)));
  const mine=posts.filter(p=>p.to==="ALL"||p.to===myBadge||p.fromId===DIR.uid).slice(0,40);
  const opts=`<option value="ALL">All units</option>${dets.filter(d=>d.id!==DIR.uid&&d.badge).map(d=>`<option value="${esc(d.badge)}">${esc(d.name)} · ${esc(d.badge)}</option>`).join("")}`;
  const sel=document.getElementById("rTo"), keepTo=sel?sel.value:(radioTarget||"ALL"), txt=document.getElementById("rText"), keepTxt=txt?txt.value:"";
  rb.innerHTML=`<div class="radio"><div class="rlog" id="rlog">${mine.length?mine.map(p=>{ const toName=p.to==="ALL"?"All units":(DIR.dets.find(d=>d.badge===p.to)||{}).name||p.to;
    return `<div class="rmsg ${p.to===myBadge?"tome":""}"><small>${esc(p.fromName||"?")} (${esc(p.fromBadge||"")}) → ${esc(toName)} · ${esc(String(p.at||"").slice(5,16).replace("T"," "))}</small>${esc(p.text)} ${p.fromId!==DIR.uid?`<button class="rp" data-act="radioTo" data-id="${esc(p.fromBadge)}">Reply</button>`:""}</div>`; }).join(""):`<p class="muted" style="margin:0">Radio's quiet. Say hello to the precinct.</p>`}</div>
    ${G.profile&&DIR.canWrite?`<form class="rform" id="rForm" autocomplete="off"><select id="rTo" aria-label="Send to">${opts}</select><input class="field" id="rText" maxlength="200" placeholder="Message, e.g. stuck on the Channel 9 cipher" aria-label="Message"><button class="btn primary" type="submit">Send</button></form>`:G.profile?"":`<p class="muted" style="margin:0;font-size:13px">Create your ID to use the radio.</p>`}</div>`;
  const s2=document.getElementById("rTo"); if(s2&&[...s2.options].some(o=>o.value===keepTo)) s2.value=keepTo;
  const t2=document.getElementById("rText"); if(t2&&keepTxt) t2.value=keepTxt;
  const newest=mine.find(p=>p.to===myBadge&&p.fromId!==DIR.uid);
  if(newest&&DIR.lastSeen&&String(newest.at)>DIR.lastSeen){ sfx("radio"); toast(`Radio from ${newest.fromName}: ${newest.text.slice(0,60)}`); }
  if(newest) DIR.lastSeen=String(newest.at)>DIR.lastSeen?String(newest.at):DIR.lastSeen; else if(!DIR.lastSeen) DIR.lastSeen="0";
}
let radioTarget=null;
async function sendRadio(to,text){
  text=text.trim().slice(0,200); if(!text||!G.profile) return;
  const me=DIR.dets.find(d=>d.id===DIR.uid)||{}; const posts=(me.posts||[]).slice(-24);
  posts.push({to,text,at:new Date().toISOString()});
  sfx("radio"); await pushProfile({posts});
}

/* ======================= EVENTS ======================= */
document.addEventListener("click", e=>{
  if(Date.now()-lastClipAt<400) return;
  const a=e.target.closest("[data-act]"); if(!a) return;
  const act=a.dataset.act, id=a.dataset.id;
  if(["ev","openEv","pinEv","toWall","wallAdd"].includes(act)) sfx("paper");
  else if(["tab","lab","goObj","goLab","pick","hand","shift","tl","quick","string","test","theory","theoryNew","zoom","hint","partnerToggle","mute","editId","radioTo"].includes(act)) sfx("click");
  switch(act){
    case "open": openCase(id); break;
    case "override": if(a.dataset.confirm!=="1"){ a.dataset.confirm="1"; a.textContent="Override logged against your record. Tap again"; break; } G.open.push(id); save(); render(); toast("Override granted. Clearance bypassed."); break;
    case "dispTake": closeDispatch(); if(!G.open.includes(id)) G.open.push(id); openCase(id); break;
    case "dispView": { closeDispatch(); const [cid,ev]=id.split(":"); if(G.screen!=="case"||K.id!==cid) openCase(cid); if(G.screen==="case"&&K.id===cid){ C.tab="evidence"; C.evSel=ev; save(); renderPanel(); window.scrollTo(0,0); } break; }
    case "dispClose": closeDispatch(); if(G.screen==="case") renderChrome(); break;
    case "ivWho": if(ivTalking) break; C.ivWho=id; save(); renderPanel(); break;
    case "ask": if(ivTalking) break; ask(+id); break;
    case "pinIv": { const w=C.ivWho, ar=C.ivAsked[w]; const qa=INTERVIEWS[K.id][w][ar[ar.length-1]]; addClue(`${K.SUS[w].name}: "${qa[1]}"`,"Interview room"); renderChrome(); break; }
    case "library": G.screen="library"; save(); render(); window.scrollTo(0,0); break;
    case "resetCase": if(a.dataset.confirm!=="1"){ a.dataset.confirm="1"; a.textContent="Tap again to restart"; break; } G.cases[id]=freshCase(CASES[id]); if(G.cur===id) setCase(id); save(); render(); toast("Case restarted"); pushProfile(); break;
    case "editId": editingId=true; document.getElementById("idslot").innerHTML=idCardHTML(); break;
    case "cancelId": editingId=false; document.getElementById("idslot").innerHTML=idCardHTML(); break;
    case "radioTo": { radioTarget=id; const s=document.getElementById("rTo"); if(s){ s.value=id; const t=document.getElementById("rText"); if(t){ t.focus(); t.scrollIntoView({behavior:"smooth",block:"center"}); } } break; }
    case "station": goStation(id,a.closest("svg")?a:null); break;
    case "takeCase": closeIntro(true); break;
    case "skipIntro": closeIntro(false); break;
    case "hint": partnerHint(); break;
    case "partnerToggle": { const p=document.getElementById("partner"); if(p.classList.contains("min")){ p.classList.remove("min"); if(!document.getElementById("pText").textContent) partnerSay(`What do you need, ${detName()}?`); } else p.classList.add("min"); break; }
    case "partnerHide": document.getElementById("partner").classList.add("min"); break;
    case "mute": G.mute=!G.mute; save(); renderChrome(); if(G.mute) stopAmbience(); else { sfx("click"); startAmbience(); } break;
    case "tab": C.tab=id; tested=false; stringMode=false; selCard=null; save(); renderPanel(); window.scrollTo(0,0); stationLine(id); break;
    case "goObj": { const o=K.OBJ.find(x=>x.id===id); if(o.lab){ C.tab="lab"; C.lab=o.id; } else C.tab="terminal"; save(); renderPanel(); window.scrollTo(0,0); break; }
    case "goLab": C.tab="lab"; C.lab=id; save(); renderPanel(); window.scrollTo(0,0); break;
    case "openEv": C.tab="evidence"; C.evSel=id; save(); renderPanel(); window.scrollTo(0,0); break;
    case "ev": C.evSel=id; save(); renderPanel(); if(window.innerWidth<860) document.querySelector(".viewer").scrollIntoView({behavior:"smooth"}); break;
    case "pinEv": addClue(`${exNo(C.evSel)} ${K.EV[C.evSel].title}`,"Pinned exhibit"); renderChrome(); break;
    case "toWall": wallAdd(C.evSel); toast("Pinned to the evidence wall"); break;
    case "play": playAudio(a); break;
    case "lab": C.lab=id; save(); renderPanel(); break;
    case "zoom": { const sw=document.getElementById("sceneWrap"); const fx=sw?(sw.scrollLeft+sw.clientWidth/2)/sw.scrollWidth:.5, fy=sw?(sw.scrollTop+sw.clientHeight/2)/sw.scrollHeight:.5;
      zoom=Math.max(1,Math.min(4,zoom+(+id))); renderPanel(); const n=document.getElementById("sceneWrap"); if(n){ n.scrollLeft=fx*n.scrollWidth-n.clientWidth/2; n.scrollTop=fy*n.scrollHeight-n.clientHeight/2; } break; }
    case "hot": { if(C.found.includes(id)) break; const h=K.scene.hots.find(x=>x.id===id);
      if(h.zoom&&zoom<h.zoom){ toast("Something small there. Zoom in to see it."); break; }
      C.found.push(id); C.clues.push({t:h.t,src:K.scene.title}); sfx("click"); toast(`Point of interest ${C.found.length}/${K.scene.hots.length} marked`);
      if(C.found.length===K.scene.hots.length) complete("scene"); save();
      const sw=document.getElementById("sceneWrap"), sl=sw.scrollLeft, st=sw.scrollTop; renderPanel(); const n=document.getElementById("sceneWrap"); n.scrollLeft=sl; n.scrollTop=st; break; }
    case "stmt": if(C.done.statements) break; C.stmt=C.stmt.filter(x=>x!==id); C.stmt.push(id);
      if(id===K.statements.correct) complete("statements"); else miss(); save(); renderPanel(); break;
    case "shift": if(C.done.cipher) break; C.ciph.shift=(C.ciph.shift+(+id)+26)%26; checkCipher(); renderPanel(); break;
    case "pick": if(C.done.prints) break; C.printPick=id; save(); document.querySelectorAll(".pc").forEach(p=>p.classList.toggle("on",p.dataset.id===id)); document.querySelector('[data-act="declare"]').disabled=false; drawCompare(); break;
    case "declare": { if(C.done.prints) break; const fb=document.getElementById("printFb");
      if(C.printPick===K.prints.culprit){ complete("prints"); renderPanel(); }
      else { miss(); fb.innerHTML=`<div class="feedback badf">Exclusion. ${K.prints.fails[C.printPick]||"The ridges don't agree."}</div>`; } break; }
    case "hand": if(C.done.hand) break; C.hand=id; if(id===K.hand.culprit) complete("hand"); else miss(); save(); renderPanel(); break;
    case "mrz": if(C.done.mrz) break; if(id===K.mrz.correct){ complete("mrz"); } else { if(!C.mrzTried.includes(id)) C.mrzTried.push(id); miss(); } save(); renderPanel(); break;
    case "tl": { const [i,d]=id.split(":").map(Number), j=i+d; if(j<0||j>=C.tl.length) break; [C.tl[i],C.tl[j]]=[C.tl[j],C.tl[i]]; save(); renderPanel(); break; }
    case "tlCheck": { const right=C.tl.filter((x,i)=>x===K.timeline.ev[i].id).length;
      if(right===K.timeline.ev.length){ complete("timeline"); renderPanel(); }
      else { miss(); document.getElementById("tlFb").innerHTML=`<div class="feedback badf">${right} of ${K.timeline.ev.length} events are in the right place.</div>`; } break; }
    case "quick": runCmd(id); break;
    case "pinTerm": { const l=C.termLog[+id]; addClue(l.out.split("\n").slice(0,3).join(" · "),`Terminal: ${l.cmd}`); renderChrome(); break; }
    case "theory": C.active=id; tested=false; selCard=null; save(); renderPanel(); break;
    case "theoryNew": { const tid="t"+Date.now(); C.theories.push({id:tid,name:`Theory ${String.fromCharCode(65+C.theories.length)}`,suspect:"",cards:[],links:[]}); C.active=tid; tested=false; save(); renderPanel(); break; }
    case "theoryDel": C.theories=C.theories.filter(t=>t.id!==C.active); C.active=C.theories[0].id; tested=false; save(); renderPanel(); break;
    case "wallAdd": wallAdd(id); renderPanel(); break;
    case "wallRm": { const T=curT(); T.cards=T.cards.filter(c=>cardKey(c)!==id); T.links=T.links.filter(l=>!l.includes(id)); save(); renderPanel(); break; }
    case "string": stringMode=!stringMode; selCard=null; renderPanel(); break;
    case "unstring": { const T=curT(); T.links.splice(+id,1); save(); drawStrings(); break; }
    case "test": tested=true; renderPanel(); break;
    case "clueRm": C.clues.splice(+id,1); save(); renderPanel(); break;
    case "clueWall": { const cl=C.clues[+id]; if(cl) addWallItem({kind:"text",text:cl.t.slice(0,280),src:cl.src}); break; }
    case "termWall": { const l=C.termLog[+id]; if(l) addWallItem({kind:"text",text:l.out.slice(0,280),src:"Terminal: "+l.cmd}); break; }
    case "ivWall": { const w=C.ivWho, ar=(C.ivAsked||{})[w]; if(!ar||!ar.length) break; const qa=INTERVIEWS[K.id][w][ar[ar.length-1]]; addWallItem({kind:"text",text:qa[1],src:K.SUS[w].name+", interview"}); break; }
    case "clipText": { const t=selText().trim(); if(!t){ toast("Select some text in the document first, then press Clip."); break; } addWallItem({kind:"text",text:t.slice(0,280),src:`${exNo(C.evSel)} ${K.EV[C.evSel].title}`}); lastSel=""; break; }
    case "clipMode": { const svg=document.querySelector("#sceneWrap svg")||document.querySelector(".viewer .doc svg"); if(!svg){ toast("Open the scene photo first."); break; } exitClip(); clipTarget=svg; svg.parentElement.classList.add("clipping"); toast("Drag a box over the part of the photo to clip. Esc cancels."); break; }
    case "addNote": { const k=addWallItem({kind:"note",text:""}); setTimeout(()=>{ const t=document.querySelector(`textarea[data-key="${k}"]`); if(t) t.focus(); },50); break; }
    case "pen": penMode=!penMode; stringMode=false; selCard=null; renderPanel(); if(penMode) toast("Red pen: drag on the wall to circle anything."); break;
    case "undoRing": { const T=curT(); (T.rings||[]).pop(); save(); renderPanel(); break; }
    case "retry": C.verdict=null; save(); renderPanel(); break;
    case "reveal": document.getElementById("sol").innerHTML=`<div class="feedback" style="margin-top:14px"><b>Solution.</b> ${K.verdict.solution}</div>`; a.remove(); break;
  }
});
function checkCipher(){ if(!C.done.cipher&&decodeC()===K.cipher.plain) complete("cipher"); save(); }

document.addEventListener("submit", e=>{
  const f=e.target; if(!f.id) return; e.preventDefault();
  if(f.id==="termForm"){ const i=document.getElementById("termIn"), v=i.value; i.value=""; runCmd(v); }
  if(f.id==="idForm"){
    const name=document.getElementById("idName").value.trim().replace(/\s+/g," ").slice(0,28); if(!name){ toast("Your detective needs a name"); return; }
    const motto=document.getElementById("idMotto").value.trim().slice(0,70), color=+((document.querySelector('input[name="idCol"]:checked')||{}).value||0);
    const badge=G.profile?G.profile.badge:("PZ-"+String(1000+Math.floor(Math.random()*9000)));
    G.profile={name,motto,color,badge,face:readFaceForm()}; editingId=false; save(); sfx("stamp");
    document.getElementById("idslot").innerHTML=idCardHTML(); toast(`Badge ${badge} issued to ${name}`); pushProfile(); renderDirectory();
  }
  if(f.id==="rForm"){ const t=document.getElementById("rText"), to=document.getElementById("rTo").value; const v=t.value; t.value=""; radioTarget=to; sendRadio(to,v); }
  if(f.id==="codeForm"){ const v=document.getElementById("codeIn").value.toLowerCase().replace(/[^a-z0-9]/g,"");
    if(K.code.accept.includes(v)){ complete("code"); renderPanel(); } else { miss(); document.getElementById("codeFb").innerHTML=`<div class="feedback badf">The archive doesn't support that date.</div>`; } }
  if(f.id==="vform"){
    const V=K.verdict, sus=(document.querySelector('input[name="vs"]:checked')||{}).value, w=document.getElementById("vw").value, m=document.getElementById("vm").value;
    const ex=[...document.querySelectorAll('input[name="vx"]:checked')].map(x=>x.value), q=V.questions.map((_,i)=>(document.querySelector(`input[name="vq${i}"]:checked`)||{}).value);
    const err=document.getElementById("vErr");
    if(!sus||!w||!m){ err.textContent="Choose the accused, how it was done and the motive."; return; }
    if(!ex.length){ err.textContent="Present at least one exhibit."; return; }
    if(q.some(x=>x==null)){ err.textContent="Answer all three questions for the jury."; return; }
    C.attempts++; C.verdict={sus,w,method:w,m,motive:m,ex,q};
    const j=judge(C.verdict); if(j.charged){ C.stars=Math.max(C.stars,starsFor()); }
    save(); if(j.charged) pushProfile();
    document.getElementById("panel").innerHTML=courtHTML(C.verdict,true); window.scrollTo(0,0);
    const seats=[...document.querySelectorAll(".juror")], order=shuffle(seats.map((_,i)=>i),3);
    const hb=setInterval(()=>sfx("heart"),820); setTimeout(()=>clearInterval(hb),300+12*220+200);
    order.forEach((ix,k)=>setTimeout(()=>{ const s=seats[ix]; sfx("vote"); s.classList.add(s.dataset.v); s.querySelector(".jf").innerHTML=faceSVG(JURORS[+s.dataset.i],{mood:s.dataset.v==="y"?"smile":"frown"}); s.querySelector(".jl").textContent=s.dataset.v==="y"?"CHARGE":"NO"; },300+k*220));
    setTimeout(()=>{ sfx("gavel"); document.getElementById("outcome").hidden=false; partnerSay(j.charged?`Charged. Nice work, ${detName()}. That one goes on your record.`:sus===V.culprit?"Right person, thin case. Let's strengthen it and go back in.":"The defence tore that apart. Someone else did this."); },300+12*220+300);
  }
});
document.addEventListener("change", e=>{
  if(e.target.name==="vx"){ const c=document.querySelectorAll('input[name="vx"]:checked'); if(c.length>6){ e.target.checked=false; toast("Six exhibits at most"); } document.getElementById("xc").textContent=`(${Math.min(6,c.length)}/6)`; }
  if(e.target.id==="tSus"){ curT().suspect=e.target.value; tested=false; save(); renderPanel(); }
  if(e.target.id==="cMirror"){ C.ciph.mirror=e.target.checked; sfx("click"); checkCipher(); renderPanel(); }
});
document.addEventListener("input", e=>{
  if(e.target.id==="notes"){ C.notes=e.target.value; save(); }
  if(e.target.id==="tName"){ curT().name=e.target.value.slice(0,40)||"Untitled"; save(); }
  if(e.target.id==="pAng"){ C.printAngle=+e.target.value; document.getElementById("pAngV").textContent=C.printAngle+"°"; drawCompare(); save(); }
  if(e.target.id==="pOp") drawCompare();
  if(e.target.id==="cKey"){ C.ciph.key=e.target.value.toUpperCase().replace(/[^A-Z]/g,""); const o=document.getElementById("cOut"); if(o) o.textContent=decodeC(); if(decodeC()===K.cipher.plain){ checkCipher(); renderPanel(); } else save(); }
  if(e.target.id==="mrzCalc"){ const v=e.target.value.toUpperCase().replace(/[^A-Z0-9<]/g,""); document.getElementById("mrzOut").textContent=v?mrzCD(v):"–"; }
});
document.addEventListener("keydown", e=>{
  if(e.key==="Enter"&&e.target.matches("code[data-act]")){ e.preventDefault(); runCmd(e.target.dataset.id); return; }
  if((e.key==="Enter"||e.key===" ")&&e.target.matches('g[role="button"]')){ e.preventDefault(); goStation(e.target.dataset.id,e.target); return; }
  if(e.target.id==="termIn"&&e.key.length===1) sfx("type");
});
let drag=null;
document.addEventListener("pointerdown", e=>{
  if(penDown(e)) return;
  const card=e.target.closest(".card"); if(!card||e.target.closest("button,textarea")) return; const id=card.dataset.card;
  if(stringMode){ if(!selCard){ selCard=id; card.classList.add("sel"); } else if(selCard!==id){ const T=curT(); if(!T.links.some(l=>l.includes(selCard)&&l.includes(id))) T.links.push([selCard,id]); selCard=null; sfx("click"); save(); renderPanel(); } return; }
  const c=curT().cards.find(x=>cardKey(x)===id); if(!c) return; drag={c,el:card,sx:e.clientX,sy:e.clientY,ox:c.x,oy:c.y}; card.setPointerCapture(e.pointerId); card.style.cursor="grabbing"; card.style.zIndex=5;
});
document.addEventListener("pointermove", e=>{ if(draft){ draftMove(e); return; } if(!drag) return; drag.c.x=Math.max(0,Math.min(1050,drag.ox+e.clientX-drag.sx)); drag.c.y=Math.max(8,Math.min(680,drag.oy+e.clientY-drag.sy)); drag.el.style.left=drag.c.x+"px"; drag.el.style.top=drag.c.y+"px"; drawStrings(); });
document.addEventListener("pointerup", e=>{ if(draft){ draftEnd(e); return; } if(drag){ drag.el.style.cursor=""; drag.el.style.zIndex=""; drag=null; save(); } });

function playAudio(btn){
  btn.disabled=true; const doc=btn.closest(".doc"), bars=[...doc.querySelectorAll(".wave i")], lines=[...doc.querySelectorAll(".trans p")];
  const total=(+lines[lines.length-1].dataset.ms||0)+1800;
  try{ if(!G.mute){ if(!AC) AC=new (window.AudioContext||window.webkitAudioContext)(); const len=Math.floor(AC.sampleRate*total/1000), buf=AC.createBuffer(1,len,AC.sampleRate), d=buf.getChannelData(0); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*.03*(1+.5*Math.sin(i/900)); const src=AC.createBufferSource(); src.buffer=buf; src.connect(AC.destination); src.start(); } }catch(e){}
  bars.forEach((b,i)=>setTimeout(()=>b.classList.add("p"),i*total/bars.length));
  lines.forEach(l=>setTimeout(()=>l.classList.add("on"),+l.dataset.ms));
  setTimeout(()=>{ btn.disabled=false; btn.textContent="↻ Replay"; bars.forEach(b=>b.classList.remove("p")); },total+300);
}

/* ======================= CASES 4–5 WIRING ======================= */
CASES.saffron.clearance=4; CASES.bay.clearance=5;
(function(){
  const c4=CASES.saffron, c5=CASES.bay;
  c4.ev("tipowner","Statements","The Ledger owner's call","Dispatch tip","dispatch",()=>D("DISPATCH · CHANNEL 2","LEDGER OWNER",`<p>Julian Marr booked a meeting with the Ledger's owner for Monday 20 Oct, 09:00. Calendar title: <b>"Simon / consultancy"</b>. He asked that Simon not be told.</p>`));
  c4.POINTS.tipowner=["simon"]; c4.verdict.pillars[0].ev.push("tipowner");
  c5.ev("tiptap","Records","Halcyon IT: the riser tap","Dispatch development","dispatch",()=>D("HALCYON IT · INCIDENT NOTE","VIA DISPATCH",`<p>The device in the B3 riser has mirrored Halcyon trunk traffic since 14 Feb 2026 to a server leased by <b>Vale Risk Partners</b>. Its maintenance port was last opened with a Meridian Tower facilities login: <b>mferri</b>.</p>`));
  c5.POINTS.tiptap=["gideon","marco"]; c5.verdict.pillars[0].ev.push("tiptap");
})();
Object.assign(FACES,{
  "saffron:ines":{skin:"#c9906a",hair:"#1d1512",style:"bun",shirt:"#ecebe6",collar:"chef",mood:"frown",bg:"#2a1d18",acc:"earrings"},
  "saffron:rafael":{skin:"#6e4429",hair:"#141010",style:"short",shirt:"#ecebe6",collar:"chef",beard:"stubble",mood:"neutral",bg:"#221a16"},
  "saffron:petra":{skin:"#f3d9c6",hair:"#d6b878",style:"long",shirt:"#141416",collar:"shirt",mood:"smirk",bg:"#2a2028",eye:"#3a5a7a",acc:"earrings"},
  "saffron:simon":{skin:"#e6bfa0",hair:"#8a8580",style:"slick",shirt:"#3a2f2a",collar:"suit",glasses:true,mood:"smile",bg:"#2a221c",age:1},
  "saffron:kit":{skin:"#f0d0b8",hair:"#d06a9a",style:"fringe",shirt:"#e2b13f",collar:"tee",mood:"smirk",bg:"#2a1f2a"},
  "bay:marco":{skin:"#d6a684",hair:"#5a5552",style:"short",shirt:"#2a3f5a",collar:"tee",beard:"mustache",age:1,mood:"smile",bg:"#20262c"},
  "bay:gideon":{skin:"#ecd0bb",hair:"#1d1a18",style:"slick",shirt:"#141820",collar:"suit",mood:"smirk",bg:"#1a1d24",eye:"#5a6a7a"},
  "bay:dev":{skin:"#8c5a3a",hair:"#121010",style:"short",shirt:"#3a3a2a",collar:"leather",beard:"stubble",mood:"frown",bg:"#22201c"},
  "bay:leah":{skin:"#f2d6c2",hair:"#7a3a22",style:"long",shirt:"#4a6a8a",collar:"tee",mood:"frown",bg:"#1f2630"},
  "bay:sara":{skin:"#efd2b0",hair:"#121014",style:"bob",shirt:"#22304a",collar:"uniform",mood:"neutral",bg:"#1d2532"}
});
Object.assign(INTERVIEWS,{
  saffron:{
    simon:[["How do you know Julian?","We'd worked together for eleven years. I chose his restaurants, he wrote the words."],["What happened at dinner?","He went to the restroom, came back, the sorbet came, and then... I keep thinking, if only I'd poured his water away when he went to the restroom."],["Who would want to hurt him?","The kitchen must have made a mistake with the sorbet. Or the chef. She hated him."],["What is Achterberg Media?","A little side project. Advice for restaurants. Nothing to do with Julian."]],
    ines:[["You cooked for the man who closed your restaurant.","I cooked every plate myself. I wanted him to taste what he'd thrown away."],["Did you hate him?","That review closed my first restaurant. I didn't forget."],["Anything unusual lately?","Someone sent me a note asking for money for good reviews. I didn't pay."]],
    rafael:[["Tell me about your foraging.","I forage on weekends. Sea herbs, mushrooms. Nothing dangerous."],["The festival argument?","Yes, we argued at the festival. He called my food pretentious in front of my mother."],["Where were you during service?","I was on the pass the whole service. Check the camera."]],
    petra:[["You poured his wine.","I poured him a white with the fish. He sent it back. Of course he did."],["You were married to him.","We divorced in 2019. It was civil. Mostly."],["What did he drink after?","He drank water after that. Only water."]],
    kit:[["You were filming?","I stream every dinner. My phone was up all night."],["He mocked you.","He called my channel food for people who can't taste. I got forty thousand followers out of it."],["Did you go near his table?","I didn't go near his table."]]
  },
  bay:{
    marco:[["When did you last see Owen?","He was in and out of the bay all evening. The log says he left at 22:40."],["Where was he found?","Poor lad, sealed up behind that panel for a week. It makes me sick."],["Who has riser keys?","Facilities hold them. I have a master key, obviously."],["Do you know Gideon Vale?","A consultant. He's audited our security twice. Very thorough man."]],
    gideon:[["Did you know Owen Pike?","Never met him. I don't meet contractors."],["Where were you on 9 October?","Singapore. Check the flight."],["Priya Raman named you.","Ms Raman is saying a lot of things. My lawyers will respond to all of them."]],
    dev:[["You took his van.","He owed the business. I had jobs to finish. I thought he'd done a runner."],["Where were you on the 9th?","I was at the cricket club till half one. Ask the barman."],["Did Owen mention anything odd?","He said the Meridian job was 'weird'. He didn't say why."]],
    leah:[["Why did you wait two days?","He'd walked out before, after a row. I thought he'd come back."],["Can you unlock his phone?","His PIN is the day we met, backwards. He thought that was romantic. We met on the fourteenth of March, 2019."],["Where were you that night?","I was on a call with my sister until nearly midnight."]],
    sara:[["Did you see Owen leave?","I didn't see him come back out."],["The log says he left at 22:40.","I never wrote that he left."],["Who asked you to sign it?","Mr Ferri asked me to sign the log at the end of my shift."]]
  }
});
(function(){
  const i=DISPATCH.findIndex(d=>d.id==="pike");
  DISPATCH.splice(i,1,
    {id:"lead_saffron",case:"any",kind:"Emergency call",title:"Saffron, Harbourside",when:()=>nDone("ninth")>=4||solved("ninth"),opens:"saffron",
     text:"All units. A restaurant critic has collapsed at Saffron on Harbourside, halfway through a tasting menu. Pronounced dead at Harbour General. The press is already calling it a food scandal. {name}, Major Crimes wants your eyes on it."},
    {id:"saffron_tip",case:"saffron",kind:"Witness tip",title:"The Ledger's owner",when:()=>!!(G.cases.saffron&&G.cases.saffron.done.statements),unlock:["saffron","tipowner"],
     text:"Dispatch to {name}. The Ledger's owner called in. Julian booked a meeting with her for Monday at nine. The calendar entry says 'Simon / consultancy'. Logged to your file."},
    {id:"lead_bay",case:"any",kind:"Emergency call",title:"Meridian Tower, Level B3",when:()=>nDone("saffron")>=4||solved("saffron"),opens:"bay",
     text:"All units. Maintenance at Meridian Tower opened a fire-stop panel in the B3 riser and found missing contractor Owen Pike. Same building as the Halcyon case. {name}, the brass want you on it. Watch your back in there."},
    {id:"bay_tip",case:"bay",kind:"Case development",title:"Halcyon IT",when:()=>!!(G.cases.bay&&G.cases.bay.done.scene),unlock:["bay","tiptap"],
     text:"Dispatch to {name}. Halcyon IT traced the box in the B3 riser. It has been copying their traffic since February to a server leased by Vale Risk Partners. Added to your file."});
  const caller=(id,cs,n,text)=>({id,case:cs,kind:"Unknown number",title:"No caller ID",sinister:true,when:()=>nDone(cs)>=n,text});
  DISPATCH.unshift(
    caller("cal_cold1","cold",2,"You're in my building now, Detective {name}. Mind the cameras. They don't always work."),
    caller("cal_cold2","cold",5,"Daniel kept notes too. Look where that got him. Go home, {name}."),
    caller("cal_static1","static",2,"Lovely voice, Cal had. I've still got hours of it. Want to hear him say your name, {name}?"),
    caller("cal_static2","static",5,"Dead air is the most honest sound there is. Enjoy it while it lasts, Detective."),
    caller("cal_ninth1","ninth",2,"Eight seats, nine passengers, one detective. Count carefully, {name}."),
    caller("cal_ninth2","ninth",5,"Family looks after family. Who looks after you, {name}?"),
    caller("cal_saffron1","saffron",2,"Drink plenty of water, Detective {name}. Long nights are so dehydrating."),
    caller("cal_saffron2","saffron",5,"Every critic gets a last review. I'm drafting yours, {name}."),
    caller("cal_bay1","bay",2,"Buildings keep secrets in their walls, Detective {name}. So can people."),
    caller("cal_bay2","bay",5,"I have keys to every door you'll ever walk through, {name}. Sleep well."));
})();

/* ======================= DETECTIVE FACE EDITOR ======================= */
const P_SKIN=["#f1d3bd","#e2b796","#c68f68","#a26e4a","#7d5236","#5c3a26"];
const P_HAIR=["#1a1412","#3a2a20","#7a5232","#b38a4a","#9a9a98","#d9d6d0","#8a2a1e","#2a3a6a"];
const P_EYE=["#3b2a1e","#3d5a3a","#3a5a7a","#6a6a6a"];
const P_SHIRT=["#2c4a5c","#22304a","#3b3b40","#7a1f2b","#2f5a4a","#5b3a6a","#c9c2b0"];
const P_STYLES=[["short","Short"],["slick","Slicked back"],["curly","Curly"],["bald","Bald"],["bob","Bob"],["long","Long"],["bun","Bun"],["fringe","Fringe"],["shaved","Buzzed"],["hood","Hood up"],["cap","Cap"]];
const P_COLLARS=[["suit","Suit"],["shirt","Shirt"],["tee","T-shirt"],["hoodie","Hoodie"],["leather","Leather jacket"],["uniform","Uniform"],["scrubs","Scrubs"],["chef","Chef's whites"]];
const P_BEARD=[["none","None"],["stubble","Stubble"],["mustache","Moustache"],["full","Full beard"]];
const P_MOOD=[["smirk","Knowing"],["neutral","Steady"],["smile","Friendly"],["frown","Grim"]];
function defaultFace(){ return {skin:P_SKIN[2],hair:P_HAIR[0],style:"short",eye:P_EYE[0],shirt:P_SHIRT[0],collar:"suit",beard:"none",glasses:false,mood:"smirk"}; }
function cleanFace(f){ if(!f||typeof f!=="object") return null; const hex=v=>typeof v==="string"&&/^#[0-9a-fA-F]{6}$/.test(v), inL=(v,l)=>l.some(x=>x[0]===v);
  if(!hex(f.skin)||!hex(f.hair)||!hex(f.eye)||!hex(f.shirt)||!inL(f.style,P_STYLES)||!inL(f.collar,P_COLLARS)||!inL(f.beard,P_BEARD)||!inL(f.mood,P_MOOD)) return null;
  return {skin:f.skin,hair:f.hair,eye:f.eye,shirt:f.shirt,style:f.style,collar:f.collar,beard:f.beard,mood:f.mood,glasses:!!f.glasses}; }
function myFaceSpec(){ const p=G.profile; const f=Object.assign(defaultFace(),cleanFace(p&&p.face)||{}); f.bg=shade(SWATCH[(p&&p.color)||0],-.62); return f; }
function myFace(){ return faceSVG(myFaceSpec()); }
function detAvatar(d){ const f=cleanFace(d.face); if(f){ f.bg=shade(SWATCH[+d.color||0]||SWATCH[0],-.62); return `<span class="av fav">${faceSVG(f)}</span>`; }
  return `<span class="av" style="background:${SWATCH[+d.color||0]||SWATCH[0]}">${esc(String(d.name||"?")[0]||"?").toUpperCase()}</span>`; }
function swatchRow(name,list,cur){ return `<div class="swatches">${list.map((c,i)=>`<label style="background:${c}" aria-label="${name} option ${i+1}"><input type="radio" name="${name}" value="${c}" ${c===cur?"checked":""}></label>`).join("")}</div>`; }
function selectRow(id,list,cur){ return `<select class="field" id="${id}">${list.map(([v,l])=>`<option value="${v}" ${v===cur?"selected":""}>${l}</option>`).join("")}</select>`; }
function readFaceForm(){ const v=n=>(document.querySelector(`input[name="${n}"]:checked`)||{}).value, g=id=>document.getElementById(id), f=myFaceSpec();
  if(!g("fStyle")) return cleanFace(f)||defaultFace();
  return cleanFace({skin:v("fSkin")||f.skin,hair:v("fHair")||f.hair,eye:v("fEye")||f.eye,shirt:v("fShirt")||f.shirt,style:g("fStyle").value,collar:g("fCollar").value,beard:g("fBeard").value,mood:g("fMood").value,glasses:g("fGlasses").checked})||defaultFace(); }
function updateFacePreview(){ const pv=document.getElementById("idPrev"); if(!pv) return; const f=readFaceForm(), col=+((document.querySelector('input[name="idCol"]:checked')||{}).value||0); f.bg=shade(SWATCH[col],-.62); pv.innerHTML=faceSVG(f); }
function idCardHTML(){
  const p=G.profile;
  if(!p||editingId){ const col=p?p.color:0, f=myFaceSpec();
    return `<form class="idcard idform" id="idForm" autocomplete="off"><span class="eyebrow">${p?"Edit your ID":"Create your detective"}</span>
    <div class="idedit"><div class="idprev" id="idPrev">${faceSVG(Object.assign({},f,{bg:shade(SWATCH[col],-.62)}))}</div><div class="idfields">
      <label class="l" for="idName">Detective name</label><input class="field" id="idName" maxlength="28" required value="${esc(p?p.name:"")}" placeholder="What other detectives call you">
      <label class="l" for="idMotto">Calling card</label><input class="field" id="idMotto" maxlength="70" value="${esc(p?p.motto:"")}" placeholder="One line, e.g. Everyone lies.">
    </div></div>
    <details class="facecfg" open><summary>Your face</summary><div class="fgrid">
      <div><span class="l">Skin</span>${swatchRow("fSkin",P_SKIN,f.skin)}</div>
      <div><span class="l">Hair colour</span>${swatchRow("fHair",P_HAIR,f.hair)}</div>
      <div><label class="l" for="fStyle">Hair</label>${selectRow("fStyle",P_STYLES,f.style)}</div>
      <div><label class="l" for="fBeard">Facial hair</label>${selectRow("fBeard",P_BEARD,f.beard)}</div>
      <div><span class="l">Eyes</span>${swatchRow("fEye",P_EYE,f.eye)}</div>
      <div><label class="l" for="fMood">Expression</label>${selectRow("fMood",P_MOOD,f.mood)}</div>
      <div><label class="l" for="fCollar">Outfit</label>${selectRow("fCollar",P_COLLARS,f.collar)}</div>
      <div><span class="l">Outfit colour</span>${swatchRow("fShirt",P_SHIRT,f.shirt)}</div>
      <div><label class="toggle"><input type="checkbox" id="fGlasses" ${f.glasses?"checked":""}> Glasses</label></div>
    </div></details>
    <span class="l">Badge colour</span><div class="swatches">${SWATCH.map((c,i)=>`<label style="background:${c}" aria-label="Badge colour ${i+1}"><input type="radio" name="idCol" value="${i}" ${i===col?"checked":""}></label>`).join("")}</div>
    <div class="idacts"><button class="btn primary" type="submit">${p?"Save ID":"Issue my badge"}</button>${p?`<button class="btn" type="button" data-act="cancelId">Cancel</button>`:""}</div></form>`;
  }
  const st=totalStars();
  return `<div class="idcard"><span class="eyebrow">Warrant card · Precinct Zero</span><div class="idrow" style="margin-top:10px"><div class="idav">${myFace()}</div>
  <div><div class="idname">${esc(p.name)}</div><div class="idbadge">Badge ${esc(p.badge)}</div><div class="idrank">${rankOf(st)} · Clearance ${clearance()} · ${solvedIds().length}/${CASE_ORDER.length} cases closed · <span class="stars">${"★".repeat(st)}</span>${st?"":"no stars yet"}</div></div></div>
  ${p.motto?`<div class="idmotto">“${esc(p.motto)}”</div>`:""}<div class="idacts"><button class="btn small" data-act="editId">Edit ID &amp; face</button></div></div>`;
}
document.addEventListener("input",e=>{ if(e.target.closest&&e.target.closest("#idForm")) updateFacePreview(); });
document.addEventListener("change",e=>{ if(e.target.closest&&e.target.closest("#idForm")) updateFacePreview(); });

/* ======================= ATMOSPHERE ======================= */
let amb=null;
function startAmbience(){
  if(amb||G.mute) return;
  try{
    if(!AC) AC=new (window.AudioContext||window.webkitAudioContext)(); const a=AC; if(a.state==="suspended") a.resume();
    const out=a.createGain(); out.gain.value=0; out.connect(a.destination); out.gain.linearRampToValueAtTime(.55,a.currentTime+4);
    const o1=a.createOscillator(), o2=a.createOscillator(); o1.type=o2.type="sawtooth"; o1.frequency.value=49; o2.frequency.value=49.6;
    const lp=a.createBiquadFilter(); lp.type="lowpass"; lp.frequency.value=150; const dg=a.createGain(); dg.gain.value=.045;
    o1.connect(lp); o2.connect(lp); lp.connect(dg); dg.connect(out);
    const lfo=a.createOscillator(), lg=a.createGain(); lfo.frequency.value=.05; lg.gain.value=70; lfo.connect(lg); lg.connect(lp.frequency);
    const len=a.sampleRate*2, b=a.createBuffer(1,len,a.sampleRate), d=b.getChannelData(0); for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    const src=a.createBufferSource(); src.buffer=b; src.loop=true; const bp=a.createBiquadFilter(); bp.type="bandpass"; bp.frequency.value=1400; bp.Q.value=.35; const rg=a.createGain(); rg.gain.value=.03;
    src.connect(bp); bp.connect(rg); rg.connect(out);
    [o1,o2,lfo,src].forEach(n=>n.start());
    amb={out,nodes:[o1,o2,lfo,src]};
  }catch(e){}
}
function stopAmbience(){ if(!amb) return; const n=amb; amb=null; try{ n.out.gain.cancelScheduledValues(AC.currentTime); n.out.gain.linearRampToValueAtTime(0,AC.currentTime+.6); setTimeout(()=>n.nodes.forEach(x=>{ try{ x.stop(); }catch(e){} }),800); }catch(e){} }
document.addEventListener("pointerdown",()=>{ if(!G.mute&&!amb) startAmbience(); });
function lightning(){
  const f=document.getElementById("winFlash"), sc=document.getElementById("officeScene");
  if(f){ f.classList.remove("strike"); f.getBoundingClientRect(); f.classList.add("strike"); }
  if(sc){ sc.classList.remove("strike"); void sc.offsetWidth; sc.classList.add("strike"); }
  setTimeout(()=>sfx("thunder"),800);
}
setInterval(()=>{ if(document.visibilityState!=="visible"||reduceMotion()) return; const r=Math.random();
  if(G.screen==="case"&&C.tab==="office"&&r<.6) lightning(); else if(!G.mute&&amb&&r<.2) sfx("siren"); },28000);
function stampFX(t){ const el=document.createElement("div"); el.className="stampfx"; el.innerHTML=`<span>${esc(t)}</span>`; document.body.appendChild(el); setTimeout(()=>sfx("stamp"),120); setTimeout(()=>el.remove(),1600); }
function flashRed(){ const el=document.createElement("div"); el.className="redflash"; document.body.appendChild(el); setTimeout(()=>el.remove(),1100); }
let eyeRAF=null, mx=-1, my=-1;
document.addEventListener("pointermove",e=>{ mx=e.clientX; my=e.clientY; if(!eyeRAF) eyeRAF=requestAnimationFrame(moveEyes); });
function moveEyes(){ eyeRAF=null; const H=window.innerHeight;
  document.querySelectorAll(".face").forEach(f=>{ const r=f.getBoundingClientRect(); if(r.bottom<0||r.top>H||r.width<18) return;
    const cx=r.left+r.width/2, cy=r.top+r.height*.42; let dx=(mx-cx)/(r.width*1.6), dy=(my-cy)/(r.height*1.6); const m=Math.hypot(dx,dy); if(m>1){ dx/=m; dy/=m; }
    const p=f.querySelector(".pup"); if(p) p.setAttribute("transform",`translate(${(dx*1.9).toFixed(2)} ${(dy*1.1).toFixed(2)})`); }); }

/* ======================= WALL: NOTES, CLIPS, RED PEN ======================= */
let penMode=false, draft=null, clipTarget=null, lastClipAt=0, lastSel="";
function cardKey(c){ return c.kind?c.key:c.id; }
function clipSVG(vb){ return `<svg viewBox="${vb.join(" ")}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block">${K.scene.draw()}</svg>`; }
function extraCardHTML(c){
  const sel=selCard===c.key?"sel":"", base=`data-card="${c.key}" style="left:${c.x}px;top:${c.y}px"`, x=`<button class="x" data-act="wallRm" data-id="${c.key}" aria-label="Remove from board">×</button>`;
  if(c.kind==="note") return `<div class="card note ${sel}" ${base}>${x}<span class="ctag">Note</span><textarea class="notetext" data-key="${c.key}" aria-label="Sticky note" placeholder="Write a theory…" maxlength="300">${esc(c.text||"")}</textarea></div>`;
  if(c.kind==="text") return `<div class="card snip ${sel}" ${base}>${x}<span class="ctag">${esc(c.src||"Snippet")}</span><q>${esc(c.text)}</q></div>`;
  if(c.kind==="clip") return `<div class="card clip ${sel}" ${base}>${x}<span class="ctag">${esc(c.src||"Photo clip")}</span><div class="clipimg" style="aspect-ratio:${c.vb[2]}/${c.vb[3]}">${clipSVG(c.vb)}</div></div>`;
  return "";
}
function addWallItem(it){
  const T=curT(), n=T.cards.length; it.key=it.kind[0]+Date.now().toString(36)+Math.floor(Math.random()*999);
  it.x=40+(n%6)*185; it.y=40+(Math.floor(n/6)%4)*170+(n%2)*12; T.cards.push(it); save(); sfx("paper");
  toast(it.kind==="note"?"Sticky note added to the evidence wall":"Clipped to the evidence wall");
  if(C.tab==="wall") renderPanel(); else renderChrome();
  return it.key;
}
function ringPath(r){ const R=rng(r.seed||1), cx=r.x+r.w/2, cy=r.y+r.h/2, rx=r.w/2+6, ry=r.h/2+6, start=R()*Math.PI*2, N=52; let d="";
  for(let i=0;i<=N;i++){ const t=start+1.14*2*Math.PI*i/N, k=1+(R()-.5)*.05+(i/N)*.06; d+=(i?"L":"M")+(cx+Math.cos(t)*rx*k).toFixed(1)+" "+(cy+Math.sin(t)*ry*k).toFixed(1); } return d; }
function drawRings(){ const svg=document.getElementById("rings"); if(!svg) return; const T=curT();
  svg.innerHTML=(T.rings||[]).map(r=>`<path d="${ringPath(r)}"/>`).join("")+(draft&&draft.type==="ring"&&draft.r.w>4?`<path d="${ringPath(draft.r)}" opacity=".55"/>`:""); }
function boardPoint(e){ const b=document.getElementById("board").getBoundingClientRect(); return [e.clientX-b.left,e.clientY-b.top]; }
function exitClip(){ document.querySelectorAll(".clipping").forEach(el=>el.classList.remove("clipping")); clipTarget=null; }
function penDown(e){
  if(clipTarget&&clipTarget.isConnected&&clipTarget.contains(e.target)){
    e.preventDefault(); const r=clipTarget.getBoundingClientRect(); const el=document.createElement("div"); el.className="cliprect"; document.body.appendChild(el);
    draft={type:"clip",sx:e.clientX,sy:e.clientY,r,el}; draftMove(e); return true; }
  if(penMode&&e.target.closest("#board")&&!e.target.closest("button")){
    e.preventDefault(); const [x,y]=boardPoint(e); draft={type:"ring",sx:x,sy:y,r:{x,y,w:0,h:0,seed:Math.floor(Math.random()*1e6)}}; return true; }
  return false;
}
function draftMove(e){
  if(draft.type==="ring"){ const [x,y]=boardPoint(e); Object.assign(draft.r,{x:Math.min(x,draft.sx),y:Math.min(y,draft.sy),w:Math.abs(x-draft.sx),h:Math.abs(y-draft.sy)}); drawRings(); return; }
  const r=draft.r, x1=Math.max(r.left,Math.min(e.clientX,r.right)), y1=Math.max(r.top,Math.min(e.clientY,r.bottom));
  Object.assign(draft.el.style,{left:Math.min(x1,draft.sx)+"px",top:Math.min(y1,draft.sy)+"px",width:Math.abs(x1-draft.sx)+"px",height:Math.abs(y1-draft.sy)+"px"}); draft.ex=x1; draft.ey=y1;
}
function draftEnd(){
  const d=draft; draft=null;
  if(d.type==="ring"){ if(d.r.w>14&&d.r.h>10){ const T=curT(); (T.rings=T.rings||[]).push({x:Math.round(d.r.x),y:Math.round(d.r.y),w:Math.round(d.r.w),h:Math.round(d.r.h),seed:d.r.seed}); save(); sfx("click"); renderPanel(); } else drawRings(); return; }
  d.el.remove(); lastClipAt=Date.now(); const r=d.r;
  const sx=(Math.min(d.sx,d.ex)-r.left)/r.width*800, sy=(Math.min(d.sy,d.ey)-r.top)/r.height*500, w=Math.abs(d.ex-d.sx)/r.width*800, h=Math.abs(d.ey-d.sy)/r.height*500;
  if(w<20||h<14){ toast("Drag a bigger box to clip."); return; }
  exitClip(); addWallItem({kind:"clip",vb:[sx,sy,w,h].map(v=>+v.toFixed(1)),src:K.scene.title});
}
function selText(){ const s=window.getSelection(); const t=s&&!s.isCollapsed?s.toString():""; return t||lastSel||""; }
document.addEventListener("selectionchange",()=>{ const s=window.getSelection(); if(!s||s.isCollapsed||!s.anchorNode) return; const n=s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement; if(n&&n.closest&&n.closest(".viewer")) lastSel=s.toString(); });
document.addEventListener("input",e=>{ if(e.target.classList&&e.target.classList.contains("notetext")){ const it=curT().cards.find(x=>x.key===e.target.dataset.key); if(it){ it.text=e.target.value.slice(0,300); save(); } } });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ if(clipTarget){ exitClip(); toast("Clipping cancelled"); } if(penMode){ penMode=false; if(C.tab==="wall") renderPanel(); } } });

document.querySelector("#partner .pav").innerHTML=faceSVG(FACES.aziz);
render();
initDirectory();
setTimeout(dispatchCheck,2500);
