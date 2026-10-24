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
  o=o||{}; const s=Object.assign({skin:"#c68a62",hair:"#2a1d16",style:"short",eye:"#3b2a1e",shirt:"#3b4a5a",collar:"shirt",beard:"none",glasses:false,mood:"neutral",bg:"#2a3640",age:0,acc:"",shape:"oval",hat:"none",hatc:"#2b2f36",eyewear:"",marks:"none",accc:"#7a1f2b"},sp,o.mood?{mood:o.mood}:{});
  if(!s.eyewear) s.eyewear=s.glasses?"rect":"none";
  const sh=shade(s.skin,-.2), H=s.hair, HC=s.hatc, HD=shade(HC,-.3), dl=((hashStr(JSON.stringify(sp))%40)/10).toFixed(1);
  const SHP={oval:[23,28],round:[25.5,26.5],long:[21,30],square:[23,28]}[s.shape]||[23,28];
  const kx=SHP[0]/23, wide=g=>g&&Math.abs(kx-1)>.01?`<g transform="translate(50 0) scale(${kx.toFixed(3)} 1) translate(-50 0)">${g}</g>`:g;
  const covered=["hijab","ghutra","turban"].includes(s.hat), noEars=["hijab","ghutra"].includes(s.hat);
  let back="";
  if(!covered){
    if(s.style==="long") back=`<path d="M25 52 Q22 16 50 15 Q78 16 75 52 L79 96 Q50 102 21 96Z" fill="${H}"/>`;
    if(s.style==="bob") back=`<path d="M25 54 Q22 16 50 15 Q78 16 75 54 L76 78 Q50 84 24 78Z" fill="${H}"/>`;
    if(s.style==="bun") back=`<circle cx="50" cy="17" r="10" fill="${H}"/>`;
    if(s.style==="afro") back=`<circle cx="50" cy="38" r="31" fill="${H}"/>`;
    if(s.style==="ponytail") back=`<path d="M68 28 Q88 40 80 78 Q76 84 71 76 Q79 52 65 36Z" fill="${H}"/>`;
    if(s.style==="braids") back=`<path d="M28 46 L23 100 M72 46 L77 100" stroke="${H}" stroke-width="7" stroke-linecap="round" stroke-dasharray="5 1.6" fill="none"/>`;
    if(s.style==="locs") back=Array.from({length:9},(_,i)=>`<path d="M${26+i*6} 30 Q${24+i*6.5} 70 ${22+i*7} ${92-Math.abs(i-4)*3}" stroke="${H}" stroke-width="5" stroke-linecap="round" fill="none"/>`).join("");
    if(s.style==="hood") back=`<path d="M12 120 L16 52 Q18 5 50 5 Q82 5 84 52 L88 120Z" fill="${s.shirt}"/><path d="M24 60 Q24 17 50 16 Q76 17 76 60 L76 90 Q50 98 24 90Z" fill="${shade(s.shirt,-.45)}"/>`;
  }
  let hatBack="", hatMid="", hatTop="";
  switch(s.hat){
    case "fedora": hatTop=`<ellipse cx="50" cy="27" rx="34" ry="6" fill="${HC}"/><path d="M30 27 Q30 7 50 7 Q70 7 70 27Z" fill="${HC}"/><rect x="30" y="20" width="40" height="5" fill="${HD}"/><path d="M42 9 Q50 14 58 9" stroke="${HD}" stroke-width="1.4" fill="none"/>`; break;
    case "flatcap": hatTop=`<path d="M24 36 Q24 13 50 13 Q76 13 76 33 Q66 28 50 29 Q32 30 24 36Z" fill="${HC}"/><path d="M24 36 Q42 42 64 34 L62 30 Q42 36 26 32Z" fill="${HD}"/>`; break;
    case "beanie": hatTop=`<path d="M25 40 Q25 9 50 9 Q75 9 75 40Z" fill="${HC}"/><rect x="24" y="33" width="52" height="9" rx="3" fill="${HD}"/>${[0,1,2,3,4,5,6].map(i=>`<line x1="${30+i*6.5}" y1="34" x2="${30+i*6.5}" y2="41" stroke="${shade(HC,-.45)}" stroke-width=".8"/>`).join("")}<circle cx="50" cy="8" r="5" fill="${HD}"/>`; break;
    case "beret": hatTop=`<g transform="rotate(-10 48 24)"><ellipse cx="47" cy="24" rx="27" ry="9" fill="${HC}"/><rect x="45" y="12" width="3" height="5" fill="${HD}"/></g>`; break;
    case "police": hatTop=`<path d="M25 41 Q25 15 50 15 Q75 15 75 41Z" fill="${HC}"/><rect x="25" y="33" width="50" height="7" fill="${HD}"/><path d="M50 21 l3.4 3.4 -3.4 6 -3.4 -6z" fill="#e2b13f"/><path d="M23 40 Q50 47 77 40 L77 44 Q50 52 23 44Z" fill="#111"/>`; break;
    case "ghutra": hatBack=`<path d="M17 112 L18 50 Q20 8 50 8 Q80 8 82 50 L83 112 Q74 96 70 70 L30 70 Q26 96 17 112Z" fill="${HC}"/>`; hatTop=`<path d="M24 46 Q24 12 50 12 Q76 12 76 46 Q70 26 50 25 Q30 26 24 46Z" fill="${HC}"/><path d="M26 28 Q50 18 74 28" stroke="#151515" stroke-width="3.2" fill="none"/><path d="M27 32.5 Q50 23.5 73 32.5" stroke="#151515" stroke-width="3" fill="none"/>`; break;
    case "hijab": hatBack=`<path d="M18 118 Q12 36 50 9 Q88 36 82 118Z" fill="${HC}"/>`; hatMid=`<path d="M22 86 Q50 106 78 86 L84 104 Q50 120 16 104Z" fill="${HC}"/>`; hatTop=`<path d="M26 58 Q22 16 50 14 Q78 16 74 58 Q74 28 50 25 Q26 28 26 58Z" fill="${HC}"/>`; break;
    case "turban": hatTop=`<path d="M23 44 Q20 6 50 5 Q80 6 77 44 Q66 30 50 31 Q34 30 23 44Z" fill="${HC}"/><path d="M27 34 Q48 16 74 22 M26 26 Q50 30 72 14 M32 16 Q52 24 70 32" stroke="${HD}" stroke-width="1.4" fill="none"/>`; break;
  }
  const sd=shade(s.shirt,-.3);
  const collar={
    shirt:`<path d="M40 88 L50 102 L60 88 L56 86 L50 94 L44 86Z" fill="#e9e4da"/>`,
    suit:`<path d="M30 92 L44 87 L50 114Z M70 92 L56 87 L50 114Z" fill="${shade(s.shirt,-.22)}"/><path d="M42 88 L50 104 L58 88 L55 86 L50 94 L45 86Z" fill="#e9e4da"/>${s.acc?"":`<path d="M48.5 96 L50 112 L51.5 96Z" fill="${sd}"/>`}`,
    tee:`<path d="M40 87 Q50 96 60 87" stroke="${sd}" stroke-width="2" fill="none"/>`,
    hoodie:`<path d="M33 88 Q50 101 67 88" stroke="${sd}" stroke-width="5" fill="none"/><line x1="45" y1="97" x2="44" y2="112" stroke="#d9d4ca" stroke-width="1.2"/><line x1="55" y1="97" x2="56" y2="112" stroke="#d9d4ca" stroke-width="1.2"/>`,
    scrubs:`<path d="M40 87 L50 101 L60 87" stroke="${sd}" stroke-width="2.5" fill="none"/>`,
    uniform:`<path d="M40 88 L50 99 L60 88 L57 86 L50 93 L43 86Z" fill="${shade(s.shirt,.3)}"/><path d="M66 99 l2 4 4 .5 -3 3 .8 4 -3.8-2 -3.8 2 .8-4 -3-3 4-.5z" fill="#e2b13f"/>`,
    leather:`<path d="M32 91 L46 87 L50 115Z M68 91 L54 87 L50 115Z" fill="${shade(s.shirt,.15)}"/><path d="M45 87 Q50 93 55 87" fill="${sh}"/>`,
    chef:`<path d="M36 89 L50 104 L64 89" stroke="${shade(s.shirt,-.18)}" stroke-width="2" fill="none"/>${[[44,103],[44,111],[56,103],[56,111]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.6" fill="${shade(s.shirt,-.3)}"/>`).join("")}`,
    trench:`<path d="M14 120 Q14 96 38 86 L50 116Z M86 120 Q86 96 62 86 L50 116Z" fill="${shade(s.shirt,.1)}"/><path d="M36 87 L40 74 L47 89Z M64 87 L60 74 L53 89Z" fill="${shade(s.shirt,-.12)}"/><path d="M44 88 L50 100 L56 88Z" fill="#e9e4da"/><rect x="8" y="112" width="84" height="4" fill="${shade(s.shirt,-.35)}"/><rect x="47" y="111" width="6" height="6" fill="none" stroke="#c9a24a" stroke-width="1"/>`,
    turtleneck:`<path d="M40 81 Q50 88 60 81 L61.5 93 Q50 99 38.5 93Z" fill="${shade(s.shirt,-.12)}"/>${[0,1,2].map(i=>`<path d="M${40-i*.5} ${85+i*3} Q50 ${91+i*3} ${60+i*.5} ${85+i*3}" stroke="${shade(s.shirt,-.3)}" stroke-width=".6" fill="none"/>`).join("")}`,
    waistcoat:`<path d="M38 88 L50 104 L62 88 L58 86 L50 96 L42 86Z" fill="#e9e4da"/><path d="M34 90 L48 120 L52 120 L66 90 L60 88 L50 108 L40 88Z" fill="${shade(s.shirt,-.25)}"/>${[100,107,114].map(y=>`<circle cx="50" cy="${y}" r="1" fill="#c9a24a"/>`).join("")}`,
    kandura:`<path d="M42 87 Q50 93 58 87" stroke="${shade(s.shirt,-.18)}" stroke-width="1.6" fill="none"/><path d="M50 91 L50 108" stroke="${shade(s.shirt,-.22)}" stroke-width="1.4"/><circle cx="50" cy="110" r="2" fill="${shade(s.shirt,-.22)}"/><path d="M50 110 L48 118 M50 110 L52 118" stroke="${shade(s.shirt,-.22)}" stroke-width=".8"/>`,
    labcoat:`<path d="M6 120 Q10 89 38 86 L49 120Z M94 120 Q90 89 62 86 L51 120Z" fill="#f2f2ee"/><path d="M38 86 L44 96 L48 120 M62 86 L56 96 L52 120" stroke="#cfcfc8" stroke-width="1" fill="none"/><rect x="66" y="100" width="10" height="2" fill="#3a6ea5"/>`,
    vest:`<path d="M40 87 Q50 95 60 87" stroke="${sd}" stroke-width="2" fill="none"/><rect x="22" y="96" width="56" height="24" rx="4" fill="#1a2030"/><text x="50" y="110" text-anchor="middle" font-size="6.5" font-weight="700" fill="#e9eef2" font-family="Arial, sans-serif" letter-spacing=".6">POLICE</text>`,
    abaya:`<path d="M40 87 L50 100 L60 87" stroke="#c9a24a" stroke-width="1.6" fill="none"/><path d="M50 100 L50 120" stroke="#c9a24a" stroke-width="1"/>`
  }[s.collar]||"";
  const AC=s.accc;
  const acc={lanyard:`<path d="M43 90 L48 120 M57 90 L52 120" stroke="#e37a24" stroke-width="2.6"/>`,
    headphones:`<path d="M31 93 Q50 105 69 93" stroke="#15171a" stroke-width="4" fill="none"/><circle cx="31" cy="92" r="5.5" fill="#15171a"/><circle cx="69" cy="92" r="5.5" fill="#15171a"/>`,
    pearls:Array.from({length:9},(_,i)=>{const a=Math.PI*(.15+.7*i/8);return `<circle cx="${(50-Math.cos(a)*12).toFixed(1)}" cy="${(88+Math.sin(a)*6).toFixed(1)}" r="1.6" fill="#f4efe6"/>`;}).join(""),
    earrings:noEars?"":`<circle cx="${(50-SHP[0]-.4).toFixed(1)}" cy="64" r="1.9" fill="#e2b13f"/><circle cx="${(50+SHP[0]+.4).toFixed(1)}" cy="64" r="1.9" fill="#e2b13f"/>`,
    tie:`<path d="M47.5 92 L52.5 92 L54.5 112 L50 118 L45.5 112Z" fill="${AC}"/><path d="M47 89 L53 89 L52 93 L48 93Z" fill="${shade(AC,-.25)}"/>`,
    bowtie:`<path d="M50 92 L42 88 L42 96Z M50 92 L58 88 L58 96Z" fill="${AC}"/><circle cx="50" cy="92" r="1.8" fill="${shade(AC,-.3)}"/>`,
    scarf:`<path d="M34 86 Q50 97 66 86 L68 93 Q50 104 32 93Z" fill="${AC}"/><path d="M58 96 L62 118 L54 118 L54 98Z" fill="${shade(AC,-.15)}"/>`,
    badge:`<path d="M30 100 l5 -2 5 2 v5 q-5 5 -10 0z" fill="#e2b13f" stroke="#a8862a" stroke-width=".6"/>`,
    chain:`<path d="M40 88 Q50 104 60 88" stroke="#d6b45a" stroke-width="1" fill="none"/><circle cx="50" cy="97" r="1.6" fill="#d6b45a"/>`}[s.acc]||"";
  let top="";
  if(!covered) switch(s.style){
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
    case "afro": top=`<path d="M25 48 Q22 17 50 16 Q78 17 75 48 Q70 30 50 29 Q30 30 25 48Z" fill="${H}"/>`; break;
    case "ponytail": top=`<path d="M27 46 Q26 20 50 20 Q74 20 73 46 Q69 29 50 28 Q31 29 27 46Z" fill="${H}"/>`; break;
    case "mohawk": top=`<path d="M27 46 Q25 22 50 22 Q75 22 73 46 Q71 31 50 30 Q30 31 27 46Z" fill="${H}" opacity=".3"/><path d="M45 31 Q44 8 50 3 Q56 8 55 31 Q50 28 45 31Z" fill="${H}"/>`; break;
    case "sidepart": top=`<path d="M27 47 Q24 19 46 19 Q75 19 74 45 Q70 28 46 28 L41 24 Q31 31 27 47Z" fill="${H}"/>`; break;
    case "spiky": top=`<path d="M26 47 L27 27 L33 30 L35 15 L42 25 L48 10 L53 24 L60 12 L63 26 L70 18 L72 31 L75 47 Q70 32 50 31 Q30 32 26 47Z" fill="${H}"/>`; break;
    case "braids": top=`<path d="M27 46 Q28 22 50 22 Q72 22 73 46 Q66 30 50 30 Q34 30 27 46Z" fill="${H}"/><path d="M50 22 L50 30" stroke="${shade(H,-.3)}" stroke-width="1"/>`; break;
    case "locs": top=`<path d="M25 48 Q24 18 50 18 Q76 18 75 48 Q68 30 50 30 Q32 30 25 48Z" fill="${H}"/>`; break;
  }
  const brows={neutral:`M35 44 Q40 42 45 44 M55 44 Q60 42 65 44`,frown:`M35 42 L45 45.5 M55 45.5 L65 42`,smile:`M35 43 Q40 40.5 45 43 M55 43 Q60 40.5 65 43`,smirk:`M35 44 Q40 42.5 45 44 M55 42.5 Q60 40 65 42`,suspicious:`M35 45 L45 44.5 M55 41 Q60 38.5 65 41.5`,tired:`M35 42.5 Q40 43.5 45 45 M55 45 Q60 43.5 65 42.5`}[s.mood]||`M35 44 Q40 42 45 44 M55 44 Q60 42 65 44`;
  const mouth={neutral:`M43 72 Q50 74 57 72`,smile:`M42 70 Q50 78 58 70`,frown:`M43 74.5 Q50 69.5 57 74.5`,smirk:`M43 72.5 Q52 74.5 58 69.5`,suspicious:`M44 73 L56 72`,tired:`M44 73.5 Q50 72.5 56 73.5`}[s.mood]||`M43 72 Q50 74 57 72`;
  const beard=s.beard==="stubble"?`<path d="M28 58 Q30 85 50 87 Q70 85 72 58 Q68 72 58 74 Q50 78 42 74 Q32 72 28 58Z" fill="${H}" opacity=".3"/>`
    :s.beard==="full"?`<path d="M27 56 Q28 88 50 90 Q72 88 73 56 Q69 72 58 73 Q50 77 42 73 Q31 72 27 56Z" fill="${H}"/><path d="M41 69 Q50 64 59 69 Q50 71 41 69Z" fill="${H}"/>`
    :s.beard==="mustache"?`<path d="M40 69.5 Q50 63 60 69.5 Q50 71.5 40 69.5Z" fill="${H}"/>`
    :s.beard==="goatee"?`<path d="M44 75 Q50 88 56 75 Q50 79 44 75Z" fill="${H}"/><path d="M42 69.5 Q50 65 58 69.5 Q50 71 42 69.5Z" fill="${H}"/>`
    :s.beard==="chevron"?`<path d="M37 71 Q50 60 63 71 Q50 74 37 71Z" fill="${H}"/>`
    :s.beard==="handlebar"?`<path d="M40 69 Q50 64 60 69 Q66 66 68 61 Q66 70 60 71 Q50 69 40 71 Q34 70 32 61 Q34 66 40 69Z" fill="${H}"/>`
    :s.beard==="sideburns"?`<path d="M27 46 L27 64 L31 66 L31 46Z M73 46 L73 64 L69 66 L69 46Z" fill="${H}"/>`:"";
  const age=s.age?`<path d="M40 34 Q50 32 60 34 M42 38 Q50 36 58 38 M34 60 Q36 66 38 68 M66 60 Q64 66 62 68" stroke="${sh}" stroke-width="${s.age>1?1.1:.8}" fill="none"/>${s.age>1?`<path d="M32 49 l-3 -1.5 M32 52 l-3 1 M68 49 l3 -1.5 M68 52 l3 1 M44 77 Q50 79 56 77" stroke="${sh}" stroke-width=".9" fill="none"/>`:""}`:"";
  const marks={scar:`<path d="M58 39 L63 57" stroke="#a5554a" stroke-width="1.5" stroke-linecap="round"/><path d="M59 44 l2 -.6 M60.5 49 l2 -.6" stroke="#a5554a" stroke-width=".8"/>`,
    freckles:[[34,60],[37,62],[33,64],[36,58],[39,60],[63,60],[66,62],[67,58],[64,64],[61,62]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r=".75" fill="${shade(s.skin,-.38)}"/>`).join(""),
    mole:`<circle cx="58" cy="67" r="1.2" fill="${shade(s.skin,-.55)}"/>`,
    bandage:`<g transform="rotate(-20 66 60)"><rect x="60" y="57" width="13" height="5" rx="2" fill="#e8d2b8"/><rect x="65" y="57" width="3" height="5" fill="#d6bc9e"/></g>`,
    eyebags:`<path d="M35 55 Q40 57.5 45 55 M55 55 Q60 57.5 65 55" stroke="${sh}" stroke-width="1" fill="none"/>`}[s.marks]||"";
  const ew={rect:`<g fill="rgba(200,220,235,.12)" stroke="#15171a" stroke-width="1.6"><rect x="33" y="45" width="14" height="10" rx="3"/><rect x="53" y="45" width="14" height="10" rx="3"/><path d="M47 49 Q50 47 53 49" fill="none"/></g>`,
    round:`<g fill="rgba(200,220,235,.12)" stroke="#15171a" stroke-width="1.5"><circle cx="40" cy="50" r="6"/><circle cx="60" cy="50" r="6"/><path d="M46 49 Q50 47 54 49" fill="none"/></g>`,
    aviator:`<g fill="#141a22" fill-opacity=".9" stroke="#b9a46a" stroke-width="1"><path d="M32 46 L47 46 Q48 56 40 57 Q32 56 32 46Z"/><path d="M53 46 L68 46 Q68 56 60 57 Q52 56 53 46Z"/><path d="M47 46.5 L53 46.5" fill="none"/></g>`,
    half:`<path d="M33 46 H47 M53 46 H67" stroke="#15171a" stroke-width="2.4" fill="none"/><path d="M33 46 Q33 55 40 55 Q47 55 47 46 M53 46 Q53 55 60 55 Q67 55 67 46" stroke="#15171a" stroke-width=".7" fill="none"/>`,
    monocle:`<circle cx="60" cy="50" r="6.2" fill="rgba(200,220,235,.15)" stroke="#c9a24a" stroke-width="1.4"/><path d="M66 52 Q72 70 66 90" stroke="#c9a24a" stroke-width=".8" fill="none"/>`,
    patch:`<ellipse cx="40" cy="50" rx="6.5" ry="5.5" fill="#111"/><path d="M27 42 L34 47 M46 47 L73 40" stroke="#111" stroke-width="1.6"/>`}[s.eyewear]||"";
  const faceShape=s.shape==="square"?`<rect x="27" y="24" width="46" height="56" rx="15" fill="${s.skin}"/>`:`<ellipse cx="50" cy="52" rx="${SHP[0]}" ry="${SHP[1]}" fill="${s.skin}"/>`;
  const ears=noEars?"":`<ellipse cx="${(50-SHP[0]+.5).toFixed(1)}" cy="56" rx="4" ry="6.5" fill="${s.skin}"/><ellipse cx="${(50+SHP[0]-.5).toFixed(1)}" cy="56" rx="4" ry="6.5" fill="${s.skin}"/>`;
  const myst=s.mystery?`<ellipse cx="50" cy="54" rx="25" ry="30" fill="#000" opacity=".78"/><text x="50" y="64" text-anchor="middle" font-size="24" fill="#e2b13f" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800">?</text>`:"";
  return `<svg class="face" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" style="--d:${dl}s" aria-hidden="true"><rect width="100" height="120" fill="${s.bg}"/>
  <g class="bob">${wide(hatBack)}${wide(back)}<path d="M43 70 L43 90 Q50 95 57 90 L57 70Z" fill="${s.hat==="hijab"?HC:sh}"/><path d="M6 120 Q10 89 50 85 Q90 89 94 120Z" fill="${s.shirt}"/>${collar}${hatMid}${acc}
  ${ears}${faceShape}${age}${marks}${beard}${wide(top)}${wide(hatTop)}
  <path d="${brows}" stroke="${shade(H,-.2)}" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <g class="eyes"><ellipse cx="40" cy="50" rx="4.6" ry="3.1" fill="#f4f1ea"/><ellipse cx="60" cy="50" rx="4.6" ry="3.1" fill="#f4f1ea"/><g class="pup"><circle cx="40.4" cy="50.2" r="2.3" fill="${s.eye}"/><circle cx="60.4" cy="50.2" r="2.3" fill="${s.eye}"/><circle cx="40.6" cy="50.2" r="1" fill="#0d0d0d"/><circle cx="60.6" cy="50.2" r="1" fill="#0d0d0d"/><circle cx="41.4" cy="49.4" r=".55" fill="#fff" opacity=".8"/><circle cx="61.4" cy="49.4" r=".55" fill="#fff" opacity=".8"/></g></g>${ew}
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
  if(caseId===K.id){ unlock(ev,true); roomProg("e-"+ev); return; }
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
  <div class="ivstage"><div class="ivwall"></div><div class="ivface ${pressLawyered(who)?"lawyer":""}" id="ivFace">${faceOf(who,pressMood(who))}</div><div class="ivyou" title="You">${myFace()}<span>You</span></div><div class="ivtable"><span class="ivplate">${esc(s.name)}</span><span class="ivmic"></span></div>
  <div class="ivbubble" id="ivBubble">${C.ivLastP&&C.ivLastP.who===who?`<b>${esc(s.name)}:</b> <span id="ivA">${esc(C.ivLastP.text)}</span>`:last?`<b>${esc(s.name)}:</b> <span id="ivA">${esc(last[1])}</span>`:`<span class="muted">${esc(s.name.split(" ")[0])} is waiting. Ask a question.</span>`}</div></div>
  <div class="ivqs"><p class="eyebrow" style="margin-bottom:8px">Questions for ${esc(s.name.split(" ")[0])}</p>${iv[who].map(([q],i)=>`<button class="ivq ${asked.includes(i)?"done":""}" data-act="ask" data-id="${i}">${esc(q)}</button>`).join("")}
  ${last?`<button class="btn small" data-act="pinIv" style="margin-top:10px">Pin last answer to notebook</button><button class="btn small" data-act="ivWall" style="margin-top:6px">Clip last answer to wall</button>`:""}${pressPanelHTML(who)}</div></div>`;
}
function ask(i){
  if(pressLawyered(C.ivWho)){ toast("Their lawyer has advised them not to answer. Wait it out."); return; }
  C.ivLastP=null;
  const iv=INTERVIEWS[K.id], who=C.ivWho; C.ivAsked=C.ivAsked||{}; const arr=C.ivAsked[who]=C.ivAsked[who]||[]; const j=arr.indexOf(i); if(j>=0) arr.splice(j,1); arr.push(i); save();
  renderPanel();
  const face=document.querySelector("#ivFace .face"), out=document.getElementById("ivA"); if(!face||!out) return;
  face.classList.add("talk"); if(who===K.verdict.culprit) face.classList.add("nervous"); ivTalking=true;
  typeInto(out,iv[who][i][1],22,()=>{ face.classList.remove("talk"); ivTalking=false; setTimeout(()=>face.classList.remove("nervous"),2500); });
}

/* ======================= CASE VAULT ======================= */
function clearance(){ return Math.min(8,1+solvedIds().length); }
function vaultHTML(){
  const tiers=[1,2,3,4,5,6,7,8].map(lv=>{ const ids=CASE_ORDER.filter(id=>CASES[id].clearance===lv);
    return `<div class="tier"><div class="tierhead"><span class="clv">Clearance ${lv}</span><span class="muted">${lv===1?"Open to all detectives":`Arrives by dispatch, or after ${lv-1} closed case${lv>2?"s":""}`}</span></div>
    <div class="cases">${ids.map(id=>vaultCard(id)).join("")}</div></div>`; }).join("");
  return `<div class="vaultgrid">${tiers}</div>`;
}
function vaultCard(id){
  const k=CASES[id], s=G.cases[id], open=G.open.includes(id)||clearance()>=k.clearance, started=s&&(Object.keys(s.done||{}).length||s.introSeen), st=s&&s.stars;
  const prevK=K; K=k; const faces=Object.keys(k.SUS).map(sk=>`<span class="vface" title="${esc(k.SUS[sk].name)}">${faceOf(sk)}</span>`).join(""); K=prevK;
  return `<div class="casecard ${open?"":"sealed"}"><div class="cover">${coverSVG(k.cover)}${open?"":`<div class="seal">SEALED · CLEARANCE ${k.clearance}</div>`}</div><div class="info">
  <div class="meta"><span class="chip">${k.code}</span>${st?`<span class="chip solved">Closed <span class="stars">${"★".repeat(st)}${"☆".repeat(3-st)}</span></span>`:open?`<span class="chip live">${started?"In progress":"Open"}</span>`:`<span class="chip">Sealed</span>`}<span class="chip">${k.crime}</span></div>
  <h2>${k.title}</h2><p>${k.blurb}</p>
  <div class="vfaces" aria-label="Suspects">${faces}</div>
  <div class="meta"><span class="chip">${Object.keys(k.SUS).length} suspects</span><span class="chip">${k.order.length} exhibits</span><span class="chip">${k.OBJ.length} objectives</span><span class="chip diff">Difficulty&nbsp;${[1,2,3,4,5].map(i=>`<i class="${i<=k.diff?"on":""}"></i>`).join("")}</span></div>
  <div class="acts">${open?`<button class="btn primary small" data-act="open" data-id="${id}">${started?"Continue":"Take the case"}</button><button class="btn small" data-act="roomCreate" data-id="${id}">Case room</button>${G.open.includes(id)&&clearance()<k.clearance?`<button class="btn small" data-act="reseal" data-id="${id}">Re-seal</button>`:""}${started?`<button class="btn small" data-act="resetCase" data-id="${id}">Restart</button>`:""}`:`<button class="btn small" data-act="override" data-id="${id}">Request override</button>`}</div></div></div>`;
}
function openCase(id){
  if(ROOM.on&&ROOM.meta&&ROOM.meta.caseId!==id) leaveRoom(true);
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
function unlock(id,quiet){ if(has(id)) return; C.unlocked.push(id); if(!quiet){ roomProg("e-"+id); toast(`New evidence unsealed: ${exNo(id)} ${K.EV[id].title}`); sfx("unlock"); partnerSay(`New record in the archive: ${K.EV[id].title}. ${K.unlockLines[id]||""}`); } }
function complete(oid){
  if(C.done[oid]) return; C.done[oid]=true; roomProg("o-"+oid);
  const o=K.OBJ.find(x=>x.id===oid); o.reward.forEach(r=>unlock(r,true));
  toast(o.reward.length?`Objective complete. Unsealed: ${o.reward.map(r=>K.EV[r].title).join(", ")}`:`Objective complete: ${o.t}`);
  stampFX(o.reward.length?"UNSEALED":"CONFIRMED"); sfx("unlock"); setTimeout(()=>partnerSay(K.react[oid]),350); save();
  setTimeout(dispatchCheck,4500);
}
function miss(){ C.wrong++; sfx("wrong"); save(); }
function addClue(t,src){ if(C.clues.some(c=>c.t===t)){ toast("Already in your notebook"); return; } C.clues.push({t,src}); save(); toast(ROOM.on?"Saved to your notebook and shared with the team":"Saved to notebook"); if(ROOM.on) roomNote(t,src); }
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
  if(typeof ensureChatPanel==="function") ensureChatPanel();
  if(G.screen==="library"){ app.innerHTML=libraryHTML(); lastTab=null; startDirectory(); return; }
  app.innerHTML=`<header class="bar"><div class="row gut">
    <button class="btn small" id="backBtn" data-act="library">← Cases</button>
    <h1>${K.title}</h1><span class="cid">${K.code}</span>
    <div class="prog" id="prog"></div>
    <span id="roomchip"></span><span class="mechip" id="mechip"></span>
    <button class="iconbtn" id="muteBtn" data-act="mute"></button></div>
    <nav class="tabs gut" id="tabs"></nav></header><main class="gut" id="panel"></main>`;
  renderPanel();
}
function renderChrome(){
  const bb=document.getElementById("backBtn");
  if(bb){ if(C.tab==="office"){ bb.dataset.act="library"; delete bb.dataset.id; bb.textContent="← Cases"; } else { bb.dataset.act="tab"; bb.dataset.id="office"; bb.textContent="← Office"; } }
  const rc=document.getElementById("roomchip"); if(rc){ if(ROOM.on){ rc.className="roomchip"; rc.innerHTML=roomChipHTML(); } else { rc.className=""; rc.innerHTML=""; } }
  const mb=document.getElementById("muteBtn"); if(mb) mb.textContent=G.mute?"Sound off":"Sound on";
  const me=document.getElementById("mechip"); if(me&&G.profile) me.innerHTML=`<i class="mface">${myFace()}</i>${esc(G.profile.name)} · ${esc(G.profile.badge)}`;
  const n=Object.keys(C.done).length;
  const p=document.getElementById("prog");
  if(p) p.innerHTML=`<span>${n}/${K.OBJ.length} objectives</span><div class="track"><div class="fill" style="width:${n/K.OBJ.length*100}%"></div></div><span>${C.unlocked.length}/${K.order.length} exhibits</span><span>Hints ${C.hints}</span>`;
  const unseen=C.unlocked.filter(id=>!C.seen.includes(id)).length;
  const tabs=[["office","Office"],["brief","Case file"],["interview","Interview room"],["evidence","Evidence",unseen||""],["dispatch","Dispatch",G.disp.unread||""],["lab","Forensics lab"],["walk","Walk-through"],["phone","Phone"],["terminal","Police terminal"],["wall","Evidence wall"],["notebook","Notebook",C.clues.length||""],["verdict","Courtroom"]];
  const t=document.getElementById("tabs"); if(t) t.innerHTML=tabs.map(([k,l,c])=>`<button class="tab ${C.tab===k?"on":""}" data-act="tab" data-id="${k}">${l}${c?`<span class="n">${c}</span>`:""}</button>`).join("");
}
function renderPanel(){
  renderChrome();
  const P=document.getElementById("panel"); if(!P) return;
  const f={office:officeHTML,interview:interviewHTML,dispatch:dispatchHTML,brief:briefHTML,evidence:evidenceHTML,lab:labHTML,walk:walkHTML,phone:phoneHTML,terminal:termHTML,wall:wallHTML,notebook:notebookHTML,verdict:verdictHTML}[C.tab]||officeHTML;
  P.innerHTML=f();
  if(C.tab!==lastTab){ P.classList.remove("enter"); void P.offsetWidth; P.classList.add("enter"); lastTab=C.tab; if(ROOM.on) roomPresence(); }
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
  if(kind==="atrium") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#0a0d11"/>${Array.from({length:6},(_,i)=>`<rect x="${20+i*18}" y="${14+i*16}" width="${360-i*36}" height="2" fill="#2a313a"/>`).join("")}<rect x="0" y="96" width="400" height="44" fill="#9fc3d6" opacity=".1" stroke="#6e8fa3"/><rect x="0" y="92" width="400" height="5" fill="#b8c4cc"/><rect x="250" y="104" width="34" height="10" rx="4" fill="#e9eef2" opacity=".25"/><rect x="40" y="118" width="56" height="20" fill="#dfe9f0"/><rect x="44" y="122" width="40" height="2" fill="#5d6870"/><rect x="44" y="127" width="30" height="2" fill="#5d6870"/></svg>`;
  if(kind==="taxi") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#08090c"/>${Array.from({length:14},(_,i)=>`<circle cx="${20+i*28}" cy="${30+(i*13)%40}" r="${2+(i%3)}" fill="${i%2?'#f2c96b':'#ff8a5a'}" opacity=".5"/>`).join("")}<rect x="150" y="70" width="100" height="30" rx="6" fill="#e2b13f"/><text x="200" y="91" fill="#1b1606" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="18" text-anchor="middle" letter-spacing="3">TAXI</text><rect x="60" y="104" width="280" height="40" rx="10" fill="#1b1d22"/><text x="320" y="136" fill="#ff4b3a" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="end">61.70</text></svg>`;
  if(kind==="ward") return `<svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice"><rect width="400" height="150" fill="#0c1013"/><polygon points="120,0 280,0 360,150 40,150" fill="#151c20"/>${[0,1,2,3].map(i=>`<rect x="${150-i*20}" y="${20+i*30}" width="${100+i*40}" height="2" fill="#2a3237"/>`).join("")}<rect x="176" y="40" width="48" height="30" fill="#1b2a22"/><text x="200" y="62" fill="#5fb380" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="22" text-anchor="middle">9</text><rect x="300" y="20" width="60" height="40" rx="4" fill="#0d1215" stroke="#3a454e"/><text x="330" y="44" fill="#ff5a45" font-family="IBM Plex Mono, monospace" font-size="8" text-anchor="middle">MUTED</text></svg>`;
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
  <div id="roomslot">${roomBoxHTML()}</div>
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
  const Q=K.codeQ, done=C.done.code;
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
function curT(){ if(ROOM.on) return roomTheory(); return C.theories.find(t=>t.id===C.active)||C.theories[0]; }
let stringMode=false, selCard=null, tested=false;
function wallHTML(){
  const T=curT(), onBoard=new Set(T.cards.map(c=>c.id));
  const tabs=ROOM.on?`<button class="on">Team board · room ${esc(ROOM.code)}</button>`:C.theories.map(t=>`<button class="${t.id===T.id?"on":""}" data-act="theory" data-id="${t.id}">${esc(t.name)}${t.suspect?` · ${esc(suspName(t.suspect).split(" ")[0])}`:""}</button>`).join("");
  const pool=K.order.filter(id=>has(id)&&!onBoard.has(id)).map(id=>`<button data-act="wallAdd" data-id="${id}"><span class="no">${exNo(id)}</span><span>${esc(K.EV[id].title)}</span></button>`).join("")||`<p class="muted" style="font-size:13px;margin:4px">Every unsealed exhibit is on this board.</p>`;
  const cards=T.cards.map(c=>{ if(c.kind) return extraCardHTML(c); const e=K.EV[c.id]; if(!e) return ""; const s=e.cat==="Suspects"; let cls="",flag="";
    if(tested&&T.suspect){ if((K.CLEARS[c.id]||[]).includes(T.suspect)){cls="contra";flag="contradicts";} else if((K.POINTS[c.id]||[]).includes(T.suspect)){cls="supp";flag="supports";} }
    return `<div class="card ${s?"sus":""} ${cls} ${selCard===c.id?"sel":""}" data-card="${c.id}" style="left:${c.x}px;top:${c.y}px"><button class="x" data-act="wallRm" data-id="${c.id}" aria-label="Remove from board">×</button>${s?`<span class="cface">${faceOf(c.id.slice(2))}</span>`:""}<span class="ctag">${exNo(c.id)} · ${s?"Suspect":e.type}</span><b>${esc(e.title)}</b>${flag?`<span class="flag">${flag}</span>`:""}</div>`; }).join("");
  let res="";
  if(tested&&T.suspect){ const con=T.cards.filter(c=>(K.CLEARS[c.id]||[]).includes(T.suspect)).map(c=>K.EV[c.id].title), sup=T.cards.filter(c=>(K.POINTS[c.id]||[]).includes(T.suspect)).map(c=>K.EV[c.id].title);
    res=`<div class="testresult"><b>${sup.length} support · ${con.length} contradict</b> the theory that ${esc(suspName(T.suspect))} did it.${con.length?`<ul>${con.map(t=>`<li style="color:var(--bad)">${esc(t)}</li>`).join("")}</ul>`:""}${!con.length&&!sup.length?`<p class="muted" style="margin:6px 0 0">Nothing on this board speaks to this suspect yet.</p>`:""}<p class="muted" style="margin:6px 0 0;font-size:13px">Support isn't proof. An exhibit can look bad for an innocent person.</p></div>`; }
  else if(tested) res=`<div class="testresult">Choose a prime suspect for this theory first.</div>`;
  return `<div class="wallbar"><div class="theorytabs">${tabs}${ROOM.on?"":`<button data-act="theoryNew">+ New theory</button>`}</div></div>
  <div class="wallbar"><label class="muted" for="tName" style="font-size:13px">Name</label><input id="tName" class="field" value="${esc(T.name)}" style="width:160px">
  <label class="muted" for="tSus" style="font-size:13px">Prime suspect</label><select id="tSus" style="width:auto"><option value="">—</option>${Object.entries(K.SUS).map(([k,s])=>`<option value="${k}" ${T.suspect===k?"selected":""}>${s.name}</option>`).join("")}</select>
  <button class="btn small ${stringMode?"primary":""}" data-act="string">${stringMode?"Stringing: click two cards":"Add string"}</button><button class="btn small" data-act="test">Test theory</button><button class="btn small" data-act="addNote">+ Sticky note</button><button class="btn small ${penMode?"pen-on":""}" data-act="pen">${penMode?"Red pen on: drag to circle":"Red pen"}</button>${(T.rings||[]).length?`<button class="btn small" data-act="undoRing">Undo circle</button>`:""}${!ROOM.on&&C.theories.length>1?`<button class="btn small" data-act="theoryDel">Delete theory</button>`:""}</div>
  <div class="wall"><aside><p class="eyebrow" style="margin-bottom:6px">Unsealed exhibits · click to pin</p><div class="pool">${pool}</div></aside>
  <div><div class="boardwrap"><div class="board ${penMode?"pen":""}" id="board"><svg id="strings"></svg>${cards}<svg id="rings"></svg></div></div><p class="muted" style="font-size:13px;margin-top:6px">Drag cards to arrange them. Click a string to remove it. Clip text or part of a photo from any exhibit, interview, terminal result or notebook clue, then circle what matters with the red pen.</p>${res}</div></div>`;
}
function drawStrings(){ const T=curT(), svg=document.getElementById("strings"); if(!svg) return;
  const pos=id=>{ const el=document.querySelector(`[data-card="${id}"]`); return el?[el.offsetLeft+el.offsetWidth/2,el.offsetTop+10]:null; };
  svg.innerHTML=T.links.map((l,i)=>{ const a=pos(l[0]),b=pos(l[1]); if(!a||!b) return ""; const mx=(a[0]+b[0])/2, my=Math.max(a[1],b[1])+30+Math.abs(a[0]-b[0])*.06; return `<path data-act="unstring" data-id="${i}" d="M${a[0]} ${a[1]} Q${mx} ${my} ${b[0]} ${b[1]}"/>`; }).join(""); }
function wallAdd(id){ const T=curT(); if(T.cards.some(c=>c.id===id)) return; const n=T.cards.length; const card={id,x:40+(n%6)*185,y:40+(Math.floor(n/6)%4)*170+(n%2)*14};
  if(ROOM.on){ roomSet("cards",id,Object.assign({by:detName()},card)); return; } T.cards.push(card); save(); }

/* --- notebook --- */
function notebookHTML(){
  const cl=C.clues.length?C.clues.map((c,i)=>`<div class="clue"><div>${esc(c.t)}<small>${esc(c.src)}</small></div><span class="cbtns"><button data-act="clueWall" data-id="${i}" title="Clip to wall" aria-label="Clip to wall">⤴ wall</button><button data-act="clueRm" data-id="${i}" aria-label="Remove">×</button></span></div>`).join(""):`<p class="muted">Nothing pinned yet. Use "Pin to notebook" on exhibits and terminal results. Scene findings land here automatically.</p>`;
  return `${ROOM.on?teamNotesHTML():""}<div class="nb"><div><p class="eyebrow" style="margin-bottom:8px">${esc(detName())}'s private notes</p><textarea id="notes" aria-label="Detective notes" placeholder="Who had the motive, the means and the opportunity? What will the defence say?">${esc(C.notes)}</textarea></div>
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
  if(v.sus===V.culprit&&typeof C!=="undefined"&&C&&C.press&&C.press[V.culprit]&&C.press[V.culprit].cracked){ score+=1; R.push(["p","The jury hears the recorded confession from the interview room."]); }
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
  return `<div class="court"><p class="eyebrow">${v.by?`Presented by ${esc(v.by)} · `:""}The jury · ${esc(suspName(v.sus))} · ${esc(V.methods[v.method])}</p><div class="jury" id="jury">${seats}</div>
  <div id="outcome" ${animate?"hidden":""}><div class="outcome ${j.charged?"y":"n"}">${j.charged?"Charged":"Not enough to charge"}</div>
  <p class="muted" style="margin-top:6px">${j.votes} of 12 jurors voted to charge. Nine were needed.${j.charged?` Case closed by ${esc(detName())} · <span class="stars">${"★".repeat(C.stars)}${"☆".repeat(3-C.stars)}</span>`:""}</p>
  <ul class="reasons">${j.R.map(([k,t])=>`<li class="${k}">${esc(t)}</li>`).join("")}</ul>
  ${j.charged?`<div class="feedback good" style="margin-top:16px"><b>What happened.</b> ${V.solution}</div>`:`<p style="margin-top:14px">${v.sus===V.culprit?"The jury thinks you might have the right person, but the case has holes.":"The defence took that apart. Back to the evidence."}</p>`}
  <p style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="retry">Rebuild the case</button>${j.charged?`<button class="btn" data-act="library">Back to the case library</button>`:`<button class="btn" data-act="reveal">Give up and show the solution</button>`}</p><div id="sol"></div></div></div>`;
}

/* ======================= PARTNER / INTRO / STATIONS ======================= */
const STATION_LINES={walk:"Lights are off down there. Take the torch, walk it slowly, and mark anything the photo missed.",phone:"The handset's ours now. Get past the lock screen, then check what they deleted.",interview:"Interview room three. Ask everything, then compare it with the file. Liars repeat themselves; guilty people add details.",dispatch:"Everything dispatch has sent us. Leads on new cases land here too.",brief:"Case file and objectives. If you're stuck, start there.",evidence:"Everything we have is in the archive. Sealed folders open as we make progress.",lab:"The lab's yours. Each bench can unseal something.",terminal:"Records terminal. Type help. It takes names, plates, numbers and IDs from the exhibits.",wall:"Pin the exhibits, string them up, then test each theory. Red means something breaks it. Green doesn't mean proof.",notebook:"Write it down. The jury will want it straight.",verdict:"Once we walk in there, the jury decides. Nine of twelve, and the defence gets its say."};
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
    SYNC.kind="artifact"; SYNC.store=db; SYNC.uid=DIR.uid; setTimeout(syncReady,0);
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
      C.found.push(id); C.clues.push({t:h.t,src:K.scene.title}); roomProg("h-"+id); sfx("click"); toast(`Point of interest ${C.found.length}/${K.scene.hots.length} marked`);
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
    case "wallRm": { if(ROOM.on){ roomDel("cards",id); Object.entries(ROOM.links).forEach(([k,l])=>{ if(l.a===id||l.b===id) roomDel("links",k); }); renderPanel(); break; } const T=curT(); T.cards=T.cards.filter(c=>cardKey(c)!==id); T.links=T.links.filter(l=>!l.includes(id)); save(); renderPanel(); break; }
    case "string": stringMode=!stringMode; selCard=null; renderPanel(); break;
    case "unstring": { const T=curT(); if(ROOM.on){ const l=T.links[+id]; if(l) roomDel("links",l[2]); drawStrings(); break; } T.links.splice(+id,1); save(); drawStrings(); break; }
    case "test": tested=true; renderPanel(); break;
    case "clueRm": C.clues.splice(+id,1); save(); renderPanel(); break;
    case "clueWall": { const cl=C.clues[+id]; if(cl) addWallItem({kind:"text",text:cl.t.slice(0,280),src:cl.src}); break; }
    case "termWall": { const l=C.termLog[+id]; if(l) addWallItem({kind:"text",text:l.out.slice(0,280),src:"Terminal: "+l.cmd}); break; }
    case "ivWall": { const w=C.ivWho, ar=(C.ivAsked||{})[w]; if(!ar||!ar.length) break; const qa=INTERVIEWS[K.id][w][ar[ar.length-1]]; addWallItem({kind:"text",text:qa[1],src:K.SUS[w].name+", interview"}); break; }
    case "clipText": { const t=selText().trim(); if(!t){ toast("Select some text in the document first, then press Clip."); break; } addWallItem({kind:"text",text:t.slice(0,280),src:`${exNo(C.evSel)} ${K.EV[C.evSel].title}`}); lastSel=""; break; }
    case "clipMode": { const svg=document.querySelector("#sceneWrap svg")||document.querySelector(".viewer .doc svg"); if(!svg){ toast("Open the scene photo first."); break; } exitClip(); clipTarget=svg; svg.parentElement.classList.add("clipping"); toast("Drag a box over the part of the photo to clip. Esc cancels."); break; }
    case "addNote": { const k=addWallItem({kind:"note",text:""}); setTimeout(()=>{ const t=document.querySelector(`textarea[data-key="${k}"]`); if(t) t.focus(); },50); break; }
    case "pen": penMode=!penMode; stringMode=false; selCard=null; renderPanel(); if(penMode) toast("Red pen: drag on the wall to circle anything."); break;
    case "undoRing": { const T=curT(); if(ROOM.on){ const r=T.rings[T.rings.length-1]; if(r) roomDel("rings",r._k); renderPanel(); break; } (T.rings||[]).pop(); save(); renderPanel(); break; }
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
    if(K.codeQ.accept.includes(v)){ complete("code"); renderPanel(); } else { miss(); document.getElementById("codeFb").innerHTML=`<div class="feedback badf">The archive doesn't support that date.</div>`; } }
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
    if(ROOM.on){ const at=iso(); ROOM.seenVerdictAt=at; C.verdict.by=detName(); roomMeta({verdict:Object.assign({},C.verdict,{uid:SYNC.uid,at})}); }
    document.getElementById("panel").innerHTML=courtHTML(C.verdict,true); window.scrollTo(0,0);
    const seats=[...document.querySelectorAll(".juror")], order=shuffle(seats.map((_,i)=>i),3);
    const hb=setInterval(()=>sfx("heart"),820); setTimeout(()=>clearInterval(hb),300+12*220+200);
    order.forEach((ix,k)=>setTimeout(()=>{ const s=seats[ix]; sfx("vote"); s.classList.add(s.dataset.v); s.querySelector(".jf").innerHTML=faceSVG(JURORS[+s.dataset.i],{mood:s.dataset.v==="y"?"smile":"frown"}); s.querySelector(".jl").textContent=s.dataset.v==="y"?"CHARGE":"NO"; },300+k*220));
    setTimeout(()=>{ sfx("gavel"); document.getElementById("outcome").hidden=false; partnerSay(j.charged?`Charged. Nice work, ${detName()}. That one goes on your record.`:sus===V.culprit?"Right person, thin case. Let's strengthen it and go back in.":"The defence tore that apart. Someone else did this."); },300+12*220+300);
  }
});
document.addEventListener("change", e=>{
  if(e.target.name==="vx"){ const c=document.querySelectorAll('input[name="vx"]:checked'); if(c.length>6){ e.target.checked=false; toast("Six exhibits at most"); } document.getElementById("xc").textContent=`(${Math.min(6,c.length)}/6)`; }
  if(e.target.id==="tSus"){ if(ROOM.on) roomMeta({suspect:e.target.value}); else curT().suspect=e.target.value; tested=false; save(); renderPanel(); }
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
  if(stringMode){ if(!selCard){ selCard=id; card.classList.add("sel"); } else if(selCard!==id){ const T=curT(); if(!T.links.some(l=>l.includes(selCard)&&l.includes(id))) (ROOM.on?roomSet("links","l"+Date.now().toString(36),{a:selCard,b:id,by:detName()}):T.links.push([selCard,id])); selCard=null; sfx("click"); save(); renderPanel(); } return; }
  const c=curT().cards.find(x=>cardKey(x)===id); if(!c) return; drag={c,el:card,sx:e.clientX,sy:e.clientY,ox:c.x,oy:c.y}; card.setPointerCapture(e.pointerId); card.style.cursor="grabbing"; card.style.zIndex=5;
});
document.addEventListener("pointermove", e=>{ if(draft){ draftMove(e); return; } if(!drag) return; drag.c.x=Math.max(0,Math.min(1050,drag.ox+e.clientX-drag.sx)); drag.c.y=Math.max(8,Math.min(680,drag.oy+e.clientY-drag.sy)); drag.el.style.left=drag.c.x+"px"; drag.el.style.top=drag.c.y+"px"; drawStrings(); });
document.addEventListener("pointerup", e=>{ if(draft){ draftEnd(e); return; } if(drag){ drag.el.style.cursor=""; drag.el.style.zIndex=""; if(ROOM.on&&(drag.c.x!==drag.ox||drag.c.y!==drag.oy)) roomSet("cards",cardKey(drag.c),drag.c); drag=null; save(); } });

function playAudio(btn){
  btn.disabled=true; const doc=btn.closest(".doc"), bars=[...doc.querySelectorAll(".wave i")], lines=[...doc.querySelectorAll(".trans p")];
  const total=(+lines[lines.length-1].dataset.ms||0)+1800;
  try{ if(!G.mute){ if(!AC) AC=new (window.AudioContext||window.webkitAudioContext)(); const len=Math.floor(AC.sampleRate*total/1000), buf=AC.createBuffer(1,len,AC.sampleRate), d=buf.getChannelData(0); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*.03*(1+.5*Math.sin(i/900)); const src=AC.createBufferSource(); src.buffer=buf; src.connect(AC.destination); src.start(); } }catch(e){}
  bars.forEach((b,i)=>setTimeout(()=>b.classList.add("p"),i*total/bars.length));
  lines.forEach(l=>setTimeout(()=>l.classList.add("on"),+l.dataset.ms));
  setTimeout(()=>{ btn.disabled=false; btn.textContent="↻ Replay"; bars.forEach(b=>b.classList.remove("p")); },total+300);
}

/* ======================= CASES 4–5 WIRING ======================= */
CASES.saffron.clearance=4; CASES.bay.clearance=5; CASES.atrium.clearance=6; CASES.fare.clearance=7; CASES.ward.clearance=8;
(function(){
  const c6=CASES.atrium, c7=CASES.fare, c8=CASES.ward;
  c6.ev("tipguard","Statements","Night guard's tip","Dispatch tip","dispatch",()=>D("DISPATCH · CHANNEL 2","HARBOUR EXCHANGE GUARD",`<p>"About twenty to eleven the car-park lift went up to twelve. Nobody had come through the lobby. I thought it was Mr Vale's driver. It wasn't, his car never moved."</p>`));
  c7.ev("tiprank","Statements","Rank driver's tip","Dispatch tip","dispatch",()=>D("DISPATCH · CHANNEL 2","CAB 52 DRIVER",`<p>"Quarter to three I saw a fella in a grey coat get out the back of cab 11 at the dark end. He didn't take a bag. He walked off toward Departures like he was late for nothing."</p>`));
  DISPATCH.push(
    {id:"lead_atrium",case:"any",kind:"Emergency call",title:"Harbour Exchange, level 9",when:()=>nDone("bay")>=4||solved("bay"),opens:"atrium",
     text:"All units. Gideon Vale has been found dead at the foot of the atrium in his own office, two days before he was due to name names. There's a note. Major Crimes wants someone who doesn't believe in notes. {name}, that's you."},
    {id:"atrium_tip",case:"atrium",kind:"Witness tip",title:"Harbour Exchange night guard",when:()=>!!(G.cases.atrium&&G.cases.atrium.done.statements),unlock:["atrium","tipguard"],
     text:"Dispatch to {name}. The Harbour Exchange night guard called back. He saw the car-park lift go up to level 12 about twenty to eleven, with nobody in the lobby. Logged to your file."},
    {id:"lead_fare",case:"any",kind:"Emergency call",title:"PMR airport taxi rank",when:()=>nDone("atrium")>=4||solved("atrium"),opens:"fare",
     text:"All units. A night cabbie has been found dead in his taxi at the far end of the airport rank. Uniform are calling it a robbery. The dashcam card is missing. {name}, have a look before they close it."},
    {id:"fare_tip",case:"fare",kind:"Witness tip",title:"Cab 52 driver",when:()=>!!(G.cases.fare&&G.cases.fare.done.scene),unlock:["fare","tiprank"],
     text:"Dispatch to {name}. Another cabbie on the rank says a man in a grey coat got out of the back of cab 11 at the dark end around quarter to three. Logged to your file."},
    {id:"lead_ward",case:"any",kind:"Emergency call",title:"Harbour General, Ward Nine",when:()=>nDone("fare")>=4||solved("fare"),opens:"ward",
     text:"All units. Ward Nine at Harbour General lost power for four minutes. When it came back, a patient was dead and his alarm was muted. The hospital wants it quiet. {name}, make it loud."},
    {id:"ward_tip",case:"ward",kind:"Case development",title:"Harbour General board office",when:()=>!!(G.cases.ward&&G.cases.ward.done.cipher),unlock:["ward","tipboard"],
     text:"Dispatch to {name}. The hospital board secretary forwarded an email from Victor Hale asking for an urgent meeting about theatre drug stock and a relative on the staff. Added to your file."});
  c8.ev("tipboard","Records","Hospital board secretary","Dispatch development","dispatch",()=>D("HARBOUR GENERAL · BOARD OFFICE","VIA DISPATCH",`<p>Victor Hale emailed the board secretary on 20 Oct asking for an urgent meeting about 'theatre drug stock and a member of staff I am related to'.</p>`));
})();
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
  "atrium:celeste":{skin:"#f0d2bf",hair:"#2b1d18",style:"bob",shirt:"#1a1d24",collar:"suit",mood:"smile",bg:"#2a1d22",eye:"#3d5a3a",acc:"earrings"},
  "atrium:sabine":{skin:"#efd0b8",hair:"#c9a86a",style:"long",shirt:"#5a2a3a",collar:"shirt",mood:"frown",bg:"#2a2028",acc:"pearls"},
  "atrium:hugo":{skin:"#d9a882",hair:"#3a2a20",style:"curly",shirt:"#3e4a5a",collar:"shirt",glasses:true,beard:"stubble",mood:"neutral",bg:"#1f2733"},
  "atrium:mina":{skin:"#e9c2a4",hair:"#141010",style:"fringe",shirt:"#2f5a4a",collar:"tee",mood:"frown",bg:"#1d2a26"},
  "atrium:tariq":{skin:"#5c3a26",hair:"#1a1412",style:"cap",shirt:"#22304a",collar:"uniform",beard:"full",age:1,mood:"neutral",bg:"#1d2532"},
  "fare:silas":{skin:"#e6bfa0",hair:"#3a2a20",style:"slick",shirt:"#4a4f58",collar:"suit",mood:"smirk",bg:"#1d2026",eye:"#5a6a7a"},
  "fare:dario":{skin:"#c68f68",hair:"#1a1412",style:"short",shirt:"#3a3a2a",collar:"leather",beard:"stubble",mood:"frown",bg:"#22201c"},
  "fare:lena":{skin:"#f1d3bd",hair:"#7a5232",style:"bun",shirt:"#22304a",collar:"uniform",mood:"neutral",bg:"#1f2630"},
  "fare:marta":{skin:"#e2b796",hair:"#9a9a98",style:"bob",shirt:"#5a3b4a",collar:"tee",acc:"headphones",age:1,mood:"smirk",bg:"#2a2028"},
  "fare:jonah":{skin:"#7d5236",hair:"#121010",style:"short",shirt:"#e2b13f",collar:"tee",mood:"neutral",bg:"#22201c"},
  "ward:marcus":{skin:"#e2b796",hair:"#2a2220",style:"short",shirt:"#3a6ea5",collar:"scrubs",glasses:true,mood:"smile",bg:"#1d2532"},
  "ward:clara":{skin:"#f1d3bd",hair:"#b38a4a",style:"long",shirt:"#7a1f2b",collar:"shirt",mood:"frown",bg:"#2a1d22",acc:"earrings"},
  "ward:abel":{skin:"#c68f68",hair:"#1a1412",style:"short",shirt:"#2f8a86",collar:"scrubs",beard:"stubble",mood:"neutral",bg:"#1f2d2c"},
  "ward:kofi":{skin:"#5c3a26",hair:"#121010",style:"shaved",shirt:"#3b4656",collar:"uniform",mood:"frown",bg:"#1f2733"},
  "ward:ruth":{skin:"#efd2b0",hair:"#d9d6d0",style:"bun",shirt:"#141820",collar:"suit",age:1,mood:"smirk",bg:"#2c2530",acc:"pearls"},
  "bay:sara":{skin:"#efd2b0",hair:"#121014",style:"bob",shirt:"#22304a",collar:"uniform",mood:"neutral",bg:"#1d2532"}
});
Object.assign(INTERVIEWS,{
  atrium:{
    celeste:[["When did you leave?","I left at quarter past ten. He was fine. Tired, but fine."],["How did you hear?","The police called me at midnight. He wrote that he couldn't face the trial. That's the part I can't get past."],["Who ran the firm's money?","I sign things. Gideon told me what to sign."],["Did you go back up?","Why would I go back up? I went home."]],
    sabine:[["Where were you?","I was at the Halden gallery dinner until after midnight."],["Your marriage?","We hadn't really been married for years. The prenup made sure I'd notice."],["Would he take his own life?","He'd never kill himself. He was too vain."]],
    hugo:[["Your interview with Vale?","He cancelled by text at five past ten. 'Not tonight. Tomorrow.'"],["The visitor book says you arrived.","I never went to Harbour Exchange that night. Someone wrote my name."],["What was he going to say?","He was finally going to talk. Someone made sure he didn't."]],
    mina:[["Why were you fired?","He fired me by email. Three years, and an email."],["His safe?","He used the same code for everything: the year the firm was founded, then our floor number. Twelve. He thought it was clever."],["Who ran the money?","Celeste ran the money side. He ran the clients."]],
    tariq:[["Where were you?","I waited on P1 the whole night, like always."],["Your wages?","He owes me three months. I still wouldn't hurt him."],["Did you see anyone?","Ms Marlow's car was still on P2 when I went for coffee at eleven. I thought she'd gone home hours before."]]
  },
  fare:{
    silas:[["Where did you go after the cab?","I got out at Departures and went straight through security."],["Did you talk to the driver?","Barely. Small talk. Weather."],["The cab was robbed.","Whoever did it took the camera's memory card, I suppose, so there's no footage."],["Have you met him before?","I'd never seen that driver before in my life."]],
    dario:[["You fought with Brandt.","Yes, we had a fight. Over a fare, nothing more."],["What did you hear?","Heard he got robbed for his takings. Sad way to go."],["Where were you?","I was driving all night. Check my cab."]],
    lena:[["When did you last hear from him?","Dad texted me at half two. He said he finally knew. I thought he meant about selling the cab."],["His PINs?","He changed every PIN to the date of that crash on Marina Road. Day, then month. He said he'd never let himself forget it."],["Where were you?","I was working the Cairo flight. We landed at twenty past four."]],
    marta:[["His complaint?","His complaint was nonsense. Ask anyone."],["Where were you?","I didn't move from the dispatch desk all night."],["Anything odd?","He'd parked at the dark end. He never did that. He hated the dark end."]],
    jonah:[["What did you see?","I saw the cab door open and the light on. He wasn't moving."],["The wallet?","I never touched any wallet. Check the cameras."],["What did you do?","I called security straight away."]]
  },
  ward:{
    marcus:[["Where were you last night?","I was at home asleep. Clara will tell you."],["How could this happen?","In the dark, anyone could have pushed something into the port on his drip."],["You and Victor?","Victor was like a father to me."],["The theatre stock audit?","Paperwork. Every hospital has discrepancies."]],
    clara:[["When did you leave?","We left Dad at twenty to midnight. He was joking with the nurse."],["Was Marcus home all night?","Marcus was asleep next to me all night. I think. I took a sleeping tablet."],["Monday?","Dad said he had news for us on Monday."]],
    abel:[["Where were you at 02:12?","I was in room 4 when the lights went."],["The alarm?","The alarm should have sounded at the station. It didn't. Someone muted it at the bed."],["His drip?","I checked his drip at midnight. It was fine."]],
    kofi:[["The plant-room sheet has your initials.","I've never been in that plant room. My card doesn't even open it."],["Where were you?","I was in A&E all night, on the radio."],["Who'd use your initials?","Anyone who's seen my badge. It's on my chest."]],
    ruth:[["Where were you?","I was in Doha. Check the hotel."],["The company?","Victor and I disagreed about the company. That's business."],["Who gains?","Clara will be a very rich woman now. And her husband."]]
  },
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
    caller("cal_atrium1","atrium",2,"It's a long way down, isn't it, Detective {name}? Mind the railing."),
    caller("cal_atrium2","atrium",5,"Everyone writes a last note eventually. Shall I draft yours, {name}?"),
    caller("cal_fare1","fare",2,"Taxi for {name}? I know where you live. Every driver in this city does."),
    caller("cal_fare2","fare",5,"Some witnesses wait years to be sure. You've had days, Detective."),
    caller("cal_ward1","ward",2,"Hospitals are so quiet at night, {name}. Until the lights go."),
    caller("cal_ward2","ward",5,"Four minutes, Detective {name}. That's all it takes. Count them."),
    caller("cal_bay2","bay",5,"I have keys to every door you'll ever walk through, {name}. Sleep well."));
})();

/* ======================= DETECTIVE FACE EDITOR ======================= */
const P_SKIN=["#f8e1d0","#f1d3bd","#e2b796","#d9a882","#c68f68","#b98258","#a26e4a","#8c5a3a","#7d5236","#5c3a26","#4a2c1c"];
const P_HAIR=["#1a1412","#3a2a20","#7a5232","#b38a4a","#e8d8a8","#c45a2a","#8a2a1e","#9a9a98","#d9d6d0","#f4f2ec","#2a3a6a","#6a4aa8","#d06a9a","#2a8a8a"];
const P_EYE=["#3b2a1e","#8a6a2a","#b07a1a","#3d5a3a","#3a5a7a","#5a7a8a","#6a6a6a","#2a2a2a"];
const P_SHIRT=["#2c4a5c","#22304a","#3b3b40","#1a1a1a","#7a1f2b","#a8261c","#2f5a4a","#5a6a3a","#5b3a6a","#8a5a3a","#3a2a1a","#c9a24a","#c9c2b0","#e9e4da","#f4f2ec"];
const P_HATC=["#2b2f36","#1a1a1a","#5a4632","#8a5a3a","#c9b48a","#22304a","#2f5a4a","#5b3a6a","#7a1f2b","#a8261c","#c9a24a","#f4f2ec"];
const P_ACCC=["#7a1f2b","#a8261c","#22304a","#2f5a4a","#5b3a6a","#c9a24a","#1a1a1a","#e9e4da"];
const P_STYLES=[["short","Short"],["sidepart","Side parting"],["slick","Slicked back"],["spiky","Spiky"],["curly","Curly"],["afro","Afro"],["locs","Locs"],["braids","Braids"],["ponytail","Ponytail"],["bun","Bun"],["bob","Bob"],["long","Long"],["fringe","Fringe"],["mohawk","Mohawk"],["shaved","Buzzed"],["bald","Bald"],["hood","Hood up"],["cap","Cap"]];
const P_COLLARS=[["suit","Suit"],["trench","Trench coat"],["waistcoat","Waistcoat"],["shirt","Shirt"],["turtleneck","Turtleneck"],["tee","T-shirt"],["hoodie","Hoodie"],["leather","Leather jacket"],["kandura","Kandura"],["abaya","Abaya"],["uniform","Uniform"],["vest","Police vest"],["labcoat","Lab coat"],["scrubs","Scrubs"],["chef","Chef's whites"]];
const P_BEARD=[["none","None"],["stubble","Stubble"],["mustache","Moustache"],["chevron","Thick moustache"],["handlebar","Handlebar"],["goatee","Goatee"],["sideburns","Sideburns"],["full","Full beard"]];
const P_MOOD=[["smirk","Knowing"],["neutral","Steady"],["smile","Friendly"],["frown","Grim"],["suspicious","Suspicious"],["tired","Exhausted"]];
const P_SHAPE=[["oval","Oval"],["round","Round"],["long","Long"],["square","Square"]];
const P_AGE=[["0","Rookie"],["1","Seasoned"],["2","Veteran"]];
const P_MARKS=[["none","None"],["scar","Scar"],["freckles","Freckles"],["mole","Beauty mark"],["eyebags","Late nights"],["bandage","Plaster"]];
const P_EYEWEAR=[["none","None"],["rect","Glasses"],["round","Round glasses"],["half","Half-rims"],["aviator","Aviator shades"],["monocle","Monocle"],["patch","Eye patch"]];
const P_HATS=[["none","None"],["fedora","Fedora"],["flatcap","Flat cap"],["beanie","Beanie"],["beret","Beret"],["police","Police cap"],["ghutra","Ghutra & agal"],["hijab","Hijab"],["turban","Turban"]];
const P_ACC=[["","None"],["tie","Tie"],["bowtie","Bow tie"],["scarf","Scarf"],["badge","Badge pin"],["chain","Chain"],["earrings","Earrings"],["pearls","Pearls"],["headphones","Headphones"],["lanyard","Lanyard"]];
function defaultFace(){ return {skin:P_SKIN[4],hair:P_HAIR[0],style:"short",eye:P_EYE[0],shirt:P_SHIRT[0],collar:"trench",beard:"none",glasses:false,mood:"smirk",shape:"oval",age:0,marks:"none",eyewear:"none",hat:"fedora",hatc:P_HATC[0],acc:"",accc:P_ACCC[0]}; }
function cleanFace(f){ if(!f||typeof f!=="object") return null; const hex=v=>typeof v==="string"&&/^#[0-9a-fA-F]{6}$/.test(v), inL=(v,l)=>l.some(x=>x[0]===v), pick=(v,l,d)=>inL(v,l)?v:d;
  if(!hex(f.skin)||!hex(f.hair)||!hex(f.eye)||!hex(f.shirt)||!inL(f.style,P_STYLES)||!inL(f.collar,P_COLLARS)||!inL(f.beard,P_BEARD)||!inL(f.mood,P_MOOD)) return null;
  return {skin:f.skin,hair:f.hair,eye:f.eye,shirt:f.shirt,style:f.style,collar:f.collar,beard:f.beard,mood:f.mood,glasses:!!f.glasses,
    shape:pick(f.shape,P_SHAPE,"oval"),age:[0,1,2].includes(+f.age)?+f.age:0,marks:pick(f.marks,P_MARKS,"none"),eyewear:pick(f.eyewear,P_EYEWEAR,f.glasses?"rect":"none"),
    hat:pick(f.hat,P_HATS,"none"),hatc:hex(f.hatc)?f.hatc:P_HATC[0],acc:pick(f.acc==null?"":f.acc,P_ACC,""),accc:hex(f.accc)?f.accc:P_ACCC[0]}; }
function myFaceSpec(){ const p=G.profile; const f=Object.assign(defaultFace(),p&&p.face?{hat:"none",collar:"suit"}:{},cleanFace(p&&p.face)||{}); f.bg=shade(SWATCH[(p&&p.color)||0],-.62); return f; }
function myFace(){ return faceSVG(myFaceSpec()); }
function detAvatar(d){ const f=cleanFace(d.face); if(f){ f.bg=shade(SWATCH[+d.color||0]||SWATCH[0],-.62); return `<span class="av fav">${faceSVG(f)}</span>`; }
  return `<span class="av" style="background:${SWATCH[+d.color||0]||SWATCH[0]}">${esc(String(d.name||"?")[0]||"?").toUpperCase()}</span>`; }
function swatchRow(name,list,cur){ return `<div class="swatches">${list.map((c,i)=>`<label style="background:${c}" aria-label="${name} option ${i+1}"><input type="radio" name="${name}" value="${c}" ${c===cur?"checked":""}></label>`).join("")}</div>`; }
function selectRow(id,list,cur){ return `<select class="field" id="${id}">${list.map(([v,l])=>`<option value="${v}" ${String(v)===String(cur)?"selected":""}>${l}</option>`).join("")}</select>`; }
function readFaceForm(){ const v=n=>(document.querySelector(`input[name="${n}"]:checked`)||{}).value, g=id=>document.getElementById(id), f=editDraft&&editDraft.face?Object.assign(defaultFace(),editDraft.face):myFaceSpec();
  if(!g("fStyle")) return cleanFace(f)||defaultFace();
  return cleanFace({skin:v("fSkin")||f.skin,hair:v("fHair")||f.hair,eye:v("fEye")||f.eye,shirt:v("fShirt")||f.shirt,hatc:v("fHatc")||f.hatc,accc:v("fAccc")||f.accc,
    style:g("fStyle").value,collar:g("fCollar").value,beard:g("fBeard").value,mood:g("fMood").value,shape:g("fShape").value,age:g("fAge").value,marks:g("fMarks").value,
    eyewear:g("fEyewear").value,hat:g("fHat").value,acc:g("fAcc").value})||defaultFace(); }
function updateFacePreview(){ const pv=document.getElementById("idPrev"); if(!pv) return; const f=readFaceForm(), col=+((document.querySelector('input[name="idCol"]:checked')||{}).value||0); f.bg=shade(SWATCH[col],-.62); pv.innerHTML=faceSVG(f); }
let editDraft=null;
function randomFace(){ const r=a=>a[Math.floor(Math.random()*a.length)], rv=l=>r(l)[0], sometimes=(p,v,d)=>Math.random()<p?v:d;
  return {skin:r(P_SKIN),hair:sometimes(.85,r(P_HAIR.slice(0,10)),r(P_HAIR)),eye:r(P_EYE),shirt:r(P_SHIRT),hatc:r(P_HATC),accc:r(P_ACCC),
    style:rv(P_STYLES),collar:rv(P_COLLARS),beard:sometimes(.55,rv(P_BEARD),"none"),mood:rv(P_MOOD),shape:rv(P_SHAPE),age:+rv(P_AGE),
    marks:sometimes(.5,rv(P_MARKS),"none"),eyewear:sometimes(.45,rv(P_EYEWEAR),"none"),hat:sometimes(.6,rv(P_HATS),"none"),acc:sometimes(.6,rv(P_ACC),"")}; }
function idCardHTML(){
  const p=G.profile;
  if(!p||editingId){
    const d=editDraft||{name:p?p.name:"",motto:p?p.motto:"",color:p?p.color:0}, col=d.color||0;
    const f=editDraft&&editDraft.face?Object.assign(defaultFace(),editDraft.face):myFaceSpec();
    const sec=(title,body)=>`<div class="fsec"><h4>${title}</h4><div class="fgrid">${body}</div></div>`;
    const sel=(id,label,list,cur)=>`<div><label class="l" for="${id}">${label}</label>${selectRow(id,list,cur)}</div>`;
    const sw=(name,label,list,cur)=>`<div class="wide"><span class="l">${label}</span>${swatchRow(name,list,cur)}</div>`;
    return `<form class="idcard idform" id="idForm" autocomplete="off"><span class="eyebrow">${p?"Edit your ID":"Create your detective"}</span>
    <div class="idedit"><div class="idprevwrap"><div class="idprev" id="idPrev">${faceSVG(Object.assign({},f,{bg:shade(SWATCH[col],-.62)}))}</div>
      <button type="button" class="btn small" data-act="faceRandom">Randomise</button></div>
    <div class="idfields">
      <label class="l" for="idName">Detective name</label><input class="field" id="idName" maxlength="28" required value="${esc(d.name)}" placeholder="What other detectives call you">
      <label class="l" for="idMotto">Calling card</label><input class="field" id="idMotto" maxlength="70" value="${esc(d.motto)}" placeholder="One line, e.g. Everyone lies.">
      ${sec("Face",sel("fShape","Face shape",P_SHAPE,f.shape)+sel("fAge","Age",P_AGE,f.age)+sw("fSkin","Skin",P_SKIN,f.skin)+sel("fMood","Expression",P_MOOD,f.mood)+sel("fMarks","Marks",P_MARKS,f.marks))}
      ${sec("Hair",sel("fStyle","Hairstyle",P_STYLES,f.style)+sel("fBeard","Facial hair",P_BEARD,f.beard)+sw("fHair","Hair colour",P_HAIR,f.hair))}
      ${sec("Eyes",sel("fEyewear","Eyewear",P_EYEWEAR,f.eyewear)+sw("fEye","Eye colour",P_EYE,f.eye))}
      ${sec("Headwear",sel("fHat","Headwear",P_HATS,f.hat)+sw("fHatc","Headwear colour",P_HATC,f.hatc))}
      ${sec("Outfit",sel("fCollar","Outfit",P_COLLARS,f.collar)+sel("fAcc","Accessory",P_ACC,f.acc)+sw("fShirt","Outfit colour",P_SHIRT,f.shirt)+sw("fAccc","Tie, bow tie and scarf colour",P_ACCC,f.accc))}
      <span class="l" style="margin-top:10px">Badge colour</span><div class="swatches">${SWATCH.map((c,i)=>`<label style="background:${c}" aria-label="Badge colour ${i+1}"><input type="radio" name="idCol" value="${i}" ${i===col?"checked":""}></label>`).join("")}</div>
    </div></div>
    <div class="idacts"><button class="btn primary" type="submit">${p?"Save ID":"Issue my badge"}</button>${p?`<button class="btn" type="button" data-act="cancelId">Cancel</button>`:""}</div></form>`;
  }
  const st=totalStars();
  return `<div class="idcard"><span class="eyebrow">Warrant card · Precinct Zero</span><div class="idrow" style="margin-top:10px"><div class="idav">${myFace()}</div>
  <div><div class="idname">${esc(p.name)}</div><div class="idbadge">Badge ${esc(p.badge)}</div><div class="idrank">${rankOf(st)} · Clearance ${clearance()} · ${solvedIds().length}/${CASE_ORDER.length} cases closed · <span class="stars">${"★".repeat(st)}</span>${st?"":"no stars yet"}</div></div></div>
  ${p.motto?`<div class="idmotto">“${esc(p.motto)}”</div>`:""}<div class="idacts"><button class="btn small" data-act="editId">Edit ID &amp; face</button></div></div>`;
}
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]"); if(!a) return;
  if(a.dataset.act==="faceRandom"){ const g=id=>document.getElementById(id);
    editDraft={name:g("idName").value,motto:g("idMotto").value,color:+((document.querySelector('input[name="idCol"]:checked')||{}).value||0),face:randomFace()};
    const slot=document.getElementById("idslot"); if(slot){ slot.innerHTML=idCardHTML(); sfx("click"); } }
  if(a.dataset.act==="cancelId"||a.dataset.act==="editId") editDraft=null;
});
document.addEventListener("submit",e=>{ if(e.target.id==="idForm") editDraft=null; },true);
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
  it.x=40+(n%6)*185; it.y=40+(Math.floor(n/6)%4)*170+(n%2)*12; if(ROOM.on) roomSet("cards",it.key,Object.assign({by:detName()},it)); else T.cards.push(it); save(); sfx("paper");
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
  if(d.type==="ring"){ if(d.r.w>14&&d.r.h>10){ const T=curT(); ringAdd(T,{x:Math.round(d.r.x),y:Math.round(d.r.y),w:Math.round(d.r.w),h:Math.round(d.r.h),seed:d.r.seed}); save(); sfx("click"); renderPanel(); } else drawRings(); return; }
  d.el.remove(); lastClipAt=Date.now(); const r=d.r;
  const sx=(Math.min(d.sx,d.ex)-r.left)/r.width*800, sy=(Math.min(d.sy,d.ey)-r.top)/r.height*500, w=Math.abs(d.ex-d.sx)/r.width*800, h=Math.abs(d.ey-d.sy)/r.height*500;
  if(w<20||h<14){ toast("Drag a bigger box to clip."); return; }
  exitClip(); addWallItem({kind:"clip",vb:[sx,sy,w,h].map(v=>+v.toFixed(1)),src:K.scene.title});
}
function selText(){ const s=window.getSelection(); const t=s&&!s.isCollapsed?s.toString():""; return t||lastSel||""; }
document.addEventListener("selectionchange",()=>{ const s=window.getSelection(); if(!s||s.isCollapsed||!s.anchorNode) return; const n=s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement; if(n&&n.closest&&n.closest(".viewer")) lastSel=s.toString(); });
document.addEventListener("input",e=>{ if(e.target.classList&&e.target.classList.contains("notetext")){ const it=curT().cards.find(x=>x.key===e.target.dataset.key); if(it){ it.text=e.target.value.slice(0,300); save(); if(ROOM.on){ clearTimeout(noteT[it.key]); const snap=JSON.parse(JSON.stringify(it)); noteT[it.key]=setTimeout(()=>roomSet("cards",snap.key,snap),700); } } } });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ if(clipTarget){ exitClip(); toast("Clipping cancelled"); } if(penMode){ penMode=false; if(C.tab==="wall") renderPanel(); } } });

/* ======================= CASE ROOMS (CO-OP) ======================= */
// SYNC is filled in by whichever backend is available: the claude.ai artifact database
// (initDirectory) or Firebase (js/directory-firebase.js). Both expose doc()/collection()
// with get/set/update/delete/onSnapshot, so the room code below works on either.
const SYNC={kind:null,store:null,uid:null};
const ROOM={on:false,code:null,meta:null,members:{},cards:{},links:{},rings:{},notes:[],prog:{},unsub:[],loaded:{},seenVerdictAt:null};
const RCHARS="ABCDEFGHJKMNPQRSTUVWXYZ23456789", noteT={};
const TABNAME={office:"Office",brief:"Case file",interview:"Interview room",evidence:"Evidence",dispatch:"Dispatch",lab:"Forensics lab",walk:"Walk-through",phone:"Phone",terminal:"Terminal",wall:"Evidence wall",notebook:"Notebook",verdict:"Courtroom"};
const iso=()=>new Date().toISOString();
function genCode(){ let s=""; for(let i=0;i<5;i++) s+=RCHARS[Math.floor(Math.random()*RCHARS.length)]; return s; }
const rpath=c=>`rooms/${ROOM.code}${c?"/"+c:""}`;
function rcol(c){ return SYNC.store.collection(rpath(c)); }
function rdoc(){ return SYNC.store.doc(rpath()); }
let rq=Promise.resolve();
function rwrite(fn){ rq=rq.then(fn).catch(()=>toast("Couldn't reach the case room. Check your connection or access.")); return rq; }
function roomSet(c,key,obj){ if(!ROOM.on) return; const o=JSON.parse(JSON.stringify(obj)); ROOM[c][key]=o; rwrite(()=>rcol(c).doc(key).set(o)); }
function roomDel(c,key){ if(!ROOM.on||!key) return; delete ROOM[c][key]; rwrite(()=>rcol(c).doc(key).delete()); }
function roomMeta(patch){ if(!ROOM.on) return; ROOM.meta=Object.assign({},ROOM.meta,patch); rwrite(()=>rdoc().update(patch)); }
function roomNote(text,src){ if(!ROOM.on||!text) return; const n={uid:SYNC.uid,name:detName(),text:String(text).slice(0,400),src:src||"",at:iso()}; rwrite(()=>rcol("notes").add(n)); }
function roomProg(id){ if(ROOM.on&&!ROOM.prog[id]) roomSet("prog",id,{uid:SYNC.uid,name:detName(),at:iso()}); }
function roomPresence(){ if(!ROOM.on||!G.profile) return; const m={name:G.profile.name,badge:G.profile.badge,color:G.profile.color||0,face:cleanFace(G.profile.face)||null,tab:C.tab,at:iso()}; ROOM.members[SYNC.uid]=m; rwrite(()=>rcol("members").doc(SYNC.uid).set(m)); }
function ringAdd(T,r){ if(ROOM.on) roomSet("rings","r"+Date.now().toString(36),Object.assign({at:iso(),by:detName()},r)); else (T.rings=T.rings||[]).push(r); }
function roomTheory(){ return {id:"team",name:"Team board",suspect:(ROOM.meta&&ROOM.meta.suspect)||"",
  cards:Object.values(ROOM.cards),
  links:Object.entries(ROOM.links).map(([k,l])=>[l.a,l.b,k]),
  rings:Object.entries(ROOM.rings).sort((a,b)=>String(a[1].at).localeCompare(String(b[1].at))).map(([k,r])=>Object.assign({},r,{_k:k}))}; }
function stopRoomSubs(){ ROOM.unsub.forEach(u=>{ try{ u(); }catch(e){} }); ROOM.unsub=[]; }
function safeRender(){
  if(G.screen!=="case") return;
  const a=document.activeElement;
  if(drag||draft||ivTalking||document.querySelector(".juror:not(.y):not(.n)")||(a&&a.closest&&a.closest("#panel")&&a.matches("input,textarea,select"))){ renderChrome(); if(C.tab==="wall"){ drawStrings(); drawRings(); } return; }
  const keep=[".boardwrap",".term .out",".evlist",".scene-wrap",".tnlist"].map(s=>{ const el=document.querySelector(s); return el?[s,el.scrollLeft,el.scrollTop]:null; }).filter(Boolean);
  renderPanel();
  keep.forEach(([s,l,t])=>{ const el=document.querySelector(s); if(el){ el.scrollLeft=l; el.scrollTop=t; } });
}
function roomErr(){ toast("Lost connection to the case room."); }
function applyProg(id,p,quiet){
  const type=id[0], key=id.slice(2), other=p.uid!==SYNC.uid, who=p.name||"A teammate";
  if(type==="o"){ const o=K.OBJ.find(x=>x.id===key); if(!o||C.done[key]) return; C.done[key]=true; o.reward.forEach(r=>{ if(!has(r)) C.unlocked.push(r); });
    if(!quiet&&other){ toast(`${who} completed: ${o.t}`); sfx("unlock"); if(o.reward.length) stampFX("UNSEALED"); } }
  else if(type==="e"){ if(!K.EV[key]||has(key)) return; C.unlocked.push(key); if(!quiet&&other){ toast(`${who} unsealed ${K.EV[key].title}`); sfx("unlock"); } }
  else if(type==="h"){ const h=K.scene.hots.find(x=>x.id===key); if(!h||C.found.includes(key)) return; C.found.push(key); if(!C.clues.some(c=>c.t===h.t)) C.clues.push({t:h.t,src:K.scene.title}); if(!quiet&&other) toast(`${who} marked something in the scene photo`); }
  else if(type==="w"){ const st=walkState(); if(!WALK[K.id].items[key]||st.found.includes(key)) return; st.found.push(key); if(!quiet&&other) toast(`${who} marked something on the walk-through`); }
  else if(type==="c"){ if(!K.SUS[key]) return; const pr=pressOf(key); if(pr.cracked) return; pr.cracked=true; const t=((PRESS[K.id]||{})[key]||{}).crack; if(t&&!C.clues.some(c=>c.t.includes(t))) C.clues.push({t:`${K.SUS[key].name}, recorded confession: "${t}"`,src:"Interview room"}); if(!quiet&&other){ toast(`${who} broke ${K.SUS[key].name} in the interview room`); sfx("stamp"); } }
}
function subscribeRoom(){
  const S=ROOM, me=SYNC.uid;
  const watch=(name,q,fn)=>S.unsub.push(q.onSnapshot(snap=>{ const first=!S.loaded[name]; S.loaded[name]=true; fn(snap,first); },roomErr));
  S.unsub.push(rdoc().onSnapshot(s=>{
    if(!s.exists){ toast("This case room was closed."); leaveRoom(true); render(); return; }
    const m=s.data(); S.meta=m; const v=m.verdict;
    if(v&&v.at&&v.at!==S.seenVerdictAt){ S.seenVerdictAt=v.at; if(v.uid!==me) remoteVerdict(v); }
    renderChrome(); if(C.tab==="wall") safeRender();
  },roomErr));
  watch("members",rcol("members"),(snap,first)=>{ const before=S.members; S.members={}; snap.docs.forEach(d=>{ S.members[d.id]=d.data(); if(!first&&d.id!==me&&!before[d.id]){ toast(`${d.data().name} joined the room`); sfx("radio"); } }); renderChrome(); });
  const live=(name)=>watch(name,rcol(name),snap=>{ const o={}; snap.docs.forEach(d=>{ o[d.id]=d.data(); }); S[name]=o; if(C.tab==="wall") safeRender(); });
  live("cards"); live("links"); live("rings");
  watch("prog",rcol("prog"),(snap,first)=>{ snap.docs.forEach(d=>{ const p=d.data(); S.prog[d.id]=p; applyProg(d.id,p,first); }); checkRecords(); save(); safeRender(); });
  watch("chat",rcol("chat").orderBy("at","desc").limit(100),onChatSnap);
  watch("notes",rcol("notes").orderBy("at","desc").limit(120),(snap,first)=>{ const ids=new Set(S.notes.map(n=>n._id)); S.notes=snap.docs.map(d=>Object.assign({_id:d.id},d.data()));
    if(!first) S.notes.filter(n=>!ids.has(n._id)&&n.uid!==me).slice(0,1).forEach(n=>toast(`${n.name}: ${String(n.text).slice(0,70)}`));
    if(C.tab==="notebook") safeRender(); });
}
async function joinRoom(code,silent){
  if(!SYNC.store){ toast("Case rooms need the online precinct. See the note in the Case Vault."); return false; }
  if(!G.profile){ toast("Create your detective ID first"); return false; }
  code=String(code||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5);
  if(code.length!==5){ toast("Room codes are 5 characters."); return false; }
  let snap; try{ snap=await SYNC.store.doc("rooms/"+code).get(); }catch(e){ toast("Couldn't reach the case room."); return false; }
  if(!snap.exists){ toast(`No case room with code ${code}.`); if(G.room&&G.room.code===code){ G.room=null; save(); } return false; }
  const meta=snap.data(); if(!CASES[meta.caseId]){ toast("That room is for a case this version doesn't have."); return false; }
  stopRoomSubs();
  closeChat();
  Object.assign(ROOM,{on:false,code,meta,members:{},cards:{},links:{},rings:{},notes:[],chat:[],prog:{},loaded:{},seenVerdictAt:(meta.verdict&&meta.verdict.at)||null});
  G.room={code,caseId:meta.caseId}; if(!G.open.includes(meta.caseId)) G.open.push(meta.caseId); save();
  openCase(meta.caseId); ROOM.on=true; subscribeRoom(); roomPresence(); renderPanel();
  if(!silent){ sfx("radio"); partnerSay(`We're in room ${code}, ${detName()}. Whatever anyone finds, the whole team sees.`); }
  return true;
}
async function createRoom(caseId){
  if(!SYNC.store){ toast("Case rooms need the online precinct. See the note in the Case Vault."); return; }
  if(!G.profile){ toast("Create your detective ID first"); const f=document.getElementById("idName"); if(f) f.focus(); return; }
  const code=genCode();
  try{ await SYNC.store.doc("rooms/"+code).set({caseId,host:SYNC.uid,hostName:detName(),created:iso(),suspect:"",verdict:null}); }
  catch(e){ toast("Couldn't create the room. You may need Contributor access to this game."); return; }
  if(await joinRoom(code,true)){ stampFX("ROOM "+code); partnerSay(`Room ${code} is open, ${detName()}. Give that code to your team. Everything we unseal, they see.`); }
}
function leaveRoom(silent){
  const was=ROOM.on&&SYNC.store?SYNC.uid:null, code=ROOM.code;
  stopRoomSubs(); if(was) rwrite(()=>SYNC.store.collection(`rooms/${code}/members`).doc(was).delete());
  Object.assign(ROOM,{on:false,code:null,meta:null,members:{},cards:{},links:{},rings:{},notes:[],chat:[],prog:{},loaded:{}}); closeChat();
  G.room=null; save(); if(!silent){ toast("You left the case room. Your progress stays with you."); render(); }
}
function remoteVerdict(v){
  C.verdict={sus:v.sus,w:v.w,method:v.method,m:v.m,motive:v.motive,ex:v.ex||[],q:v.q||[],by:v.by};
  const j=judge(C.verdict); if(j.charged){ C.stars=Math.max(C.stars,starsFor()); } save(); if(j.charged) pushProfile();
  if(G.screen!=="case") return;
  toast(`${v.by} has taken the case to the jury`); C.tab="verdict"; renderChrome();
  const P=document.getElementById("panel"); P.innerHTML=courtHTML(C.verdict,true); window.scrollTo(0,0);
  const seats=[...document.querySelectorAll(".juror")], order=shuffle(seats.map((_,i)=>i),3);
  const hb=setInterval(()=>sfx("heart"),820); setTimeout(()=>clearInterval(hb),300+12*220+200);
  order.forEach((ix,k)=>setTimeout(()=>{ const s=seats[ix]; sfx("vote"); s.classList.add(s.dataset.v); s.querySelector(".jf").innerHTML=faceSVG(JURORS[+s.dataset.i],{mood:s.dataset.v==="y"?"smile":"frown"}); s.querySelector(".jl").textContent=s.dataset.v==="y"?"CHARGE":"NO"; },300+k*220));
  setTimeout(()=>{ sfx("gavel"); const o=document.getElementById("outcome"); if(o) o.hidden=false; partnerSay(j.charged?`${v.by} closed it. Nice work, team.`:`${v.by} went in and the jury wasn't convinced. Let's rebuild it together.`); },300+12*220+300);
}
function roomChipHTML(){
  const ms=Object.entries(ROOM.members).filter(([,m])=>Date.now()-Date.parse(m.at||0)<45*60e3);
  return `<span class="rlabel">Room <b>${esc(ROOM.code)}</b></span><span class="rfaces">${ms.map(([id,m])=>`<span class="rface ${id===SYNC.uid?"me":""}" title="${esc(m.name)}${id===SYNC.uid?" (you)":""} · ${esc(TABNAME[m.tab]||m.tab||"")}">${detAvatar(m)}<i>${esc(TABNAME[m.tab]||"")}</i></span>`).join("")}</span><button class="iconbtn rcbtn ${chatUnread?"hot":""}" data-act="chatToggle">Room radio${chatUnread?` <span class="n">${chatUnread}</span>`:""}</button><button class="iconbtn" data-act="copyRoom">Copy code</button><button class="iconbtn" data-act="leaveRoom">Leave</button>`;
}
function roomBoxHTML(){
  if(!SYNC.store) return `<section class="roombox"><div><h2>Case rooms</h2><p class="muted">Work a case live with friends: one evidence wall, one notebook, shared unsealing and one jury.</p></div><div class="notice">Case rooms need the online precinct: open this game signed in on claude.ai (shared with Contributor access), or set up Firebase on your own hosting. Connecting…</div></section>`;
  const last=G.room&&CASES[G.room.caseId];
  return `<section class="roombox"><div><h2>Case rooms</h2><p class="muted">Work a case live with friends: one evidence wall, one notebook, shared unsealing and one jury. Create a room from any case card, or join with a code.</p></div>
  <div><form class="roomjoin" id="roomJoin" autocomplete="off"><input class="field" id="roomCode" maxlength="5" placeholder="CODE" aria-label="Room code"><button class="btn primary" type="submit">Join room</button></form>
  ${last?`<p class="muted" style="margin:8px 0 0">Your room: <b>${esc(G.room.code)}</b> · ${esc(last.title)} <button class="btn small" data-act="roomRejoin">Rejoin</button></p>`:""}</div></section>`;
}
function teamNotesHTML(){
  return `<section class="teamnotes"><div class="tnhead"><h2>Team notebook</h2><span class="muted">Room ${esc(ROOM.code)} · everyone in the room sees this</span></div>
  <form id="tnForm" class="tnform" autocomplete="off"><input class="field" id="tnText" maxlength="400" placeholder="Share a lead with the team…" aria-label="Team note"><button class="btn primary" type="submit">Post</button></form>
  <div class="tnlist">${ROOM.notes.length?ROOM.notes.map(n=>`<div class="tn ${n.uid===SYNC.uid?"me":""}"><small>${esc(n.name)} · ${esc(String(n.at).slice(11,16))}${n.src?` · ${esc(n.src)}`:""}</small>${esc(n.text)}</div>`).join(""):`<p class="muted" style="margin:0">No team notes yet. Anything you pin to your notebook is shared here too.</p>`}</div></section>`;
}
function syncReady(){
  const s=document.getElementById("roomslot"); if(s) s.innerHTML=roomBoxHTML();
  if(G.room&&!ROOM.on&&G.screen==="case"&&K.id===G.room.caseId) joinRoom(G.room.code,true);
}
document.addEventListener("submit",e=>{
  if(e.target.id==="roomJoin"){ e.preventDefault(); joinRoom(document.getElementById("roomCode").value); }
  if(e.target.id==="tnForm"){ e.preventDefault(); const t=document.getElementById("tnText"); const v=t.value.trim(); if(v){ roomNote(v,""); t.value=""; sfx("radio"); } }
});
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]"); if(!a) return;
  if(a.dataset.act==="roomCreate"){ createRoom(a.dataset.id); }
  if(a.dataset.act==="roomRejoin"&&G.room){ joinRoom(G.room.code); }
  if(a.dataset.act==="reseal"){ const id=a.dataset.id;
    if(a.dataset.confirm!=="1"){ a.dataset.confirm="1"; a.textContent="Tap again to re-seal"; return; }
    G.open=G.open.filter(x=>x!==id); if(G.room&&G.room.caseId===id&&!ROOM.on) G.room=null; save(); sfx("stamp"); render();
    toast(`${CASES[id].title} is sealed again. Your progress on it is kept.`); }
  if(a.dataset.act==="leaveRoom"){ leaveRoom(false); }
  if(a.dataset.act==="copyRoom"){ const t=ROOM.code; try{ navigator.clipboard.writeText(t).then(()=>toast(`Room code ${t} copied`),()=>toast(`Room code: ${t}`)); }catch(err){ toast(`Room code: ${t}`); } }
});

/* ======================= ROOM RADIO (CHAT) ======================= */
ROOM.chat=[]; let chatOpen=false, chatUnread=0;
const PINGS=[["wall","Come look at the evidence wall"],["found","I've found something"],["help","I'm stuck, can someone help?"],["court","I think we're ready for court"]];
function chatSend(text,extra){ if(!ROOM.on) return; text=String(text||"").trim().slice(0,300); if(!text) return;
  const m=Object.assign({uid:SYNC.uid,name:detName(),text,at:iso(),tab:C.tab},extra||{}); rwrite(()=>rcol("chat").add(m)); sfx("radio"); }
function ensureChatPanel(){
  let p=document.getElementById("roomchat");
  if(!ROOM.on||G.screen!=="case"){ if(p) p.remove(); return null; }
  if(!p){ p=document.createElement("div"); p.id="roomchat"; p.className="roomchat";
    p.innerHTML=`<div class="rchead"><span class="dled"></span><b>Room radio</b><span id="rcCode"></span><button class="iconbtn" data-act="chatToggle" aria-label="Close room radio">×</button></div>
    <div class="rclog" id="rcLog" aria-live="polite"></div>
    <div class="rcpings">${PINGS.map(([k,t])=>`<button class="rcping" data-act="chatPing" data-id="${k}">${esc(t)}</button>`).join("")}<button class="rcping" data-act="chatWhere">Share where I am</button></div>
    <form class="rcform" id="rcForm" autocomplete="off"><input class="field" id="rcText" maxlength="300" placeholder="Message the room…" aria-label="Message the room"><button class="btn primary small" type="submit">Send</button></form>`;
    document.body.appendChild(p); }
  p.hidden=!chatOpen; return p;
}
function renderChat(){
  const p=ensureChatPanel(); if(!p) return;
  document.getElementById("rcCode").textContent=ROOM.code;
  const log=document.getElementById("rcLog"), stick=log.scrollHeight-log.scrollTop-log.clientHeight<40;
  const msgs=ROOM.chat.slice().reverse();
  log.innerHTML=msgs.length?msgs.map(m=>{ const mem=ROOM.members[m.uid]||{name:m.name,color:0}, me=m.uid===SYNC.uid;
    return `<div class="rcm ${me?"me":""} ${m.kind==="ping"?"ping":""}"><span class="rcav">${detAvatar(mem)}</span><div><small>${esc(m.name)}${me?" (you)":""} · ${esc(String(m.at).slice(11,16))}${m.tab?` · ${esc(TABNAME[m.tab]||"")}`:""}</small><span>${esc(m.text)}</span>${m.go&&!me?` <button class="rcgo" data-act="chatGo" data-id="${esc(m.go)}">Go there</button>`:""}</div></div>`; }).join("")
    :`<p class="muted" style="margin:0;font-size:13px">Nobody's said anything yet. Say hello to your team, or use a quick call below.</p>`;
  if(stick) log.scrollTop=log.scrollHeight;
}
function onChatSnap(snap,first){
  const ids=new Set(ROOM.chat.map(m=>m._id)); ROOM.chat=snap.docs.map(d=>Object.assign({_id:d.id},d.data()));
  const fresh=first?[]:ROOM.chat.filter(m=>!ids.has(m._id)&&m.uid!==SYNC.uid);
  if(fresh.length){ sfx("radio"); if(!chatOpen){ chatUnread+=fresh.length; toast(`${fresh[0].name}: ${String(fresh[0].text).slice(0,70)}`); } }
  renderChat(); renderChrome();
}
function closeChat(){ chatOpen=false; chatUnread=0; const p=document.getElementById("roomchat"); if(p) p.remove(); }
document.addEventListener("submit",e=>{ if(e.target.id==="rcForm"){ e.preventDefault(); const t=document.getElementById("rcText"); chatSend(t.value); t.value=""; t.focus(); } });
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]"); if(!a) return; const act=a.dataset.act, id=a.dataset.id;
  if(act==="chatToggle"){ chatOpen=!chatOpen; if(chatOpen) chatUnread=0; renderChat(); renderChrome(); if(chatOpen){ const t=document.getElementById("rcText"); if(t) t.focus(); const l=document.getElementById("rcLog"); if(l) l.scrollTop=l.scrollHeight; } }
  if(act==="chatPing"){ const p=PINGS.find(x=>x[0]===id); if(p) chatSend(p[1],{kind:"ping",go:id==="wall"?"wall":id==="court"?"verdict":C.tab}); }
  if(act==="chatWhere"){ chatSend(`I'm in the ${TABNAME[C.tab]||C.tab}`,{kind:"ping",go:C.tab}); }
  if(act==="chatGo"&&TABNAME[id]){ C.tab=id; save(); renderPanel(); window.scrollTo(0,0); }
});

document.querySelector("#partner .pav").innerHTML=faceSVG(FACES.aziz);
render();
initDirectory();
setTimeout(dispatchCheck,2500);
/* ======================= INTERROGATION PRESSURE: DATA ======================= */
/* hit: what the guilty party says when shown an exhibit that points at them (3 different hits = they crack).
   adm: what an innocent person admits the first time you show them something that points their way. */
const PRESS={
  cold:{
    priya:{hit:{anpr:"My car was in the garage because I forgot my gym bag. I went down, I came back up. That's all.",cctvlog:"That recorder drops all the time. I've told facilities a dozen times.",printlab:"I check that extinguisher every month. Of course my prints are on it.",burner:"Half the building has a second phone. That proves nothing.",regulator:"Daniel was paranoid. He saw conspiracies in log files.",badgehist:"I reissued Ethan's badge. That's literally my job.",handlab:"That isn't my handwriting. Lots of people write in capitals.",transcripts:"I said extinguisher because... because someone told me. The morning shift."},
      crack:"Fine. Fine! He was going to the regulator on Thursday. Eleven years I built that security team and he was going to hand them my name. I switched the camera. I used Ethan's badge. I only went down there for the drive. He turned round, and the extinguisher was in my hand before I'd decided anything. I planned everything except that.",
      lawyer:"We're done. I want my lawyer, and I want it on the tape that I asked."},
    mara:{adm:"All right. 'Anything stupid' meant the regulator. Daniel wanted to report a revenue problem before the board met. I wanted it handled quietly. That's the whole of it."},
    ethan:{adm:"Okay. I didn't lose my badge. It was in my desk. I said lost because I didn't want Priya writing me up again. But HR took it off me at four. I swear on my life."},
    leon:{adm:"Yes, I texted him. He was pulling his money out of my fund and I'm leveraged to the eyeballs. I was angry. I was also at thirty thousand feet."}
  },
  static:{
    joel:{hit:{ledger:"Appeal money moves between accounts. That's called accounting.",notebook:"Cal scribbled nonsense in that book for twenty years.",rx:"I have a prescription. So does half of radio.",consolelog:"That console logs garbage every night.",archive21:"We air best-ofs constantly. Listeners love the rainy ones.",cellpier:"I drove around. I was looking for him!",anprcal:"Someone took his car. Why would that be me?",joelcar:"I went home and came back. I was worried.",printlab:"I've driven Cal's car before. We're friends.",handlab:"Everyone in that building labels carts.",mika2:"Mika's confused. She was on her break.",airtx:"You heard him yourself. He was on air."},
      crack:"He was going to tell Harlan on Friday. Twenty years I made him sound good. I put two of my pills in his coffee. Just to get him through the night quietly, I told myself. But the cart was already labelled, wasn't it. You don't label a cart by accident. I knew what I was doing at six that evening.",
      lawyer:"No more. Get me a lawyer."},
    mika:{adm:"I deleted the logger file. Joel told me it was eleven minutes of dead air and Harlan would fire us both for it. I didn't listen to it. I didn't want to know."},
    felix:{adm:"I was outside the building. I always am, on Thursdays. I watch the studio window. I never went in. I never touched his car."},
    dana:{adm:"Yes, I'm still the beneficiary on the policy. I nagged him about the renewal because I'm the one who pays for it. That isn't a motive, it's a direct debit."},
    harlan:{adm:"I was cancelling the show, and I'd have cancelled him too. He wanted twenty minutes about 'something else'. I assumed he wanted money. I should have listened."}
  },
  ninth:{
    tomas:{hit:{lockapp:"The app glitches. Bluetooth drops all the time on that route.",debts:"Everyone has debts. That doesn't make them a thief.",cardrecord:"Someone cloned my card. It happens.",mrzlab:"I've never seen that passport before.",printlab:"I handled the bag at the shop. Of course my prints are on it.",maltasim:"I don't know anyone in Malta.",chat:"That chat could be anybody.",handlab:"The shop writes those slips. Not me.",transcripts:"I said a woman? Everyone was saying a woman."},
      crack:"Lucia didn't want to. I begged her. They said Friday or they'd come to the house, and my mother lives in that house. I opened the case at 23:41 and she did the rest. I wrote the slip myself. I thought a packing error would look too boring to investigate.",
      lawyer:"I'm the victim here. I want a lawyer before I say anything else."},
    ivo:{adm:"A woman flagged me down at Canal Street. She paid cash and I pocketed it. That's why she's not on the ticket sales. I'll lose my job for that. Not for diamonds."},
    viktor:{adm:"I was on that bus because I play cards online at night. I was winning. I didn't look up once."},
    margot:{adm:"I raised the cover two weeks ago because the courier firm warned me about Reyes's debts. I should have pulled him off the job. I didn't, because he's cheap."}
  },
  saffron:{
    simon:{hit:{julianemail:"Julian drafted angry emails every week. He never sent them.",notebook:"Doodles. He always wrote in riddles.",companyrec:"Consultancy is perfectly legal.",payments:"Restaurants pay for advice. Mine is good.",printlab:"I write with a fountain pen. My prints are on all sorts of things.",toxlab:"I was drinking water too!",video:"A livestream, really? I was passing him his glass.",waiter2:"The waiter's mistaken. It was busy."},
      crack:"Six restaurants. Six. It was consultancy until Julian decided it was corruption, and he'd have finished me on Monday. I filled a pen cartridge in my kitchen. Thirty years of reviews, and he never once noticed what was in his own glass.",
      lawyer:"I'll be speaking through my solicitor from now on."},
    ines:{adm:"The note under the door... I knew what it meant. Someone wanted money for a good review. I didn't pay, and I didn't report it either. I was ashamed I'd even thought about it."},
    rafael:{adm:"I forage the herbs myself, and I was terrified it was my fault. I tested every jar that night. Every one came back clean."},
    petra:{adm:"I swapped his wine because he sent it back. I wanted him to drink something I chose, once. Petty. That's all it was."},
    kit:{adm:"I wasn't filming him. I was filming me. I didn't even know who he was until the ambulance."}
  },
  bay:{
    marco:{hit:{keylog:"Master keys get lent out. Ask anyone in facilities.",storeslog:"Sealant gets signed out every week.",bankferri:"Consultancy fees. I advise on building access.",printlab:"I'm the building manager. My prints are on every panel down there.",handlab:"The guards write in the log, not me.",sara2:"Sara's confused. Night shifts do that.",phonedump:"Pike was a troublemaker. He photographed everything.",priyastmt:"Priya Raman will say anything for a deal.",baycctv:"I walk the bay every night. That's the job."},
      crack:"He found Vale's box and he wouldn't leave it. I told him: walk away, Owen, there's money in this for you. He said he'd report it in the morning. I only meant to stop him going. Then he wasn't moving, and the panel was right there, and the sealant was in stores.",
      lawyer:"Not another word. I want a solicitor."},
    gideon:{adm:"Yes, I paid Ferri. Yes, the box is mine. I was in Singapore when that boy died, and I'm not going down for a murder I paid nobody to do."},
    dev:{adm:"I moved Owen's van on the 10th. It was blocking the yard and the client was screaming at me. When it started to look bad, I panicked and said nothing."},
    leah:{adm:"We were splitting up. That's what 'talk properly' meant. I thought he'd gone to a mate's. I didn't report it for two days because I was angry with him."},
    sara:{adm:"I didn't see him leave. Mr Ferri wrote that line and told me to sign it. He said I'd lose my licence if I made trouble."}
  },
  atrium:{
    celeste:{hit:{safe:"The firm's wallets are audited. Every one.",memo:"Gideon recorded everything. Rants, mostly.",diary:"His diary was full of initials. Half the city has a C in it.",printlab:"I'd been on that balcony a hundred times.",handlab:"Anyone can sign a visitor book.",liftlog:"I went back up for my charger.",dascell:"My phone goes where my bag goes.",anprc:"I sat in my car. I made calls.",liftcctv:"Fine, I went back up. He was alive when I left.",notemeta:"Laptops do strange things with timestamps.",tipguard:"The guard's mistaken.",accesslog:"I badged out at quarter past ten. You've seen it."},
      crack:"He was going to say my name on Wednesday. After everything I cleaned up for him. I went up to talk him out of it, and he laughed at me. I pushed him. The glass was lower than I ever thought it was. The note was the only thing I did calmly.",
      lawyer:"This interview is over. Call my lawyer."},
    hugo:{adm:"I wasn't there, but I was coming. He'd promised me the name of whoever ran the money, on the record. I didn't tell you because it's my story."},
    sabine:{adm:"The Zurich transfers were mine. I was moving money out before the divorce. That's fraud, perhaps. It isn't murder."},
    mina:{adm:"I kept a copy of his calendar after he fired me. Petty insurance. I never used it."},
    tariq:{adm:"I saw Ms Marlow's car still on P2 at half ten. I didn't say because her firm pays my agency."}
  },
  fare:{
    silas:{hit:{cloudclip:"A voice on a recording. Could be anyone's.",witness2019:"I've never been on Marina Road in my life.",notebook:"An old man's scribbles.",printlab:"I was in the back of his cab. I touched the door.",handlab:"J. Smith is a common name.",cardholder:"I paid by card. So what? Everybody takes cabs.",returncab:"I went home because I missed my flight.",airportcctv:"I walked to Departures. That's where airports keep them.",silasflight:"I overslept and missed it. That's not a crime.",tiprank:"The rank's dark. Your witness saw nothing.",booking:"I booked a cab. Under a nickname.",dashlab:"Dashcams fail.",transcripts:"I read about the card somewhere. The paper."},
      crack:"Five years I've driven round Marina Road the long way. Then this old man looks at me in his mirror and says, 'I know that eyebrow.' I didn't plan any of it. I just couldn't go back to being the man on that road.",
      lawyer:"I'd like a lawyer. Now, please."},
    dario:{adm:"We had words at the rank. I said things I shouldn't have. I was in the queue at the other end in cab 27 the whole night. Check my GPS."},
    lena:{adm:"Dad texted 'I finally know' and I ignored it. I thought he meant the complaint. I've been too ashamed to say."},
    marta:{adm:"I offered him the airport jobs back if he dropped the complaint against the firm. It's dirty business. It isn't murder."},
    jonah:{adm:"I found the wallet in the bin. I took the cash out before I called it in. Forty. I'm sorry."}
  },
  ward:{
    marcus:{hit:{lawyermail:"Victor changed his will every Christmas.",notebook:"Crossword scribbles.",debts:"Everyone in medicine has loans.",tipboard:"I play cards. Socially.",printlab:"I'm a doctor in that hospital. My prints are everywhere.",handlab:"I've never signed that sheet.",cardlog:"My card lives in my locker. Anyone could take it.",marcuscar:"I came in to check on a patient.",plantcctv:"That could be any doctor in scrubs.",abel2:"Abel's covering for himself.",transcripts:"I said the drip? I meant the drugs in general.",tox:"Patients react to sedatives. It's tragic, not criminal.",monitorlog:"Monitors glitch in a power cut."},
      crack:"He was going to ruin me on Monday. The will was the least of it. He'd have gone to the medical director. Four minutes. I've done harder things in four minutes in theatre. I told myself he wouldn't feel anything, and he didn't.",
      lawyer:"I'm calling the medical defence union. We're finished."},
    kofi:{adm:"K.A. isn't me. I sign my full name, always. But I skipped my 02:00 round of the plant corridor. I was asleep in the porters' room."},
    abel:{adm:"I wasn't at the station when the alarm would have sounded. I was in room 4. I said I was at the station because leaving it is a disciplinary."},
    clara:{adm:"I knew Dad was changing the will. Marcus told me it was about the business. I believed him."},
    ruth:{adm:"I wanted that share option signed before he changed anything. I pushed him too hard. But I was in a hotel in Eastport that night."}
  }
};
const PRESS_MISS=["What am I supposed to say about that?","I don't see what this has to do with me.","Is this a fishing trip, Detective?","You're wasting both our time.","Should that mean something to me?"];
const PRESS_CLEAR=["That's what I've been telling you.","Good. So we're done with me?","Finally, someone checks.","See? I was where I said I was."];
const PRESS_HIT=["That doesn't prove anything.","I can explain that. Give me a minute.","Stop. Just stop putting things in front of me."];

/* ======================= SCENE WALK-THROUGH: DATA ======================= */
/* # wall · . floor · = doorway · @ start · UPPERCASE furniture (blocked) · lowercase points of interest */
const WALK={
  cold:{name:"Meridian Tower · Level B2 and garage",intro:"The data center lights are still off. Bring the torch.",
    fur:{G:"Parked car",R:"Server rack",X:"Fire exit alarm panel"},
    rows:[
"########################",
"#GGG...#...............#",
"#......#.RR.RR.RR.RR...#",
"#.d....=...............#",
"#......#.RR.RR.RR.RR..b#",
"#..@...#...........c...#",
"#......#.RR.RR.RR.RR...#",
"#GGG...X......a.....e..#",
"###=####.RR.RR.RR.RR...#",
"#f.....=...............#",
"########################"],
    items:{a:{n:"Fire exit, inside handle",t:"Grey garage dust on the inside push bar, as if someone came in from the garage side. The alarm panel beside it is dark: disabled for maintenance."},
      b:{n:"Camera CAM-B2-03",t:"The status LED is amber. A sticker on the housing reads MAINT MODE · SECURITY ADMIN ONLY. Not everyone can switch this camera off."},
      c:{n:"Cold-aisle floor tile",t:"One raised floor tile by rack 6. In the dust on top: a narrow shoe print, much smaller than the victim's, facing toward rack 7."},
      d:{n:"Garage bay 14",t:"A fresh oil drip in bay 14, the space nearest the fire exit. The ANPR camera over the ramp looks straight down on it."},
      e:{n:"Rack 7, drive bay 3",t:"The tray hangs open. The drive came out cleanly: no tools, no scratches. Whoever pulled it knew exactly which slot to go to."},
      f:{n:"Corridor bin",t:"A Level 1 café cup with the lid still on. The name on the sleeve, in marker: PRIYA. The sleeve is dated 13 Oct, 22:05."}}},
  static:{name:"KNOX 98.1 · Studio B and the fire stairs",intro:"The station went quiet after 01:49. It still is.",
    fur:{K:"Mixing console",D:"Studio desk",M:"Cart machines",S:"Fire stairs",G:"Guard desk",L:"Lobby sofa"},
    rows:[
"########################",
"#KKKK..#........#SSSS..#",
"#......#..DDDD..#......#",
"#.a....=..DDDD..=..e...#",
"#......#....b...#......#",
"#MMM...#........###=####",
"#..c...####=#####......#",
"#......#........#..f...#",
"####=###...@....=......#",
"#.d....#........#GGG...#",
"#......#.LLLL...#......#",
"########################"],
    items:{a:{n:"Engineering workstation",t:"The log-in screen remembers its last user: M.SATO, 02:19. The recycle bin was emptied one minute later."},
      b:{n:"Cal's chair",t:"Pushed back hard against the wall. Two parallel scuff lines run from the chair toward the door: heels, dragged."},
      c:{n:"Cart rack",t:"Every cart label this week is in the same blocky capitals as BEST OF · B. The rota on the wall says only the producer labels carts."},
      d:{n:"Kitchenette bin",t:"A pill blister pack, two pills gone. The label is torn away, but a corner of the pharmacy sticker survived: '...ARGA'."},
      e:{n:"Fire-stairs landing",t:"A rubber wedge holds the door. On the wall at shoulder height, a long scrape, the kind a heavy load makes going down."},
      f:{n:"Guard desk",t:"Two chairs pulled together and two paper cups. The guard had company for a while during the night."}}},
  ninth:{name:"Night bus N9 · and the Canal St stop",intro:"The bus is parked in the depot, engine off, every seat exactly as it was.",
    fur:{W:"Driver's cab",S:"Seats",D:"Rear door",B:"Bus shelter"},
    rows:[
"########################",
"#WW..................DD#",
"#..SS.SS.SS.SS.SS.SS...#",
"#.........a.....b......#",
"#..SS.SS.SS.SS.SS.SS...#",
"#@..c...............d..#",
"#######=################",
"#.......e........f.....#",
"#BBBB..................#",
"########################"],
    items:{a:{n:"Seat 9",t:"The fabric is still dented. Grains of aquarium grit are caught in the seam: more than fell on the floor. Whoever sat here handled the gravel."},
      b:{n:"Seat 10, the SecureCarry case",t:"The hinge and lock are spotless. No pry marks, no scratches. It was opened the way it was designed to be opened."},
      c:{n:"Driver's cash tray",t:"One folded 20 that matches no ticket sale. The N9 doesn't sell tickets for cash."},
      d:{n:"Rear door sensor",t:"A sticker: THIS DOOR COUNTS PASSENGERS. It counted one boarding at Canal St, and nine stepping off at the airport."},
      e:{n:"Canal St request stop",t:"A timetable with N9 23:28 circled in pen, and a crushed tourist leaflet: 'Valletta in a weekend'."},
      f:{n:"Bin at the stop",t:"Packaging for a pay-as-you-go SIM on a Maltese network. The receipt is dated the day before the theft."}}},
  saffron:{name:"Saffron · dining room, kitchen and corridor",intro:"Service stopped mid-course. Napkins still on the chairs.",
    fur:{K:"Kitchen station",T:"Table",X:"Table 7",B:"Bar",R:"Restrooms"},
    rows:[
"########################",
"#KKKK.KKKK#....TT..TT..#",
"#.........#.a..........#",
"#..b......=....TT..TT..#",
"#.........#.........c..#",
"#KKKK.KKKK#..XX........#",
"#....d....#............#",
"#####=#####...@........#",
"#.e.......=............#",
"#RRR......#BBBBB....f..#",
"########################"],
    items:{a:{n:"Waiter's station",t:"Every table's water comes from the same jugs and the same tap. If the kitchen had poisoned the water, half the room would be sick."},
      b:{n:"Pastry bench",t:"The sorbet was plated in one batch of forty. Thirty-nine other diners ate it and went home."},
      c:{n:"Table 7, under the cloth",t:"A tiny spot of dark ink on the underside of the tablecloth, on 7A's side. Not Julian's."},
      d:{n:"Kitchen pass",t:"Table 7's ticket. Every plate went out on one tray. Nobody in the kitchen knew which plate would land in front of whom."},
      e:{n:"Restroom corridor",t:"From here you can't see table 7. Julian was gone from 21:28 to 21:33: five minutes in which nobody watched his glass but his guest."},
      f:{n:"Coat check",t:"7A's coat is still on its hook. In the inside pocket: a fountain pen with no cartridge in it."}}},
  bay:{name:"Meridian Tower · loading bay and B3 riser",intro:"The riser has been opened and taped off. The smell is still there.",
    fur:{V:"Loading dock",G:"Guard booth",P:"Fire-stop panels",S:"Stores shelving"},
    rows:[
"########################",
"#VVV.....#.....#PPPPPPP#",
"#VVV.....#..a..#.......#",
"#........=.....=...b...#",
"#.....c..#.....#.......#",
"#GG......###=###...d...#",
"#........#.....#.......#",
"#@.......=..e..####=####",
"#........#.....#..f....#",
"#........#SSSSS#.......#",
"########################"],
    items:{a:{n:"Service corridor floor",t:"Two faint parallel lines in the dust, heading toward the riser door. Something heavy was dragged, not carried."},
      b:{n:"Panel FS-B3-04",t:"Up close, the fresh orange sealant has a thumb-shaped dent in one corner, smoothed over in a hurry."},
      c:{n:"Guard log clipboard",t:"The 9 Oct page. One line is in a different pen and a different hand from the rest: 'Pike OUT 22:40'."},
      d:{n:"The black box",t:"Its LED still blinks. Someone has been reading Halcyon's trunk fibre for months, and someone with keys let them in to fit it."},
      e:{n:"Riser door lock",t:"A master-keyed cylinder. Not a scratch on it. Whoever came in that night used a key."},
      f:{n:"Stores counter",t:"Two gaps on the sealant shelf where orange fire-stop cartridges should be. The rest of the shelf is the old grey kind."}}},
  atrium:{name:"Harbour Exchange · level 12",intro:"Twelve floors of glass. The atrium lights were switched off at midnight.",
    fur:{B:"Bench",C:"Coffee table",O:"Desks",L:"Car-park lift",S:"Fire stairs","~":"Glass balustrade"},
    rows:[
"########################",
"#.........~~~~~~~~~~~~~#",
"#..BBBB...~............#",
"#..a......=.......b....#",
"#.........~....CC......#",
"#OOOO.....~....CC..c...#",
"#.........~............#",
"#####=#####=####~~~~~~~#",
"#.d.......#.........e..#",
"#LL...@...#SSSSS.f.....#",
"########################"],
    items:{a:{n:"Vale's desk",t:"His reading glasses, folded on a printed bail schedule. Wednesday is circled twice."},
      b:{n:"Balustrade, far side",t:"A single thread of camel wool snagged on a bolt head at hip height. Vale was wearing a navy jumper."},
      c:{n:"Coffee table",t:"The cafetière is half full. Two spoons used, two cups. Vale took his black; one cup had milk."},
      d:{n:"Car-park lift",t:"The floor display froze on its last call: P2 → 12."},
      e:{n:"Fire-stairs door",t:"A faint berry-red smear on the push bar, the same colour as the lipstick on the cup."},
      f:{n:"Stairwell, landing 11",t:"A gold butterfly earring lying on the stair, its back missing."}}},
  fare:{name:"PMR taxi rank · the unlit far end",intro:"Bay 31. The lamp's been out for a month.",
    fur:{T:"Waiting cabs",C:"Cab 11",B:"Bins",J:"Cleaners' trolley"},
    rows:[
"########################",
"#......................#",
"#.TT...TT...TT...CCCC..#",
"#.TT...TT...TT...CCCC.a#",
"#.................b....#",
"#===================...#",
"#.....c..........d.....#",
"#BB...............JJ...#",
"#@.........e........f..#",
"########################"],
    items:{a:{n:"Cab 11, rear footwell",t:"A fleck of dried blood on the back of the driver's seat, at head height, exactly where a swing from the back seat would land."},
      b:{n:"Cab 11, dashboard",t:"The dashcam's status light blinks blue: UPLOADING. It is still trying to send its last clip to the cloud."},
      c:{n:"Kerb, bay 31",t:"Nobody parks this far down unless they're told to. The far end of the rank is the darkest place at the airport."},
      d:{n:"Puddle by the barrier",t:"One set of footprints in the wet: smart leather soles, heading toward Departures, not the car park."},
      e:{n:"Under the bin",t:"A receipt from the airport chemist, 01:10: one tube of skin concealer, paid cash."},
      f:{n:"Cleaners' trolley",t:"Gloves, bin bags and a flask of tea. Jonah's round card shows a pass every forty minutes, all night."}}},
  ward:{name:"Harbour General · Ward Nine",intro:"The power's back. You keep the ward lights off anyway, to see what the torch finds.",
    fur:{B:"Victor's bed",M:"Heart monitor",N:"Nurses' station",P:"Breaker panel",R:"Room 4 bed",S:"Linen store",L:"Staff lift"},
    rows:[
"########################",
"#BB......#........#PPPP#",
"#........#...NNN..#....#",
"#..a.....=........=..b.#",
"#....MM..#........#....#",
"#....c...#.d......######",
"#####=####........#....#",
"#.e......=...@....=..f.#",
"#........#........#....#",
"#RR......#SSSSSSS.#LLLL#",
"########################"],
    items:{a:{n:"Victor's bedside",t:"The call bell has been looped over the rail behind the headboard, out of his reach."},
      b:{n:"Breaker W9",t:"A few blue fibres caught on the breaker handle, the same blue as a theatre shoe cover."},
      c:{n:"Heart monitor",t:"Silencing the alarm at the bedside takes a two-button hold in clinician mode. Someone knew the shortcut."},
      d:{n:"Nurses' station",t:"The door-release lights are all green. The maglocks are still in fail-open mode from the outage."},
      e:{n:"Room 4",t:"The patient in room 4 tells you the night nurse held her hand through the whole blackout."},
      f:{n:"Staff lift",t:"The lift needs a staff card. Its buttons: Theatres L3, Wards L4, Plant L2, Staff car park P."}}}
};

/* ======================= VICTIM'S PHONE: DATA ======================= */
/* m: message threads [who, [[0=owner|1=them, time, text]]] · deleted: hidden items in Recently deleted */
const PHONE={
  cold:{owner:"Daniel Okafor",pin:"0703",hint:"Digital forensics: 'Okafor reused one code everywhere. It's where he kept his work: rack, then bay, two digits each.'",
    m:[["Amara",[[0,"20:15","Late one tonight. If anything happens, my notes. Old Roman habit: three steps back. Love you."],[1,"20:20","You're scaring me. Come home x"]]],
       ["+44 7700 900412",[[1,"22:24","B2. Now. I have what you asked for. Come alone."],[0,"22:25","On my way."]]],
       ["Priya Raman",[[1,"09:12","HSM audit Thursday? Want me to prep the export logs?"],[0,"09:30","No. I'll do them myself."]]],
       ["Mara",[[1,"18:40","Board moved to Thursday. Don't do anything stupid before then."],[0,"18:41","Stupid would be staying quiet."]]],
       ["Ethan Cole",[[1,"16:14","you fired me over ONE deploy?? unbelievable. you'll pay for this"]]],
       ["Leon",[[1,"12 Oct","Pulling out now leaves me exposed. You'll regret this, Dan."]]]],
    mail:[["Financial Conduct Office","Your confidential appointment","Your appointment on 15 Oct at 10:00 is confirmed. Please bring any material in unaltered form, and tell no one at your firm."],
          ["Halcyon HR","Termination: E. Cole","Effective 16:00 today. Badge and laptop to be collected by HR on exit."],
          ["Facilities","FAC-2210 opened","B2 fire exit alarm disabled for maintenance. Raised by P. Raman, 10 Oct."]],
    calls:[["Amara","19:58","4 min"],["Leon","12 Oct","Missed ×3"],["Mara","18:44","1 min"]],
    photos:[["doc","HSM export log, page 3","Forty-one key exports under admin PRAMAN, all between 01:00 and 04:00."],["people","Harbour, September","Daniel and Amara on the sea wall."]],
    notes:[["Thursday","Board. Bring the drive copy. Do NOT email anything from work."]],
    deleted:[["photo","Rack 7, drive bay 3 · deleted 22:16","A photo of the drive in rack 7 with a Post-it on it: 'COPY 1 OF 1'."],["msg","Draft to Priya · deleted 21:50","'I know about the exports. Tomorrow I go to the regulator. Give yourself up first.' Never sent."]]},
  static:{owner:"Cal Brennan",pin:"5512",hint:"Found in the studio desk drawer. Dana Brennan: 'He used his number plate for everything. The digits.'",
    m:[["Joel",[[1,"00:40","Coffee's on the desk. Strong one, long night"],[0,"00:41","You're a saint."]]],
       ["Mika",[[1,"01:30","Joel says take my break early, you're fine solo?"],[0,"01:31","Go. I'm fine."]]],
       ["Harlan",[[1,"1 Oct","Friday 10am my office. Twenty minutes."],[0,"1 Oct","Not on air. Just you."]]],
       ["Dana",[[1,"30 Sep","Sign the renewal, Cal. I mean it."],[0,"30 Sep","Tomorrow. Promise."]]],
       ["Unknown",[[1,"01 Oct","I'll be closer than you think on Friday."]]]],
    mail:[["Night Light Appeal","September totals","Pledged on air: 48,200. Banked: 31,050. Variance logged as 'admin'."],
          ["h.pryce@knox981.pm","December","Static ends in December. Don't make this ugly, Cal."],
          ["dana.brennan@eastportgen.pm","Policy renewal","Insurance renewal needs your signature by the 10th."]],
    calls:[["Harlan","1 Oct","6 min"],["Unknown","Thu","Missed ×6"],["Dana","30 Sep","2 min"]],
    photos:[["doc","Appeal ledger, photographed 30 Sep","Every 'admin' withdrawal has the same initials next to it: J.V."],["people","Studio B, 2019","Cal and Joel with a birthday cake shaped like a microphone."]],
    notes:[["Friday","Tell Harlan. Off air. Bring the photos. Don't tell J until it's done."]],
    deleted:[["msg","To Joel · 2 Oct 22:10 · deleted","'I've seen the appeal books. Tell Harlan yourself by Friday, or I will.'"],["note","Draft link, deleted 23:02","'If something happens to me, the ledger photos are in the cloud folder NIGHTLIGHT.'"]]},
  ninth:{owner:"Tomas Reyes",pin:"1010",hint:"Margot Fein: 'Tomas always books the same seat, and he's lazy. He'd use it twice.'",
    m:[["Margot Fein",[[1,"22:30","Fourteen stones, signed for. Text me when you land."],[0,"22:31","Will do."]]],
       ["Harbour Credit",[[1,"9 Oct","FINAL NOTICE: 214,000 due Friday. We know the address."]]],
       ["Mum",[[1,"11 Oct","Have you heard from your sister? She's not answering."]]],
       ["L",[[0,"22:58","Canal St. 23:28. Seat 9."]]]],
    mail:[["SecureCarry","Trip started","Your case is locked and paired. Have a safe journey."],["Harbour Credit","Proceedings","Judgment will be enforced on Friday without further notice."]],
    calls:[["Harbour Credit","9–11 Oct","Missed ×4"],["L","22:58","1 min"],["Margot Fein","22:30","2 min"]],
    photos:[["doc","Pouch at Fein & Daughters, 22:30","Fourteen stones on a velvet tray, before sealing."],["people","Photo booth, 2019","A young woman with Tomas's eyes, passport-style."]],
    notes:[["Fri","214. Friday. No other way."]],
    deleted:[["msg","L → Tomas · 23:44 · deleted","'Done. Shaking. See you never x'"],["mail","E-ticket receipt · deleted 00:05","PM 418 to Valletta, one passenger, paid with card ending 5521."]]},
  saffron:{owner:"Julian Marr",pin:"2005",hint:"His editor's assistant: 'Julian's code was the time he was seated for his last booking. Always.'",
    m:[["Simon",[[1,"Mon","Dinner on me Friday. Saffron, eight. We should talk about the column."],[0,"Mon","We should talk about a lot of things."]]],
       ["R. Vance (Ledger)",[[1,"16 Oct","Monday 9:00, my office. Come alone."],[0,"16 Oct","Bringing paperwork."]]],
       ["Petra",[[1,"Sun","You still owe me the flat deposit, Julian."]]],
       ["Kit Moreau",[[1,"17 Oct","Can I tag you in tonight's live?"],[0,"17 Oct","Absolutely not."]]]],
    mail:[["Calder Brasserie","FWD: Invoice 0017","'Consultancy services', 6,000, payable to Achterberg Media Ltd. Forwarded by the owner with one line: 'Is this normal?'"],
          ["Ledger desk","Column, Saturday","Saffron review due by midnight Sunday."]],
    calls:[["R. Vance","16 Oct","15 min"],["Simon","Mon","3 min"]],
    photos:[["doc","Six invoices","Six restaurants, six invoices from Achterberg Media Ltd, each paid within a month of a glowing review."],["room","Table 7, 20:04","Two place settings, two water glasses, before service."]],
    notes:[["Monday","Vance. Six invoices. Does S. know I know?"]],
    deleted:[["msg","Simon · 16 Oct 23:10 · deleted","'Whatever you think you've found, think about your pension first.'"],["photo","Blurred photo · 21:27","Taken as Julian stood up: Simon's hand resting near Julian's glass."]]},
  bay:{owner:"Owen Pike",pin:"913041",needs:"code",hint:"Handset recovered from the riser. The forensics lab is still trying to open it. If you open it first, you've found Owen's PIN.",
    m:[["Marco Ferri",[[1,"9 Oct 19:10","Leave the riser cabling to my team. Don't touch the Halcyon trunk."],[0,"9 Oct 19:12","There's something on that trunk that isn't yours."]]],
       ["Leah",[[1,"18:02","Can we talk tonight? Properly."],[0,"18:30","Late one at Meridian. Something weird in the riser. Tell you after x"]]],
       ["Dev",[[1,"17:40","How's LANTERN?"],[0,"17:41","Weird. Tell you tomorrow."]]]],
    mail:[["Halcyon IT","Trunk fibre","Please confirm there is no contractor work on the Halcyon trunk in risers B1 to B3."]],
    calls:[["Marco Ferri","22:28","3 min"],["Leah","18:31","Missed"]],
    photos:[["doc","Cable tray, 21:52","A small black box clipped to the tray, LED lit, patched into the trunk."],["room","Riser B3, 21:50","Panel FS-B3-04 open for re-cabling."]],
    notes:[["LANTERN snags","B1 done. B2 done. B3: weird box?? Ask Ferri. Then ask Halcyon."]],
    deleted:[["msg","Ferri · 22:34 · deleted by sender","'Stay there. I'm coming down. We'll sort it.'"],["mail","Draft to Halcyon security · 22:31","'Found a device on your trunk in Meridian B3. The building manager told me to leave it. Reporting it tomorrow.' Never sent."]]},
  atrium:{owner:"Gideon Vale",pin:"201812",hint:"Mina Kovac: 'He used the same code for everything. Founding year, then our floor.'",
    m:[["Celeste",[[1,"21:50","We need to talk before Wednesday. Coming up for coffee."],[0,"21:51","There's nothing to talk about."]]],
       ["Hugo Lenz",[[1,"17:02","Still on for 22:30? I'm bringing a recorder."],[0,"22:05","Not tonight. Tomorrow."]]],
       ["Lawyer",[[1,"Mon","Wednesday 10:00. Bring the names."],[0,"Mon","One name. The person who ran the money."]]],
       ["Sabine",[[1,"18:12","My lawyer says the transfers to Zurich breach the agreement. Stop."]]]],
    mail:[["VRP Treasury","Transfer authorised","Wallet ending …f3: outgoing transfer approved by C. Marlow."],["Court office","Bail conditions","Report to Harbour station Wednesday by 09:00."]],
    calls:[["Lawyer","Mon","22 min"],["Celeste","19 Oct","Missed ×2"]],
    photos:[["room","Balcony, sunset","The level 12 balcony, two cups on the low table, from weeks ago."],["doc","Whiteboard photo","'C → wallet → P.R.' with a circle round the C."]],
    notes:[["Wednesday","Tell them about C. And the wallet. Then sleep."]],
    deleted:[["note","Draft statement for police · deleted 22:52","Three pages naming the person who ran the money. Deleted five minutes after Vale fell."],["photo","Screenshot · deleted 22:53","A wallet transfer to 'PRAMAN'."]]},
  fare:{owner:"Elias Brandt",pin:"4418",hint:"Lena Brandt: 'Dad's PIN was his licence number. Since 1999, never changed.'",
    m:[["Lena",[[1,"18:00","Landing 7:15, you picking me up?"],[0,"02:31","Can't talk. Tell you at breakfast. I finally know."],[1,"02:40","Know what?? Dad?"]]],
       ["Dario (cab 27)",[[1,"22:14","Jump the queue again old man and see what happens"]]],
       ["Marta (dispatch)",[[1,"23:40","Withdraw the complaint and you get the airport jobs back."]]]],
    mail:[["Port Meridian Police","Marina Road, five years on","Appeal for information about the hit-and-run on 14 August 2019."],["Taxi Authority","Complaint received","Your complaint against Harbour Cabs is under review."]],
    calls:[["Lena","20 Oct","8 min"],["RideNow booking","02:08","J. Smith, Marina Point"]],
    photos:[["street","Marina Road, August","Flowers tied to a lamppost on the anniversary."],["doc","Sketch, 2019","His own drawing: a man's face, a scar through the left eyebrow."]],
    notes:[["2019","Silver saloon. Scar, left brow. Not the plate. Five years."]],
    deleted:[["msg","Draft to the police tip line · 02:32","'Marina Road 2019. The man is in my cab now. Marina Point to the airport. Cab 11.' Never sent."],["photo","Rear-view mirror · 02:30","Blurred. A man in the back seat, face turned away. The scar is just visible."]]},
  ward:{owner:"Victor Hale",pin:"0900",hint:"The ward clerk: 'He set his phone to the time of the meeting he kept talking about. Four digits.'",
    m:[["R. Asante (lawyer)",[[0,"20:15","Confirmed. Monday 9am, at the hospital. Bring the new papers."]]],
       ["Clara",[[1,"23:52","Night Dad. Marcus says don't stress about Monday x"]]],
       ["Marcus",[[1,"23:55","Sleep well, Victor."]]],
       ["Ruth",[[1,"18:02","Sign the share option before you do anything rash, Victor."]]]],
    mail:[["R. Asante","New will: draft","Executor and residuary beneficiary changed from 'Clara and Marcus Wren' to 'Clara Wren' alone."],["Harbour General","Visiting hours","Family visiting ends at 23:00 on Ward Nine."]],
    calls:[["R. Asante","21 Oct","11 min"],["Clara","21 Oct","5 min"]],
    photos:[["doc","Crossword, page 41","Margins full of letters and arrows."],["people","Clara's wedding","Victor between Clara and Marcus, everyone smiling."]],
    notes:[["Monday","9:00 Asante. New will. Then the medical director."]],
    deleted:[["msg","Marcus · 21 Oct 14:20 · deleted by sender","'About what you saw in theatre. Let me explain before you do anything.' Recovered from the notification cache."],["msg","Victor → Marcus · 14:22 · unsent","'Explain it to my lawyer.'"]]}
};

/* ======================= INTERROGATION PRESSURE ======================= */
const LAWYER_MS=60000;
function pressOf(who){ C.press=C.press||{}; return C.press[who]=C.press[who]||{hits:[],strikes:0,law:0,cracked:false,adm:false,clr:false,shown:[]}; }
function pressLawyered(who){ const p=C.press&&C.press[who]; return !!(p&&p.law&&Date.now()<p.law); }
function pressMood(who){ const p=C.press&&C.press[who]; if(!p) return {}; if(p.cracked) return {mood:"tired"}; if(pressLawyered(who)) return {mood:"smirk"}; if(p.hits.length) return {mood:"frown"}; if(p.clr) return {mood:"smile"}; if(p.strikes>=2) return {mood:"suspicious"}; return {}; }
function pressPointed(ev,who){ const V=K.verdict; if((K.POINTS[ev]||[]).includes(who)) return true; return who===V.culprit&&V.pillars.some(p=>p.ev.includes(ev)); }
function pressPanelHTML(who){
  const p=pressOf(who), guilty=who===K.verdict.culprit, law=pressLawyered(who);
  const comp=p.cracked?0:Math.max(8,100-(guilty?p.hits.length*30:(p.adm?35:0))-p.strikes*10+(p.clr?10:0));
  const label=p.cracked?"Cracked":law?"Lawyered up":comp>80?"Calm":comp>55?"Uneasy":"Rattled";
  const opts=C.unlocked.filter(id=>!/^s_/.test(id)).map(id=>`<option value="${id}" ${p.shown.includes(id)?"disabled":""}>${exNo(id)} · ${esc(K.EV[id].title)}${p.shown.includes(id)?" (shown)":""}</option>`).join("");
  return `<div class="pxbox"><p class="eyebrow" style="margin:0 0 6px">Pressure</p>
  <div class="pxmeter"><span>Composure</span><div class="track"><div class="fill ${comp<40?"low":""}" style="width:${comp}%"></div></div><b>${label}</b></div>
  <div class="pxpat" title="Show them something irrelevant three times and they'll ask for a lawyer">Patience ${[0,1,2].map(i=>`<i class="${i<3-p.strikes?"on":""}"></i>`).join("")}</div>
  ${p.cracked?`<div class="pxok">Confession recorded. The jury will hear it.</div>`:law?`<div class="pxlaw">Lawyer present. Back in <b id="pxLawT">${Math.ceil((p.law-Date.now())/1000)}</b>s.</div>`:
  `<label class="l" for="pxEv" style="font-size:12px">Put an exhibit on the table</label><select class="field" id="pxEv">${opts}</select>
  <button class="btn small primary" data-act="pxShow" style="margin-top:6px">Present it</button>`}
  <p class="muted pxtip">The right exhibits make liars change their story. Three that hit home will break the guilty one.</p></div>`;
}
function pressSay(who,text,kind){
  C.ivLastP={who,text}; save(); renderPanel();
  const face=document.querySelector("#ivFace .face"), out=document.getElementById("ivA"); if(!face||!out) return;
  face.classList.add("talk"); if(kind==="hit"||kind==="crack") face.classList.add("nervous"); ivTalking=true;
  typeInto(out,text,kind==="crack"?30:20,()=>{ face.classList.remove("talk"); ivTalking=false; setTimeout(()=>face.classList.remove("nervous"),2500); });
}
function pressPresent(ev){
  const who=C.ivWho, p=pressOf(who), d=(PRESS[K.id]||{})[who]||{}, name=K.SUS[who].name, guilty=who===K.verdict.culprit;
  if(!ev||!K.EV[ev]||pressLawyered(who)||p.cracked) return;
  if(p.shown.includes(ev)){ pressSay(who,"You've already shown me that.","miss"); return; }
  p.shown.push(ev);
  const cleared=(K.CLEARS[ev]||[]).includes(who), pointed=pressPointed(ev,who);
  if(pointed&&guilty){
    p.hits.push(ev); sfx("heart");
    if(p.hits.length>=3){ p.cracked=true; sfx("stamp"); if(ROOM.on) roomProg("c-"+who); const t=d.crack||"All right. I did it.";
      C.clues.push({t:`${name}, recorded confession: "${t}"`,src:"Interview room"}); save(); renderChrome();
      toast("Confession recorded. It's in your notebook, and the jury will hear it."); pressSay(who,t,"crack");
      setTimeout(()=>partnerSay(`That's a confession, ${detName()}. Now make it stick in court.`),2500); return; }
    pressSay(who,(d.hit&&d.hit[ev])||PRESS_HIT[p.hits.length-1],"hit"); return;
  }
  if(pointed&&!guilty){
    if(!p.adm&&d.adm){ p.adm=true; sfx("heart"); C.clues.push({t:`${name} changed their story: "${d.adm}"`,src:"Interview room"}); save(); renderChrome(); toast(`${name.split(" ")[0]} changed their story. Noted.`); pressSay(who,d.adm,"hit"); return; }
    pressSay(who,"I've told you the truth now. All of it.","miss"); return;
  }
  if(cleared){ p.clr=true; sfx("unlock"); pressSay(who,PRESS_CLEAR[p.shown.length%PRESS_CLEAR.length],"clear"); return; }
  p.strikes++; sfx("wrong");
  if(p.strikes>=3){ p.strikes=0; p.law=Date.now()+LAWYER_MS; sfx("gavel"); toast(`${name.split(" ")[0]} wants a lawyer. Give it a minute.`); pressSay(who,d.lawyer||"I'm done talking. I want my lawyer.","miss"); return; }
  pressSay(who,PRESS_MISS[(p.shown.length+p.strikes)%PRESS_MISS.length],"miss");
}
setInterval(()=>{ const t=document.getElementById("pxLawT"); if(!t||G.screen!=="case") return; const p=C.press&&C.press[C.ivWho]; if(!p) return; const s=Math.ceil((p.law-Date.now())/1000); if(s<=0){ if(!ivTalking) renderPanel(); } else t.textContent=s; },1000);

/* ======================= SCENE WALK-THROUGH ======================= */
const WT=28, WALK_R=4.3;
function walkMap(){ const W=WALK[K.id]; const w=Math.max(...W.rows.map(r=>r.length)); return {W,w,h:W.rows.length,at:(x,y)=>(W.rows[y]||"")[x]||"#"}; }
const walkable=ch=>ch==="."||ch==="="||ch==="@"||/[a-z]/.test(ch);
function walkState(){ C.walk=C.walk||{found:[],dir:[0,1]}; if(C.walk.x==null){ const {W}=walkMap(); W.rows.forEach((r,y)=>{ const x=r.indexOf("@"); if(x>=0){ C.walk.x=x; C.walk.y=y; } }); } return C.walk; }
function walkItems(){ const {W}=walkMap(), out=[]; W.rows.forEach((r,y)=>[...r].forEach((ch,x)=>{ if(/[a-z]/.test(ch)&&W.items[ch]) out.push(Object.assign({id:ch,x,y},W.items[ch])); })); return out; }
function walkNear(){ const s=walkState(); return walkItems().filter(it=>Math.max(Math.abs(it.x-s.x),Math.abs(it.y-s.y))<=1); }
function walkSVG(){
  const {W,w,h,at}=walkMap(), s=walkState(); let g="";
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){ const ch=at(x,y), X=x*WT, Y=y*WT;
    if(ch==="#") g+=`<rect x="${X}" y="${Y}" width="${WT}" height="${WT}" fill="#2c343b"/><rect x="${X}" y="${Y}" width="${WT}" height="3" fill="#39434b"/>`;
    else if(ch==="~") g+=`<rect x="${X}" y="${Y}" width="${WT}" height="${WT}" fill="#1a2128"/><rect x="${X+2}" y="${Y+11}" width="${WT-4}" height="6" fill="#9fc3d6" opacity=".35"/>`;
    else if(/[A-Z]/.test(ch)) g+=`<rect x="${X}" y="${Y}" width="${WT}" height="${WT}" fill="#161b20"/><rect x="${X+2}" y="${Y+2}" width="${WT-4}" height="${WT-4}" rx="3" fill="#33414b" stroke="#4a5a66"/>`;
    else { g+=`<rect x="${X}" y="${Y}" width="${WT}" height="${WT}" fill="${(x+y)%2?"#1b2126":"#1d2429"}" data-wx="${x}" data-wy="${y}"/>`; if(ch==="=") g+=`<rect x="${X+3}" y="${Y+3}" width="${WT-6}" height="${WT-6}" fill="none" stroke="#5a4a2a" stroke-dasharray="3 3"/>`; } }
  walkItems().forEach(it=>{ const X=it.x*WT+WT/2, Y=it.y*WT+WT/2, f=s.found.includes(it.id);
    g+=f?`<g class="wkfound"><path d="M${X-7} ${Y+8} L${X} ${Y-8} L${X+7} ${Y+8}z" fill="#e2b13f"/><text x="${X}" y="${Y+6}" text-anchor="middle" font-size="8" font-family="IBM Plex Mono,monospace" fill="#1b1606">${s.found.indexOf(it.id)+1}</text></g>`
      :`<circle class="wkglint" cx="${X}" cy="${Y}" r="3.2" fill="#f4e6b0"/>`; });
  const px=s.x*WT+WT/2, py=s.y*WT+WT/2, [dx,dy]=s.dir||[0,1], ang=Math.atan2(dy,dx);
  const cone=`M${px} ${py} L${px+Math.cos(ang-.55)*WT*4.4} ${py+Math.sin(ang-.55)*WT*4.4} L${px+Math.cos(ang+.55)*WT*4.4} ${py+Math.sin(ang+.55)*WT*4.4}z`;
  let vx=0, vw=w*WT; if(window.innerWidth<700&&w>13){ vw=13*WT; vx=Math.max(0,Math.min(w*WT-vw,px-vw/2)); }
  return `<svg id="wkSvg" viewBox="${vx} 0 ${vw} ${h*WT}" role="img" aria-label="Map of ${esc(W.name)}, lit by your torch">
  <defs><radialGradient id="wkTorch" gradientUnits="userSpaceOnUse" cx="${px}" cy="${py}" r="${WT*WALK_R}"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".55" stop-color="#000" stop-opacity=".25"/><stop offset="1" stop-color="#03050a" stop-opacity=".9"/></radialGradient>
  <radialGradient id="wkCone" gradientUnits="userSpaceOnUse" cx="${px}" cy="${py}" r="${WT*4.4}"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".22"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient></defs>
  ${g}<path d="${cone}" fill="url(#wkCone)" pointer-events="none"/>
  <rect class="wkdark" width="${w*WT}" height="${h*WT}" fill="url(#wkTorch)" pointer-events="none"/>
  <g pointer-events="none"><circle cx="${px}" cy="${py}" r="8" fill="#e2b13f" stroke="#1b1606" stroke-width="2"/><circle cx="${px+dx*5}" cy="${py+dy*5}" r="2.5" fill="#1b1606"/></g></svg>`;
}
function walkHUD(){
  const {W}=walkMap(), s=walkState(), near=walkNear(), at=walkMap().at;
  const furn=[...new Set([[0,-1],[1,0],[0,1],[-1,0]].map(([dx,dy])=>at(s.x+dx,s.y+dy)).filter(ch=>W.fur[ch]).map(ch=>W.fur[ch]))];
  return near.length?`Within reach: <b>${near.map(n=>esc(n.n)).join(", ")}</b>. <button class="btn small primary" data-act="wkLook">Examine (E)</button>`
    :furn.length?`Beside you: ${furn.map(esc).join(", ")}.`:`<span class="muted">Sweep the torch. Something glints when you get close.</span>`;
}
function walkHTML(){
  const {W}=walkMap(), s=walkState(), items=walkItems(), sel=items.find(i=>i.id===s.sel&&s.found.includes(i.id));
  return `<div class="officehead"><h2>Scene walk-through</h2><span class="muted">${esc(W.name)}. ${esc(W.intro)} The crime-scene photo is still in the forensics lab; this is the rest of the place.</span></div>
  <div class="wk"><div class="wkmap" id="wkMap">${walkSVG()}</div>
  <div class="wkside"><div class="wkhud" id="wkHud">${walkHUD()}</div>
  <div class="wkpad" aria-label="Move"><button class="btn small" data-act="wkMove" data-id="0,-1" aria-label="Up">&#9650;</button><button class="btn small" data-act="wkMove" data-id="-1,0" aria-label="Left">&#9664;</button><button class="btn small" data-act="wkMove" data-id="1,0" aria-label="Right">&#9654;</button><button class="btn small" data-act="wkMove" data-id="0,1" aria-label="Down">&#9660;</button></div>
  <p class="muted" style="font-size:13px;margin:0">Arrow keys or WASD to walk, E to examine. Or tap where you want to go.</p>
  <div class="wkfind"><p class="eyebrow" style="margin:0 0 6px">Marked ${s.found.length}/${items.length}</p>
  ${s.found.map((id,i)=>{ const it=items.find(x=>x.id===id); return it?`<button class="wkf ${s.sel===id?"on":""}" data-act="wkSel" data-id="${id}"><span>${i+1}</span>${esc(it.n)}</button>`:""; }).join("")||`<span class="muted" style="font-size:13px">Nothing marked yet.</span>`}</div>
  ${sel?`<div class="wkcard"><b>${esc(sel.n)}</b><p>${esc(sel.t)}</p><button class="btn small" data-act="wkPin">Pin to notebook</button> <button class="btn small" data-act="wkClip">Clip to wall</button></div>`:""}
  ${s.found.length===items.length?`<div class="pxok">Walk-through complete. Every point of interest is marked.</div>`:""}</div></div>`;
}
function walkRedraw(){ const m=document.getElementById("wkMap"), h=document.getElementById("wkHud"); if(m) m.innerHTML=walkSVG(); if(h) h.innerHTML=walkHUD(); }
function walkStep(dx,dy){ const s=walkState(), {at}=walkMap(); s.dir=[dx,dy]; const ch=at(s.x+dx,s.y+dy); if(walkable(ch)){ s.x+=dx; s.y+=dy; if(Math.random()<.35) sfx("type"); } walkRedraw(); }
function walkLook(){ const s=walkState(), near=walkNear(); if(!near.length){ toast("Nothing within reach"); return; }
  const it=near.find(n=>!s.found.includes(n.id))||near[0]; const fresh=!s.found.includes(it.id);
  if(fresh){ s.found.push(it.id); sfx("paper"); if(ROOM.on) roomProg("w-"+it.id); } s.sel=it.id; save(); renderPanel();
  if(fresh&&s.found.length===walkItems().length){ sfx("unlock"); partnerSay(`That's the whole scene walked, ${detName()}. Check what the photo didn't show us.`); }
}
let wkPath=null;
function walkTo(tx,ty){
  const {w,h,at}=walkMap(), s=walkState(); clearInterval(wkPath);
  const goal=new Set(); if(walkable(at(tx,ty))) goal.add(tx+","+ty); else [[0,-1],[1,0],[0,1],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]].forEach(([dx,dy])=>{ if(walkable(at(tx+dx,ty+dy))) goal.add((tx+dx)+","+(ty+dy)); });
  if(!goal.size) return; const prev={}, q=[[s.x,s.y]], seen=new Set([s.x+","+s.y]); let end=null;
  while(q.length){ const [x,y]=q.shift(), k=x+","+y; if(goal.has(k)){ end=k; break; }
    for(const [dx,dy] of [[0,-1],[1,0],[0,1],[-1,0]]){ const nx=x+dx, ny=y+dy, nk=nx+","+ny; if(nx<0||ny<0||nx>=w||ny>=h||seen.has(nk)||!walkable(at(nx,ny))) continue; seen.add(nk); prev[nk]=k; q.push([nx,ny]); } }
  if(!end) return; const path=[]; for(let k=end;k!==s.x+","+s.y;k=prev[k]) path.unshift(k.split(",").map(Number));
  wkPath=setInterval(()=>{ const n=path.shift(); if(!n||C.tab!=="walk"){ clearInterval(wkPath); if(C.tab==="walk"){ if(!walkable(at(tx,ty))){ s.dir=[Math.sign(tx-s.x),Math.sign(ty-s.y)]; walkRedraw(); } save(); } return; } walkStep(n[0]-s.x,n[1]-s.y); },85);
}
document.addEventListener("keydown",e=>{
  if(G.screen!=="case"||!C||C.tab!=="walk"||e.target.matches("input,textarea,select")||e.metaKey||e.ctrlKey) return;
  const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0],W:[0,-1],S:[0,1],A:[-1,0],D:[1,0]}[e.key];
  if(m){ e.preventDefault(); clearInterval(wkPath); walkStep(m[0],m[1]); save(); return; }
  if(e.key==="e"||e.key==="E"||(e.key===" "&&!e.target.closest("button"))){ e.preventDefault(); walkLook(); }
});
document.addEventListener("click",e=>{
  if(G.screen!=="case"||!C||C.tab!=="walk") return; const svg=e.target.closest("#wkSvg"); if(!svg) return;
  const r=svg.getBoundingClientRect(), vb=svg.viewBox.baseVal, x=Math.floor((vb.x+(e.clientX-r.left)/r.width*vb.width)/WT), y=Math.floor((vb.y+(e.clientY-r.top)/r.height*vb.height)/WT);
  const s=walkState(); const it=walkItems().find(i=>i.x===x&&i.y===y);
  if(it&&Math.max(Math.abs(it.x-s.x),Math.abs(it.y-s.y))<=1){ walkLook(); return; }
  walkTo(x,y);
});

/* ======================= VICTIM'S PHONE ======================= */
function phoneState(){ C.phone=C.phone||{unl:false,app:"home",sel:null,entry:"",crack:0,del:[]}; const P=PHONE[K.id]; if(P.needs&&C.done[P.needs]) C.phone.unl=true; return C.phone; }
const PH_ICON=(()=>{ const sv=d=>`<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0b0d10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  return {m:sv('<path d="M4 5h16v11H9l-5 4z"/>'),mail:sv('<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 7l9 6 9-6"/>'),calls:sv('<path d="M6 3l4 1 1 5-2 1a11 11 0 0 0 5 5l1-2 5 1 1 4c-9 1-16-6-15-15z"/>'),
    photos:sv('<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 16l5-5 4 4 3-3 6 6"/><circle cx="16" cy="9" r="1.5"/>'),notes:sv('<path d="M6 3h12v18H6z M9 8h6 M9 12h6 M9 16h4"/>'),deleted:sv('<path d="M4 7h16 M9 7V4h6v3 M6 7l1 13h10l1-13"/>')}; })();
const PH_APPS=[["m","Messages","#3fbf7f"],["mail","Mail","#4a8fd9"],["calls","Phone","#5fb380"],["photos","Photos","#d98a4a"],["notes","Notes","#e2b13f"],["deleted","Recently deleted","#d9634f"]];

/* ======================= PHONE PHOTOS (drawn scenes) ======================= */
let phArtN=0;
const PA={
  mono:'font-family="IBM Plex Mono,monospace"', hand:'font-family="Segoe Print,Bradley Hand,Comic Sans MS,cursive"', sans:'font-family="Inter,Arial,sans-serif"',
  person(cx,base,s,fill,hair){ const hy=base-52*s, r=11*s;
    const h=hair==="long"?`<path d="M${cx-r*1.15} ${hy} Q${cx-r*1.3} ${hy+r*3.2} ${cx-r*.6} ${hy+r*3.4} L${cx+r*.6} ${hy+r*3.4} Q${cx+r*1.3} ${hy+r*3.2} ${cx+r*1.15} ${hy} Q${cx} ${hy-r*1.5} ${cx-r*1.15} ${hy}z" fill="${fill}"/>`
      :hair==="bun"?`<circle cx="${cx}" cy="${hy-r*1.05}" r="${r*.5}" fill="${fill}"/>`:hair==="hat"?`<rect x="${cx-r*1.6}" y="${hy-r*.75}" width="${r*3.2}" height="${r*.35}" rx="${r*.15}" fill="${fill}"/><rect x="${cx-r*.9}" y="${hy-r*1.6}" width="${r*1.8}" height="${r*1}" rx="${r*.3}" fill="${fill}"/>`:"";
    return `${h}<circle cx="${cx}" cy="${hy}" r="${r}" fill="${fill}"/><rect x="${cx-r*.35}" y="${hy+r*.8}" width="${r*.7}" height="${r*.7}" fill="${fill}"/><path d="M${cx-26*s} ${base} Q${cx-25*s} ${base-36*s} ${cx} ${base-37*s} Q${cx+25*s} ${base-36*s} ${cx+26*s} ${base}z" fill="${fill}"/>`; },
  paper(x,y,w,h,rot,inner,fill){ return `<g transform="rotate(${rot} ${x+w/2} ${y+h/2})"><rect x="${x+3}" y="${y+4}" width="${w}" height="${h}" fill="#000" opacity=".45" filter="url(#SOFT)"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill||"#efe9dc"}"/>${inner}</g>`; },
  t(x,y,txt,o){ o=o||{}; return `<text x="${x}" y="${y}" ${o.f||PA.mono} font-size="${o.s||6}" fill="${o.c||"#2b2a27"}" ${o.a?`text-anchor="${o.a}"`:""} ${o.w?`font-weight="${o.w}"`:""} ${o.r?`transform="rotate(${o.r} ${x} ${y})"`:""} ${o.op?`opacity="${o.op}"`:""}>${esc(txt)}</text>`; },
  stamp(txt){ return `<text x="232" y="172" ${PA.mono} font-size="9" fill="#ff8a2a" text-anchor="end" opacity=".9" style="letter-spacing:1px">${esc(txt)}</text>`; },
  wrap(inner,o){ o=o||{}; const n=++phArtN, id=s=>s+n; inner=inner.replace(/url\(#(\w+)\)/g,(m,a)=>`url(#${a}${n})`);
    return `<svg viewBox="0 0 240 180" class="phph" role="img" aria-label="${esc(o.label||"Photo")}"><defs>
    <filter id="${id("SOFT")}"><feGaussianBlur stdDeviation="2"/></filter><filter id="${id("BLUR")}"><feGaussianBlur stdDeviation="${o.blur||1.6}"/></filter>
    <filter id="${id("GRAIN")}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${n%9}"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .55 0"/></filter>
    <radialGradient id="${id("VIG")}" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".7"/></radialGradient>
    <radialGradient id="${id("FLASH")}" cx="${o.fx||.45}" cy="${o.fy||.4}" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    ${o.defs?o.defs.replace(/id="(\w+)"/g,(m,a)=>`id="${a}${n}"`):""}</defs>
    <g ${o.blurAll?`filter="url(#${id("BLUR")})"`:""}>${inner}</g>
    ${o.flash?`<rect width="240" height="180" fill="url(#${id("FLASH")})"/>`:""}<rect width="240" height="180" filter="url(#${id("GRAIN")})" opacity=".35" style="mix-blend-mode:overlay"/><rect width="240" height="180" fill="url(#${id("VIG")})"/>${o.stamp?PA.stamp(o.stamp):""}</svg>`; }
};
const desk=(c1,c2)=>`<rect width="240" height="180" fill="${c1||"#2a2018"}"/>${[0,1,2,3,4,5].map(i=>`<path d="M0 ${20+i*30} Q120 ${14+i*30} 240 ${24+i*30}" stroke="${c2||"#33281e"}" stroke-width="5" fill="none" opacity=".6"/>`).join("")}`;
const PH_ART={
  "cold:p0":()=>PA.wrap(desk()+PA.paper(46,14,150,156,-4,
    PA.t(56,30,"HALCYON · HSM AUDIT · EXPORT LOG",{w:700})+PA.t(186,30,"p.3",{a:"end"})+`<line x1="56" y1="35" x2="186" y2="35" stroke="#2b2a27" stroke-width=".6"/>`+
    [["01:12","KEY-EXPORT","PRAMAN","vault/0417"],["01:40","KEY-EXPORT","PRAMAN","vault/0418"],["02:05","AUTH-OK","DOKAFOR","console"],["02:14","KEY-EXPORT","PRAMAN","vault/0422"],["02:51","KEY-EXPORT","PRAMAN","vault/0431"],["03:09","KEY-EXPORT","PRAMAN","vault/0433"],["03:37","KEY-EXPORT","PRAMAN","vault/0440"],["03:58","KEY-EXPORT","PRAMAN","vault/0441"],["09:30","AUDIT-VIEW","DOKAFOR","console"]]
      .map((r,i)=>(r[2]==="PRAMAN"?`<rect x="117" y="${42+i*13}" width="27" height="7" fill="#f2e04a" opacity=".6"/>`:"")+PA.t(56,47+i*13,r[0],{s:5.2})+PA.t(78,47+i*13,r[1],{s:5.2})+PA.t(118,47+i*13,r[2],{s:5.2})+PA.t(186,47+i*13,r[3],{s:5.2,a:"end"})).join("")+
    `<path d="M190 42 Q196 90 190 140" stroke="#c2272d" stroke-width="1.4" fill="none"/>`+PA.t(150,160,"41 exports?!",{f:PA.hand,s:9,c:"#c2272d",r:-6})),{flash:1,label:"HSM export log, page 3"}),
  "cold:p1":()=>PA.wrap(`<defs></defs><rect width="240" height="180" fill="url(#SKY)"/><circle cx="170" cy="96" r="20" fill="#ffcf7a" opacity=".95"/><rect y="104" width="240" height="40" fill="#2f3f5c"/>${[0,1,2,3,4,5].map(i=>`<rect x="${100+i*14}" y="${108+i*5}" width="${60-i*6}" height="1.5" fill="#ffcf7a" opacity="${.7-i*.1}"/>`).join("")}<rect y="138" width="240" height="42" fill="#1a1a22"/>${PA.person(92,140,1,"#121218","short")}${PA.person(126,140,.9,"#121218","long")}<path d="M40 40 q5 -4 10 0 q5 -4 10 0" stroke="#121218" fill="none" stroke-width="1.4"/><path d="M62 30 q4 -3 8 0 q4 -3 8 0" stroke="#121218" fill="none" stroke-width="1.2"/>`,
    {stamp:"14 09 26",label:"Daniel and Amara on the sea wall",defs:`<linearGradient id="SKY" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2a55"/><stop offset=".6" stop-color="#d9784a"/><stop offset="1" stop-color="#f2b25f"/></linearGradient>`}),
  "cold:d0":()=>PA.wrap(`<rect width="240" height="180" fill="#0d1216"/>${[0,1,2,3,4].map(i=>`<rect x="20" y="${12+i*32}" width="200" height="26" rx="2" fill="#1a2329" stroke="#2c3a44"/>${[0,1,2,3,4,5,6].map(j=>`<circle cx="${30+j*6}" cy="${25+i*32}" r="1.6" fill="${(i+j)%3?"#3fbf7f":"#e2b13f"}"/>`).join("")}`).join("")}<rect x="96" y="76" width="96" height="22" fill="#262f36" stroke="#54646f"/><rect x="100" y="80" width="70" height="14" fill="#11161a"/>${PA.paper(132,62,46,40,7,PA.t(155,78,"COPY 1",{f:PA.hand,s:9,a:"middle",w:700})+PA.t(155,92,"OF 1",{f:PA.hand,s:9,a:"middle",w:700}),"#f6e15a")}${PA.t(28,170,"R7 · BAY 3",{c:"#8fa3b0",s:7})}`,{flash:1,fx:.6,fy:.45,stamp:"13 10 26 22:16",label:"Drive in rack 7 with a Post-it"}),
  "static:p0":()=>PA.wrap(desk("#1f1a16","#2a231d")+PA.paper(30,12,180,160,3,
    PA.t(40,28,"NIGHT LIGHT APPEAL · SEPTEMBER",{w:700,s:7})+`<line x1="40" y1="33" x2="200" y2="33" stroke="#7a2f2a"/><line x1="168" y1="36" x2="168" y2="168" stroke="#c9b8a8"/>`+
    [["02 Sep","On-air pledges","+9,400",""],["05 Sep","admin","−2,200","J.V."],["09 Sep","On-air pledges","+11,800",""],["12 Sep","admin","−3,100","J.V."],["16 Sep","Hospice transfer","−6,000","H.P."],["19 Sep","admin","−4,750","J.V."],["23 Sep","On-air pledges","+14,600",""],["27 Sep","admin","−7,100","J.V."]]
      .map((r,i)=>PA.t(40,48+i*15,r[0])+PA.t(74,48+i*15,r[1],{f:PA.hand,s:7.5})+PA.t(162,48+i*15,r[2],{a:"end"})+(r[3]?PA.t(172,48+i*15,r[3],{f:PA.hand,s:8,c:r[3]==="J.V."?"#1d3f8a":"#333"}):"")).join("")+
    `<ellipse cx="182" cy="73" rx="14" ry="9" fill="none" stroke="#c2272d" stroke-width="1.2"/><ellipse cx="182" cy="118" rx="14" ry="9" fill="none" stroke="#c2272d" stroke-width="1.2"/><ellipse cx="182" cy="148" rx="14" ry="9" fill="none" stroke="#c2272d" stroke-width="1.2"/>`),{flash:1,label:"Appeal ledger"}),
  "static:p1":()=>PA.wrap(`<rect width="240" height="180" fill="#2a2433"/>${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${i*30+2}" y="8" width="26" height="70" fill="#352d40" stroke="#241e2c"/>`).join("")}<rect x="168" y="16" width="56" height="18" rx="3" fill="#b8231c"/>${PA.t(196,29,"ON AIR",{a:"middle",c:"#ffe3dc",s:9,w:700,f:PA.sans})}${PA.person(84,150,1.25,"#17141c","short")}${PA.person(158,150,1.2,"#17141c","hat")}<rect y="128" width="240" height="52" fill="#3a2b22"/><rect x="104" y="96" width="34" height="38" rx="6" fill="#8b8f96"/><rect x="108" y="74" width="26" height="28" rx="13" fill="#b9bdc4"/>${[0,1,2,3].map(i=>`<line x1="110" y1="${80+i*5}" x2="132" y2="${80+i*5}" stroke="#6f737a"/>`).join("")}${[0,1,2].map(i=>`<rect x="${113+i*7}" y="62" width="2" height="10" fill="#f0e2c0"/><ellipse cx="${114+i*7}" cy="59" rx="2" ry="3.5" fill="#ffb238"/>`).join("")}<circle cx="121" cy="66" r="26" fill="#ffb238" opacity=".12"/>`,{stamp:"11 03 19",flash:1,fx:.5,fy:.5,label:"Studio B birthday, 2019"}),
  "ninth:p0":()=>PA.wrap(`<rect width="240" height="180" fill="#11182e"/><rect x="20" y="20" width="200" height="140" rx="6" fill="#1b2650" stroke="#0b1022"/>${Array.from({length:14},(_,i)=>{ const x=50+(i%5)*35, y=48+Math.floor(i/5)*38; return `<polygon points="${x},${y-9} ${x+8},${y-2} ${x},${y+10} ${x-8},${y-2}" fill="#dfe9f2"/><polygon points="${x},${y-9} ${x+8},${y-2} ${x},${y-2}" fill="#fff"/><polygon points="${x-8},${y-2} ${x},${y+10} ${x},${y-2}" fill="#9fb4c8"/><circle cx="${x+3}" cy="${y-4}" r="1" fill="#fff"/>`; }).join("")}<rect x="150" y="128" width="62" height="22" fill="#efe7d4" transform="rotate(-8 181 139)"/>${PA.t(156,142,"F&D · 14 STONES",{r:-8,s:6,w:700})}`,{flash:1,stamp:"11 10 26 22:30",label:"Fourteen stones on a velvet tray"}),
  "ninth:p1":()=>PA.wrap(`<rect width="240" height="180" fill="#2a1c1c"/>${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>`<rect x="${i*20}" y="0" width="12" height="180" fill="#5a1f22" opacity=".6"/>`).join("")}<rect x="78" y="6" width="84" height="168" fill="#f1ece2"/>${[0,1,2].map(i=>`<rect x="84" y="${12+i*54}" width="72" height="50" fill="#c9cdd2"/>${PA.person(120+[-4,3,0][i],62+i*54,.78,"#3a3a44","long")}`).join("")}${PA.t(120,172,"FOTO-MAT 2019",{a:"middle",s:5,c:"#555"})}`,{label:"Photo-booth strip"}),
  "saffron:p0":()=>PA.wrap(desk("#20201c","#2a2a24")+[["CALDER BRASSERIE","0017"],["THE OLIVE YARD","0019"],["MAREA","0021"],["NO. 9 QUAY","0022"],["BÁNH & CO","0024"],["LARCH","0026"]].map(([n,no],i)=>PA.paper(14+(i%3)*72,10+Math.floor(i/3)*82,66,76,[-6,3,-2,5,-4,2][i],
    PA.t(18+(i%3)*72,22+Math.floor(i/3)*82,"ACHTERBERG MEDIA",{s:4.6,w:700})+PA.t(18+(i%3)*72,30+Math.floor(i/3)*82,"INVOICE "+no,{s:4.4})+PA.t(18+(i%3)*72,42+Math.floor(i/3)*82,"To: "+n,{s:4.2})+PA.t(18+(i%3)*72,52+Math.floor(i/3)*82,"Consultancy",{s:4.2})+PA.t(76+(i%3)*72,66+Math.floor(i/3)*82,"6,000",{s:5.5,a:"end",w:700}))).join(""),{flash:1,label:"Six invoices"}),
  "saffron:p1":()=>PA.wrap(`<rect width="240" height="180" fill="#160f0c"/><ellipse cx="120" cy="100" rx="112" ry="72" fill="#efe9de"/>${[[78,96],[162,96]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="26" fill="#fbfaf6" stroke="#ddd6c8"/><circle cx="${x}" cy="${y}" r="17" fill="none" stroke="#e5ded0"/><rect x="${x-34}" y="${y-18}" width="3" height="36" fill="#b9b9b9"/><rect x="${x+31}" y="${y-18}" width="3" height="36" fill="#b9b9b9"/>`).join("")}<circle cx="100" cy="56" r="9" fill="#d7e9f2" opacity=".8" stroke="#aac6d4"/><circle cx="142" cy="56" r="9" fill="#d7e9f2" opacity=".8" stroke="#aac6d4"/><circle cx="98" cy="54" r="2.5" fill="#fff"/><circle cx="140" cy="54" r="2.5" fill="#fff"/><rect x="117" y="122" width="6" height="16" fill="#efe7d4"/><ellipse cx="120" cy="120" rx="2.5" ry="4" fill="#ffb238"/><circle cx="120" cy="120" r="18" fill="#ffb238" opacity=".1"/>${PA.t(78,140,"7A",{a:"middle",s:7,c:"#9a927f"})}${PA.t(162,140,"7B",{a:"middle",s:7,c:"#9a927f"})}`,{stamp:"17 10 26 20:04",flash:1,label:"Table 7 before service"}),
  "saffron:d1":()=>PA.wrap(`<rect width="240" height="180" fill="#160f0c"/><ellipse cx="120" cy="120" rx="140" ry="80" fill="#e9e3d6"/><rect x="138" y="70" width="26" height="46" rx="4" fill="#d7e9f2" opacity=".75" stroke="#9fbccc"/><rect x="141" y="88" width="20" height="25" fill="#c6dfec"/><path d="M60 64 Q96 70 122 82 Q140 90 146 100 Q138 106 124 100 L92 96 Q70 92 50 84z" fill="#d8a786"/><rect x="104" y="84" width="8" height="5" rx="2" fill="#d9b44a"/><rect x="30" y="58" width="44" height="34" rx="10" fill="#22252b"/>`,{blurAll:1,blur:2.4,stamp:"17 10 26 21:27",label:"Blurred photo of a hand near a glass"}),
  "bay:p0":()=>PA.wrap(`<rect width="240" height="180" fill="#121417"/><rect x="0" y="40" width="240" height="60" fill="#c9a227"/><rect x="0" y="44" width="240" height="52" fill="#1e2124"/>${[0,1,2,3,4,5,6,7].map(i=>`<path d="M0 ${50+i*6} C80 ${46+i*6} 160 ${56+i*6} 240 ${50+i*6}" stroke="${["#2f6fbf","#d9d9d9","#e2b13f","#3a3d42","#5fb380","#d9634f","#9aa0a6","#2f6fbf"][i]}" stroke-width="3" fill="none"/>`).join("")}<rect x="96" y="58" width="52" height="34" rx="3" fill="#0b0b0c" stroke="#3a3d42"/><circle cx="138" cy="68" r="2.5" fill="#4bff7a"/><circle cx="138" cy="68" r="10" fill="#4bff7a" opacity=".2"/>${PA.t(102,86,"NO LABEL",{s:5,c:"#55595e"})}<path d="M120 92 L120 140 Q120 150 132 156 L240 156" stroke="#f2a33a" stroke-width="2.5" fill="none"/>`,{flash:1,fx:.5,fy:.4,stamp:"09 10 26 21:52",label:"Black box on the cable tray"}),
  "bay:p1":()=>PA.wrap(`<rect width="240" height="180" fill="#26292d"/>${[0,1,2].map(i=>`<rect x="${20+i*72}" y="30" width="62" height="120" fill="#3b3f44" stroke="#4b5056"/><rect x="${22+i*72}" y="32" width="58" height="116" fill="none" stroke="#7a7d80" stroke-dasharray="2 2" opacity=".5"/>`).join("")}<rect x="92" y="30" width="62" height="120" fill="#0a0b0c"/>${[0,1,2,3].map(i=>`<path d="M${100+i*12} 30 L${104+i*10} 150" stroke="${["#2f6fbf","#e2b13f","#9aa0a6","#d9634f"][i]}" stroke-width="2.5"/>`).join("")}<rect x="96" y="12" width="54" height="13" fill="#e2b13f"/>${PA.t(123,21,"FS-B3-04",{a:"middle",s:7,w:700,c:"#1b1606"})}`,{flash:1,stamp:"09 10 26 21:50",label:"Riser B3 with panel open"}),
  "atrium:p0":()=>PA.wrap(`<rect width="240" height="180" fill="url(#SKY)"/>${Array.from({length:16},(_,i)=>`<rect x="${i*16}" y="${70+((i*37)%40)}" width="14" height="80" fill="#1c1a2a"/>`).join("")}<circle cx="60" cy="74" r="14" fill="#ffb46a"/><rect y="110" width="240" height="70" fill="#2a2c33"/><rect y="96" width="240" height="22" fill="#a9cfe0" opacity=".22"/><rect y="94" width="240" height="3" fill="#c7d3da"/><ellipse cx="130" cy="150" rx="48" ry="12" fill="#4a4136"/><rect x="108" y="134" width="10" height="12" rx="2" fill="#f2efe8"/><rect x="140" y="134" width="10" height="12" rx="2" fill="#f2efe8"/>`,{stamp:"28 09 26",label:"The level 12 balcony at sunset",defs:`<linearGradient id="SKY" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#28203f"/><stop offset=".7" stop-color="#e07a4f"/></linearGradient>`}),
  "atrium:p1":()=>PA.wrap(`<rect width="240" height="180" fill="#3a3f45"/><rect x="14" y="14" width="212" height="152" fill="#f4f6f7" stroke="#b9c0c5" stroke-width="3"/>${PA.t(40,80,"C",{f:PA.hand,s:34,c:"#1d3f8a",w:700})}<circle cx="52" cy="70" r="22" fill="none" stroke="#c2272d" stroke-width="2"/>${PA.t(80,78,"→ wallet →",{f:PA.hand,s:16,c:"#1d3f8a"})}${PA.t(186,78,"P.R.",{f:PA.hand,s:16,c:"#1d3f8a"})}${PA.t(40,128,"Halcyon keys = £?",{f:PA.hand,s:11,c:"#2b2a27"})}${PA.t(40,148,"Wed: SAY IT",{f:PA.hand,s:11,c:"#c2272d"})}<rect x="200" y="20" width="10" height="10" rx="5" fill="#d9634f"/>`,{flash:1,fx:.7,fy:.3,label:"Whiteboard: C to wallet to P.R."}),
  "atrium:d1":()=>PA.wrap(`<rect width="240" height="180" fill="#0e1116"/><rect x="60" y="6" width="120" height="168" rx="10" fill="#f5f6f8"/>${PA.t(120,26,"VRP Treasury",{a:"middle",s:8,w:700,f:PA.sans})}<circle cx="120" cy="52" r="12" fill="#3fbf7f"/><path d="M114 52 l4 4 l8 -8" stroke="#fff" stroke-width="2.4" fill="none"/>${PA.t(120,80,"Transfer sent",{a:"middle",s:8,w:700,f:PA.sans})}${PA.t(120,98,"0.84 BTC",{a:"middle",s:12,w:700,f:PA.sans})}${PA.t(72,120,"To",{s:6,c:"#888"})}${PA.t(168,120,"PRAMAN",{a:"end",s:6.5,w:700})}${PA.t(72,134,"Wallet",{s:6,c:"#888"})}${PA.t(168,134,"…f3",{a:"end",s:6.5})}${PA.t(72,148,"Approved",{s:6,c:"#888"})}${PA.t(168,148,"C. Marlow",{a:"end",s:6.5})}`,{label:"Screenshot of a wallet transfer"}),
  "fare:p0":()=>PA.wrap(`<rect width="240" height="180" fill="#151a28"/><rect y="120" width="240" height="60" fill="#22252b"/>${[0,1,2,3,4].map(i=>`<rect x="${i*56}" y="148" width="30" height="3" fill="#e9e3c0" opacity=".6"/>`).join("")}<rect x="114" y="20" width="6" height="122" fill="#3a3f45"/><path d="M117 20 Q140 14 150 22" stroke="#3a3f45" stroke-width="4" fill="none"/><ellipse cx="150" cy="26" rx="8" ry="4" fill="#ffd27a"/><path d="M110 40 L190 180 L80 180z" fill="#ffd27a" opacity=".08"/>${[["#d9634f",108,92],["#f2e04a",124,94],["#f7f2ea",116,84],["#d978a8",104,100],["#f2e04a",128,102],["#d9634f",120,104]].map(([c,x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="${c}"/><circle cx="${x}" cy="${y}" r="2" fill="#5a4a1a"/>`).join("")}<path d="M108 106 L120 124 L130 106" stroke="#3b7a3b" stroke-width="2" fill="none"/><rect x="102" y="108" width="30" height="5" fill="#c2272d"/>${PA.t(50,40,"MARINA RD",{s:7,c:"#9fb3c0",w:700})}`,{stamp:"14 08 26",label:"Flowers on a lamppost, Marina Road"}),
  "fare:p1":()=>PA.wrap(desk("#2b2620","#332d26")+PA.paper(40,10,160,162,-2,`<path d="M120 36 C92 36 82 62 84 90 C86 122 102 146 120 148 C138 146 154 122 156 90 C158 62 148 36 120 36z" fill="none" stroke="#3b3b3b" stroke-width="1.4"/><path d="M98 80 Q106 74 114 79 M128 79 Q136 74 144 80" stroke="#2b2b2b" stroke-width="2.4" fill="none"/><path d="M103 72 L112 86" stroke="#2b2b2b" stroke-width="1.6"/><ellipse cx="106" cy="88" rx="5" ry="2.6" fill="#3b3b3b"/><ellipse cx="136" cy="88" rx="5" ry="2.6" fill="#3b3b3b"/><path d="M120 92 L116 112 L124 113" stroke="#3b3b3b" fill="none"/><path d="M110 126 Q120 130 132 125" stroke="#3b3b3b" fill="none"/>${[0,1,2,3,4,5,6].map(i=>`<line x1="${88+i*3}" y1="${96+i*4}" x2="${84+i*3}" y2="${104+i*4}" stroke="#777" stroke-width=".6"/>`).join("")}`+PA.t(140,66,"scar →",{f:PA.hand,s:8,c:"#2b2b2b",r:-8})+PA.t(52,164,"Aug 2019 · silver saloon",{f:PA.hand,s:8,c:"#2b2b2b"})),{flash:1,label:"Pencil sketch of a man with a scarred eyebrow"}),
  "fare:d1":()=>PA.wrap(`<rect width="240" height="180" fill="#07080b"/>${Array.from({length:10},(_,i)=>`<circle cx="${(i*47)%240}" cy="${10+(i*29)%60}" r="${3+i%3}" fill="${i%2?"#f2c96b":"#ff8a5a"}" opacity=".35"/>`).join("")}<rect x="40" y="40" width="160" height="62" rx="12" fill="#14161b" stroke="#2e3239" stroke-width="5"/><rect x="48" y="47" width="144" height="48" rx="8" fill="#20232b"/>${PA.person(126,98,.95,"#090a0d","short")}<path d="M115 52 L122 58" stroke="#d6c6b6" stroke-width="1.2" opacity=".55"/><rect x="116" y="102" width="8" height="30" fill="#14161b"/>`,{blurAll:1,blur:1.8,stamp:"21 10 26 02:30",label:"Blurred rear-view mirror with a passenger"}),
  "ward:p0":()=>PA.wrap(desk("#24211d","#2c2924")+PA.paper(36,8,168,166,2,(()=>{ const B=new Set([2,6,10,13,19,24,28,31,36,40,45,49,52,57,61,66,70,74,78]); let g=""; for(let i=0;i<81;i++){ const x=58+(i%9)*14, y=22+Math.floor(i/9)*14; g+=`<rect x="${x}" y="${y}" width="14" height="14" fill="${B.has(i)?"#222":"#fbfaf6"}" stroke="#333" stroke-width=".5"/>`; if(!B.has(i)&&i%5===1) g+=PA.t(x+7,y+11,"AMWRENTHEO"[i%10],{a:"middle",f:PA.hand,s:9,c:"#1d3f8a"}); } return g; })()+
    PA.t(44,166,"M.W. theatre store → ??",{f:PA.hand,s:8,c:"#c2272d",r:-3})+`<path d="M190 30 Q200 60 186 90" stroke="#c2272d" fill="none" marker-end=""/>`+PA.t(184,28,"41",{f:PA.hand,s:9,c:"#333"})),{flash:1,label:"Crossword page with notes in the margin"}),
  "ward:p1":()=>PA.wrap(`<rect width="240" height="180" fill="#e9eef0"/><path d="M30 180 L30 70 Q120 -10 210 70 L210 180" fill="none" stroke="#d7e2d0" stroke-width="18"/>${Array.from({length:22},(_,i)=>{ const a=Math.PI*(i/21); return `<circle cx="${120-90*Math.cos(a)}" cy="${76-62*Math.sin(a)+(i%2)*4}" r="5" fill="${["#f2b8c6","#fff","#f7d77a"][i%3]}"/>`; }).join("")}${PA.person(84,180,1.25,"#2b2f38","long")}${PA.person(122,180,1.05,"#5b5f66","short")}${PA.person(160,180,1.3,"#1f232a","short")}${Array.from({length:24},(_,i)=>`<rect x="${(i*41)%240}" y="${(i*23)%120}" width="3" height="3" fill="${["#f2b8c6","#9fd0ff","#f7d77a"][i%3]}" transform="rotate(${i*25} ${(i*41)%240} ${(i*23)%120})"/>`).join("")}`,{stamp:"06 06 21",label:"Clara's wedding: Victor between Clara and Marcus"})
};
function phArt(key,kind,cap){ const f=PH_ART[key]; return f?f():phPhoto(kind,cap); }

function phPhoto(kind,cap){
  const k={doc:`<rect x="30" y="14" width="60" height="78" fill="#eee8da"/>${[0,1,2,3,4,5,6].map(i=>`<rect x="38" y="${24+i*9}" width="${30+(i*13)%14}" height="3" fill="#8a857a"/>`).join("")}`,
    people:`<circle cx="45" cy="42" r="11" fill="#2a3640"/><rect x="31" y="56" width="28" height="40" rx="12" fill="#2a3640"/><circle cx="76" cy="46" r="10" fill="#33424d"/><rect x="63" y="59" width="26" height="40" rx="12" fill="#33424d"/>`,
    room:`<polygon points="10,96 110,96 90,50 30,50" fill="#3a2f26"/><ellipse cx="60" cy="72" rx="26" ry="9" fill="#e9e3d6" opacity=".8"/><rect x="48" y="58" width="5" height="12" fill="#cfe3ee" opacity=".7"/><rect x="66" y="58" width="5" height="12" fill="#cfe3ee" opacity=".7"/>`,
    street:`<rect x="58" y="20" width="4" height="76" fill="#3a3f45"/><circle cx="60" cy="20" r="7" fill="#f2c96b" opacity=".7"/>${[0,1,2,3].map(i=>`<circle cx="${54+i*4}" cy="${82-i%2*4}" r="3" fill="${i%2?"#d9634f":"#e9d27a"}"/>`).join("")}`,
    screen:`<rect x="20" y="22" width="80" height="54" rx="3" fill="#0f1a22" stroke="#3a4a55"/>${[0,1,2,3].map(i=>`<rect x="28" y="${30+i*10}" width="${40+i*7}" height="3" fill="#3fbf7f"/>`).join("")}`}[kind]||"";
  return `<svg viewBox="0 0 120 104" class="phph" role="img" aria-label="${esc(cap)}"><rect width="120" height="104" fill="#151a1f"/>${k}</svg>`;
}
function phItemHTML(title,body,extra){ return `<div class="phitem"><b>${esc(title)}</b>${extra?`<div>${extra}</div>`:""}<p>${esc(body)}</p><div class="phacts"><button class="btn small" data-act="phPin" data-t="${esc(title)}" data-b="${esc(body)}">Pin to notebook</button><button class="btn small" data-act="phClip" data-t="${esc(title)}" data-b="${esc(body)}">Clip to wall</button></div></div>`; }
function phoneScreen(){
  const P=PHONE[K.id], s=phoneState();
  if(!s.unl){
    const left=s.crack?Math.ceil((s.crack-Date.now())/1000):0;
    return `<div class="phlock"><div class="phclock">02:${String(17+(P.pin.length*3)%40).padStart(2,"0")}</div><div class="muted">${esc(P.owner)}'s phone</div>
    <div class="phdots">${[...Array(P.pin.length)].map((_,i)=>`<i class="${i<s.entry.length?"on":""}"></i>`).join("")}</div>
    <div class="phkeys">${[1,2,3,4,5,6,7,8,9,"del",0,"OK"].map(k=>`<button data-act="phKey" data-id="${k}" aria-label="${k==="del"?"Delete":k}">${k==="del"?"&#9003;":k}</button>`).join("")}</div>
    ${left>0?`<div class="phcrack">Lab cracker running… <b id="phCrackT">${left}</b>s</div>`:`<button class="btn small" data-act="phCrack" style="margin-top:8px">Run the lab cracker (costs a hint)</button>`}</div>`;
  }
  const back=`<button class="phback" data-act="phApp" data-id="${s.sel!=null?s.app:"home"}" aria-label="Back">&#8249;</button>`;
  if(s.app==="home"){ const nd=P.deleted.length-s.del.length;
    return `<div class="phhome"><div class="phclock sm">02:31</div><div class="phgrid">${PH_APPS.map(([id,l,c])=>`<button class="phapp" data-act="phApp" data-id="${id}"><span style="background:${c}">${PH_ICON[id]}</span>${l}${id==="deleted"&&nd?`<i>${nd}</i>`:""}</button>`).join("")}</div></div>`; }
  const T=(t)=>`<div class="phtop">${back}<b>${esc(t)}</b></div>`;
  if(s.app==="m"){ if(s.sel!=null){ const [who,msgs]=P.m[s.sel]; const body=msgs.map(m=>`${m[0]?who:P.owner.split(" ")[0]} (${m[1]}): ${m[2]}`).join("\n");
      return T(who)+`<div class="phthread">${msgs.map(m=>`<div class="phb ${m[0]?"them":"me"}"><small>${esc(m[1])}</small>${esc(m[2])}</div>`).join("")}</div><div class="phacts pad"><button class="btn small" data-act="phPin" data-t="Messages with ${esc(who)}" data-b="${esc(body)}">Pin thread</button><button class="btn small" data-act="phClip" data-t="Messages with ${esc(who)}" data-b="${esc(body)}">Clip to wall</button></div>`; }
    return T("Messages")+`<div class="phlist">${P.m.map(([who,msgs],i)=>`<button data-act="phSel" data-id="${i}"><b>${esc(who)}</b><small>${esc(msgs[msgs.length-1][2])}</small></button>`).join("")}</div>`; }
  if(s.app==="mail"){ if(s.sel!=null){ const [f,sub,b]=P.mail[s.sel]; return T("Mail")+phItemHTML(sub,b,`<small class="muted">From: ${esc(f)}</small>`); }
    return T("Mail")+`<div class="phlist">${P.mail.map(([f,sub],i)=>`<button data-act="phSel" data-id="${i}"><b>${esc(f)}</b><small>${esc(sub)}</small></button>`).join("")}</div>`; }
  if(s.app==="calls") return T("Recent calls")+`<div class="phlist">${P.calls.map(([w,t,d])=>`<div class="phrow"><b>${esc(w)}</b><small>${esc(t)} · ${esc(d)}</small></div>`).join("")}</div>`;
  if(s.app==="photos"){ if(s.sel!=null){ const [k,c,b]=P.photos[s.sel]; return T("Photos")+`<div class="phbig">${phArt(K.id+":p"+s.sel,k,c)}</div>`+phItemHTML(c,b); }
    return T("Photos")+`<div class="phpics">${P.photos.map(([k,c],i)=>`<button data-act="phSel" data-id="${i}" aria-label="${esc(c)}">${phArt(K.id+":p"+i,k,c)}</button>`).join("")}</div>`; }
  if(s.app==="notes"){ if(s.sel!=null){ const [t,b]=P.notes[s.sel]; return T("Notes")+phItemHTML(t,b); }
    return T("Notes")+`<div class="phlist">${P.notes.map(([t,b],i)=>`<button data-act="phSel" data-id="${i}"><b>${esc(t)}</b><small>${esc(b)}</small></button>`).join("")}</div>`; }
  if(s.app==="deleted"){ if(s.sel!=null){ const [k,t,b]=P.deleted[s.sel]; return T("Recently deleted")+(k==="photo"?`<div class="phbig">${phArt(K.id+":d"+s.sel,"screen",t)}</div>`:"")+phItemHTML(t,b,`<small class="phdel">Recovered · ${esc(k)}</small>`); }
    return T("Recently deleted")+`<p class="muted" style="font-size:12px;margin:6px 12px">Items here are removed after 30 days.</p><div class="phlist">${P.deleted.map(([k,t],i)=>`<button data-act="phSel" data-id="${i}" class="${s.del.includes(i)?"":"new"}"><b>${esc(t)}</b><small>${esc(k)}</small></button>`).join("")}</div>`; }
  return "";
}
function phoneHTML(){
  const P=PHONE[K.id], s=phoneState();
  return `<div class="officehead"><h2>${esc(P.owner)}'s phone</h2><span class="muted">Seized handset. Open it, then go through the apps. People hide things in Recently deleted.</span></div>
  <div class="ph"><div class="phnote"><p class="eyebrow">Evidence tag</p><p><b>Owner:</b> ${esc(P.owner)}</p><p>${esc(P.hint)}</p>
  ${s.unl?`<p class="pxok">Unlocked. Recently deleted: ${s.del.length}/${P.deleted.length} recovered.</p>`:`<p class="muted">Enter the passcode on the screen. Wrong guesses don't cost you anything.</p>`}</div>
  <div class="phframe"><div class="phnotch"></div><div class="phscreen" id="phScreen">${phoneScreen()}</div></div></div>`;
}
function phoneRedraw(){ const el=document.getElementById("phScreen"); if(el) el.innerHTML=phoneScreen(); }
function phoneUnlock(msg){ const s=phoneState(); s.unl=true; s.app="home"; s.sel=null; s.crack=0; save(); sfx("unlock"); toast(msg); renderPanel(); }
function phoneAct(act,id,a){
  const P=PHONE[K.id], s=phoneState();
  if(act==="phKey"){ if(s.unl) return; sfx("click");
    if(id==="del") s.entry=s.entry.slice(0,-1); else if(id!=="OK"&&s.entry.length<P.pin.length) s.entry+=id;
    if((id==="OK"&&s.entry)||s.entry.length===P.pin.length){
      if(s.entry===P.pin){ s.entry=""; phoneUnlock("Phone unlocked"); return; }
      s.entry=""; sfx("wrong"); save(); phoneRedraw(); const n=document.querySelector(".phdots"); if(n) n.classList.add("shake"); return; }
    save(); phoneRedraw(); return; }
  if(act==="phCrack"){ if(s.unl||s.crack) return; s.crack=Date.now()+30000; C.hints++; save(); renderChrome(); phoneRedraw(); toast("Lab cracker started. This costs you a hint."); return; }
  if(act==="phApp"){ if(id===s.app&&s.sel!=null){ s.sel=null; } else { s.app=id; s.sel=null; } sfx("click"); save(); phoneRedraw(); return; }
  if(act==="phSel"){ s.sel=+id; if(s.app==="deleted"&&!s.del.includes(+id)){ s.del.push(+id); sfx("creep"); if(s.del.length===P.deleted.length) setTimeout(()=>partnerSay(`Deleted for a reason, ${detName()}. Somebody didn't want those found.`),600); renderPanel(); save(); return; } sfx("paper"); save(); phoneRedraw(); return; }
  if(act==="phPin"){ addClue(`${a.dataset.t}: ${a.dataset.b}`,`${P.owner}'s phone`); renderChrome(); return; }
  if(act==="phClip"){ addWallItem({kind:"text",text:`${a.dataset.t}: ${a.dataset.b}`,src:`${P.owner}'s phone`}); return; }
}
setInterval(()=>{ if(G.screen!=="case"||!C||C.tab!=="phone") return; const s=C.phone; if(!s||s.unl||!s.crack) return; const left=Math.ceil((s.crack-Date.now())/1000); if(left<=0) phoneUnlock("The lab cracked the passcode"); else { const t=document.getElementById("phCrackT"); if(t) t.textContent=left; } },1000);

/* --- events for the three features --- */
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]"); if(!a||G.screen!=="case") return; const act=a.dataset.act, id=a.dataset.id;
  if(act==="pxShow"){ if(ivTalking) return; const sel=document.getElementById("pxEv"); if(sel) pressPresent(sel.value); return; }
  if(act==="wkMove"){ clearInterval(wkPath); const [dx,dy]=id.split(",").map(Number); walkStep(dx,dy); save(); return; }
  if(act==="wkLook"){ walkLook(); return; }
  if(act==="wkSel"){ walkState().sel=id; save(); renderPanel(); return; }
  if(act==="wkPin"||act==="wkClip"){ const it=walkItems().find(i=>i.id===walkState().sel); if(!it) return; if(act==="wkPin"){ addClue(`${it.n}: ${it.t}`,"Scene walk-through"); renderChrome(); } else addWallItem({kind:"text",text:`${it.n}: ${it.t}`,src:"Scene walk-through"}); return; }
  if(/^ph[A-Z]/.test(act)) phoneAct(act,id,a);
});
