/* Precinct Zero: utilities and case data (load before game.js) */
/* ======================= UTILITIES ======================= */
function rng(seed){ return function(){ seed|=0; seed=seed+0x6D2B79F5|0; let t=Math.imul(seed^seed>>>15,1|seed); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function shuffle(a,seed){ const r=rng(seed); a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
const esc = s => String(s==null?"":s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const shiftTxt = (s,n) => s.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65+n+260)%26+65));
const atbash = s => s.replace(/[A-Z]/g, c => String.fromCharCode(90-(c.charCodeAt(0)-65)));
function vig(s,key,dir){ key=(key||"").toUpperCase().replace(/[^A-Z]/g,""); if(!key) return s; let i=0; return s.replace(/[A-Z]/g,c=>{const k=key.charCodeAt(i++%key.length)-65; return String.fromCharCode((c.charCodeAt(0)-65+dir*k+26)%26+65);}); }
const mrzVal = c => c==="<"?0:/[0-9]/.test(c)?+c:c.charCodeAt(0)-55;
const mrzCD = s => String([...s].reduce((a,c,i)=>a+mrzVal(c)*[7,3,1][i%3],0)%10);
const D = (l,r,inner,stamp) => `<div class="doc">${stamp?`<span class="stamp">${stamp}</span>`:""}<div class="hdr"><span>${l}</span><span>${r}</span></div>${inner}</div>`;
const KV = rows => `<div class="tw"><table>${rows.map(([a,b])=>`<tr><th>${a}</th><td>${b}</td></tr>`).join("")}</table></div>`;
const TB = (head,rows) => `<div class="tw"><table><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
const LAB = (id,label) => `<p style="margin-top:12px"><button class="btn small" data-act="goLab" data-id="${id}">${label}</button></p>`;
function audioDoc(l,r,lines){
  return D(l,r,`<div class="audio"><button class="btn small" data-act="play">▶ Play</button><div class="wave">${Array.from({length:64},(_,i)=>`<i style="height:${12+Math.round(Math.abs(Math.sin(i*1.7)*Math.cos(i*.31))*80)}%"></i>`).join("")}</div></div>
  <div class="trans">${lines.map(([ms,t])=>`<p data-ms="${ms}">${t}</p>`).join("")}</div>`);
}

/*CASES-START*/
const CASES = {}, CASE_ORDER = ["cold","static","ninth","saffron","bay","atrium","fare","ward"];
function defCase(c){ c.EV={}; c.order=[]; c.ev=(id,cat,title,type,lock,body)=>{ c.EV[id]={id,cat,title,type,lock,body}; c.order.push(id); }; CASES[c.id]=c; return c; }
const sus = (id) => (K.SUS[id]);

/* ---------------- CASE 1: THE COLD AISLE ---------------- */
(function(){
const c = defCase({
  id:"cold", title:"The Cold Aisle", code:"PMPD-26-1013-044", short:"CASE 044", crime:"Homicide", genre:"Tech thriller", diff:3, cover:"cold",
  blurb:"A fintech CTO is found dead in his company's basement data center. The camera was off for 34 minutes, and a fired engineer's badge opened the door.",
  briefDate:"14 Oct 2026, 09:00", headline:"Daniel Okafor is dead",
  summary:[
    "At 07:40 this morning, a facilities technician found Halcyon Systems' CTO on the floor of the company's basement data center in Meridian Tower. He had been struck on the head sometime last night.",
    "The data center camera recorded nothing for 34 minutes. The badge reader says a fired engineer walked in twenty minutes after Daniel. The CEO wanted him quiet, his brother-in-law wanted his money, and nobody can say why he went down there at half past ten."],
  intro:["Victim: Daniel Okafor, 38. CTO, Halcyon Systems.","Found 07:40 on the floor of the B2 data center, Meridian Tower.","Struck on the head. The camera was dark for 34 minutes.","Four people wanted something from him.","The file is yours, Detective {name}."],
  screen:["PMPD RECORDS v4.2","> person raman","RAMAN, Priya · PM-4471","> badge 0388","REACTIVATED 21:55 …"],
  CLEARS:{ride:["ethan"],flight:["leon"],gala:["mara"],printlab:["mara","ethan","leon"],handlab:["mara","ethan","leon"]},
  POINTS:{anpr:["priya"],cctvlog:["priya"],printlab:["priya"],handlab:["priya"],regulator:["priya"],burner:["priya"],badgehist:["priya"],cipher:["priya","mara"],badgelog:["ethan"],messages:["leon","ethan","mara"],article:["mara"],voicemail:["mara","priya"],transcripts:["priya"],map:["priya"]}
});
c.SUS = {
  mara:{name:"Mara Voss",init:"MV",short:"CEO & co-founder",age:44,role:"Chief Executive Officer and co-founder, Halcyon Systems",phone:"050 555 0119",car:"PM-1180",motive:"Daniel was preparing to raise concerns about inflated revenue before Thursday's board meeting.",alibi:"Says she was hosting the Meridian Children's Fund gala at the Aster Hotel from 21:00 to 23:30.",rel:"Co-founded Halcyon with Daniel in 2019."},
  ethan:{name:"Ethan Cole",init:"EC",short:"Engineer, fired that day",age:27,role:"Backend engineer, dismissed 13 Oct at 16:10",phone:"052 555 0384",car:"None registered",motive:"Fired by Daniel that afternoon after a failed deploy. Sent an angry text at 16:14. His badge opened the B2 door at 22:47.",alibi:"Says he went to Driftwood bar in the Marina, then took a ride home.",rel:"Reported to Daniel for two years."},
  priya:{name:"Priya Raman",init:"PR",short:"Head of Security",age:39,role:"Head of Security & Facilities, Halcyon Systems",phone:"050 555 0147",car:"PM-4471",motive:"None on file.",alibi:"Says she was at home in Al Noor Heights all evening, alone.",rel:"Joined Halcyon in 2022. Reports to the CEO."},
  leon:{name:"Leon Hart",init:"LH",short:"Investor, brother-in-law",age:51,role:"Angel investor; Daniel's brother-in-law",phone:"055 555 0731",car:"PM-0007",motive:"Lost a pending investment when Daniel pulled out of a side venture. Sent a threatening text on 12 Oct.",alibi:"Says he was on a flight back from Nairobi, landing 23:40.",rel:"Daniel was married to Leon's sister, Amara."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search the crime scene photo",d:"Find all four points of interest in the B2 photo.",reward:["autopsy","badgelog"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"One statement contains a detail only the killer could know.",reward:["voicemail"]},
  {id:"cipher",lab:"Cipher",t:"Decode Daniel's laptop note",d:"The only file he touched that night is enciphered.",reward:["regulator"]},
  {id:"prints",lab:"Fingerprints",t:"Match the latent print",d:"Compare the partial from the weapon with the suspects' prints.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Identify the note's writer",d:"Who wrote the sticky note found by the B2 door?",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the night",d:"Put the night's events in order.",reward:["cctvlog"],needs:"scene"},
  {id:"records",t:"Verify alibis on the terminal",d:"Turn up three records that confirm or break an alibi.",reward:[]}
];
c.records = {ev:["anpr","ride","flight","gala","burner","badgehist"],n:3};
c.hints = {
  scene:["Zoom in on the photo. Walls, floor, racks: anything that's missing or out of place.","Check the wall beside the door, the floor near the body, the rack that's open, and something tiny at the foot of rack 5. You need at least 200% zoom for that one."],
  statements:["Compare what the suspects say with what the incident report says was released.","The weapon was never released to staff. Who names it anyway?"],
  cipher:["Daniel told his wife where to look if anything happened. Read his texts.","'Three steps back.' A shift cipher. Turn the dial."],
  prints:["Rotate the red latent over each reference. Watch the core of the print, not the edges.","A loop or an arch can't make that circular core. Of the two whorls, only one keeps its ridges unbroken when aligned."],
  hand:["Compare individual letterforms, not the overall look.","The open-bowled B and the looped 2 are the giveaways."],
  timeline:["Each event has a time somewhere: badge log, autopsy, messages, incident report, terminal records.","The car came first and left last. The camera gap brackets the badge entry and the last pulse."],
  records:["Every suspect has an alibi. The terminal can test each one.","Try ride, flight and alibi on the suspects, and look up the plate of the car that matters."]
};
c.react = {
  scene:"Good eye. That orange clip: only security staff wear those. The autopsy and badge log just came through.",
  statements:"She named the weapon. Nobody told her that. Daniel's wife forwarded his last voicemail.",
  cipher:"'The other admin.' Daniel's unsent email is in the archive. Find out who the other admin is.",
  prints:"Her print is on the valve handle. That puts the weapon in her hand.",
  hand:"She wrote down the camera window before it went dark. That's planning.",
  timeline:"The camera didn't fail. Check the recorder's audit log for who switched it off.",
  records:"The alibis are sorting themselves out. Who's still standing?"
};
c.unlockLines = {anpr:"Interesting, for someone who was home all night.",ride:"Ethan was in a car across town. His badge wasn't.",flight:"Leon was in the air.",gala:"Mara was on stage in front of four hundred people.",burner:"That burner sat next to one phone all night.",badgehist:"Somebody switched that badge back on."};

const ROT = 28;
c.cipher = {plain:"THE OTHER ADMIN SOLD THE VAULT KEYS. PROOF IN RACK 7, BAY 3.", title:"Daniel's note", intro:"Use the tools to decode the note. Daniel left a hint for his wife somewhere in his messages.", success:"Daniel had found that 'the other admin' sold the client vault keys, and kept the proof on a drive in rack 7. That bay was empty when police arrived."};
c.cipher.ct = shiftTxt(c.cipher.plain,3);

c.scene = {
  title:"Scene photo 03", intro:"Zoom in and click anything that looks out of place. There are four points of interest, and one of them is small.",
  hots:[
    {id:"bracket",x:128,y:236,r:20,t:"Empty extinguisher bracket beside the B2 door. Mounted at 1.4 m; the extinguisher was taken from here."},
    {id:"extinguisher",x:600,y:442,r:26,t:"CO2 extinguisher on the floor, 2 m from the victim. The cylinder rim is dented and its red paint chipped."},
    {id:"lanyard",x:233,y:378,r:11,zoom:2,t:"Broken lanyard clip under rack 5. Orange webbing: Halcyon issues orange lanyards only to the Security & Facilities team."},
    {id:"rack7",x:497,y:232,r:20,t:"Rack 7 door left open. Drive bay 3 is empty and its tray is pulled out."}],
  draw(){
    const racks=[5,6,7,8,9].map((n,i)=>{ const x=170+i*85, open=n===7; let leds="";
      for(let r=0;r<11;r++){ leds+=`<rect x="${x+10}" y="${106+r*22}" width="${open?40:55}" height="14" fill="#1b2228" stroke="#2a333a"/><circle cx="${x+(open?56:70)}" cy="${113+r*22}" r="2" fill="${(r*n)%3?'#3fbf7f':'#d9a441'}"/>`; }
      const door=open?`<polygon points="${x+68},96 ${x+96},84 ${x+96},372 ${x+68},362" fill="#232c33" stroke="#3a454e"/><rect x="${x+12}" y="${106+5*22}" width="40" height="14" fill="#050708" stroke="#a35a3a"/>`:"";
      return `<rect x="${x}" y="96" width="78" height="268" fill="#161c21" stroke="#323c44"/>${leds}${door}<text x="${x+39}" y="90" fill="#7d8a94" font-family="IBM Plex Mono, monospace" font-size="10" text-anchor="middle">RACK ${n}</text>`; }).join("");
    let tiles=""; for(let i=0;i<9;i++) tiles+=`<line x1="0" y1="${364+i*17}" x2="800" y2="${364+i*17}" stroke="#2a3238"/>`; for(let i=0;i<17;i++) tiles+=`<line x1="${i*50}" y1="364" x2="${-120+i*65}" y2="500" stroke="#2a3238"/>`;
    return `<defs><linearGradient id="c1fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c252b"/><stop offset="1" stop-color="#0e1316"/></linearGradient><linearGradient id="c1ce" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1013"/><stop offset="1" stop-color="#141b20"/></linearGradient></defs>
    <rect width="800" height="364" fill="url(#c1ce)"/><rect x="0" y="40" width="800" height="6" fill="#d9e6ef" opacity=".25"/><rect y="364" width="800" height="136" fill="url(#c1fl)"/>${tiles}
    <rect x="20" y="150" width="86" height="214" fill="#1d252b" stroke="#3a454e"/><rect x="92" y="250" width="8" height="12" fill="#5a646b"/>
    <text x="63" y="142" fill="#7d8a94" font-family="IBM Plex Mono, monospace" font-size="10" text-anchor="middle">B2 DOOR</text>
    <rect x="96" y="200" width="10" height="16" rx="2" fill="#2f3a42"/><circle cx="101" cy="206" r="2" fill="#d94a3c"/>
    <rect x="118" y="214" width="20" height="4" fill="#8a2c22"/><rect x="118" y="252" width="20" height="4" fill="#8a2c22"/><rect x="126" y="214" width="4" height="42" fill="#5a1d17"/>
    <text x="128" y="276" fill="#5d6870" font-family="IBM Plex Mono, monospace" font-size="7" text-anchor="middle">FIRE EXT.</text>${racks}
    <path d="M330 448 q-14 -26 10 -34 q20 -4 30 10 l60 -6 q14 -18 34 -10 l40 -6 q16 4 6 18 l-36 10 q-4 22 -30 22 l-60 -2 q-14 12 -40 8 q-18 -2 -14 -10z" fill="none" stroke="#e8e4da" stroke-width="2.5" stroke-dasharray="6 4" opacity=".85"/>
    <g transform="rotate(-8 600 442)"><rect x="560" y="430" width="84" height="26" rx="12" fill="#a8261c"/><rect x="636" y="434" width="18" height="18" rx="3" fill="#2a2a2a"/><path d="M574 432 q6 8 0 22" stroke="#5a120c" stroke-width="3" fill="none"/><rect x="590" y="437" width="22" height="10" fill="#f1e6c9" opacity=".8"/></g>
    <g><rect x="226" y="374" width="14" height="6" rx="2" fill="#7c7f84"/><rect x="238" y="375" width="16" height="4" fill="#e37a24"/></g>`;
  }
};
c.statements = {
  intro:"Compare what each suspect said with what's in the incident report. One sentence reveals something only the killer could know. Click it.",
  blocks:[
    {who:"Mara Voss",s:[["m1","I was on stage at eleven giving the pledge total."],["m2","Daniel and I disagreed about how we report revenue."],["m3","He kept his laptop locked and wouldn't say why."]]},
    {who:"Ethan Cole",s:[["e1","I took a RideNow home around quarter to eleven."],["e2","I lost my badge last week."],["e3","HR took it off me at four when they walked me out."]]},
    {who:"Priya Raman",s:[["p1","I left at six and was home all night, alone."],["p2","Daniel, hit with the extinguisher like that. It's awful."],["p3","Those cameras drop all the time. The recorder is old."]]},
    {who:"Leon Hart",s:[["l1","I landed at twenty to midnight."],["l2","Yes, I sent that text."],["l3","He was family."]]}],
  correct:"p2",
  fb:{m1:"An alibi claim, not a slip. Test it on the terminal.",m2:"An admission of motive, not knowledge of the crime.",m3:"Consistent with what we found on the laptop.",e1:"An alibi claim you can test on the terminal.",e2:"Odd, but it says nothing about how Daniel died.",e3:"Consistent with the termination record.",p1:"Possibly a lie, but you'd need records to prove it.",p3:"Suspicious, but not knowledge of the crime itself.",l1:"An alibi claim.",l2:"He admits the threat.",l3:"Sentiment, not evidence."},
  success:"Priya says Daniel was 'hit with the extinguisher'. The weapon was withheld from staff and press, and she claims she hadn't been to B2. Only someone who was there could know."
};
c.prints = {
  title:"Latent print, extinguisher valve", latentLabel:"Lifted latent (valve handle)", cands:["mara","ethan","priya","leon"], culprit:"priya", rot:ROT,
  P:{mara:{type:"loop",cx:100,cy:110,w:3,ph:1.2,k:.62,seed:11},ethan:{type:"whorl",cx:104,cy:116,sx:1.55,a:2.5,w:2.4,ph:.4,k:.6,seed:22},priya:{type:"whorl",cx:96,cy:124,sx:1.2,a:4.2,w:3.4,ph:2.1,k:.58,seed:33},leon:{type:"arch",cx:100,cy:130,a:42,b:46,w:2.8,ph:.9,k:.6,seed:44}},
  fails:{mara:"A loop pattern can't produce the latent's circular core.",leon:"An arch has no core at all; the latent clearly does.",ethan:"Whorl pattern, but the ridge count from the core doesn't agree at any rotation."},
  success:"Identified: Priya Raman. The lab report is unsealed."
};
c.hand = {
  intro:"Each suspect wrote the same exemplar line. Compare letter shapes with the note found by the B2 door.",
  note:"CAM-B2-03 →<br>maint 22:30–23:05<br>R7 · bay 3", noteFont:"Caveat, cursive", noteSize:30,
  exemplar:"Statement read &amp; confirmed → B2, room 3, 14/10",
  cands:[{k:"mara",f:"'Homemade Apple', cursive",sz:17},{k:"ethan",f:"'Reenie Beanie', cursive",sz:30},{k:"priya",f:"Caveat, cursive",sz:26},{k:"leon",f:"'Nothing You Could Do', cursive",sz:20}],
  culprit:"priya", success:"Match: Priya Raman. The open B, looped 2 and hooked arrow all agree."
};
c.timeline = {
  intro:"Put these events in order using the badge log, autopsy, messages, incident report and terminal records. Times are hidden until you get it right.",
  ev:[{id:"a",t:"Car PM-4471 enters the basement garage",tm:"22:20"},{id:"b",t:"An unsaved number texts Daniel to come to B2",tm:"22:24"},{id:"c",t:"Daniel's badge opens the B2 door",tm:"22:27"},{id:"d",t:"Data center camera CAM-B2-03 goes dark",tm:"22:31"},{id:"e",t:"Ethan Cole's badge opens the B2 door",tm:"22:47"},{id:"f",t:"Daniel's smartwatch records its last pulse",tm:"22:52"},{id:"g",t:"CAM-B2-03 starts recording again",tm:"23:04"},{id:"h",t:"Car PM-4471 leaves the garage",tm:"23:15"}],
  success:"Ethan's badge opened B2 while Daniel was still alive and the camera was dark. Whoever used it had the badge, the camera and the car."
};
c.verdict = {
  culprit:"priya", methodLabel:"Weapon", method:"ext", methodMiss:"The weapon doesn't match the wound or the red paint flakes.",
  methods:{ext:"CO2 fire extinguisher",rail:"Server rack rail",laptop:"Laptop",hands:"Bare hands"},
  motive:"priya", motives:{priya:"Silence a whistleblower who found she sold client vault keys",ethan:"Revenge for being fired",mara:"Cover up inflated revenue before the board meeting",leon:"Anger over a lost investment"},
  pillars:[
    {ev:["regulator","cipher"],pts:3,hit:"Motive: Daniel was about to report the security admin for selling vault keys.",miss:"No evidence of why the accused would want Daniel dead."},
    {ev:["printlab"],pts:3,hit:"Means: her fingerprint is on the weapon's valve handle.",miss:"No physical evidence ties the accused to the weapon."},
    {ev:["anpr","cctvlog","burner","handlab"],pts:3,hit:"Opportunity: she was in the building and in control of the camera.",miss:"Nothing places the accused at Meridian Tower that night."}],
  bonus:[{ev:"transcripts",pts:1,hit:"Her interview names a weapon that was never released."},{ev:"badgehist",pts:1,hit:"She reactivated a fired man's badge two hours before the murder."}],
  defence:[
    {claim:"The access log puts Ethan Cole in B2 at 22:47.",rebut:["badgehist","ride"],pts:2},
    {claim:"No badge shows our client entering the building after 18:01.",rebut:["anpr","burner","cctvlog"],pts:2}],
  questions:[
    {q:"How did the killer leave B2 without being logged?",o:["Through the unalarmed fire exit to the garage","Through the B2 door using Ethan's badge","By the service lift","They hid until the morning shift"],a:0},
    {q:"Why did the camera stop recording?",o:["The old recorder failed","It was switched to maintenance by an admin account","A power cut in B2","Daniel turned it off"],a:1},
    {q:"What did the killer take from the scene?",o:["Daniel's laptop","Ethan's badge","The drive from rack 7, bay 3","Daniel's phone"],a:2}],
  solution:"Priya Raman had been exporting client vault keys from Halcyon's HSM and selling them. Daniel, the only other HSM admin, found the trail and planned to report her. On 13 Oct she reactivated Ethan's badge, drove into the garage at 22:20, texted Daniel from a burner, and switched the B2 camera to maintenance at 22:31. She struck him with the extinguisher, used Ethan's badge at 22:47 to frame him, took the drive from rack 7 and left by the unalarmed fire exit. She dropped her camera reminder note and broke her lanyard clip on the way. In her interview she named a weapon nobody had told her about."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  plate <plate>     Vehicle registration and ANPR hits
  phone <number>    Carrier record and call/SMS log
  badge <id>        Halcyon access-card history
  ride <name>       Ride-share trips (subpoenaed)
  flight <name>     Airline manifests
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  missing           Open missing-person reports
  clear             Clear the screen`,
  quick:["help","person raman","badge 0388","plate PM-1180","alibi voss"],
  alias:{mara:"voss",voss:"voss",ethan:"cole",cole:"cole",priya:"raman",raman:"raman",leon:"hart",hart:"hart",daniel:"okafor",okafor:"okafor"},
  miss:{person:"No citizen record matches.",plate:"No vehicle registered under that plate.",phone:"No carrier record for that number.",badge:"Badge not found. Badges in this case: 0112, 0201, 0388, 0457.",ride:"No ride-share trips on 13 Oct.",flight:"No flights in the last 7 days.",alibi:"No alibi on file.",case:"No such case. Try PMPD-26-1013-044."},
  cmds:{
    "person voss":{out:"VOSS, Mara E.\nDOB 1982-03-11 · Res: Palm Crescent, Villa 9\nPhone 050 555 0119 · Vehicle PM-1180 (black Aurel sedan)\nPriors: none\nNote: subject of financial press inquiry (Ledger, 10 Oct)."},
    "person cole":{out:"COLE, Ethan J.\nDOB 1999-07-02 · Res: Al Safa, Bldg 14, Apt 1203\nPhone 052 555 0384 · Vehicle: none registered\nPriors: 2023 noise complaint, no action (PMPD-23-0611-210)\nEmployment: Halcyon Systems, terminated 13 Oct 16:10. Badge 0388."},
    "person raman":{out:"RAMAN, Priya\nDOB 1987-01-23 · Res: Al Noor Heights, Tower B, Apt 2207\nPhone 050 555 0147 · Vehicle PM-4471 (white Lynx SUV)\nEmployment: Halcyon Systems, Head of Security. Access roles: badge admin, NVR admin, HSM administrator (one of two).\nBadge 0201 · Priors: none"},
    "person hart":{out:"HART, Leon\nDOB 1975-09-30 · Res: Old Harbour, House 3\nPhone 055 555 0731 · Vehicle PM-0007 (silver Corsa coupe)\nPriors: 2016 civil dispute, settled."},
    "person okafor":{out:"OKAFOR, Daniel (DECEASED 13 Oct)\nDOB 1988-05-14 · Res: Palm Crescent, Villa 22\nPhone 050 555 0112 · Badge 0112\nAccess roles: HSM administrator (one of two)\nNext of kin: Amara Okafor (wife), sister of L. Hart."},
    "plate pm4471":{out:"PM-4471 · white Lynx SUV · keeper RAMAN, Priya\nANPR HITS 13 OCT\n  22:20:31  Meridian Tower garage, ramp G1 (ENTRY)\n  23:15:09  Meridian Tower garage, ramp G2 (EXIT)",cls:"hit",unl:"anpr"},
    "plate pm1180":{out:"PM-1180 · black Aurel sedan · keeper VOSS, Mara\nANPR HITS 13 OCT\n  20:41  Aster Hotel valet (IN)\n  00:12  Aster Hotel valet (OUT, 14 Oct)"},
    "plate pm0007":{out:"PM-0007 · silver Corsa coupe · keeper HART, Leon\nANPR: PMR Airport long-stay since 9 Oct 06:12. Exit 14 Oct 00:21."},
    "phone 447700900412":{out:"+44 7700 900412 · PREPAID · activated 11 Oct (cash, mall kiosk)\nSMS OUT 13 Oct 22:24 → 050 555 0112 (D. Okafor)\nCELL: MT-B2 repeater (Meridian Tower basement) 22:16–23:18\nCO-LOCATION: same cell as 050 555 0147 on 4 of 4 hits",cls:"hit",unl:"burner"},
    "phone 0505550147":{out:"050 555 0147 · RAMAN, Priya\n13 Oct: home cell (Al Noor Heights) 18:40–22:10\n        MT-B2 repeater (Meridian Tower basement) 22:16–23:18\nNo calls or SMS to D. Okafor on 13 Oct.",cls:"hit"},
    "phone 0505550112":{out:"050 555 0112 · OKAFOR, Daniel\n13 Oct 16:14 SMS IN  052 555 0384 (E. Cole)\n13 Oct 18:40 SMS IN  050 555 0119 (M. Voss)\n13 Oct 20:15 SMS OUT Amara Okafor\n13 Oct 22:24 SMS IN  +44 7700 900412 (unregistered)\n13 Oct 22:28 CALL OUT Amara Okafor (voicemail, 0:21)"},
    "phone 0525550384":{out:"052 555 0384 · COLE, Ethan\n13 Oct 22:39 RideNow app request (Marina)\nHandset on Marina / Al Safa cells 21:30–23:59."},
    "phone 0505550119":{out:"050 555 0119 · VOSS, Mara\nHandset on Aster Hotel cell 20:35–00:15."},
    "phone 0555550731":{out:"055 555 0731 · HART, Leon\nHandset off-network 17:40–23:42. First registration: PMR Airport 23:42."},
    "badge 0388":{out:"BADGE 0388 · COLE, Ethan\n  2024-02-01        Issued\n  2026-10-07        Reported lost by holder\n  2026-10-13 09:15  Re-issued (new card) · admin: praman\n  2026-10-13 16:20  DEACTIVATED (termination) · admin: hr-sys\n  2026-10-13 21:55  REACTIVATED, manual override · admin: praman\n  2026-10-13 22:47  Used at B2-DOOR-01\n  2026-10-14 07:10  Deactivated · admin: praman",cls:"hit",unl:"badgehist"},
    "badge 0112":{out:"BADGE 0112 · OKAFOR, Daniel\n13 Oct: L41 lobby 08:31 · L41 office 08:33 · B2-DOOR-01 22:27"},
    "badge 0201":{out:"BADGE 0201 · RAMAN, Priya (security admin)\n13 Oct: lobby IN 08:05 · B2-DOOR-01 15:12 · lobby OUT 18:01\nNo further badge events on 13 Oct."},
    "badge 0457":{out:"BADGE 0457 · HADDAD, Samir (facilities)\n13 Oct OUT 17:58 · 14 Oct IN 07:38"},
    "ride cole":{out:"RIDENOW · COLE, Ethan · 13 Oct\nPickup  22:41  Driftwood Bar, Marina\nDropoff 23:08  Al Safa Bldg 14\nDriver GPS trace at 22:47: Marina coast road",cls:"hit",unl:"ride"},
    "flight hart":{out:"MERIDIAN AIR MA 207 · NBO → PMR · 13 Oct\nHART, Leon · seat 14C · boarded 17:31\nArrived 23:40 · passport control 23:58",cls:"hit",unl:"flight"},
    "alibi voss":{out:"ALIBI · VOSS, Mara: VERIFIED\nAster Hotel ballroom CCTV and livestream: on stage 22:51–23:06.\nValet: arrived 20:41, departed 00:12.",cls:"hit",unl:"gala"},
    "alibi cole":{out:"ALIBI · COLE, Ethan: see 'ride cole'"},
    "alibi hart":{out:"ALIBI · HART, Leon: see 'flight hart'"},
    "alibi raman":{out:"ALIBI · RAMAN, Priya: UNVERIFIED\nNo witnesses. Statement only."},
    "case pmpd261013044":{out:"PMPD-26-1013-044 · HOMICIDE · OKAFOR, Daniel\nStatus: OPEN"},
    "case pmpd230611210":{out:"PMPD-23-0611-210 · NOISE COMPLAINT · COLE, Ethan\nNeighbour complaint, music after midnight. Words of advice. Closed."},
    "missing":{out:"OPEN MISSING-PERSON REPORTS · PORT MERIDIAN\nPMPD-26-1009-017  PIKE, Owen, 31 · network cabling contractor\n  Last seen at the Meridian Tower loading bay, 9 Oct. Not linked to this case."}
  }
};

const E=c.ev;
E("incident","Reports","Incident report","Police report",null,()=>D("PORT MERIDIAN POLICE DEPT.","PMPD-26-1013-044",
  KV([["Filed","14 Oct 2026, 08:12"],["Location","Halcyon Systems, Meridian Tower. Level B2 data center, cold aisle C."],["Victim","Daniel OKAFOR, 38. Chief Technology Officer."],["Found","07:40 by facilities technician S. Haddad on morning rounds."],["Status","Pronounced dead at scene, 07:58. Treated as homicide."]])+
  `<h4>Narrative</h4><p>Victim found on the floor of cold aisle C between racks 6 and 7, with a head injury. Phone and smartwatch on his person. Laptop recovered from his office on Level 41.</p><p>Data center camera CAM-B2-03 recorded no footage from approx. 22:30 to 23:05 on 13 Oct. Cause of the gap under review.</p><p>The fire exit between B2 and the basement garage has no badge reader.</p><h4>Information release</h4><p><b>Details of the weapon are WITHHELD</b> from press and staff pending investigation. Staff were told only that Mr Okafor was found dead in B2.</p>`,"CONFIDENTIAL"));
E("scene","Scene","Crime scene photograph","Photograph",null,()=>D("SCENE PHOTO 03 / B2 COLD AISLE C","14 OCT 08:31",`<p>Wide shot from the B2 door looking down the cold aisle.</p><div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("map","Scene","Floor plan, Level B2","Map",null,()=>{const racks=[1,2,3,4,5,6,7,8,9,10].map((n,i)=>`<rect x="${150+i*44}" y="80" width="36" height="46" fill="${n===7?'#d9c48b':'#d4ccba'}" stroke="#23262a"/><text x="${168+i*44}" y="106" font-size="10" text-anchor="middle">R${n}</text><rect x="${150+i*44}" y="180" width="36" height="46" fill="#d4ccba" stroke="#23262a"/>`).join("");
  return D("MERIDIAN TOWER · LEVEL B2","FACILITIES DWG F-B2-02",`<div class="tw"><svg viewBox="0 0 640 300" style="width:100%;min-width:480px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Courier Prime, monospace" fill="#23262a"><rect x="20" y="20" width="600" height="260" fill="none" stroke="#23262a" stroke-width="3"/>${racks}<text x="370" y="158" font-size="12" text-anchor="middle" letter-spacing="2">COLD AISLE C</text><rect x="20" y="130" width="10" height="44" fill="#eee8da" stroke="#23262a"/><text x="38" y="150" font-size="10">B2 DOOR (badge reader)</text><rect x="610" y="200" width="10" height="44" fill="#eee8da" stroke="#b23a2e" stroke-width="2"/><text x="604" y="268" font-size="10" text-anchor="end" fill="#b23a2e">FIRE EXIT → GARAGE RAMP (no reader)</text><circle cx="60" cy="118" r="6" fill="#b23a2e"/><text x="72" y="122" font-size="9">Extinguisher</text><circle cx="440" cy="40" r="5" fill="none" stroke="#23262a"/><text x="450" y="44" font-size="9">CAM-B2-03</text><text x="372" y="172" font-size="11" fill="#b23a2e">✕ victim</text></svg></div><p style="margin-top:12px">The fire exit alarm has been <b>disabled for maintenance since 10 Oct</b> (facilities ticket FAC-2210, raised by P. Raman).</p>`);});
E("sticky","Scene","Sticky note by B2 door","Physical evidence",null,()=>D("ITEM 7 · YELLOW ADHESIVE NOTE","BAGGED 08:44",`<p>Found folded on the floor just inside the B2 door, under the empty bracket.</p><div style="display:grid;place-items:center;padding:20px 0"><div class="sticky" style="font-family:Caveat,cursive">${c.hand.note}</div></div><p>Writer unknown.</p>${LAB("hand","Compare handwriting")}`));
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 14 OCT 2026","INTERVIEW ROOM 3",`
<h4>Mara Voss · 10:05</h4><p><span class="q">A:</span> At the Aster, hosting the Children's Fund gala. Four hundred people saw me. I was on stage at eleven giving the pledge total.</p><p><span class="q">Q:</span> Your text told him not to do "anything stupid".</p><p><span class="q">A:</span> Daniel and I disagreed about how we report revenue. He'd been secretive all week. He kept his laptop locked and wouldn't say why.</p>
<h4>Ethan Cole · 11:20</h4><p><span class="q">A:</span> Yes, I shouted. He fired me over one bad deploy. I went to Driftwood in the Marina, had three beers, and took a RideNow home around quarter to eleven.</p><p><span class="q">Q:</span> Your badge opened B2 at 22:47.</p><p><span class="q">A:</span> That's impossible. I lost my badge last week. Priya reissued it yesterday morning and HR took it off me at four when they walked me out.</p>
<h4>Priya Raman · 13:00</h4><p><span class="q">A:</span> I left at six and was home all night, alone. I hadn't been down to B2 since the afternoon.</p><p><span class="q">A:</span> When the morning shift called me, I couldn't believe it. Daniel, hit with the extinguisher like that. It's awful.</p><p><span class="q">Q:</span> And the camera outage?</p><p><span class="q">A:</span> Those cameras drop all the time. The recorder is old. If Ethan's badge was used, I'd be looking at Ethan.</p>
<h4>Leon Hart · 15:40</h4><p><span class="q">A:</span> I landed at twenty to midnight. Check the flight. Yes, I sent that text. I was angry about the money, not angry enough to hurt him. He was family.</p>`));
E("messages","Digital","Victim's phone: messages","Text messages",null,()=>D("HANDSET EXTRACTION · D. OKAFOR","LAB REF DX-5512",`<div class="chat">
<div class="msg"><small>Leon · 12 Oct 19:02</small>Pulling out now leaves me exposed. You'll regret this, Dan.</div>
<div class="msg"><small>Ethan Cole · 13 Oct 16:14</small>you fired me over ONE deploy?? unbelievable. you'll pay for this</div>
<div class="msg"><small>Mara · 13 Oct 18:40</small>Board moved to Thursday. Don't do anything stupid before then.</div>
<div class="msg me"><small>Daniel → Mara · 18:41</small>Stupid would be staying quiet.</div>
<div class="msg me"><small>Daniel → Amara · 20:15</small>Late one tonight. If anything happens, my notes. Old Roman habit: three steps back. Love you.</div>
<div class="msg"><small>+44 7700 900412 (unsaved) · 22:24</small>B2. Now. I have what you asked for. Come alone.</div>
<div class="msg me"><small>Daniel → +44 7700 900412 · 22:25</small>On my way.</div></div>`));
E("cipher","Digital","Laptop note: notes.txt","Coded message",null,()=>D("LAPTOP IMAGE · /Users/dokafor/notes.txt","MODIFIED 13 OCT 22:19",`<p style="font-size:18px;letter-spacing:.08em;word-break:break-word">${c.cipher.ct}</p><p class="dim">The only file on the laptop modified after 21:00.</p>${C.done.cipher?`<p><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Work on it in the lab")}`));
E("article","Press","Port Meridian Ledger, 10 Oct","Newspaper article",null,()=>`<div class="doc news"><div class="mast">The Port Meridian Ledger</div><p class="dim" style="text-align:center;font-family:var(--mono);font-size:12px">SATURDAY 10 OCTOBER 2026 · BUSINESS</p><h5>Halcyon's revenue surge draws questions from analysts</h5><div class="cols"><p>The fintech firm's second-quarter numbers grew faster than any comparable company in the region, and two analysts told the Ledger they could not reconcile the figures with Halcyon's customer count.</p><p>Chief executive Mara Voss called the questions noise and said an independent review would vindicate the company.</p><p>The company also faced questions about a rumoured security incident involving customer vaults. Head of security Priya Raman said no customer data had left the company.</p></div></div>`);
E("autopsy","Reports","Autopsy summary","Autopsy report","scene",()=>D("OFFICE OF THE MEDICAL EXAMINER","ME-26-2291",KV([["Cause","Blunt force trauma, left temporal region. Single impact."],["Object","Cylindrical, approx. 11–13 cm diameter, with a curved rim."],["Trace","Red enamel paint flakes in the wound, consistent with fire-suppression equipment."],["Time of death","22:40–23:05 (est.). Smartwatch records last pulse at <b>22:52:14</b>."],["Other","No defensive injuries. Struck from behind."]])));
E("badgelog","Digital","B2 badge access log","Access log","scene",()=>D("ACCESS CONTROL · READER B2-DOOR-01","13–14 OCT",TB(["Time","Badge","Holder","Event"],[["13 Oct 17:58","0457","S. Haddad","Exit"],["13 Oct 22:27","0112","D. Okafor","Entry granted"],["13 Oct 22:47","0388","E. Cole","Entry granted"],["14 Oct 07:38","0457","S. Haddad","Entry granted"]])+`<p class="dim" style="margin-top:10px">Exits through the B2 door use a push button and are not logged. The garage fire exit has no reader.</p>`));
E("voicemail","Digital","Voicemail to Amara, 22:28","Audio recording","statements",()=>audioDoc("VOICEMAIL · D. OKAFOR → AMARA OKAFOR","13 OCT 22:28 · 0:21",[[0,"[0:00] Hey, it's me. I'm down in B2."],[1300,"[0:04] She says she's bringing the proof, so I'll finally have it on paper."],[2800,"[0:09] If this goes sideways, it's all in my notes. You know the habit."],[4900,"[0:16] [door reader chirps] Okay. Someone's here. Love you."]]));
E("regulator","Digital","Unsent email to regulator","Email","cipher",()=>`<div class="doc mail"><span class="stamp">DRAFT</span><div class="mh">FROM: d.okafor@halcyon.pm<br>TO: disclosures@pmfca.gov.pm<br>SUBJECT: Confidential disclosure: export of client vault keys<br>LAST EDITED: 13 Oct 22:21 · NOT SENT</div><p>Over the past six weeks, encryption keys for client vaults were exported from our hardware security module using an HSM administrator account and sold to a third party.</p><p>Only two people hold HSM administrator rights at Halcyon: me, and one other. I made none of these exports.</p><p>Separately, I believe our Q2 revenue was overstated. I will raise that with the board on Thursday.</p><p>The HSM audit trail is on a drive in rack 7, bay 3, B2.</p><p>Daniel Okafor</p></div>`);
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-0871",`<p>Partial latent lifted from the valve handle of the CO2 extinguisher (Item 4).</p>`+TB(["Compared to","Result"],[["M. Voss","Excluded"],["E. Cole","Excluded"],["<b>P. Raman</b>","<b>Identified: 14 points of agreement</b>"],["L. Hart","Excluded"]])));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0144",`<p>Item 7 (sticky note) compared with signed exemplars from four subjects.</p><p>Opinion: Item 7 was very probably written by <b>P. Raman</b>. Other subjects excluded.</p>`));
E("cctvlog","Digital","Camera recorder audit log","System log","timeline",()=>D("NVR-B2 · ADMIN AUDIT TRAIL","EXPORTED 14 OCT 15:02",TB(["Time","User","Source","Action"],[["13 Oct 22:31:07","praman","10.40.2.18 (B2 switch)","CAM-B2-03 → Maintenance"],["13 Oct 23:04:40","praman","10.40.2.18 (B2 switch)","CAM-B2-03 → Recording"]])));
E("badgehist","Records","Badge 0388 history","Access record","term",()=>D("ACCESS CONTROL · CARD HISTORY","BADGE 0388",TB(["When","Event","By"],[["13 Oct 09:15","Re-issued","praman"],["13 Oct 16:20","Deactivated (termination)","hr-sys"],["13 Oct 21:55","Reactivated, manual override","praman"],["13 Oct 22:47","Used at B2-DOOR-01","—"]])));
E("anpr","Records","Garage ANPR: PM-4471","Vehicle record","term",()=>D("ANPR · MERIDIAN TOWER GARAGE","PLATE PM-4471",`<p>Registered keeper: <b>RAMAN, Priya</b>. White Lynx SUV.</p>`+KV([["13 Oct 22:20:31","Entry, ramp camera G1"],["13 Oct 23:15:09","Exit, ramp camera G2"]])));
E("ride","Records","RideNow trip: E. Cole","Ride receipt","term",()=>D("RIDENOW · SUBPOENA RESPONSE","TRIP 88-21-4410",KV([["Rider","Ethan Cole"],["Pickup","Driftwood Bar, Marina · 22:41"],["Drop-off","Al Safa Bldg 14 · 23:08"],["Distance","26.3 km"],["GPS at 22:47","Marina coast road, 24 km from Meridian Tower"]])));
E("flight","Records","Passenger manifest: MA 207","Flight record","term",()=>D("MERIDIAN AIR · MA 207 · NBO → PMR","13 OCT",KV([["Passenger","HART, Leon · seat 14C"],["Departed","17:55"],["Arrived","23:40"],["Passport control","23:58"]])));
E("gala","Records","Gala livestream still","Alibi verification","term",()=>D("ASTER HOTEL · BALLROOM CAMERA 2","13 OCT 22:58:40",`<p>Livestream frame and hotel CCTV show <b>Mara Voss</b> on stage from 22:51 to 23:06. Valet records her car arriving 20:41 and leaving 00:12.</p>`));
E("burner","Records","Burner phone record","Phone record","term",()=>D("CARRIER RECORD · +44 7700 900412","PREPAID",KV([["Activated","11 Oct, paid in cash at a mall kiosk"],["Use","One SMS ever sent: to D. Okafor, 13 Oct 22:24"],["Cell sites","MT-B2 repeater (Meridian Tower basement) 22:16–23:18"],["Co-location","Same cell as handset 050 555 0147 on 4 of 4 hits"]])));
})();

/* ---------------- CASE 2: STATIC ON CHANNEL 9 ---------------- */
(function(){
const c = defCase({
  id:"static", title:"Static on Channel 9", code:"PMPD-26-1003-019", short:"CASE 019", crime:"Disappearance", genre:"Radio noir", diff:4, cover:"radio",
  blurb:"A late-night radio host vanishes mid-broadcast. Everyone heard him on air until 01:49. The last eleven minutes of studio recording were deleted.",
  briefDate:"5 Oct 2026, 08:30", headline:"Cal Brennan went off the air",
  summary:[
    "At 01:49 on Saturday 3 October, KNOX 98.1, Channel Nine, went to dead air in the middle of 'Static', Cal Brennan's midnight talk show. His producer found the studio empty. Cal's car turned up at Pier 4 at dawn. This morning the harbour gave him back.",
    "Thousands of listeners heard Cal on air until 01:49. A guard saw the producer in the lobby at 01:45. A stalker was in the car park. The station's own recording of the last eleven minutes has been deleted. Everyone has an alibi built around that broadcast. Trust it at your peril."],
  intro:["Missing, now dead: Cal Brennan, 52. Host of 'Static', KNOX 98.1.","Heard on air until 01:49. Then dead air.","His car was found at Pier 4. This morning, so was he.","The last eleven minutes of studio recording were deleted.","Five people were in his orbit that night, Detective {name}."],
  screen:["PMPD RECORDS v4.2","> archive marisol","3 episodes found","> tag rourke","GPS TAG 4471-C …"],
  CLEARS:{felixgps:["felix"],danarota:["dana"],harlancas:["harlan"],mika2:["mika"],printlab:["dana","felix","harlan","mika"],handlab:["dana","felix","harlan","mika"]},
  POINTS:{ledger:["joel"],notebook:["joel"],rx:["joel"],consolelog:["joel","mika"],archive21:["joel","mika"],cellpier:["joel"],anprcal:["joel","felix"],joelcar:["joel"],printlab:["joel"],handlab:["joel"],guardlog:["felix"],emails:["harlan","dana","felix"],airtx:["joel"],recovery:["joel","dana"],mika2:["joel"],transcripts:["joel","mika"]}
});
c.SUS = {
  joel:{name:"Joel Varga",init:"JV",short:"Producer",age:38,role:"Producer of 'Static' for six years; treasurer of the station's Night Light Appeal",phone:"054 555 0261",car:"PM-2290",motive:"None obvious. Reported Cal missing himself.",alibi:"Says he was in the control room with Cal until about 01:44, went down for coffee, and found dead air on his return. Says he drove home to Westgate at 02:55.",rel:"Cal's closest colleague. Called him 'the voice'."},
  dana:{name:"Dana Brennan",init:"DB",short:"Ex-wife",age:49,role:"Night nurse, Eastport General",phone:"050 555 0832",car:"PM-6610",motive:"Still the beneficiary of Cal's life insurance. Emailed him about the policy that week.",alibi:"Says she was on a night shift, ward 6, 19:00–07:00.",rel:"Divorced from Cal in 2021."},
  felix:{name:"Felix Rourke",init:"FR",short:"Obsessive caller",age:34,role:"Regular caller known on air as 'Night Owl'; under a restraining order since July",phone:"052 555 0477",car:"PM-3318",motive:"Fixated on Cal. Breached the order once in August. Was in the station car park that night.",alibi:"Says he left the car park when the guard told him to and went home.",rel:"Called the show every night for two years."},
  harlan:{name:"Harlan Pryce",init:"HP",short:"Station owner",age:61,role:"Owner, KNOX 98.1",phone:"050 555 0900",car:"PM-0901",motive:"Wanted to cancel 'Static'. Was in a contract dispute with Cal.",alibi:"Says he was playing poker at Eastport Casino all night.",rel:"Hired Cal in 2014."},
  mika:{name:"Mika Sato",init:"MS",short:"Sound engineer",age:29,role:"Overnight sound engineer, KNOX 98.1",phone:"056 555 0145",car:"None",motive:"Deleted the studio recording of 01:38–01:49 at 02:20.",alibi:"Says she was on her break in the break room from about 01:30.",rel:"Has worked nights with Cal and Joel for a year."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search Studio B",d:"Find four things wrong in the studio photograph.",reward:["recovery","guardlog"]},
  {id:"statements",lab:"Statements",t:"Break the broadcast",d:"One line of the 'live' broadcast can't have been live. Find it.",reward:["mika2"]},
  {id:"cipher",lab:"Cipher",t:"Decode Cal's notebook",d:"The last page of his notebook is enciphered.",reward:["ledger"]},
  {id:"code",lab:"Archive",t:"Identify the replayed episode",d:"Which archived episode was played out under Cal's name?",reward:["archive21"]},
  {id:"prints",lab:"Fingerprints",t:"Match the steering-wheel print",d:"A partial was lifted from Cal's steering wheel.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who labelled the cart?",d:"Someone hand-labelled the tape cart in slot 2.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the night",d:"Order the night's events.",reward:["consolelog"],needs:"scene"},
  {id:"records",t:"Verify alibis on the terminal",d:"Turn up four records that confirm or break an alibi.",reward:[]}
];
c.records = {ev:["felixgps","danarota","harlancas","cellpier","anprcal","rx","joelcar"],n:4};
c.hints = {
  scene:["Look at the desk, the equipment, the floor and the exits. Someone left in a hurry, and something was prepared in advance.","Two mugs on the desk, the cart machine on the right, something on the floor under the desk (zoom in), and the door to the fire stairs."],
  statements:["You can't trust the broadcast. What did the host say that you can check against an independent record?","Read the weather record. Then find the line about the weather."],
  cipher:["Cal wrote a note in the margin about the key.","It's a keyword cipher. The key is what the station says at the top of every hour. Listen to the 01:00 line of the stream recording."],
  code:["Use the terminal's archive search on things said during the 'live' segment.","Search the archive for the caller's name, the weather and the topic of the call. Only one episode has all three. Don't count the night itself."],
  prints:["Rotate the latent over each reference and watch the core.","This latent has a loop opening to one side. Two candidates have loops, and only one stays aligned all the way round at about −41°."],
  hand:["Look at the B, the 8 and the colon.","The tall, narrow capitals with a loose baseline belong to one exemplar only."],
  timeline:["Use the guard log, the stream recording, the incident report and the car's plate record.","The stalker came and went before the ad break. The car left the garage last."],
  records:["Each suspect has a record that confirms or breaks their alibi. Check people first for plates, phones and tags.","Try tag, alibi and pharmacy on the suspects, and look up both Cal's plate and Joel's."]
};
c.react = {
  scene:"A spiked mug and a pre-labelled cart. Somebody planned this. The harbour recovery report and the security log just came in.",
  statements:"It wasn't raining at 01:38. That 'live' segment was a recording. Mika's come back to talk again.",
  cipher:"The Appeal money. Pull the ledger.",
  code:"Same caller, same rain, same dog, three weeks earlier. The archive copy is in the file.",
  prints:"His thumb on Cal's steering wheel. He drove that car to the pier.",
  hand:"He labelled the cart himself. Eleven minutes, eight seconds of alibi.",
  timeline:"Now look at the console log. Cal's mic went off a minute before the 'live' segment began.",
  records:"The alibis are falling into place. Only one of them was built on the broadcast."
};
c.unlockLines = {felixgps:"His tag puts him at home by 01:55.",danarota:"She swiped in every hour on the ward.",harlancas:"Card table all night, on camera.",cellpier:"Westgate, he said. His phone says otherwise.",anprcal:"Someone drove Cal's car out at 03:04.",rx:"Sedatives. Remember the mug.",joelcar:"He said he drove home at 02:55. His car didn't move until dawn."};

c.cipher = {plain:"JOEL TOOK THE APPEAL MONEY. TELL HARLAN FRIDAY. NOT ON AIR.", title:"Cal's notebook", intro:"The last page of Cal's notebook is enciphered. The shift dial won't crack this one alone. Try the other tools.", success:"Cal had found that Joel was taking money from the Night Light Appeal. He planned to tell the owner off air. The Appeal ledger is unsealed."};
c.cipher.ct = vig(c.cipher.plain,"KNOX",1);

c.scene = {
  title:"Studio B, 03:00", intro:"Patrol photographed Studio B an hour after the dead air. Find four points of interest. One of them is small.",
  hots:[
    {id:"mugs",x:286,y:282,r:28,t:"Two mugs. Cal's says STATIC. The second, unmarked, has a chalky white residue in the bottom."},
    {id:"cart",x:670,y:314,r:26,t:"Cart machine, slot 2: a tape cart hand-labelled 'BEST OF · B · 11:08'. Slot 2 is routed to the on-air bus."},
    {id:"phones",x:432,y:446,r:12,zoom:2,t:"Cal's headphones on the floor under the desk, cable stretched taut. The mic arm is swung away from his chair."},
    {id:"wedge",x:746,y:452,r:18,t:"The fire-stairs door is propped open with a rubber wedge. The stairs lead down to the garage. No camera covers the stairwell."}],
  draw(){
    let foam=""; for(let y=0;y<6;y++) for(let x=0;x<14;x++) foam+=`<rect x="${300+x*30}" y="${20+y*30}" width="28" height="28" fill="${(x+y)%2?'#25222c':'#1f1c25'}"/>`;
    let led=""; for(let i=0;i<60;i++){ const a=i*Math.PI/30; led+=`<circle cx="${600+Math.sin(a)*44}" cy="${100-Math.cos(a)*44}" r="2" fill="${i<=49?'#ff5a45':'#3a2522'}"/>`; }
    let faders=""; for(let i=0;i<18;i++) faders+=`<rect x="${150+i*30}" y="332" width="4" height="34" fill="#0c0e11"/><rect x="${145+i*30}" y="${340+((i*7)%18)}" width="14" height="7" fill="${i===3?'#e2b13f':'#9aa3ab'}"/>`;
    return `<rect width="800" height="500" fill="#17151c"/>${foam}
    <rect x="30" y="60" width="250" height="150" fill="#0b1016" stroke="#3a3542" stroke-width="6"/><rect x="40" y="70" width="230" height="130" fill="#101a24" opacity=".8"/><text x="155" y="140" fill="#3d5468" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle">CONTROL ROOM</text>
    <rect x="330" y="214" width="110" height="26" rx="3" fill="#2a1414"/><text x="385" y="232" fill="#5a2b26" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="3">ON AIR</text>
    <circle cx="600" cy="100" r="56" fill="#0e0d11" stroke="#2c2833" stroke-width="4"/>${led}<text x="600" y="108" fill="#ff5a45" font-family="IBM Plex Mono, monospace" font-size="20" text-anchor="middle">01:49</text>
    <rect y="380" width="800" height="120" fill="#141217"/>
    <polygon points="100,300 720,300 760,380 60,380" fill="#2a2730"/><rect x="60" y="380" width="700" height="18" fill="#1f1c24"/>${faders}
    <path d="M520 300 L560 250 L700 222" stroke="#6a6f78" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="694" y="206" width="26" height="40" rx="10" fill="#2e3138"/>
    <g><rect x="262" y="262" width="26" height="32" rx="3" fill="#d8d2c4"/><text x="275" y="282" font-size="6" font-family="IBM Plex Mono, monospace" text-anchor="middle" fill="#23262a">STATIC</text><path d="M288 270 q8 6 0 14" stroke="#d8d2c4" stroke-width="3" fill="none"/>
    <rect x="296" y="266" width="24" height="28" rx="3" fill="#7d8a94"/><ellipse cx="308" cy="267" rx="12" ry="3" fill="#e9e4da"/></g>
    <rect x="620" y="298" width="104" height="36" fill="#22252b" stroke="#3a3f47"/>${[0,1,2].map(i=>`<rect x="${626+i*33}" y="304" width="28" height="12" fill="#0d0f12"/>`).join("")}<rect x="660" y="300" width="22" height="10" fill="#e9e4d6"/><circle cx="671" cy="324" r="3" fill="#5fb380"/>
    <ellipse cx="420" cy="400" rx="40" ry="10" fill="#0e0d11"/><rect x="398" y="350" width="44" height="40" rx="6" fill="#2b2833"/>
    <g><path d="M420 446 a12 12 0 0 1 24 0" stroke="#2f3238" stroke-width="4" fill="none"/><circle cx="420" cy="447" r="5" fill="#2f3238"/><circle cx="444" cy="447" r="5" fill="#2f3238"/><path d="M444 450 q40 -20 60 -60" stroke="#2f3238" stroke-width="1.6" fill="none"/></g>
    <rect x="728" y="110" width="72" height="350" fill="#2a2028" stroke="#3b3240"/><polygon points="728,110 760,120 760,450 728,460" fill="#352a33"/><text x="764" y="100" fill="#7d8a94" font-family="IBM Plex Mono, monospace" font-size="9" text-anchor="middle">FIRE STAIRS</text>
    <polygon points="736,462 760,448 760,462" fill="#5a3a2a"/>`;
  }
};
c.statements = {
  intro:"Thousands heard the broadcast, so everyone's alibi depends on it. Compare it with the independent records you have. One line of the 'live' broadcast couldn't have been live. Click it.",
  blocks:[
    {who:"Stream recording, 'live'",s:[["a1","You're listening to KNOX, Channel Nine. It's one o'clock."],["a2","We're back, and the rain's hammering the windows out there tonight."],["a3","Marisol from Eastport, you're on Static."],["a4","It's coming up on quarter to two."]]},
    {who:"Joel Varga",s:[["j1","I was in the control room with him until about quarter to two."],["j2","I went down for a coffee and talked to Ollie on the desk."],["j3","When I came back, the studio was empty and we were in dead air."]]},
    {who:"Mika Sato",s:[["k1","Joel told me to take my break early, around half one."],["k2","I deleted the logger file because Joel said a caller defamed someone."],["k3","I didn't hear anything from the break room."]]},
    {who:"Felix Rourke",s:[["f1","I only wanted to see him. I left when the guard told me to."],["f2","I called in at quarter to two and the line was busy."],["f3","I'd never hurt Cal."]]}],
  correct:"a2",
  fb:{a1:"The top-of-the-hour station ID. That segment was before anything went wrong.",a3:"A caller segment. You'd need the archive to check it.",a4:"Close, but a tired host can misread a clock. You need something that can't be explained away.",j1:"Maybe a lie, but you need proof.",j2:"The guard confirms it. That's exactly why it matters.",j3:"Consistent with the dead air.",k1:"Interesting, but not proof of anything yet.",k2:"She admits it. Not knowledge of a crime.",k3:"Can't be tested.",f1:"The guard log agrees.",f2:"His phone record would show that.",f3:"Sentiment, not evidence."},
  success:"The weather record shows the rain stopped at 00:30, yet the 'live' host describes rain hammering the windows at 01:38. That segment was recorded on a rainy night and played out. Cal was not in the studio."
};
c.codeQ = {
  title:"Archive search", intro:"The 01:38–01:49 segment was a replay. Find which archived episode it came from. The police terminal can search the station archive by keyword ('archive <word>').",
  q:"Date of the episode that was replayed (for example 14 Sep)", placeholder:"DD Mon",
  accept:["21sep","2109","21september","20260921","210926","21sept","sep21"],
  success:"21 September: the same caller, the same rain, the same lost dog. Eleven minutes and eight seconds long."
};
c.prints = {
  title:"Latent print, steering wheel", latentLabel:"Lifted latent (Cal's car, wheel at 10 o'clock)", cands:["joel","felix","harlan","mika"], culprit:"joel", rot:-41,
  P:{joel:{type:"loop",cx:96,cy:116,w:2.6,ph:2.4,k:.6,seed:71},felix:{type:"loop",cx:104,cy:108,w:3.3,ph:.6,k:.63,seed:72},harlan:{type:"whorl",cx:100,cy:120,sx:1.4,a:3,w:2.6,ph:1.4,k:.58,seed:73},mika:{type:"arch",cx:98,cy:128,a:38,b:50,w:2.4,ph:2.9,k:.62,seed:74}},
  fails:{felix:"Loop pattern, but the ridges break apart near the delta at every rotation.",harlan:"A whorl can't produce this open loop.",mika:"An arch has no core; the latent has one."},
  success:"Identified: Joel Varga, right thumb. The lab report is unsealed."
};
c.hand = {
  intro:"Compare the hand-written cart label with exemplars from each suspect. Same characters, different hands.",
  note:"BEST OF · B<br>11:08", noteFont:"'Reenie Beanie', cursive", noteSize:40,
  exemplar:"Studio B log · Sat 03/10 · 02:38 · B-roll",
  cands:[{k:"joel",f:"'Reenie Beanie', cursive",sz:30},{k:"mika",f:"Caveat, cursive",sz:26},{k:"harlan",f:"'Homemade Apple', cursive",sz:16},{k:"felix",f:"'Nothing You Could Do', cursive",sz:19}],
  culprit:"joel", success:"Match: Joel Varga. Tall narrow capitals, the open 8 and a drifting baseline."
};
c.timeline = {
  intro:"Order the events of the night using the guard log, stream recording, incident report and terminal records. Times are hidden until you get it right.",
  ev:[{id:"a",t:"The guard sees Felix Rourke's car in the car park",tm:"01:20"},{id:"b",t:"Felix Rourke leaves the car park",tm:"01:31"},{id:"c",t:"Cal says 'back after this' and the ad break starts",tm:"01:37"},{id:"d",t:"The 'live' segment with Marisol from Eastport begins",tm:"01:38"},{id:"e",t:"Joel chats with the guard at the lobby coffee machine",tm:"01:45"},{id:"f",t:"KNOX goes to dead air",tm:"01:49"},{id:"g",t:"Joel reports Cal missing",tm:"02:10"},{id:"h",t:"Cal's car leaves the station garage",tm:"03:04"}],
  success:"The 'live' segment started a minute after Cal's last confirmed words and ran while Joel was being seen in the lobby. Somebody built that alibi."
};
c.verdict = {
  culprit:"joel", methodLabel:"How Cal was killed", method:"sedate", methodMiss:"The method doesn't fit the sedative, the spiked mug or the car's movements.",
  methods:{sedate:"Sedated in the studio, then driven to Pier 4 in his own car",abduct:"Abducted from the car park at gunpoint",suicide:"Took his own life at Pier 4",fight:"Killed in a fight in the studio and dumped from the fire stairs"},
  motive:"joel", motives:{joel:"Hide the money he took from the listener appeal",dana:"Collect the life insurance",felix:"Obsession after the restraining order",harlan:"End a costly contract dispute",mika:"Cover up deleting the recording"},
  pillars:[
    {ev:["ledger","notebook"],pts:3,hit:"Motive: Cal had found Joel taking money from the Night Light Appeal.",miss:"No evidence of why the accused would kill Cal."},
    {ev:["printlab","rx"],pts:3,hit:"Means: the accused had the sedative and drove the car.",miss:"Nothing ties the accused to the sedative or the car."},
    {ev:["consolelog","archive21","cellpier","anprcal","joelcar"],pts:3,hit:"Opportunity: the broadcast was a replay and the accused was at the pier.",miss:"The jury still believes Cal was live on air at 01:45."}],
  bonus:[{ev:"handlab",pts:1,hit:"He labelled the replay cart in his own hand."},{ev:"mika2",pts:1,hit:"He sent the engineer on an early break and ordered the recording deleted."}],
  defence:[
    {claim:"A guard saw Joel in the lobby at 01:45, while Cal was live on air.",rebut:["consolelog","archive21","weather"],pts:3},
    {claim:"A stalker under a restraining order was in the car park that night.",rebut:["felixgps"],pts:2}],
  questions:[
    {q:"Where was Cal at 01:45 while 'on air'?",o:["Taking a caller in Studio B","Already sedated; the segment was a pre-recorded cart","Walking to the car park","On the roof having a cigarette"],a:1},
    {q:"Which episode was replayed?",o:["14 September","28 September","21 September","5 October"],a:2},
    {q:"Why was the studio recording deleted?",o:["To hide the source switch from microphone to cart","Routine disk cleanup","A caller had defamed someone","The file was corrupted"],a:0}],
  solution:"Joel Varga had been draining the Night Light Appeal. Cal found out and planned to tell the owner on Friday, off air. That night Joel spiked Cal's coffee with his own prescription sedative and sent the engineer on an early break. At 01:37, during the ad break, he cut Cal's mic, cued a cart he had labelled in advance (eleven minutes of a rainy 21 September episode) and went down to chat with the guard while 'Cal' took calls on air. Joel moved Cal down the fire stairs to the garage, reported him missing at 02:10, and at 03:04 drove Cal's car to Pier 4. He walked back for his own car at dawn, and had the engineer delete the logger file that would have shown the mic was off."
};
c.term = {
  help:`COMMANDS
  person <name>      Citizen record
  plate <plate>      Vehicle registration and ANPR hits
  phone <number>     Carrier record and cell sites
  tag <name>         Court-ordered GPS tag history
  pharmacy <name>    Prescription registry
  alibi <name>       Alibi verification status
  archive <word>     Search KNOX's show archive and caller logs
  case <number>      Case file lookup
  missing            Open missing-person reports
  clear              Clear the screen`,
  quick:["help","person varga","archive rain","tag rourke","plate PM-5512"],
  alias:{joel:"varga",varga:"varga",dana:"dana",felix:"rourke",rourke:"rourke",harlan:"pryce",pryce:"pryce",mika:"sato",sato:"sato",cal:"cal",brennan:"cal"},
  miss:{person:"No citizen record matches.",plate:"No vehicle registered under that plate.",phone:"No carrier record for that number.",tag:"No court-ordered tag for that person.",pharmacy:"No controlled prescriptions on file.",alibi:"No alibi on file.",archive:"No episodes match. Try a single word.",case:"No such case. Try PMPD-26-1003-019."},
  cmds:{
    "person varga":{out:"VARGA, Joel A.\nDOB 1988-02-19 · Res: Westgate, Rowan Court 4\nPhone 054 555 0261 · Vehicle PM-2290 (grey hatchback)\nEmployment: KNOX 98.1, producer. Treasurer, Night Light Appeal (charity a/c ending 7731)\nPriors: none"},
    "person dana":{out:"BRENNAN, Dana\nDOB 1977-06-03 · Res: Eastport, Linden St 22\nPhone 050 555 0832 · Vehicle PM-6610\nEmployment: Eastport General, ward 6 (nights)\nPriors: none"},
    "person rourke":{out:"ROURKE, Felix\nDOB 1992-11-11 · Res: Harbour Flats 9B\nPhone 052 555 0477 · Vehicle PM-3318\nRestraining order PMPD-26-0714-088 (protecting C. Brennan). Breach: 22 Aug.\nCourt-ordered GPS tag 4471-C. Priors: harassment (2026)"},
    "person pryce":{out:"PRYCE, Harlan\nDOB 1965-01-30 · Res: Cliff Road 1\nPhone 050 555 0900 · Vehicle PM-0901\nOwner, KNOX 98.1. Priors: none"},
    "person sato":{out:"SATO, Mika\nDOB 1997-04-08 · Res: Old Town, Mill Lane 12\nPhone 056 555 0145 · Vehicle: none\nEmployment: KNOX 98.1, overnight engineer. Priors: none"},
    "person cal":{out:"BRENNAN, Calvin 'Cal' (DECEASED, recovered 5 Oct)\nDOB 1974-08-21 · Res: Old Harbour Rd 40\nPhone 050 555 0533 (not recovered) · Vehicle PM-5512 (blue estate)"},
    "plate pm5512":{out:"PM-5512 · blue estate · keeper BRENNAN, Calvin\nANPR HITS 03 OCT\n  03:04:51  KNOX garage exit barrier\n  03:09:12  Old Harbour Rd / Quay junction\n  03:14:40  Pier 4 approach",cls:"hit",unl:"anprcal"},
    "plate pm2290":{out:"PM-2290 · grey hatchback · keeper VARGA, Joel\nANPR HITS 02–03 OCT\n  23:40:02  KNOX garage entry\n  05:52:37  KNOX garage exit",cls:"hit",unl:"joelcar"},
    "plate pm3318":{out:"PM-3318 · keeper ROURKE, Felix\nANPR HITS 03 OCT\n  01:12  Old Harbour Rd (toward KNOX)\n  01:33  Old Harbour Rd (away from KNOX)"},
    "plate pm6610":{out:"PM-6610 · keeper BRENNAN, Dana\nANPR: Eastport General staff car park 18:41 (2 Oct) → 07:20 (3 Oct)"},
    "plate pm0901":{out:"PM-0901 · keeper PRYCE, Harlan\nANPR: Eastport Casino valet 22:58 (2 Oct) → 04:31 (3 Oct)"},
    "phone 0545550261":{out:"054 555 0261 · VARGA, Joel\n03 Oct cell sites:\n  00:00–03:02  KNOX mast (Old Harbour Rd)\n  03:16–03:31  Pier 4 / Quay mast\n  03:58–05:40  KNOX mast\n  06:12        Westgate mast",cls:"hit",unl:"cellpier"},
    "phone 0525550477":{out:"052 555 0477 · ROURKE, Felix\n03 Oct 01:44:20 CALL OUT → KNOX studio line · result BUSY (0 s)\nCell: Harbour Flats mast from 01:52"},
    "phone 0505550832":{out:"050 555 0832 · BRENNAN, Dana\nEastport General mast all night."},
    "phone 0565550145":{out:"056 555 0145 · SATO, Mika\nKNOX mast all night. 02:19 SMS IN from 054 555 0261: 'Delete the 0138 logger file. Legal issue. Thanks.'",cls:"hit"},
    "tag rourke":{out:"GPS TAG 4471-C · ROURKE, Felix\n03 Oct\n  01:08  Departs Harbour Flats\n  01:19  KNOX car park\n  01:31  Departs KNOX car park\n  01:55  Harbour Flats (home)\n  01:55–08:10  Stationary at home",cls:"hit",unl:"felixgps"},
    "pharmacy varga":{out:"PRESCRIPTION REGISTRY · VARGA, Joel\nZolpidem 10 mg × 30 · prescribed 12 Aug · refilled 30 Sep (Westgate Pharmacy)",cls:"hit",unl:"rx"},
    "alibi dana":{out:"ALIBI · BRENNAN, Dana: VERIFIED\nWard 6 badge swipes hourly 19:02–07:04. Charge nurse confirms.",cls:"hit",unl:"danarota"},
    "alibi pryce":{out:"ALIBI · PRYCE, Harlan: VERIFIED\nEastport Casino poker room CCTV 23:10–04:15.",cls:"hit",unl:"harlancas"},
    "alibi rourke":{out:"ALIBI · ROURKE, Felix: see 'tag rourke'"},
    "alibi varga":{out:"ALIBI · VARGA, Joel: WITNESSED\nGuard O. Mensah: Varga at lobby coffee machine 01:44–01:48 while 'Static' played on the lobby speaker."},
    "alibi sato":{out:"ALIBI · SATO, Mika: PARTIAL\nBreak-room camera: present 01:29–02:02."},
    "archive marisol":{out:"ARCHIVE SEARCH 'marisol' · caller logs\n  14 Sep  01:12  Marisol (Eastport): neighbours' noise\n  21 Sep  01:41  Marisol (Eastport): lost dog\n  03 Oct  01:41  Marisol (Eastport): lost dog  [night of disappearance]"},
    "archive rain":{out:"ARCHIVE SEARCH 'rain' · host transcripts\n  14 Sep  00:20\n  21 Sep  01:38\n  28 Sep  00:05\n  03 Oct  01:38  [night of disappearance]"},
    "archive dog":{out:"ARCHIVE SEARCH 'dog' · caller logs\n  21 Sep  01:41  lost dog\n  28 Sep  00:47  dog barking at night\n  03 Oct  01:41  lost dog  [night of disappearance]"},
    "archive quarter":{out:"ARCHIVE SEARCH 'quarter' · host transcripts\n  07 Sep, 21 Sep, 03 Oct"},
    "archive 21sep":{out:"EPISODE 21 SEP 2026 · 'Static'\nSegment B 01:38:02–01:49:10 (11:08) archived to cart pool 'BEST OF B'\nLast accessed: 02 Oct 22:14 by user jvarga"},
    "archive 14sep":{out:"EPISODE 14 SEP 2026 · no segments exported"},
    "archive 28sep":{out:"EPISODE 28 SEP 2026 · no segments exported"},
    "case pmpd261003019":{out:"PMPD-26-1003-019 · MISSING → HOMICIDE · BRENNAN, Calvin · Status: OPEN"},
    "case pmpd260714088":{out:"PMPD-26-0714-088 · RESTRAINING ORDER · ROURKE, Felix\nProtected person: C. Brennan. Breached 22 Aug (warning)."},
    "missing":{out:"OPEN MISSING-PERSON REPORTS\nPMPD-26-1009-017  PIKE, Owen, 31 · last seen Meridian Tower loading bay, 9 Oct.\n(BRENNAN, Calvin: closed, recovered 5 Oct)"}
  }
};
const E=c.ev;
E("incident","Reports","Missing person report","Police report",null,()=>D("PORT MERIDIAN POLICE DEPT.","PMPD-26-1003-019",KV([["Reported","03 Oct 2026, 02:10, by J. Varga (producer)"],["Missing","Calvin 'Cal' BRENNAN, 52. Host of 'Static', KNOX 98.1"],["Last confirmed","Heard on air until 01:49. Then dead air."],["Location","Studio B, KNOX building, Old Harbour Rd"],["Vehicle","PM-5512 (blue estate) missing from station garage. Found locked at Pier 4, 06:40."],["Update 05 Oct","Body recovered from the harbour, 07:10. Now treated as homicide."]])+`<h4>Notes</h4><p>The station logger file covering 01:38–01:49 was deleted at 02:20 from the engineering workstation.</p><p>A listener's stream recording of the broadcast has been supplied (see exhibit).</p>`,"CONFIDENTIAL"));
E("scene","Scene","Studio B photograph","Photograph",null,()=>D("SCENE PHOTO 01 / STUDIO B","03 OCT 03:00",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("cart","Scene","Tape cart, slot 2","Physical evidence",null,()=>D("ITEM 3 · BROADCAST TAPE CART","BAGGED 03:20",`<div style="display:grid;place-items:center;padding:18px 0"><div style="background:#2a2d33;padding:16px 18px;border-radius:6px;width:min(300px,100%)"><div style="background:#f3efe2;padding:12px;font-family:'Reenie Beanie',cursive;font-size:40px;line-height:1;color:#22252a">BEST OF · B<br>11:08</div></div></div><p>Found loaded in slot 2 of the studio cart machine. The tape itself has been erased.</p>${LAB("hand","Compare handwriting")}`));
E("airtx","Digital","Stream recording, 00:58–01:49","Audio recording",null,()=>audioDoc("LISTENER STREAM CAPTURE · KNOX 98.1","SUPPLIED BY A LISTENER",[[0,"[01:00:00] You're listening to KNOX, Channel Nine. It's one o'clock."],[900,"[01:00:12] This is Static, I'm Cal Brennan, and the night is young."],[1900,"[01:37:30] Stay with me. Back after this. [ad break]"],[2900,"[01:38:02] We're back, and the rain's hammering the windows out there tonight."],[3900,"[01:41:10] Marisol from Eastport, you're on Static. ... Oh, your dog. I'm sorry."],[4900,"[01:46:40] It's coming up on quarter to two."],[5800,"[01:49:10] [silence]"]]));
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 03–05 OCT","INTERVIEW ROOM 2",`
<h4>Joel Varga · 03 Oct 02:40</h4><p><span class="q">A:</span> I was in the control room with him until about quarter to two. I went down for a coffee and talked to Ollie on the desk. When I came back, the studio was empty and we were in dead air. I called it in.</p><p><span class="q">Q:</span> Then what?</p><p><span class="q">A:</span> Your officers took my statement. I drove home to Westgate about five to three.</p>
<h4>Mika Sato · 03 Oct 03:10</h4><p><span class="q">A:</span> Joel told me to take my break early, around half one. I deleted the logger file because Joel said a caller defamed someone. I didn't hear anything from the break room.</p>
<h4>Felix Rourke · 04 Oct 11:00</h4><p><span class="q">A:</span> I only wanted to see him. I left when the guard told me to. I called in at quarter to two and the line was busy. I'd never hurt Cal.</p>
<h4>Dana Brennan · 05 Oct 12:30</h4><p><span class="q">A:</span> I was on the ward. Yes, I'm still on the policy. I emailed him to sign the renewal. That's all.</p>
<h4>Harlan Pryce · 05 Oct 14:00</h4><p><span class="q">A:</span> I wanted the show gone, not the man. He wanted twenty minutes with me on Friday. He wouldn't say why.</p>`));
E("weather","Records","Met record, Old Harbour","Weather record",null,()=>D("PORT MERIDIAN MET OFFICE","STATION OH-2 · 02/03 OCT",TB(["Hour","Rain (mm)","Notes"],[["22:00","3.1","Heavy"],["23:00","1.4","Easing"],["00:00","0.2","Last rain 00:30"],["01:00","0.0","Dry, clearing"],["02:00","0.0","Dry"],["03:00","0.0","Dry"]])));
E("emails","Digital","Cal's inbox","Emails",null,()=>`<div class="doc mail"><div class="mh">FROM: h.pryce@knox981.pm · TO: cal · 29 Sep<br>SUBJECT: December</div><p>Static ends in December. Don't make this ugly, Cal.</p></div>
<div class="doc mail"><div class="mh">FROM: cal · TO: h.pryce@knox981.pm · 01 Oct<br>SUBJECT: Re: December</div><p>Fine. But I need twenty minutes with you on Friday about something else. Not on air.</p></div>
<div class="doc mail"><div class="mh">FROM: dana.brennan@eastportgen.pm · TO: cal · 30 Sep<br>SUBJECT: Policy renewal</div><p>Insurance renewal needs your signature by the 10th. Please don't ignore this one.</p></div>
<div class="doc mail"><div class="mh">FROM: nightowl@… · TO: cal · 01 Oct · [FILTERED]</div><p>I'll be closer than you think on Friday.</p></div>`);
E("notebook","Digital","Cal's notebook, last page","Coded message",null,()=>D("ITEM 9 · SPIRAL NOTEBOOK","LAST PAGE",`<p style="font-size:18px;letter-spacing:.08em;word-break:break-word">${c.cipher.ct}</p><p class="dim" style="font-family:'Reenie Beanie',cursive;font-size:22px;color:#4a4a52">(margin) key = what we say at the top of every hour</p>${C.done.cipher?`<p><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Work on it in the lab")}`));
E("recovery","Reports","Recovery & autopsy","Autopsy report","scene",()=>D("OFFICE OF THE MEDICAL EXAMINER","ME-26-2240",KV([["Recovered","05 Oct 07:10, harbour, 60 m off Pier 4"],["Cause","Drowning"],["Toxicology","Zolpidem at a level consistent with a 20 mg dose taken roughly 30–60 minutes before entering the water"],["Injuries","Abrasions to heels and lower back, consistent with being dragged"],["Stomach","Coffee"]])));
E("guardlog","Records","Security desk log","Log","scene",()=>D("KNOX SECURITY · FRONT DESK","GUARD O. MENSAH",TB(["Time","Entry"],[["01:20","Car park: PM-3318 (F. Rourke, known). Told to leave."],["01:31","PM-3318 left."],["01:44–01:48","J. Varga at lobby coffee machine. Static on lobby speaker. Chatted about the rain."],["02:05","J. Varga reports C. Brennan missing."],["01:30–03:30","No one used the front door."]])+`<p class="dim" style="margin-top:8px">The fire stairs to the garage are not covered by this desk.</p>`));
E("mika2","Statements","Mika Sato, second interview","Interrogation transcript","statements",()=>D("INTERVIEW · 05 OCT 16:20","MIKA SATO",`<p><span class="q">A:</span> At about 01:25 Joel came into engineering and said take your break now, he'd watch the board. He's never done that. When I came back after two, the cart machine light was on slot 2. I didn't think about it.</p><p><span class="q">A:</span> At 02:19 he texted me to delete the 01:38 logger file. He said legal.</p>`));
E("ledger","Records","Night Light Appeal ledger","Financial record","cipher",()=>D("NIGHT LIGHT APPEAL · ACCOUNT …7731","JUL–SEP 2026",TB(["Date","Payee","Amount","Authorised"],[["14 Jul","Cash withdrawal","4,000","J. Varga"],["02 Aug","'Studio equipment' (no invoice)","11,500","J. Varga"],["29 Aug","Cash withdrawal","6,000","J. Varga"],["19 Sep","'Venue deposit' (no venue)","9,800","J. Varga"]])+`<p style="margin-top:10px">Pencilled beside the last line in Cal's hand: <i>'Asked Joel. He said venue. There's no venue.'</i></p>`));
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-0912",`<p>Partial latent lifted from the steering wheel of PM-5512 at the 10 o'clock position.</p><p>Identified: <b>J. Varga</b>, right thumb. Others excluded.</p>`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0161",`<p>Cart label (Item 3) very probably written by <b>J. Varga</b>.</p>`));
E("archive21","Records","Archive episode, 21 Sep","Station archive","code",()=>D("KNOX ARCHIVE · 21 SEP 2026","SEGMENT B",`<p>Segment B, 01:38:02–01:49:10 (11:08): 'We're back, and the rain's hammering the windows…', caller Marisol from Eastport about a lost dog, 'coming up on quarter to two'. Word-for-word identical to the 03 Oct stream recording.</p><p>Exported to cart pool 'BEST OF B' on 02 Oct, 22:14, by user <b>jvarga</b>.</p>`));
E("consolelog","Digital","Broadcast console log","System log","timeline",()=>D("STUDIO B CONSOLE · AUTOMATION LOG","03 OCT",TB(["Time","Event"],[["01:36:58","Talkback: control room → studio"],["01:37:44","MIC1 (host) OFF"],["01:38:02","CART2 PLAY · 'BEST OF B' · source on-air bus"],["01:49:10","CART2 END · no source → silence"],["01:49:50","Automation filler"]])));
E("felixgps","Records","GPS tag: F. Rourke","Court monitoring","term",()=>D("COURT MONITORING · TAG 4471-C","03 OCT",KV([["01:19","Arrives KNOX car park"],["01:31","Departs"],["01:55","Home (Harbour Flats)"],["01:55–08:10","Stationary at home"]])));
E("danarota","Records","Ward 6 badge swipes","Alibi verification","term",()=>D("EASTPORT GENERAL · ACCESS","WARD 6",`<p>Dana Brennan swiped into ward 6 every hour from 19:02 to 07:04. The charge nurse confirms she was on the ward.</p>`));
E("harlancas","Records","Casino CCTV: H. Pryce","Alibi verification","term",()=>D("EASTPORT CASINO · POKER ROOM","02–03 OCT",`<p>Harlan Pryce at table 4 from 23:10 to 04:15. Valet records his car 22:58–04:31.</p>`));
E("cellpier","Records","Phone cell sites: J. Varga","Phone record","term",()=>D("CARRIER RECORD · 054 555 0261","03 OCT",TB(["Time","Mast"],[["00:00–03:02","KNOX (Old Harbour Rd)"],["03:16–03:31","Pier 4 / Quay"],["03:58–05:40","KNOX"],["06:12","Westgate"]])));
E("anprcal","Records","ANPR: Cal's car PM-5512","Vehicle record","term",()=>D("ANPR · PM-5512","03 OCT",KV([["03:04:51","KNOX garage exit barrier"],["03:09:12","Old Harbour Rd / Quay junction"],["03:14:40","Pier 4 approach"]])));
E("joelcar","Records","ANPR: Joel's car PM-2290","Vehicle record","term",()=>D("ANPR · PM-2290","02–03 OCT",KV([["23:40:02","KNOX garage entry"],["05:52:37","KNOX garage exit"]])));
E("rx","Records","Prescription registry: J. Varga","Medical record","term",()=>D("PRESCRIPTION REGISTRY","VARGA, J.",`<p>Zolpidem 10 mg × 30. Prescribed 12 Aug. Refilled 30 Sep, Westgate Pharmacy.</p>`));
})();

/* ---------------- CASE 3: THE NINTH PASSENGER ---------------- */
(function(){
const c = defCase({
  id:"ninth", title:"The Ninth Passenger", code:"PMPD-26-1011-031", short:"CASE 031", crime:"Fraud & theft", genre:"Heist", diff:5, cover:"bus",
  blurb:"Eight people bought tickets for the night bus to the airport. Nine got off. Fourteen diamonds left in the courier's locked case and arrived as aquarium gravel.",
  briefDate:"12 Oct 2026, 09:15", headline:"Fourteen diamonds, one extra rider",
  summary:[
    "Tomas Reyes, a courier for Fein & Daughters jewellers, rode the N9 night bus to the airport with fourteen certified diamonds in a smart-locked case. At airport security the pouch held aquarium gravel.",
    "Eight tickets were sold. The airport camera counts nine people stepping off. The ninth wore a red hooded coat, walked into Terminal 2 and flew out to Valletta on a passport that may not be real. The owner just raised the insurance. A convicted pickpocket sat two rows back. The driver says he counted eight. Nobody here is telling the whole truth."],
  intro:["Complainant: Tomas Reyes, 33. Courier, Fein & Daughters.","Fourteen diamonds left Old Town at 23:05. Gravel arrived at 23:58.","Eight tickets sold. Nine passengers stepped off.","The ninth flew out an hour later on a passport that may not exist.","This one's a puzzle box, Detective {name}."],
  screen:["PMPD RECORDS v4.2","> flight cruz","PM 418 · seat 22A","> card 5521","HOLDER: …"],
  CLEARS:{gamelog:["viktor"],insurance:["margot"],mrzlab:["margot","viktor","ivo"],printlab:["margot","viktor","ivo"],cardrecord:["margot","viktor","ivo"],handlab:["margot","viktor","ivo"]},
  POINTS:{lockapp:["tomas"],debts:["tomas"],cardrecord:["tomas"],mrzlab:["tomas","elena"],printlab:["tomas","elena"],maltasim:["tomas","elena"],chat:["tomas","elena"],handlab:["tomas"],transcripts:["tomas"],insurance:["margot"],tickets:["ivo"],radio:["ivo"],airportcctv:["elena"],stoplog:["ivo"]}
});
c.SUS = {
  tomas:{name:"Tomas Reyes",init:"TR",short:"Courier (complainant)",age:33,role:"Courier, Fein & Daughters jewellers; seat 10",phone:"052 555 0610",car:"None",motive:"None on file. He reported the theft himself.",alibi:"Says he dozed off near the bridge and noticed nothing until airport security.",rel:"Five years with the firm. Trusted with the Antwerp runs."},
  ivo:{name:"Ivo Petrov",init:"IP",short:"Bus driver",age:57,role:"Driver, route N9",phone:"050 555 0211",car:"Bus PM-B909",motive:"Says only eight boarded. The airport camera says nine got off.",alibi:"Driving the bus.",rel:"Drives N9 four nights a week."},
  viktor:{name:"Viktor Lasko",init:"VL",short:"Passenger, seat 13",age:41,role:"Passenger, seat 13 (two rows behind the courier)",phone:"055 555 0441",car:"None",motive:"Two prior convictions for pickpocketing on public transport.",alibi:"Says he was playing a game on his phone the whole way.",rel:"No known link to the firm."},
  margot:{name:"Margot Fein",init:"MF",short:"Owner, Fein & Daughters",age:60,role:"Owner, Fein & Daughters jewellers",phone:"050 555 0300",car:"PM-0300",motive:"Raised the insurance cover on the stones from 2.0 to 3.1 million two weeks ago.",alibi:"At home. Not on the bus.",rel:"Hired Tomas in 2021."},
  elena:{name:"'Elena Cruz'",init:"??",short:"The ninth passenger",age:"?",role:"Unticketed passenger in a red hooded coat; flew PM 418 to Valletta at 01:15",phone:"Unknown",car:"None",motive:"Unknown.",alibi:"Gone.",rel:"Identity unknown. Gender and age undetermined from CCTV."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Study the bus camera still",d:"Find four details in the interior camera frame.",reward:["lockapp"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"Someone knows more about the ninth passenger than they should.",reward:["chat"]},
  {id:"cipher",lab:"Cipher",t:"Decode 'Gran's puzzle'",d:"A coded text on the courier's phone.",reward:["ivo2"]},
  {id:"mrz",lab:"Passport",t:"Break the passport",d:"Find the field on Elena Cruz's passport that fails its check digit.",reward:["mrzlab"]},
  {id:"prints",lab:"Fingerprints",t:"Match the print on the gravel bag",d:"A partial was lifted from the zip bag of gravel.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who wrote the compliments slip?",d:"A hand-written slip was tucked under the gravel.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the ride",d:"Order the events of the journey.",reward:["airportcctv"],needs:"scene"},
  {id:"records",t:"Follow the money and the phones",d:"Turn up four records on the terminal.",reward:[]}
];
c.records = {ev:["maltasim","cardrecord","gamelog","debts","insurance","lucia"],n:4};
c.hints = {
  scene:["Look at the case, the phone, the floor and the seat pockets.","The lock's LED colour, the phone screen (zoom), grit on the floor by seat 9, and paper sticking out of seat 9's pocket (zoom)."],
  statements:["What do the police actually know about the ninth passenger? Read the information release.","CCTV couldn't determine gender. Who calls the ninth passenger 'she'?"],
  cipher:["Tomas called it his gran's puzzle. The shift dial won't do it.","Try the mirror alphabet: A becomes Z, B becomes Y."],
  mrz:["Use the calculator on each field of the second line and compare with the printed check digit.","Forgers reprint the expiry date to keep a lost passport alive. Check that field carefully."],
  prints:["Rotate the latent over each reference print and watch the core and delta.","A whorl latent. Two candidates are whorls. The match aligns at about −35°."],
  hand:["Compare the W, the F and the ampersand.","Look for the hand with a looping ampersand and a slanting crossbar on the F."],
  timeline:["Use the stop log, the lock app, the ticket sales and the airport camera.","The doors opened at Canal St before anything happened to the case. The case was locked again just before the bridge."],
  records:["Follow the passport's booking, and the phone numbers on the courier's handset.","Try flight cruz, then the card that paid for it. Try phone on the Malta number and person on the courier's family."]
};
c.react = {
  scene:"Green LED. That lock wasn't forced, it was opened. The SecureCarry cloud log is in.",
  statements:"'She.' Nobody told him that. And look what we recovered from his phone.",
  cipher:"Seat nine, red coat, gate 14. That's a plan, not a puzzle. The driver's had a rethink too.",
  mrz:"Reprinted expiry on a passport reported lost. And look whose it was.",
  prints:"Lucia Reyes handled the gravel bag. Reyes. Same surname.",
  hand:"He wrote the compliments slip himself, to make it look like a packing job at the shop.",
  timeline:"The airport camera summary is in. Watch where the red coat goes.",
  records:"The money trail's taking shape. Follow the card."
};
c.unlockLines = {maltasim:"A Malta SIM riding the N9.",cardrecord:"Look whose card bought that ticket.",gamelog:"Viktor's thumbs were busy the whole ride.",debts:"Two hundred thousand owed to a loan company.",insurance:"The insurer asked for that raise, not Margot.",lucia:"The courier has a sister."};

c.cipher = {plain:"BUS N9. SEAT NINE. RED COAT. GATE 14. DO NOT LOOK AT ME.", title:"Gran's puzzle", intro:"A text on Tomas's phone from a contact saved as 'Gran'. He says she sends him puzzles. Decode it.", success:"Bus N9, seat nine, red coat, gate 14. 'Do not look at me.' Instructions, sent two days before the ride."};
c.cipher.ct = atbash(c.cipher.plain);

// passport MRZ
const doc9="X4K29R71<", dob="910614", exp="330221", pers="<<<<<<<<<<<<<<";
const docCD=mrzCD(doc9), dobCD=mrzCD(dob), expTrue=mrzCD(exp), expBad=String((+expTrue+4)%10), persCD="<";
const compCD=mrzCD(doc9+docCD+dob+dobCD+exp+expBad+pers+persCD);
c.mrz = {
  line1:("P<UTOCRUZ<<ELENA"+"<".repeat(44)).slice(0,44),
  parts:[["doc",doc9+docCD],["","UTO"],["dob",dob+dobCD],["","F"],["exp",exp+expBad],["",pers+persCD],["comp",compCD]],
  correct:"exp", data:{Surname:"CRUZ",Given:"ELENA",Nationality:"UTO",Born:"14 JUN 1991",Sex:"F",Expires:"21 FEB 2033",No:"X4K29R71"},
  success:"The expiry date's check digit is wrong. The expiry was reprinted on a passport reported lost."
};

c.scene = {
  title:"N9 interior camera 2, 23:40", intro:"A frame from the bus's interior camera, a minute before the case was opened. Find four details. Two of them are small.",
  hots:[
    {id:"lock",x:556,y:300,r:18,t:"The SecureCarry case on seat 10. Its lock LED is green: unlocked. No pry marks."},
    {id:"phone",x:612,y:338,r:11,zoom:2,t:"Tomas's phone on the armrest, screen awake on the SecureCarry app."},
    {id:"gravel",x:286,y:410,r:24,t:"Fine aquarium grit spilled on the floor under seat 9."},
    {id:"pass",x:236,y:330,r:11,zoom:2,t:"A boarding-pass stub in the seat pocket in front of seat 9: GATE 14."}],
  draw(){
    let lights=""; const r=rng(9); for(let i=0;i<26;i++){ const x=r()*800, y=60+r()*90, w=20+r()*90; lights+=`<rect x="${x}" y="${y}" width="${w}" height="2" fill="${r()<.5?'#f2c96b':'#9fd0ff'}" opacity="${(.3+r()*.5).toFixed(2)}"/>`; }
    const seat=(x,y,s,n)=>`<g><rect x="${x}" y="${y}" width="${90*s}" height="${70*s}" rx="${8*s}" fill="#2c3a55"/><rect x="${x}" y="${y+70*s}" width="${90*s}" height="${18*s}" rx="${4*s}" fill="#24304a"/><text x="${x+45*s}" y="${y+14*s}" font-size="${10*s}" fill="#9aa8c4" font-family="IBM Plex Mono, monospace" text-anchor="middle">${n}</text></g>`;
    return `<rect width="800" height="500" fill="#0f141d"/>
    <polygon points="0,40 800,40 520,190 280,190" fill="#151c28"/><rect x="0" y="40" width="800" height="120" fill="#0a1220" opacity=".7"/>${lights}
    <polygon points="0,40 280,190 280,230 0,170" fill="#1b2433"/><polygon points="800,40 520,190 520,230 800,170" fill="#1b2433"/>
    <polygon points="280,230 520,230 800,500 0,500" fill="#1f232b"/><polygon points="360,230 440,230 560,500 240,500" fill="#262b34"/>
    ${seat(300,190,.45,"15")}${seat(456,190,.45,"16")}${seat(250,216,.6,"13")}${seat(494,216,.6,"14")}
    ${seat(170,262,.9,"9")}${seat(500,262,.9,"10")}${seat(40,340,1.3,"7")}${seat(610,340,1.3,"8")}
    <rect x="520" y="284" width="70" height="40" rx="5" fill="#8b9198"/><rect x="530" y="292" width="50" height="4" fill="#6b7178"/><circle cx="560" cy="300" r="4" fill="#4bd37a"/>
    <rect x="602" y="328" width="20" height="30" rx="3" fill="#0b0d10"/><rect x="604" y="331" width="16" height="22" fill="#2d6a8a"/><rect x="606" y="336" width="12" height="3" fill="#e9eef2"/>
    <rect x="228" y="324" width="18" height="12" fill="#f1ede2"/><text x="237" y="333" font-size="5" text-anchor="middle" fill="#23262a" font-family="IBM Plex Mono, monospace">G14</text>
    ${Array.from({length:60},()=>`<circle cx="${(260+r()*55).toFixed(1)}" cy="${(398+r()*26).toFixed(1)}" r="${(0.8+r()*1.4).toFixed(1)}" fill="${r()<.5?'#b8b0a0':'#8e877a'}"/>`).join("")}
    <text x="14" y="24" font-family="IBM Plex Mono, monospace" font-size="13" fill="#e6efe6">N9 · CAM 2 · 11-10-2026 23:40:12</text>`;
  }
};
c.statements = {
  intro:"Read what the police have released about the ninth passenger. Then find who knows something they shouldn't. Click it.",
  blocks:[
    {who:"Tomas Reyes",s:[["t1","I always keep the case on my lap. That night I put it on the seat."],["t2","She must have switched it while I dozed off near the bridge."],["t3","I only noticed at airport security."]]},
    {who:"Ivo Petrov",s:[["i1","Eight tickets, eight passengers. I count them."],["i2","Canal St is a request stop. Nobody requested it."],["i3","I don't look in the mirror much at night."]]},
    {who:"Viktor Lasko",s:[["v1","I was on my phone the whole ride. Some racing game."],["v2","I've done my time. I don't do that any more."],["v3","Someone in a red coat sat across from the guy with the case."]]},
    {who:"Margot Fein",s:[["g1","The insurer asked for the higher cover after the reappraisal."],["g2","Tomas has done this run twenty times."],["g3","I packed the pouch myself at nine."]]}],
  correct:"t2",
  fb:{t1:"Odd, but not knowledge of anything.",t3:"Matches the incident report.",i1:"A lie, maybe, but it doesn't reveal knowledge of the theft.",i2:"Check the stop log.",i3:"Convenient.",v1:"Testable on the terminal.",v2:"Not evidence either way.",v3:"Anyone on the bus could have seen the coat.",g1:"Testable on the terminal.",g2:"Background only.",g3:"Possibly true."},
  success:"Tomas calls the ninth passenger 'she'. The incident report says CCTV couldn't determine gender, and nothing was released. He knows who it was."
};
c.prints = {
  title:"Latent print, gravel zip bag", latentLabel:"Lifted latent (zip bag)", cands:["lucia","margot","viktor","ivo"], names:{lucia:"L. Reyes"}, culprit:"lucia", rot:-35,
  P:{lucia:{type:"whorl",cx:98,cy:118,sx:1.3,a:3.6,w:3.1,ph:1.1,k:.6,seed:91},margot:{type:"loop",cx:102,cy:112,w:2.8,ph:2.2,k:.6,seed:92},viktor:{type:"whorl",cx:104,cy:122,sx:1.6,a:2.2,w:2.7,ph:2.8,k:.57,seed:93},ivo:{type:"arch",cx:100,cy:126,a:44,b:40,w:2.6,ph:.3,k:.61,seed:94}},
  fails:{margot:"A loop can't produce a whorl latent.",viktor:"Whorl, but the core is in the wrong place at every rotation.",ivo:"An arch has no core."},
  success:"Identified: Lucia Reyes (visa biometrics file, 2024)."
};
c.hand = {
  intro:"A slip under the gravel was made to look like the shop's own packing note. Compare it with the exemplars.",
  note:"With compliments<br>— F&amp;D", noteFont:"'Nothing You Could Do', cursive", noteSize:28,
  exemplar:"With thanks — received 11/10, F&amp;D",
  cands:[{k:"tomas",f:"'Nothing You Could Do', cursive",sz:19},{k:"margot",f:"'Homemade Apple', cursive",sz:16},{k:"ivo",f:"'Reenie Beanie', cursive",sz:30},{k:"viktor",f:"Caveat, cursive",sz:26}],
  culprit:"tomas", success:"Match: Tomas Reyes. The looping ampersand and slanted F crossbar."
};
c.timeline = {
  intro:"Order the journey using the stop log, lock app, ticket sales and terminal records. Times are hidden until you get it right.",
  ev:[{id:"a",t:"N9 leaves Old Town with eight ticketed passengers",tm:"23:05"},{id:"b",t:"Harbour stop: nobody gets on or off",tm:"23:22"},{id:"c",t:"Doors open at the Canal St request stop",tm:"23:31"},{id:"d",t:"The courier's case is unlocked",tm:"23:41"},{id:"e",t:"The case is locked again",tm:"23:43"},{id:"f",t:"The bus crosses the bridge",tm:"23:47"},{id:"g",t:"Nine people step off at the airport",tm:"23:58"},{id:"h",t:"'Elena Cruz' checks in for PM 418",tm:"00:05"}],
  success:"The extra rider boarded at Canal St. The case was opened and closed before the bridge, while Tomas says he was asleep."
};
c.verdict = {
  culprit:"tomas", methodLabel:"How it was done", method:"staged", methodMiss:"The method doesn't fit an unforced lock opened by the owner's phone.",
  methods:{staged:"Staged by the courier; his accomplice swapped the stones on the bus",pick:"Pickpocketed while the courier slept",shop:"Swapped at the jewellers before departure",driver:"Taken by the driver at the Canal St stop"},
  motive:"tomas", motives:{tomas:"Pay off his loan debts",margot:"Collect the raised insurance cover",viktor:"Steal diamonds to fence",ivo:"A cut from the thief",elena:"Unknown"},
  pillars:[
    {ev:["debts"],pts:3,hit:"Motive: the accused owed 214,000 to a loan company with a Friday deadline.",miss:"No motive shown for the accused."},
    {ev:["lockapp"],pts:3,hit:"Means: only his paired phone could open the case, and it did at 23:41.",miss:"Nothing shows how the case was opened."},
    {ev:["mrzlab","cardrecord","printlab","maltasim","chat","lucia"],pts:3,hit:"Link: the accused is tied to the ninth passenger, his sister.",miss:"Nothing links the accused to the ninth passenger."}],
  bonus:[{ev:"transcripts",pts:1,hit:"He called the ninth passenger 'she' before anyone knew."},{ev:"handlab",pts:1,hit:"He wrote the fake compliments slip himself."}],
  defence:[
    {claim:"A convicted pickpocket sat two rows behind our client.",rebut:["gamelog"],pts:2},
    {claim:"The owner raised the insurance two weeks ago. She gains the most.",rebut:["insurance"],pts:2}],
  questions:[
    {q:"Who was the ninth passenger?",o:["Margot Fein","Lucia Reyes, the courier's sister","An associate of Viktor Lasko","An unrelated traveller"],a:1},
    {q:"How was the case opened?",o:["Picked by a pickpocket","With the driver's master key","With the courier's paired phone","It was never locked"],a:2},
    {q:"Why did the driver report only eight passengers?",o:["He took cash from an unticketed rider and kept it","Margot paid him to lie","He miscounted in the dark","The ninth hid in the luggage bay"],a:0}],
  solution:"Tomas Reyes owed 214,000 to a loan company and had until Friday. He booked his sister Lucia onto PM 418 under a forged passport, a reprint of her own lost one, paid with his own card. She boarded the N9 at the Canal St request stop, paid the driver cash, and sat in seat 9. At 23:41 Tomas unlocked the case from his phone; she swapped the pouch for gravel and a compliments slip he had written to look like a packing error at the shop. He relocked it at 23:43. At the airport she walked to gate 14 and flew to Valletta. He reported the theft himself, and let slip that the ninth passenger was a woman."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  phone <number>    Carrier record and roaming
  flight <name>     Airline manifests
  card <last 4>     Payment card holder lookup
  game <name>       Online game session logs (subpoenaed)
  debt <name>       Civil judgments and debts
  policy <name>     Insurance policies
  bus <route>       Bus stop and door log
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  clear             Clear the screen`,
  quick:["help","person reyes","flight cruz","bus n9","policy fein"],
  alias:{tomas:"reyes",reyes:"reyes",lucia:"lucia",ivo:"petrov",petrov:"petrov",viktor:"lasko",lasko:"lasko",margot:"fein",fein:"fein",elena:"cruz",cruz:"cruz"},
  miss:{person:"No citizen record matches.",phone:"No carrier record for that number.",flight:"No flights for that name in the last 7 days.",card:"No card on file with those digits.",game:"No game sessions on file.",debt:"No judgments on file.",policy:"No policies on file.",bus:"No such route.",alibi:"No alibi on file.",case:"No such case."},
  cmds:{
    "person reyes":{out:"REYES, Tomas\nDOB 1993-03-28 · Res: Canal St 41, Apt 6\nPhone 052 555 0610 · Courier, Fein & Daughters\nNext of kin: REYES, Lucia (sister), REYES, Ana (grandmother, deceased 2024)\nPriors: none"},
    "person lucia":{out:"REYES, Lucia\nDOB 1991-06-14 · Res: Canal St 41, Apt 2\nPassport X4K29R71 · REPORTED LOST 2025-03-02 (cancelled)\nVisa biometrics on file (2024). Priors: none",cls:"hit",unl:"lucia"},
    "person petrov":{out:"PETROV, Ivo\nDOB 1969-12-01 · Driver, Port Meridian Transit (route N9)\nPriors: 2019 disciplinary, fares irregularity"},
    "person lasko":{out:"LASKO, Viktor\nDOB 1985-05-17 · Res: Harbour Flats 3C\nPriors: theft from person (2017, 2020)"},
    "person fein":{out:"FEIN, Margot\nDOB 1966-09-09 · Owner, Fein & Daughters\nPriors: none"},
    "person cruz":{out:"No citizen record for CRUZ, Elena.\nPassport X4K29R71 flagged: number belongs to a cancelled document."},
    "phone 0525550610":{out:"052 555 0610 · REYES, Tomas\nOct: 14 calls with +356 7955 0119 (Malta)\n09 Oct 21:12 SMS IN 'Gran' (+356 7955 0119)\n11 Oct 23:41 SecureCarry app: unlock command sent"},
    "phone 35679550119":{out:"+356 7955 0119 · MALTA PREPAID\nActivated 09 Oct · Roaming in Port Meridian from 10 Oct\n11 Oct cells: Canal St 23:30 → N9 route 23:31–23:58 → PMR Airport 23:59–01:10\n12 Oct 03:40 Valletta",cls:"hit",unl:"maltasim"},
    "flight cruz":{out:"MERIDIAN AIR PM 418 · PMR → MLA · 12 Oct 01:15\nCRUZ, Elena · seat 22A · passport X4K29R71\nBooked 09 Oct, paid by debit card ending 5521"},
    "flight reyes":{out:"No flights for REYES, Tomas. (Ticket for 12 Oct PMR → ANR cancelled after the theft.)"},
    "card 5521":{out:"DEBIT CARD ****5521 · Harbour Mutual Bank\nHolder: REYES, Tomas",cls:"hit",unl:"cardrecord"},
    "game lasko":{out:"TURBO LANES ONLINE · player 'vlasko85'\n11 Oct 23:18–23:57 · continuous session, 2,914 inputs, no idle gaps over 4 s",cls:"hit",unl:"gamelog"},
    "debt reyes":{out:"CIVIL JUDGMENTS · REYES, Tomas\n  2026-05  Sal Ombra Lending Ltd  122,000  unpaid\n  2026-08  Sal Ombra Lending Ltd   92,000  unpaid\nNotice of enforcement served 01 Oct: 'final date Friday 16 Oct'",cls:"hit",unl:"debts"},
    "policy fein":{out:"PORT MUTUAL INSURANCE · Fein & Daughters\nTransit cover raised 2.0m → 3.1m on 27 Sep\nRequested by: INSURER, following independent reappraisal of 14 stones",cls:"hit",unl:"insurance"},
    "bus n9":{out:"N9 · 11 Oct · GPS stop/door log\n  23:05  Old Town Terminal · doors\n  23:22  Harbour · doors opened, 0 on / 0 off\n  23:31  Canal St (request) · doors opened 22 s\n  23:47  Bridge (no stop)\n  23:58  PMR Airport · doors"},
    "alibi fein":{out:"ALIBI · FEIN, Margot: home all night (doorbell camera)."},
    "alibi lasko":{out:"ALIBI · LASKO, Viktor: on the bus. See 'game lasko'."},
    "alibi petrov":{out:"ALIBI · PETROV, Ivo: driving N9."},
    "case pmpd261011031":{out:"PMPD-26-1011-031 · THEFT (HIGH VALUE) · Complainant REYES, Tomas · OPEN"}
  }
};
const E=c.ev;
E("incident","Reports","Theft report","Police report",null,()=>D("PMR AIRPORT POLICE POST","PMPD-26-1011-031",KV([["Filed","12 Oct 2026, 00:31, by complainant T. Reyes"],["Property","14 certified diamonds, insured 3.1m. Carried in a SecureCarry smart case (bluetooth lock, paired to one phone)."],["Route","N9 night bus, Old Town 23:05 → PMR Airport 23:58"],["Discovery","Airport security 00:20: pouch contains aquarium gravel and a compliments slip."]])+`<h4>Passenger count</h4><p>Eight tickets sold. Airport camera counts nine people stepping off.</p><h4>Information release</h4><p>The unticketed passenger's description is <b>WITHHELD</b>. CCTV quality does not allow gender or age to be determined. The complainant was told only that one extra passenger was on the bus.</p>`,"CONFIDENTIAL"));
E("scene","Scene","Bus camera still, 23:40","Photograph",null,()=>D("N9 INTERIOR CAMERA 2","11 OCT 23:40:12",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("tickets","Records","N9 ticket sales","Ticket manifest",null,()=>D("PORT MERIDIAN TRANSIT · N9","11 OCT 23:05",TB(["Seat","Passenger","Boarded"],[["3","A. Okoro (student)","Old Town"],["4","B. Okoro (student)","Old Town"],["7","N. Hale (nurse)","Old Town"],["8","R. & S. Mendes (couple, 8/11)","Old Town"],["10","T. Reyes","Old Town"],["13","V. Lasko","Old Town"],["15","D. Faro","Old Town"]])+`<p class="dim" style="margin-top:8px">8 tickets. No ticket sold for seat 9. No tickets sold at Harbour or Canal St.</p>`));
E("radio","Digital","Dispatch radio, 23:31","Audio recording",null,()=>audioDoc("TRANSIT DISPATCH · CHANNEL 3","11 OCT 23:31",[[0,"[23:31:02] Dispatch: N9, position check."],[1400,"[23:31:06] Ivo: N9 at Canal. One boarding, cash, I'll— scratch that. Nobody. Moving off."],[3200,"[23:31:14] Dispatch: Copy, N9."]]));
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 12 OCT","AIRPORT POLICE POST",`
<h4>Tomas Reyes · 00:40</h4><p><span class="q">A:</span> I always keep the case on my lap. That night I put it on the seat, I was so tired. She must have switched it while I dozed off near the bridge. I only noticed at airport security.</p><p><span class="q">Q:</span> The coded texts on your phone?</p><p><span class="q">A:</span> Gran's puzzles. She used to send me mirror puzzles.</p>
<h4>Ivo Petrov · 01:30</h4><p><span class="q">A:</span> Eight tickets, eight passengers. I count them. Canal St is a request stop. Nobody requested it. I don't look in the mirror much at night.</p>
<h4>Viktor Lasko · 02:10</h4><p><span class="q">A:</span> I was on my phone the whole ride. Some racing game. I've done my time. I don't do that any more. Someone in a red coat sat across from the guy with the case.</p>
<h4>Margot Fein · 09:00</h4><p><span class="q">A:</span> The insurer asked for the higher cover after the reappraisal. Tomas has done this run twenty times. I packed the pouch myself at nine.</p>`));
E("messages","Digital","Courier's phone: messages","Text messages",null,()=>D("HANDSET EXTRACTION · T. REYES","CONSENT EXTRACTION",`<div class="chat">
<div class="msg"><small>Sal Ombra Lending · 01 Oct</small>Friday 16th is the final date, Tomas. No more extensions.</div>
<div class="msg"><small>Gran (+356 7955 0119) · 09 Oct 21:12</small>${c.cipher.ct}</div>
<div class="msg me"><small>Tomas → Gran · 21:14</small>👍</div>
<div class="msg"><small>Margot · 11 Oct 21:30</small>Pouch is sealed in the case. Safe trip. Text me from Antwerp.</div></div>${C.done.cipher?`<p style="margin-top:10px"><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Decode in the lab")}`));
E("passport","Records","Passport: 'Elena Cruz'","Travel document",null,()=>D("BORDER SCAN · PM 418","12 OCT 00:05",`<p>Data page and machine-readable zone captured at boarding.</p>${passportHTML(false)}${LAB("mrz","Examine in the lab")}`));
E("lockapp","Digital","SecureCarry cloud log","System log","scene",()=>D("SECURECARRY · DEVICE SC-77-0412","11 OCT",TB(["Time","Event","Device"],[["21:52:10","LOCK","Fein & Daughters shop tablet (handover)"],["21:58:44","Pairing transferred","'Tomas iPhone'"],["23:41:07","UNLOCK (bluetooth, in range)","'Tomas iPhone'"],["23:43:52","LOCK","'Tomas iPhone'"]])+`<p class="dim" style="margin-top:8px">No failed attempts. No other paired devices.</p>`));
E("chat","Digital","Recovered deleted chat","Messages","statements",()=>D("HANDSET EXTRACTION · DELETED ITEMS","T. REYES",`<div class="chat"><div class="msg"><small>L · 10 Oct 22:01</small>Valletta is booked. Don't look at me on the bus.</div><div class="msg me"><small>Tomas → L · 22:03</small>You have the slip?</div><div class="msg"><small>L · 22:04</small>In the bag with the gravel.</div></div>`));
E("ivo2","Statements","Ivo Petrov, second interview","Interrogation transcript","cipher",()=>D("INTERVIEW · 12 OCT 14:00","IVO PETROV",`<p><span class="q">A:</span> All right. Canal St. Someone in a red coat flagged me. No ticket, paid twenty cash. I kept it. That's why I said eight. Hood up, didn't say a word, sat behind the driver's side, row three.</p>`));
E("mrzlab","Reports","Document examination","Lab report","mrz",()=>D("FORENSIC DOCUMENTS","FD-26-0388",`<p>Expiry date field fails its check digit. Data page shows a reprinted expiry. Document number X4K29R71 matches a passport issued to <b>Lucia REYES</b> (DOB 14 Jun 1991), reported lost 2 Mar 2025.</p>`));
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-0944",`<p>Partial latent from the gravel zip bag. Identified: <b>Lucia REYES</b> (visa biometrics, 2024). Others excluded.</p>`));
E("slip","Scene","Compliments slip","Physical evidence",null,()=>D("ITEM 2 · SLIP FROM POUCH","BAGGED 00:25",`<div style="display:grid;place-items:center;padding:16px 0"><div class="sticky" style="background:#f6f3ea;font-family:'Nothing You Could Do',cursive;font-size:28px">With compliments<br>— F&amp;D</div></div><p>Found under the gravel. Fein & Daughters say they don't use compliments slips.</p>${LAB("hand","Compare handwriting")}`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0170",`<p>The compliments slip was very probably written by <b>T. Reyes</b>.</p>`));
E("airportcctv","Records","Airport camera summary","CCTV","timeline",()=>D("PMR AIRPORT · CCTV SUMMARY","11–12 OCT",TB(["Time","Event"],[["23:58","Nine people step off N9"],["23:59","Red-coat passenger enters T2 alone"],["00:05","Checks in as 'Elena Cruz', PM 418"],["00:41","Passes security, hood down. Face partly visible: woman, 30s"],["01:15","PM 418 departs, gate 14"]])));
E("maltasim","Records","Malta SIM record","Phone record","term",()=>D("CARRIER RECORD · +356 7955 0119","PREPAID",KV([["Activated","09 Oct"],["11 Oct","Canal St 23:30, N9 route 23:31–23:58, airport 23:59–01:10"],["Contacts","Only one number: 052 555 0610 (T. Reyes)"]])));
E("cardrecord","Records","Card ****5521 holder","Financial record","term",()=>D("HARBOUR MUTUAL BANK","CARD ****5521",`<p>Holder: <b>REYES, Tomas</b>. Purchase 09 Oct: Meridian Air PM 418, passenger 'CRUZ, Elena'.</p>`));
E("gamelog","Records","Game session: V. Lasko","Online records","term",()=>D("TURBO LANES ONLINE","PLAYER vlasko85",`<p>Continuous session 23:18–23:57, 2,914 inputs, no idle gaps over 4 seconds.</p>`));
E("debts","Records","Judgments: T. Reyes","Financial record","term",()=>D("CIVIL JUDGMENTS REGISTER","REYES, Tomas",TB(["Date","Creditor","Amount"],[["May 2026","Sal Ombra Lending","122,000"],["Aug 2026","Sal Ombra Lending","92,000"]])+`<p style="margin-top:8px">Enforcement notice: final date Friday 16 Oct.</p>`));
E("insurance","Records","Insurance policy change","Insurance record","term",()=>D("PORT MUTUAL INSURANCE","FEIN & DAUGHTERS",`<p>Transit cover raised from 2.0m to 3.1m on 27 Sep. <b>Requested by the insurer</b> after an independent reappraisal.</p>`));
E("lucia","Records","Lucia Reyes: record","Citizen record","term",()=>D("CITIZEN RECORD","REYES, Lucia",KV([["DOB","14 Jun 1991"],["Relation","Sister of Tomas Reyes"],["Passport","X4K29R71, reported lost 2 Mar 2025, cancelled"]])));
})();
/* ---------------- CASE 4: LAST COURSE AT SAFFRON ---------------- */
(function(){
const c = defCase({
  id:"saffron", title:"Last Course at Saffron", code:"PMPD-26-1018-052", short:"CASE 052", crime:"Poisoning", genre:"Culinary noir", diff:4, cover:"dinner",
  blurb:"A feared restaurant critic collapses twelve minutes after the sorbet course. Everyone is looking at the kitchen. That's what someone wanted.",
  briefDate:"18 Oct 2026, 09:00", headline:"The critic didn't finish his menu",
  summary:[
    "Julian Marr, the Ledger's restaurant critic, collapsed at table 7 of Saffron at 21:52 during the seven-course tasting menu, and died in hospital before midnight. A plant toxin. The kitchen is closed, the press is calling it a food scandal, and the chef he once ruined is cooking for him.",
    "Five people had reasons to hate him: the chef, her sous-chef, his ex-wife pouring the wine, an influencer he mocked, and the editor sitting across from him. The obvious story is the sorbet. Be careful with obvious stories."],
  intro:["Victim: Julian Marr, 56. Restaurant critic, Port Meridian Ledger.","Collapsed at table 7, Saffron, 21:52. Dead by 23:40.","A plant toxin. The kitchen is closed and the press smells blood.","Everyone at that dinner had a grudge.","Table for you, Detective {name}."],
  screen:["PMPD RECORDS v4.2","> tox sorbet","NEGATIVE","> media moreau","STREAM 21:05–22:14 …"],
  CLEARS:{video:["ines","rafael","petra","kit"],kitchencctv:["ines","rafael"],toxlab:["ines","rafael","petra"],rafaelforage:["rafael"],printlab:["ines","rafael","petra","kit"],handlab:["ines","rafael","petra","kit"]},
  POINTS:{video:["simon"],toxlab:["simon"],printlab:["simon"],handlab:["simon"],companyrec:["simon"],payments:["simon"],julianemail:["simon"],notebook:["simon"],waiter2:["simon"],transcripts:["simon","ines"],note:["ines"],menu:["rafael","ines"],scene:["rafael","ines"],seating:["simon","petra"],hospital:["simon","petra"]}
});
c.SUS = {
  ines:{name:"Inès Duarte",init:"ID",short:"Chef-owner",age:45,role:"Chef and owner of Saffron",phone:"050 555 0711",car:"PM-7711",motive:"Marr's 2023 review closed her first restaurant. She cooked every plate he ate.",alibi:"On the pass all service.",rel:"Publicly called Marr 'a parasite' in 2023."},
  rafael:{name:"Rafael Okonkwo",init:"RO",short:"Sous-chef",age:31,role:"Sous-chef, Saffron; plated course 5",phone:"052 555 0912",car:"None",motive:"Argued with Marr at a food festival in August. Forages wild plants on weekends.",alibi:"On the pass all service.",rel:"Marr called his food 'pretentious' in print."},
  petra:{name:"Petra Lind",init:"PL",short:"Sommelier, ex-wife",age:38,role:"Sommelier, Saffron",phone:"055 555 0388",car:"PM-3880",motive:"Divorced Marr in 2019. Poured his wine that night.",alibi:"At the wine station all evening.",rel:"Married to Marr 2012–2019."},
  simon:{name:"Simon Achterberg",init:"SA",short:"Editor, his dinner guest",age:49,role:"Food editor, Port Meridian Ledger; Marr's dining companion",phone:"050 555 0461",car:"PM-4610",motive:"None obvious. Marr's editor and friend for eleven years.",alibi:"At the table with Marr all evening.",rel:"Edited Marr's column since 2015."},
  kit:{name:"Kit Moreau",init:"KM",short:"Food influencer",age:27,role:"Food influencer at table 9",phone:"056 555 0927",car:"None",motive:"Marr mocked her channel in his column last month.",alibi:"Says she was filming her own dinner all night.",rel:"No personal contact."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search table 7",d:"Find four points of interest on and around the table.",reward:["hospital"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"Someone knows how the poison was given.",reward:["waiter2"]},
  {id:"cipher",lab:"Cipher",t:"Decode Julian's last note",d:"His notebook uses a private notation.",reward:["julianemail"]},
  {id:"code",lab:"Toxicology",t:"Find the vehicle",d:"Which item on table 7 carried the toxin?",reward:["toxlab"]},
  {id:"prints",lab:"Fingerprints",t:"Match the cartridge print",d:"A partial was lifted from an empty ink cartridge under the table.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who wrote the note to the chef?",d:"An unsigned note offered Inès a good review, for a price.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the dinner",d:"Order the evening's events.",reward:["kitchencctv"],needs:"scene"},
  {id:"records",t:"Work the terminal",d:"Turn up three records that confirm or break an alibi or a motive.",reward:[]}
];
c.records = {ev:["video","companyrec","payments","rafaelforage"],n:3};
c.hints = {
  scene:["Look at what's on the table and what fell off it.","Check the tipped water glass, the sorbet, Julian's notebook, and something small on the floor by the right-hand chair (zoom in)."],
  statements:["What were staff and press told? Compare that with what each person says.","Everyone was told it was a food incident. Who talks about something other than the food?"],
  cipher:["Julian described how he reads a menu in one of his columns.","Mirror the alphabet, then shift back by the number of courses on the menu."],
  code:["The terminal can test items from the table for the toxin.","Run 'tox' on everything you can see on table 7. Only one comes back positive."],
  prints:["Rotate the latent and watch the core.","An arch latent. Only one candidate has an arch that lines up, at about +22°."],
  hand:["Compare the G, the k and the way the r joins the next letter.","Small, neat, slightly back-slanted hand. One exemplar only."],
  timeline:["Use the seating log, the hospital report, Kit's livestream and the menu times.","Julian left for the restroom before the video shows the glass moment. The sorbet came after both."],
  records:["Follow the money behind the 'consultancy', and check everyone's footage.","Try media moreau, company and bank searches on Achterberg Media, and permit okonkwo."]
};
c.react = {
  scene:"A pen cartridge under a critic's table. Odd thing to drop. The hospital report's in.",
  statements:"'Poured his water away.' Nobody told him about the water. The waiter remembered something too.",
  cipher:"Selling stars. Julian was about to blow the whistle on his own editor. His draft email is in the file.",
  code:"Water glass 7B. Not the sorbet. The kitchen's off the hook for the means.",
  prints:"Simon's print on the cartridge that carried it. That's the delivery.",
  hand:"The editor wrote the shakedown note himself.",
  timeline:"Kitchen CCTV is in. The kitchen never left the pass.",
  records:"Money, footage, permits. One person's story is falling apart."
};
c.unlockLines = {video:"Kit's stream caught more than her food.",companyrec:"A consultancy with one director.",payments:"Six restaurants paid for good reviews.",rafaelforage:"His herbs are clean."};

c.cipher = {plain:"S.A. SELLS STARS. SIX PLACES PAY ACHTERBERG MEDIA. TELL THE OWNER MONDAY.", title:"Julian's notebook", intro:"Julian wrote his last note in a private notation. One tool won't be enough.", success:"Simon Achterberg was selling good reviews through his own company, and Julian was going to the Ledger's owner on Monday."};
c.cipher.ct = atbash(shiftTxt(c.cipher.plain,7));

c.scene = {
  title:"Table 7, 22:20", intro:"Taken after the ambulance left. Find four points of interest. One is on the floor and small.",
  hots:[
    {id:"glasses",x:612,y:138,r:30,t:"Julian's water glass (7B) tipped over, the spill still wet. Simon's glass (7A) is upright and nearly full."},
    {id:"sorbet",x:540,y:250,r:28,t:"Course 5, the sorbet: half eaten. This is what the papers are blaming."},
    {id:"notebook",x:486,y:368,r:34,t:"Julian's notebook, open. The last entry isn't about food, and it isn't in plain English."},
    {id:"cartridge",x:697,y:446,r:10,zoom:2,t:"An empty fountain-pen ink cartridge under the 7B chair. No pen at the table."}],
  draw(){
    let floor=""; for(let i=0;i<16;i++) floor+=`<rect x="${i*52}" y="0" width="50" height="500" fill="${i%2?'#211814':'#1c1411'}"/>`;
    return `${floor}<ellipse cx="404" cy="262" rx="336" ry="206" fill="#0d0907" opacity=".5"/><ellipse cx="400" cy="250" rx="330" ry="200" fill="#f1ede4"/><ellipse cx="400" cy="250" rx="318" ry="190" fill="none" stroke="#e2dccf" stroke-width="2"/>
    <circle cx="260" cy="250" r="62" fill="#fbfaf6" stroke="#ddd6c8" stroke-width="2"/><circle cx="260" cy="250" r="40" fill="none" stroke="#e8e2d6"/><text x="260" y="330" font-family="IBM Plex Mono, monospace" font-size="12" fill="#8a8274" text-anchor="middle">7A</text>
    <circle cx="540" cy="250" r="62" fill="#fbfaf6" stroke="#ddd6c8" stroke-width="2"/><text x="540" y="330" font-family="IBM Plex Mono, monospace" font-size="12" fill="#8a8274" text-anchor="middle">7B</text>
    <circle cx="540" cy="250" r="27" fill="#e9e4f2" stroke="#cfc8dc"/><path d="M526 246 q14 -14 28 0 q-6 10 -14 8 q-8 2 -14 -8z" fill="#f0b8c8"/><rect x="560" y="268" width="38" height="4" rx="2" fill="#c9c4bb" transform="rotate(25 560 268)"/>
    <circle cx="300" cy="150" r="18" fill="#cfe3ee" opacity=".7" stroke="#9fbccc"/><circle cx="300" cy="150" r="13" fill="#b8d6e6" opacity=".7"/>
    <g transform="rotate(-35 612 138)"><rect x="590" y="126" width="46" height="24" rx="10" fill="#cfe3ee" opacity=".75" stroke="#9fbccc"/></g><ellipse cx="640" cy="160" rx="34" ry="14" fill="#b8d6e6" opacity=".55"/>
    <circle cx="335" cy="112" r="14" fill="#f5f1e6" stroke="#cfc6b2"/><circle cx="335" cy="112" r="9" fill="#e9dca0" opacity=".7"/><circle cx="572" cy="102" r="14" fill="#f5f1e6" stroke="#cfc6b2"/>
    <circle cx="400" cy="250" r="9" fill="#e9d9b4"/><circle cx="400" cy="250" r="3" fill="#f2b33f"/>
    <g transform="rotate(-8 486 368)"><rect x="430" y="334" width="112" height="70" fill="#f6f2e8" stroke="#bdb39e"/><line x1="486" y1="334" x2="486" y2="404" stroke="#bdb39e"/>${[0,1,2,3,4].map(i=>`<rect x="${438}" y="${344+i*11}" width="${36-i*4}" height="2" fill="#6b6455"/><rect x="${494}" y="${344+i*11}" width="${40-i*3}" height="2" fill="#2b4a7a"/>`).join("")}</g>
    <rect x="200" y="380" width="70" height="40" rx="6" fill="#e9e4da" transform="rotate(12 235 400)"/>
    <rect x="690" y="440" width="15" height="5" rx="2" fill="#2b4a7a"/><rect x="703" y="441" width="3" height="3" fill="#9aa6b6"/>
    <rect x="660" y="400" width="10" height="70" fill="#3a2a20"/><rect x="740" y="400" width="10" height="70" fill="#3a2a20"/>`;
  }
};
c.statements = {
  intro:"Staff and press were told this was a suspected food incident. Read what each person said. One of them knows how the poison was really given. Click the sentence.",
  blocks:[
    {who:"Simon Achterberg",s:[["s1","We'd worked together for eleven years."],["s2","I keep thinking, if only I'd poured his water away when he went to the restroom."],["s3","The kitchen must have made a mistake with the sorbet."]]},
    {who:"Inès Duarte",s:[["i1","I cooked every plate myself."],["i2","That review closed my first restaurant. I didn't forget."],["i3","Someone sent me a note asking for money for good reviews. I didn't pay."]]},
    {who:"Rafael Okonkwo",s:[["r1","I forage on weekends. Sea herbs, mushrooms. Nothing dangerous."],["r2","Yes, we argued at the festival."],["r3","I was on the pass the whole service."]]},
    {who:"Petra Lind",s:[["p1","I poured him a white with the fish. He sent it back."],["p2","We divorced in 2019. It was civil."],["p3","He drank water after that."]]},
    {who:"Kit Moreau",s:[["k1","I stream every dinner. My phone was up all night."],["k2","He called my channel food for people who can't taste."],["k3","I didn't go near his table."]]}],
  correct:"s2",
  fb:{s1:"Background.",s3:"That's what staff were told. He's repeating the official line.",i1:"An admission of access, not knowledge.",i2:"Motive, openly admitted.",i3:"Interesting. Keep that note in mind.",r1:"Suspicious, but not knowledge of the method.",r2:"Motive.",r3:"Testable.",p1:"Testable against the wine.",p2:"Background.",p3:"She saw him drink water. Anyone at the bar could have.",k1:"Her footage could be useful.",k2:"Motive.",k3:"Testable on her own video."},
  success:"Everyone was told it was the food. Simon talks about pouring Julian's water away while he was in the restroom. He knows the water was the vehicle, and he knows when."
};
c.codeQ = {
  title:"Toxicology", intro:"The lab has samples from every item on table 7. Use the terminal ('tox <item>') to test them, then name the item that carried the toxin.",
  q:"Which item carried the toxin?", placeholder:"e.g. bread", accept:["water","waterglass","glass","7b","waterglass7b","glass7b","juliansglass","juliansglass7b","julianswaterglass","julianswater"],
  success:"Julian's water glass, seat 7B. The sorbet, wine and bread are clean."
};
c.prints = {
  title:"Latent print, ink cartridge", latentLabel:"Lifted latent (cartridge barrel)", cands:["simon","rafael","petra","ines"], culprit:"simon", rot:22,
  P:{simon:{type:"arch",cx:100,cy:124,a:40,b:44,w:2.9,ph:1.7,k:.6,seed:101},rafael:{type:"loop",cx:102,cy:112,w:2.7,ph:.8,k:.61,seed:102},petra:{type:"arch",cx:96,cy:132,a:34,b:56,w:3.2,ph:2.6,k:.58,seed:103},ines:{type:"whorl",cx:100,cy:118,sx:1.35,a:3.3,w:2.5,ph:1.9,k:.6,seed:104}},
  fails:{rafael:"A loop can't produce this flat arch.",petra:"An arch, but the ridges cross at the summit at every rotation.",ines:"A whorl has a core; this latent doesn't."},
  success:"Identified: Simon Achterberg, right index."
};
c.hand = {
  intro:"An unsigned note was found in Inès's office bin. Compare it with exemplars from everyone at the dinner.",
  note:"Good reviews<br>aren't free.<br>Ask about the<br>consultancy.", noteFont:"'Homemade Apple', cursive", noteSize:17,
  exemplar:"Good evening — booking confirmed, table 7, Saffron",
  cands:[{k:"simon",f:"'Homemade Apple', cursive",sz:15},{k:"ines",f:"Caveat, cursive",sz:24},{k:"rafael",f:"'Reenie Beanie', cursive",sz:28},{k:"kit",f:"'Nothing You Could Do', cursive",sz:18}],
  culprit:"simon", success:"Match: Simon Achterberg."
};
c.timeline = {
  intro:"Order the dinner using the seating log, menu, hospital report and terminal records. Times are hidden until you get it right.",
  ev:[{id:"a",t:"Marr and Achterberg are seated at table 7",tm:"20:05"},{id:"b",t:"Petra pours the white; Marr sends it back",tm:"20:58"},{id:"c",t:"Kit Moreau starts her livestream",tm:"21:05"},{id:"d",t:"Marr leaves for the restroom",tm:"21:28"},{id:"e",t:"Achterberg reaches across to the 7B water glass",tm:"21:31"},{id:"f",t:"Marr returns to the table",tm:"21:33"},{id:"g",t:"Course 5, the sorbet, is served",tm:"21:40"},{id:"h",t:"Marr collapses",tm:"21:52"}],
  success:"The glass was touched while Julian was away, nine minutes before the sorbet reached the table."
};
c.verdict = {
  culprit:"simon", methodLabel:"How the poison was given", method:"water", methodMiss:"That doesn't fit the toxicology results.",
  methods:{water:"Added to his water glass while he was away from the table",sorbet:"Mixed into the sorbet in the kitchen",wine:"Poured into his wine",bread:"Baked into the bread"},
  motive:"simon", motives:{simon:"Stop Julian exposing his paid-review scheme",ines:"Revenge for the review that closed her first restaurant",rafael:"A grudge from the festival argument",petra:"Bitterness over the divorce",kit:"Revenge for public mockery"},
  pillars:[
    {ev:["julianemail","notebook","companyrec","payments"],pts:3,hit:"Motive: Julian was about to expose the accused's paid-review scheme.",miss:"No motive shown for the accused."},
    {ev:["printlab","toxlab"],pts:3,hit:"Means: the toxin was in the water glass, and the cartridge that carried it bears his print.",miss:"Nothing ties the accused to the toxin."},
    {ev:["video","waiter2"],pts:3,hit:"Opportunity: he was filmed at Julian's glass while Julian was away.",miss:"Nothing shows the accused had a moment alone with the glass."}],
  bonus:[{ev:"transcripts",pts:1,hit:"He mentioned the water before anyone told him."},{ev:"handlab",pts:1,hit:"He wrote the shakedown note to the chef."}],
  defence:[
    {claim:"Mr Marr collapsed twelve minutes after the kitchen served the sorbet.",rebut:["toxlab","hospital"],pts:3},
    {claim:"The sous-chef forages wild plants and had a public row with the victim.",rebut:["rafaelforage","kitchencctv"],pts:3}],
  questions:[
    {q:"When was the toxin added?",o:["While the sorbet was plated","While Julian was in the restroom, 21:28–21:33","Before Julian arrived","When the wine was decanted"],a:1},
    {q:"How was the toxin carried into the restaurant?",o:["In the sous-chef's foraged herbs","In a wine bottle","In an empty fountain-pen cartridge","In the influencer's bag"],a:2},
    {q:"Who received the restaurants' 'consultancy' payments?",o:["The Ledger","Achterberg Media Ltd","Saffron","Julian Marr"],a:1}],
  solution:"Simon Achterberg had been selling good reviews: six restaurants paid his one-man company, Achterberg Media, for 'consultancy'. Inès refused. Julian found the invoices and wrote in his notebook that he would tell the Ledger's owner on Monday. Simon brought the toxin to dinner in a fountain-pen cartridge. When Julian went to the restroom at 21:28 he emptied it into Julian's water glass, and dropped the cartridge under the chair. The sorbet arrived at 21:40 and took the blame. Kit's livestream caught his hand at the glass at 21:31, and in his interview he regretted not pouring away the water, which nobody had told him about."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  tox <item>        Lab toxicology on items from table 7
  media <name>      Seized phone footage and livestreams
  company <name>    Companies register
  bank <account>    Bank account activity (warrant on file)
  permit <name>     Licences and permits
  cctv <area>       Saffron cameras (kitchen, door)
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  clear             Clear the screen`,
  quick:["help","person achterberg","tox sorbet","cctv door","company saffron"],
  alias:{ines:"duarte",duarte:"duarte",rafael:"okonkwo",okonkwo:"okonkwo",petra:"lind",lind:"lind",simon:"achterberg",achterberg:"achterberg",kit:"moreau",moreau:"moreau",julian:"marr",marr:"marr"},
  miss:{person:"No citizen record matches.",tox:"No sample with that name. Items logged from table 7: sorbet, water, wine, bread, butter, oyster, coffee.",media:"No footage seized from that person.",company:"No company by that name.",bank:"No account by that name.",permit:"No licences on file.",cctv:"No camera for that area. Saffron has: kitchen, door.",alibi:"No alibi on file.",case:"No such case."},
  cmds:{
    "person duarte":{out:"DUARTE, Inès\nDOB 1981-02-08 · Chef-owner, Saffron (opened 2025)\nPrevious: Casa Duarte, closed Dec 2023\nPriors: none"},
    "person okonkwo":{out:"OKONKWO, Rafael\nDOB 1995-06-30 · Sous-chef, Saffron\nPermits: foraging licence (coastal) 2026\nPriors: none"},
    "person lind":{out:"LIND, Petra\nDOB 1988-12-12 · Sommelier, Saffron\nMarried MARR, Julian 2012–2019\nPriors: none"},
    "person achterberg":{out:"ACHTERBERG, Simon\nDOB 1977-04-04 · Food editor, Port Meridian Ledger\nDirector: Achterberg Media Ltd (since 2024)\nPriors: none"},
    "person moreau":{out:"MOREAU, Kit\nDOB 1999-01-19 · Content creator (@kitcooks, 410k followers)\nPriors: none"},
    "person marr":{out:"MARR, Julian (DECEASED 17 Oct)\nDOB 1970-07-07 · Restaurant critic, Port Meridian Ledger"},
    "tox sorbet":{out:"TOX · ITEM 3 · sorbet remnants (7B): NEGATIVE"},
    "tox water":{out:"TOX · ITEM 6 · water glass 7B residue: POSITIVE (plant alkaloid)\nTOX · ITEM 7 · water glass 7A: NEGATIVE\nTOX · ITEM 8 · table water bottle: NEGATIVE",cls:"hit"},
    "tox wine":{out:"TOX · ITEM 4 · white wine glass 7B: NEGATIVE\nTOX · ITEM 5 · bottle (Petra's station): NEGATIVE"},
    "tox bread":{out:"TOX · ITEM 2 · bread basket: NEGATIVE"},
    "tox butter":{out:"TOX · ITEM 2b · butter: NEGATIVE"},
    "tox oyster":{out:"TOX · ITEM 1 · oyster shells: NEGATIVE"},
    "tox coffee":{out:"No coffee served to table 7."},
    "tox cartridge":{out:"TOX · ITEM 9 · ink cartridge (floor, 7B): POSITIVE, trace residue inside. No ink.",cls:"hit"},
    "media moreau":{out:"@kitcooks LIVESTREAM · 17 Oct 21:05–22:14 (seized)\n21:28:40  background: man at table 7 (seat 7B) leaves toward restrooms\n21:31:12  background: man at 7A reaches across, holds 7B water glass ~6 s\n21:33:05  7B returns\n21:52:30  7B collapses",cls:"hit",unl:"video"},
    "company achterbergmedia":{out:"ACHTERBERG MEDIA LTD · reg. 2024\nDirector and sole shareholder: ACHTERBERG, Simon\nActivity: 'restaurant consultancy'\nEmployees: 0",cls:"hit",unl:"companyrec"},
    "company saffron":{out:"SAFFRON RESTAURANT LTD · Director DUARTE, Inès · no payments to Achterberg Media"},
    "bank achterbergmedia":{out:"ACHTERBERG MEDIA LTD · account ****0461\nIncoming 2025–26: 6 restaurants, 31 payments, total 142,000\n  Each restaurant reviewed favourably by J. Marr within 60 days of first payment\nNo payments from Saffron",cls:"hit",unl:"payments"},
    "permit okonkwo":{out:"FORAGING LICENCE · OKONKWO, Rafael\nLast 3 collection logs: samphire, sea beet, chanterelle\nLab test of seized kitchen herb stock: NEGATIVE for alkaloids",cls:"hit",unl:"rafaelforage"},
    "cctv kitchen":{out:"Kitchen camera footage is held by the lab. See exhibits."},
    "cctv door":{out:"SAFFRON · DOOR CAM · 17 Oct\n19:58 Marr & Achterberg arrive\n21:28 no one leaves (restrooms are inside)\n22:01 paramedics arrive"},
    "alibi duarte":{out:"ALIBI · DUARTE, Inès: on the pass (see kitchen CCTV)."},
    "alibi okonkwo":{out:"ALIBI · OKONKWO, Rafael: on the pass (see kitchen CCTV)."},
    "alibi lind":{out:"ALIBI · LIND, Petra: wine station, visible on the livestream background."},
    "alibi achterberg":{out:"ALIBI · ACHTERBERG, Simon: at table 7 all evening. (Present at the scene.)"},
    "alibi moreau":{out:"ALIBI · MOREAU, Kit: filming her own table all evening."},
    "case pmpd261018052":{out:"PMPD-26-1018-052 · SUSPICIOUS DEATH → HOMICIDE · MARR, Julian · OPEN"}
  }
};
const E=c.ev;
E("incident","Reports","Incident report","Police report",null,()=>D("PORT MERIDIAN POLICE DEPT.","PMPD-26-1018-052",KV([["Filed","17 Oct 2026, 23:55"],["Location","Saffron restaurant, Harbourside. Table 7."],["Victim","Julian MARR, 56. Restaurant critic."],["Event","Collapsed 21:52 during course 5 of 7. Died at Harbour General, 23:40."],["Cause","Suspected plant toxin. Source under investigation."]])+`<h4>Information release</h4><p>Staff and press have been told this is a <b>suspected food-related poisoning</b> and the kitchen is under review. The <b>actual source of the toxin is WITHHELD</b>.</p>`,"CONFIDENTIAL"));
E("scene","Scene","Table 7 photograph","Photograph",null,()=>D("SCENE PHOTO 02 / SAFFRON, TABLE 7","17 OCT 22:20",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("menu","Scene","Tasting menu, 17 Oct","Menu",null,()=>D("SAFFRON · TASTING MENU","THURSDAY 17 OCTOBER",`<ol style="margin:0;padding-left:20px;font-size:16px;line-height:1.9"><li>Oyster, finger lime</li><li>Bread, cultured butter</li><li>Red mullet, saffron beurre blanc</li><li>Lamb, black garlic</li><li>Blood orange & hibiscus sorbet</li><li>Aged comté, honeycomb</li><li>Burnt fig, brown butter</li></ol>`));
E("seating","Records","Seating & service log","Restaurant log",null,()=>D("SAFFRON · FRONT OF HOUSE LOG","17 OCT",TB(["Time","Table 7"],[["20:05","Seated. 7A Achterberg, 7B Marr"],["20:58","White wine poured; 7B returned it. Water only after."],["21:28","7B to restroom"],["21:33","7B back"],["21:40","Course 5 served"],["21:52","7B collapses. Ambulance called 21:53"]])));
E("article","Press","Marr's column: How I read a menu","Newspaper column",null,()=>`<div class="doc news"><div class="mast">The Port Meridian Ledger</div><p class="dim" style="text-align:center;font-family:var(--mono);font-size:12px">THE MARR REPORT · 2 MARCH 2026</p><h5>How I read a menu</h5><div class="cols"><p>People ask how I take notes without the kitchen noticing. I keep my own notation. I read every menu in the mirror first, then I count the courses before I taste a thing. Everything I write follows those two habits.</p><p>A menu tells you what a chef wants you to think. The plate tells you what they actually did.</p></div></div>`);
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 18 OCT","INTERVIEW ROOM 1",c.statements.blocks.map(b=>`<h4>${b.who}</h4><p>${b.s.map(x=>x[1]).join(" ")}</p>`).join("")));
E("notebook","Digital","Julian's notebook, last page","Coded message",null,()=>D("ITEM 5 · NOTEBOOK","LAST ENTRY, 17 OCT",`<p style="font-size:18px;letter-spacing:.08em;word-break:break-word">${c.cipher.ct}</p>${C.done.cipher?`<p><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Work on it in the lab")}`));
E("note","Scene","Unsigned note to the chef","Physical evidence",null,()=>D("ITEM 11 · NOTE, OFFICE BIN","SAFFRON",`<div style="display:grid;place-items:center;padding:16px 0"><div class="sticky" style="background:#f6f3ea;font-family:'Homemade Apple',cursive;font-size:17px">${c.hand.note}</div></div><p>Inès says it was slipped under the door in September. She didn't pay.</p>${LAB("hand","Compare handwriting")}`));
E("hospital","Reports","Hospital report","Medical report","scene",()=>D("HARBOUR GENERAL · EMERGENCY","17 OCT",KV([["Toxin","Plant alkaloid, fast-acting"],["Onset","Symptoms typically 15–25 minutes after ingestion"],["Implication","Ingested roughly 21:27–21:37, before course 5 was served at 21:40"]])));
E("waiter2","Statements","Waiter, second statement","Witness statement","statements",()=>D("STATEMENT · 18 OCT","WAITER D. FONSECA",`<p>"When Mr Marr went to the restroom, Mr Achterberg picked up Mr Marr's water glass and held it on his side for a moment. I thought he was moving it out of the way. Then he put it back."</p>`));
E("julianemail","Digital","Julian's unsent email","Email","cipher",()=>`<div class="doc mail"><span class="stamp">DRAFT</span><div class="mh">FROM: j.marr@ledger.pm · TO: owner@ledger.pm<br>SUBJECT: Monday, 9am. Please.<br>LAST EDITED: 16 Oct 23:12 · NOT SENT</div><p>I've found invoices from a company called Achterberg Media to six restaurants I reviewed well. I didn't know. Simon chose every one of those restaurants for me. I need to see you before the next column runs.</p></div>`);
E("toxlab","Reports","Toxicology summary","Lab report","code",()=>D("FORENSIC TOXICOLOGY","TX-26-0517",TB(["Item","Result"],[["Water glass 7B","<b>POSITIVE</b>"],["Ink cartridge (floor)","<b>POSITIVE</b> (trace)"],["Sorbet","Negative"],["Wine","Negative"],["Bread, butter, oyster","Negative"],["Water glass 7A","Negative"]])));
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-1003",`<p>Partial latent on the ink cartridge barrel. Identified: <b>S. Achterberg</b>. Others excluded.</p>`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0188",`<p>The note to the chef was very probably written by <b>S. Achterberg</b>.</p>`));
E("kitchencctv","Records","Kitchen CCTV summary","CCTV","timeline",()=>D("SAFFRON · KITCHEN CAMERA","17 OCT 21:00–22:00",`<p>Inès Duarte and Rafael Okonkwo are on the pass continuously from 21:00 to 21:55. Course 5 for table 7 was plated from the same batch as tables 3, 5 and 9. No one leaves the kitchen.</p>`));
E("video","Records","Kit Moreau's livestream","Video","term",()=>D("SEIZED LIVESTREAM · @kitcooks","17 OCT 21:05–22:14",TB(["Time","Background, table 7"],[["21:28:40","7B leaves toward restrooms"],["21:31:12","7A reaches across, holds 7B's water glass about six seconds"],["21:33:05","7B returns"],["21:52:30","7B collapses"]])));
E("companyrec","Records","Achterberg Media Ltd","Company record","term",()=>D("COMPANIES REGISTER","ACHTERBERG MEDIA LTD",`<p>Registered 2024. Sole director and shareholder: <b>Simon Achterberg</b>. Activity: 'restaurant consultancy'. No employees.</p>`));
E("payments","Records","Achterberg Media payments","Financial record","term",()=>D("BANK RECORDS · ****0461","2025–26",`<p>31 payments from 6 restaurants, total 142,000. Each restaurant got a favourable Marr review within 60 days of its first payment. No payments from Saffron.</p>`));
E("rafaelforage","Records","Foraging licence & herb test","Licence record","term",()=>D("FORAGING LICENCE · R. OKONKWO","2026",`<p>Recent collections: samphire, sea beet, chanterelle. Lab test of Saffron's herb stock: negative for alkaloids.</p>`));
})();

/* ---------------- CASE 5: THE LOADING BAY ---------------- */
(function(){
const c = defCase({
  id:"bay", title:"The Loading Bay", code:"PMPD-26-1016-060", short:"CASE 060", crime:"Homicide", genre:"Conspiracy", diff:5, cover:"bay",
  blurb:"A cabling contractor vanished from Meridian Tower a week ago. Today a fire-stop panel in the basement riser was opened. Someone had sealed him in.",
  briefDate:"16 Oct 2026, 14:00", headline:"Owen Pike never left the building",
  summary:[
    "Owen Pike, a cabling contractor re-wiring Meridian Tower's risers, was last seen at the loading bay on 9 October. The guard log says he left at 22:40. Today maintenance opened a fire-stop panel in the B3 riser and found him.",
    "Meridian Tower is the building where Halcyon's vault keys were stolen. Pike was working in its cable risers. His business partner took his van, his wife waited two days to report him missing, the guard signed him out, and the man who bought the stolen keys has a perfect alibi. Someone in this building is very good at paperwork."],
  intro:["Victim: Owen Pike, 31. Cabling contractor.","Last seen at the Meridian Tower loading bay, 9 October.","The guard log says he left at 22:40. He was behind a sealed panel in B3.","Meridian Tower again. Halcyon's stolen keys went somewhere.","Last door, Detective {name}. Mind the paperwork."],
  screen:["PMPD RECORDS v4.2","> key mfb3","MASTER KEY MF-B3","> stores b3","SEALANT SIGNED OUT …"],
  CLEARS:{flightvale:["gideon"],devalibi:["dev"],leahalibi:["leah"],sara2:["sara"],printlab:["gideon","dev","leah","sara"],handlab:["gideon","dev","leah","sara"]},
  POINTS:{bankferri:["marco"],keylog:["marco"],storeslog:["marco"],printlab:["marco"],handlab:["marco"],sara2:["marco"],priyastmt:["gideon","marco"],phonedump:["marco","gideon"],vanplate:["dev"],leahtexts:["leah"],article:["gideon"],transcripts:["marco","leah"],guardlog:["sara"],baycctv:["marco"]}
});
c.SUS = {
  marco:{name:"Marco Ferri",init:"MF",short:"Building manager",age:50,role:"Building manager, Meridian Tower",phone:"050 555 0606",car:"PM-6060",motive:"None obvious. Holds the master riser keys.",alibi:"Says he went home at 22:00 on 9 Oct.",rel:"Signed Pike's contractor pass."},
  gideon:{name:"Gideon Vale",init:"GV",short:"Security consultant",age:46,role:"Director, Vale Risk Partners; audited Meridian Tower's security twice",phone:"055 555 0123",car:"PM-0123",motive:"Named by Priya Raman as the buyer of Halcyon's stolen vault keys.",alibi:"Says he was in Singapore 8–12 Oct.",rel:"No known contact with Pike."},
  dev:{name:"Dev Anand",init:"DA",short:"Pike's business partner",age:35,role:"Co-owner, Pike & Anand Cabling",phone:"052 555 0350",car:"PM-3505",motive:"Owed Pike money. Took Pike's van on 11 Oct and sold some of his tools.",alibi:"Says he was at the cricket club late match on 9 Oct.",rel:"Business partners since 2021."},
  leah:{name:"Leah Pike",init:"LP",short:"Wife",age:29,role:"Owen's wife; primary-school teacher",phone:"056 555 0711",car:"PM-7110",motive:"Waited two days to report him missing. They'd argued that week.",alibi:"Says she was at home.",rel:"Married 2021."},
  sara:{name:"Sara Kwon",init:"SK",short:"Night guard",age:33,role:"Night guard, Meridian Tower loading bay",phone:"054 555 0233",car:"None",motive:"Her guard log says Pike left at 22:40.",alibi:"At her desk all night.",rel:"Knew Pike by sight."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search the B3 riser",d:"Find four points of interest in the riser room.",reward:["autopsy"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"Someone knows exactly where Owen was found.",reward:["sara2"]},
  {id:"code",lab:"Phone PIN",t:"Unlock Owen's phone",d:"His phone was found with him. Work out the PIN.",reward:["phonedump"]},
  {id:"cipher",lab:"Cipher",t:"Decode Owen's last note",d:"His notes app holds one enciphered line.",reward:["priyastmt"],needs:"code"},
  {id:"prints",lab:"Fingerprints",t:"Match the print on the panel",d:"A partial was lifted from the fresh sealant on the fire-stop panel.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who corrected the guard log?",d:"Someone added 'Pike OUT 22:40' to the log by hand.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct 9 October",d:"Order the night's events.",reward:["baycctv"],needs:"scene"},
  {id:"records",t:"Work the terminal",d:"Turn up four records that confirm or break an alibi or a motive.",reward:[]}
];
c.records = {ev:["keylog","storeslog","bankferri","flightvale","devalibi","leahalibi","vanplate"],n:4};
c.hints = {
  scene:["Walls, cable trays, floor. Something doesn't belong, something is too new, and something was dropped.","The fire-stop panel's sealant, a small box on the cable tray, Owen's tool bag, and a key tag on the floor near the shaft (zoom in)."],
  statements:["Read what the police released about where Owen was found.","Only 'a service area of B3' was released. Who knows about the panel?"],
  code:["Someone close to Owen knows how he chose his PIN. Interview them.","Leah says it's the day they met, backwards. Check her interview for the date."],
  cipher:["Owen used one word for everything on this job.","It's a keyword cipher. The key is the job's code name on the job ticket."],
  prints:["Rotate the latent and watch the core and delta.","A loop latent. Only one candidate lines up, at about −18°."],
  hand:["Compare the correction with each exemplar, especially the numbers and initials.","The 'MF' initials and the crossed 7. Only one hand does both."],
  timeline:["The van's plate, the master key log, the stores log and Owen's phone carry the times.","Owen photographed the device after the riser was opened, and before the sealant left the stores."],
  records:["Test every alibi, and follow the master key, the stores and the money.","Try key mfb3, stores b3, bank ferri, flight vale, alibi anand, alibi leah and plate PM-7140."]
};
c.react = {
  scene:"A network tap in a riser, a fresh seal, and a master key tag. The autopsy is in.",
  statements:"'Behind that panel.' We never released that. Sara's asked to talk to us again.",
  code:"We're in. His last photo, his last message, and a coded note.",
  cipher:"'Ferri says leave it. He is paid.' And Priya Raman has finally named names.",
  prints:"Marco Ferri's print in the fresh sealant.",
  hand:"Ferri wrote the correction himself.",
  timeline:"The loading bay camera has him leaving the corridor after midnight.",
  records:"The key, the stores, the money. Paperwork cuts both ways."
};
c.unlockLines = {keylog:"Master key MF-B3. Twice that night.",storeslog:"Sealant out of stores at 23:10.",bankferri:"Monthly payments from Vale Risk Partners.",flightvale:"Vale was in Singapore. He didn't do this with his own hands.",devalibi:"Dev was at the cricket club till half one.",leahalibi:"Leah was on a call with her sister.",vanplate:"Owen's van never left the bay that night."};

c.cipher = {plain:"TAP IN RISER B3 IS NOT OURS. FERRI SAYS LEAVE IT. HE IS PAID.", title:"Owen's notes app", intro:"One line in Owen's notes app, written 9 Oct 22:56. Decode it.", success:"Owen found a network tap in the riser that wasn't part of his job. The building manager told him to leave it, and was being paid."};
c.cipher.ct = vig(c.cipher.plain,"LANTERN",1);

c.scene = {
  title:"B3 riser, 16 Oct 11:30", intro:"The riser room after the panel was opened. Find four points of interest. One is small, on the floor.",
  hots:[
    {id:"panel",x:200,y:275,r:42,t:"The fire-stop panel. The sealant bead is bright orange and fresh; the rest of the riser's seals are grey with age."},
    {id:"tap",x:317,y:136,r:18,t:"A small black box clipped onto the cable tray, LED still blinking, patched into Halcyon's trunk fibre. Not on any drawing."},
    {id:"bag",x:440,y:412,r:28,t:"Owen's tool bag, zipped. His tablet and van keys are still inside. He didn't leave on his own."},
    {id:"keytag",x:642,y:456,r:10,zoom:2,t:"A brass key tag stamped MF-B3 on the floor by the shaft. The ring is bent open."}],
  draw(){
    let cables=""; const cols=["#3a6ea5","#c9a227","#a83232","#2f8a5a","#7a4fa0","#cfcfcf"]; for(let t=0;t<2;t++){ const y=86+t*50; cables+=`<rect x="0" y="${y}" width="560" height="10" fill="#4a4f55"/>`; for(let i=0;i<6;i++) cables+=`<path d="M0 ${y-3-i*1.6} Q280 ${y+2-i*1.6} 560 ${y-3-i*1.6}" stroke="${cols[i]}" stroke-width="2.2" fill="none"/>`; }
    let rungs=""; for(let i=0;i<12;i++) rungs+=`<rect x="600" y="${60+i*26}" width="60" height="4" fill="#5a5f66"/>`;
    return `<rect width="800" height="500" fill="#24272b"/>${Array.from({length:10},(_,i)=>`<rect x="0" y="${i*40}" width="800" height="1" fill="#2c3035"/>`).join("")}
    <rect y="380" width="800" height="120" fill="#1c1e21"/><rect y="380" width="800" height="4" fill="#33373c"/>${cables}
    <rect x="300" y="128" width="34" height="16" rx="2" fill="#0d0e10"/><circle class="blink" cx="328" cy="136" r="2.5" fill="#4bd37a"/><path d="M300 136 L280 136" stroke="#e2b13f" stroke-width="2"/>
    <rect x="560" y="40" width="140" height="340" fill="#0c0d0f" stroke="#3a3f45" stroke-width="3"/>${rungs}<text x="630" y="30" fill="#8a9098" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle">RISER SHAFT B3</text>
    <rect x="120" y="200" width="160" height="150" fill="#8a8f94" stroke="#d4502a" stroke-width="6"/><rect x="132" y="212" width="136" height="126" fill="#7c8186"/><text x="200" y="280" fill="#3a3f45" font-family="IBM Plex Mono, monospace" font-size="10" text-anchor="middle">FIRE STOP FS-B3-04</text>
    <rect x="40" y="220" width="54" height="90" fill="#7c8186" stroke="#9a9a92" stroke-width="5"/>
    <polygon points="404,394 476,394 470,430 410,430" fill="#2e4a36"/><rect x="408" y="390" width="64" height="6" fill="#1d3024"/><path d="M412 394 L468 394" stroke="#c9c9c9" stroke-width="1.5" stroke-dasharray="3 2"/>
    <circle cx="642" cy="456" r="6" fill="none" stroke="#c9a24a" stroke-width="2"/><rect x="646" y="452" width="14" height="8" rx="2" fill="#c9a24a"/>
    <text x="760" y="470" fill="#e2b13f" font-family="IBM Plex Mono, monospace" font-size="10" text-anchor="end">B3 · AUTHORISED ACCESS ONLY</text>`;
  }
};
c.statements = {
  intro:"Police released only that Owen was found 'in a service area of B3'. One sentence below shows knowledge nobody was given. Click it.",
  blocks:[
    {who:"Marco Ferri",s:[["m1","The log says he left at 22:40."],["m2","Poor lad, sealed up behind that panel for a week. It makes me sick."],["m3","I have a master key, obviously."]]},
    {who:"Dev Anand",s:[["d1","He owed the business. I had jobs to finish."],["d2","I thought he'd done a runner."],["d3","I was at the cricket club till half one."]]},
    {who:"Leah Pike",s:[["l1","He'd walked out before, after a row."],["l2","I thought he'd come back."],["l3","I was on a call with my sister until nearly midnight."]]},
    {who:"Sara Kwon",s:[["k1","I didn't see him come back out."],["k2","Mr Ferri asked me to sign the log at the end of my shift."],["k3","I never wrote that he left."]]}],
  correct:"m2",
  fb:{m1:"Repeating the log. Who wrote that entry?",m3:"An admission of access.",d1:"Motive, openly admitted.",d2:"Testable.",d3:"Testable on the terminal.",l1:"Background.",l2:"Background.",l3:"Testable.",k1:"Interesting. Keep it in mind.",k2:"Very interesting, but not knowledge of the body.",k3:"She contradicts the log. Not a slip."},
  success:"Only 'a service area of B3' was released. Marco Ferri says Owen was 'sealed up behind that panel'. He knows where Owen was, and how."
};
c.codeQ = {
  title:"Owen's phone", intro:"Owen's phone was recovered with him and dried out by the lab. It needs a six-digit PIN. Ten wrong attempts would wipe it, so think before you type. (Wrong guesses count against you.)",
  q:"Six-digit PIN", placeholder:"••••••", accept:["913041","190314"],
  success:"Unlocked. The lab has extracted his last photo, an unsent message and his notes."
};
c.prints = {
  title:"Latent print, fire-stop sealant", latentLabel:"Lifted latent (sealant bead, panel FS-B3-04)", cands:["marco","dev","gideon","sara"], culprit:"marco", rot:-18,
  P:{marco:{type:"loop",cx:100,cy:116,w:3.1,ph:2.9,k:.6,seed:121},dev:{type:"loop",cx:96,cy:108,w:2.5,ph:1.3,k:.62,seed:122},gideon:{type:"whorl",cx:102,cy:120,sx:1.3,a:3.8,w:2.6,ph:.7,k:.59,seed:123},sara:{type:"arch",cx:100,cy:128,a:40,b:48,w:3,ph:2.2,k:.6,seed:124}},
  fails:{dev:"A loop, but the delta never lines up.",gideon:"A whorl can't make this loop.",sara:"An arch has no core."},
  success:"Identified: Marco Ferri, right thumb."
};
c.hand = {
  intro:"The loading bay log has a correction added in a different pen. Compare it with exemplars.",
  note:"22:40 — O. Pike<br>OUT ✓ MF", noteFont:"Caveat, cursive", noteSize:30,
  exemplar:"Contractor pass 4417 issued 09/10 — B3, MF/SK",
  cands:[{k:"marco",f:"Caveat, cursive",sz:24},{k:"sara",f:"'Reenie Beanie', cursive",sz:28},{k:"dev",f:"'Nothing You Could Do', cursive",sz:18},{k:"leah",f:"'Homemade Apple', cursive",sz:15}],
  culprit:"marco", success:"Match: Marco Ferri. The crossed 7 and the 'MF' initials."
};
c.timeline = {
  intro:"Order 9 October using the van's plate, the master-key log, the stores log, Owen's phone and the guard log. Times are hidden until you get it right.",
  ev:[{id:"a",t:"Owen's van enters the loading bay",tm:"21:48"},{id:"b",t:"Master key MF-B3 opens the B3 riser",tm:"22:20"},{id:"c",t:"Owen photographs a device on the cable tray",tm:"22:51"},{id:"d",t:"Owen's phone last touches the network",tm:"22:58"},{id:"e",t:"A sealant cartridge is signed out of stores",tm:"23:10"},{id:"f",t:"Master key MF-B3 is used on the riser again",tm:"23:15"},{id:"g",t:"The guard's page scan shows no exit for Pike",tm:"23:30"},{id:"h",t:"Dev Anand drives Owen's van away (11 Oct)",tm:"11 Oct 10:12"}],
  success:"The riser was opened, Owen saw the tap, his phone went dark, and the sealant and the master key followed. Nobody wrote him out until later."
};
c.verdict = {
  culprit:"marco", methodLabel:"How Owen died", method:"sealed", methodMiss:"That doesn't fit the autopsy, the fresh sealant or the key log.",
  methods:{sealed:"Struck in the riser and sealed behind the fire-stop panel",fell:"Fell down the riser shaft by accident",van:"Killed elsewhere and brought back in his van",locked:"Locked in the riser and left"},
  motive:"marco", motives:{marco:"Protect the money he was paid to hide the network tap",gideon:"Silence a witness to his data theft",dev:"Avoid repaying a business debt",leah:"End an unhappy marriage",sara:"Cover up falsifying the guard log"},
  pillars:[
    {ev:["bankferri","phonedump","priyastmt"],pts:3,hit:"Motive: the accused was paid to keep the tap hidden, and Owen had found it.",miss:"No motive shown for the accused."},
    {ev:["printlab","storeslog"],pts:3,hit:"Means: he took the sealant and his print is in the seal.",miss:"Nothing ties the accused to the sealed panel."},
    {ev:["keylog","baycctv"],pts:3,hit:"Opportunity: his master key opened the riser twice that night.",miss:"Nothing places the accused in the riser."}],
  bonus:[{ev:"transcripts",pts:1,hit:"He mentioned the panel before anyone told him."},{ev:"sara2",pts:1,hit:"He leaned on the guard to falsify the log."}],
  defence:[
    {claim:"Gideon Vale, who bought the stolen keys, had every reason to silence Mr Pike.",rebut:["flightvale"],pts:3},
    {claim:"The guard log shows Mr Pike leaving the building at 22:40.",rebut:["handlab","sara2"],pts:3}],
  questions:[
    {q:"Why did Owen open the riser panel area?",o:["To steal copper cable","He'd found a network tap that wasn't part of his job","A routine inspection","To meet Gideon Vale"],a:1},
    {q:"Who altered the guard log?",o:["The night guard","Owen himself","The building manager","Dev Anand"],a:2},
    {q:"Where was the tap sending data?",o:["To a server leased by Vale Risk Partners","To Halcyon's IT team","To the Ledger","To Priya Raman's home"],a:0}],
  solution:"Gideon Vale bought Halcyon's vault keys from Priya Raman, and paid building manager Marco Ferri every month to let a data tap sit in the B3 riser. On 9 October Owen Pike, re-cabling the riser, found the tap and photographed it. Ferri told him to leave it. When Owen wrote that he'd report it, Ferri struck him in the riser, signed sealant out of stores at 23:10, used his master key again at 23:15, and sealed Owen behind fire-stop panel FS-B3-04. He dropped his key tag doing it. Afterwards he hand-wrote 'Pike OUT 22:40' into the guard log and pressured Sara Kwon to sign it. Vale was in Singapore the whole time, and a jury may yet hear about him too."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  plate <plate>     Vehicle registration and ANPR hits
  key <tag>         Meridian Tower key-control log
  stores <area>     Facilities stores sign-out log
  bank <name>       Bank account activity (warrant on file)
  flight <name>     Airline manifests
  company <name>    Companies register
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  clear             Clear the screen`,
  quick:["help","person ferri","person raman","company valeriskpartners","plate PM-3505"],
  alias:{marco:"ferri",ferri:"ferri",gideon:"vale",vale:"vale",dev:"anand",anand:"anand",leah:"leah",sara:"kwon",kwon:"kwon",owen:"owen",pike:"owen",priya:"raman",raman:"raman"},
  miss:{person:"No citizen record matches.",plate:"No vehicle under that plate.",key:"No key by that tag. Riser keys use tags like MF-B1, MF-B3.",stores:"No stores log for that area.",bank:"No account on warrant for that name.",flight:"No flights in the last 14 days.",company:"No company by that name.",alibi:"No alibi on file.",case:"No such case."},
  cmds:{
    "person ferri":{out:"FERRI, Marco\nDOB 1976-10-01 · Building manager, Meridian Tower (since 2017)\nPhone 050 555 0606 · Vehicle PM-6060\nHolds: master riser keys MF-B1…MF-B3\nPriors: none"},
    "person vale":{out:"VALE, Gideon\nDOB 1980-05-22 · Director, Vale Risk Partners\nNamed in PMPD-26-1013-044 statement (P. Raman). Under investigation.\nPriors: none"},
    "person anand":{out:"ANAND, Dev\nDOB 1991-03-03 · Co-owner, Pike & Anand Cabling\nVehicle PM-3505\nPriors: none"},
    "person leah":{out:"PIKE, Leah\nDOB 1997-08-17 · Teacher, Old Town Primary\nMarried PIKE, Owen 2021\nPriors: none"},
    "person kwon":{out:"KWON, Sara\nDOB 1993-11-29 · Guard, Meridian Tower loading bay (nights)\nPriors: none"},
    "person owen":{out:"PIKE, Owen (DECEASED, found 16 Oct)\nDOB 1995-01-09 · Co-owner, Pike & Anand Cabling\nVan PM-7140 · Contractor pass 4417 (Meridian Tower)"},
    "person raman":{out:"RAMAN, Priya · IN CUSTODY (PMPD-26-1013-044)\nStatement 15 Oct: 'I sold the keys to Gideon Vale. He said the building was already taken care of.'",cls:"hit"},
    "plate pm7140":{out:"PM-7140 · white van · keeper PIKE, Owen\nANPR: Meridian Tower loading bay IN 9 Oct 21:48\n      Loading bay OUT 11 Oct 10:12 (driver: D. Anand, per bay CCTV)",cls:"hit",unl:"vanplate"},
    "plate pm3505":{out:"PM-3505 · keeper ANAND, Dev\nANPR 9 Oct: Old Town Cricket Club car park 19:40 → 01:44"},
    "plate pm6060":{out:"PM-6060 · keeper FERRI, Marco\nANPR 9 Oct: Meridian Tower staff garage OUT 00:22 (10 Oct)"},
    "key mfb3":{out:"KEY CONTROL · MASTER MF-B3 (holder: M. Ferri)\n9 Oct 22:20  B3 riser door · OPEN\n9 Oct 23:15  B3 riser door · OPEN\n10 Oct 07:50 Reported lost by holder; replacement issued",cls:"hit",unl:"keylog"},
    "key mfb1":{out:"KEY CONTROL · MF-B1 · no use on 9 Oct"},
    "stores b3":{out:"FACILITIES STORES · B3\n9 Oct 23:10  Intumescent sealant ×2, sealant gun ×1 · signed: M. FERRI\nNo fire-stop work orders open for B3",cls:"hit",unl:"storeslog"},
    "bank ferri":{out:"FERRI, Marco · account ****6060\nMonthly incoming since Feb 2026: 3,500 from 'VALE RISK PARTNERS' ref 'ADVISORY'",cls:"hit",unl:"bankferri"},
    "flight vale":{out:"MERIDIAN AIR · VALE, Gideon\nPMR → SIN 8 Oct 02:10 · SIN → PMR 12 Oct 23:05\nPassport scans confirm",cls:"hit",unl:"flightvale"},
    "company valeriskpartners":{out:"VALE RISK PARTNERS LTD · Director VALE, Gideon\nClients include: Meridian Tower Management (security audits 2025, 2026)"},
    "alibi anand":{out:"ALIBI · ANAND, Dev: VERIFIED\nOld Town Cricket Club bar receipts 20:15–01:20, club CCTV.",cls:"hit",unl:"devalibi"},
    "alibi leah":{out:"ALIBI · PIKE, Leah: VERIFIED\nVideo call with sister 21:32–23:47 (provider logs), home Wi-Fi.",cls:"hit",unl:"leahalibi"},
    "alibi kwon":{out:"ALIBI · KWON, Sara: desk camera shows her at the loading bay desk 21:00–07:00."},
    "alibi ferri":{out:"ALIBI · FERRI, Marco: says he left at 22:00. Unverified. (See plate PM-6060.)"},
    "alibi vale":{out:"ALIBI · VALE, Gideon: see 'flight vale'."},
    "case pmpd261016060":{out:"PMPD-26-1016-060 · MISSING → HOMICIDE · PIKE, Owen · OPEN"},
    "case pmpd261013044":{out:"PMPD-26-1013-044 · HOMICIDE · OKAFOR, Daniel · CHARGED: RAMAN, Priya"}
  }
};
const E=c.ev;
E("incident","Reports","Recovery report","Police report",null,()=>D("PORT MERIDIAN POLICE DEPT.","PMPD-26-1016-060",KV([["Reported missing","11 Oct 2026 by wife, Leah Pike"],["Last seen","Meridian Tower loading bay, 9 Oct, evening"],["Found","16 Oct 10:40, Level B3, by maintenance"],["Victim","Owen PIKE, 31. Cabling contractor."]])+`<h4>Information release</h4><p>Press and building staff have been told only that Mr Pike was found <b>in a service area of B3</b>. The exact location and how he was concealed are <b>WITHHELD</b>.</p>`,"CONFIDENTIAL"));
E("scene","Scene","B3 riser photograph","Photograph",null,()=>D("SCENE PHOTO 01 / B3 RISER","16 OCT 11:30",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("guardlog","Records","Loading bay guard log","Log",null,()=>D("MERIDIAN TOWER · LOADING BAY LOG","9 OCT (PAGE 2)",TB(["Time","Entry","Initials"],[["21:48","O. Pike IN · van PM-7140 · pass 4417","SK"],["22:05","Courier IN/OUT","SK"],["<i>22:40</i>","<i style=\"font-family:Caveat,cursive;font-size:18px\">O. Pike OUT ✓</i>","<i>MF</i>"],["23:30","Page scanned to system","SK"]])+`<p class="dim" style="margin-top:8px">The 22:40 line is in a different pen. The 23:30 page scan shows no 22:40 line.</p>${LAB("hand","Compare handwriting")}`));
E("jobticket","Records","Job ticket","Work order",null,()=>D("PIKE & ANAND CABLING · WORK ORDER","JOB 'LANTERN'",KV([["Client","Meridian Tower Management"],["Scope","Re-cable risers B1–B3, Halcyon trunk excluded"],["Job code","LANTERN"],["Pass","4417 (O. Pike)"],["Approved by","M. Ferri"]])+`<p class="dim" style="margin-top:8px">Dev Anand: "Owen used the job code for everything on a job. Wi-Fi, notes, the lot."</p>`));
E("leahtexts","Digital","Leah's messages to Owen","Text messages",null,()=>D("HANDSET · L. PIKE","9–11 OCT",`<div class="chat"><div class="msg me"><small>Leah → Owen · 9 Oct 18:02</small>Can we talk tonight? Properly.</div><div class="msg"><small>Owen · 9 Oct 18:30</small>Late one at Meridian. Something weird in the riser. Tell you after x</div><div class="msg me"><small>Leah · 10 Oct 08:14</small>Where are you?</div><div class="msg me"><small>Leah · 10 Oct 22:40</small>If you've gone again just say so</div><div class="msg me"><small>Leah · 11 Oct 09:05</small>Owen please</div></div>`));
E("article","Press","Ledger: Halcyon security chief charged","Newspaper article",null,()=>`<div class="doc news"><div class="mast">The Port Meridian Ledger</div><p class="dim" style="text-align:center;font-family:var(--mono);font-size:12px">THURSDAY 15 OCTOBER 2026</p><h5>Halcyon security chief charged; key buyer still unnamed</h5><div class="cols"><p>Halcyon's former head of security has been charged over the death of CTO Daniel Okafor. Prosecutors say client vault keys were sold to an outside buyer, whom police have not named.</p><p>Meridian Tower's management said it had full confidence in its building security, which was audited twice by an independent consultant.</p></div></div>`);
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 16 OCT","INTERVIEW ROOM 3",c.statements.blocks.map(b=>`<h4>${b.who}</h4><p>${b.s.map(x=>x[1]).join(" ")}</p>`).join("")+`<h4>Leah Pike, on his phone</h4><p>His PIN is the day we met, backwards. He thought that was romantic. We met on the fourteenth of March, 2019.</p>`));
E("autopsy","Reports","Autopsy summary","Autopsy report","scene",()=>D("OFFICE OF THE MEDICAL EXAMINER","ME-26-2302",KV([["Cause","Blunt force trauma to the back of the head"],["Time of death","9 Oct, approx. 22:30–00:30"],["Position","Seated, behind panel FS-B3-04, in a 60 cm cable void"],["Other","No fall injuries. Not consistent with a fall down the shaft."]])));
E("sara2","Statements","Sara Kwon, second interview","Interrogation transcript","statements",()=>D("INTERVIEW · 16 OCT 17:00","SARA KWON",`<p>"At about midnight Mr Ferri came to the desk and said Owen had left by the ramp at twenty to eleven and I'd missed him. I said I hadn't. He said just sign the log in the morning. When I came in, someone had already written it in. Not my pen. I initialled the page because he was standing there."</p>`));
E("phonedump","Digital","Owen's phone: extraction","Phone extraction","code",()=>D("LAB EXTRACTION · O. PIKE HANDSET","LAST ACTIVITY 9 OCT",TB(["Time","Item"],[["22:51","Photo: black box clipped to Halcyon trunk fibre, B3 cable tray"],["22:54","Unsent SMS to Halcyon IT: 'Found something in your B3 riser that isn't ours. Ferri says leave it. Calling you in the morning.'"],["22:56","Notes app: one enciphered line (see lab)"],["22:58","Last network activity"]])+LAB("cipher","Decode the note")));
E("priyastmt","Statements","Priya Raman, new statement","Custody statement","cipher",()=>D("CUSTODY INTERVIEW · P. RAMAN","15 OCT",`<p>"I sold the keys to Gideon Vale. He paid in crypto. When I asked how he'd pull the data out of Halcyon, he said the building was already taken care of. The building manager had been paid since February."</p>`));
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-1021",`<p>Partial latent in the fresh sealant bead of panel FS-B3-04. Identified: <b>M. Ferri</b>. Others excluded.</p>`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0193",`<p>The 22:40 correction in the loading bay log was very probably written by <b>M. Ferri</b>. Not written by S. Kwon.</p>`));
E("baycctv","Records","Loading bay CCTV summary","CCTV","timeline",()=>D("MERIDIAN TOWER · LOADING BAY CAMS","9–10 OCT",TB(["Time","Event"],[["21:48","Owen Pike arrives (van PM-7140)"],["22:16","Marco Ferri enters the B3 service corridor"],["00:05","Ferri leaves the corridor carrying a sealant gun"],["00:09","Ferri at the guard desk"]])));
E("keylog","Records","Master key MF-B3 log","Key-control record","term",()=>D("KEY CONTROL","MASTER MF-B3",TB(["Time","Event"],[["9 Oct 22:20","B3 riser door OPEN"],["9 Oct 23:15","B3 riser door OPEN"],["10 Oct 07:50","Reported lost by holder M. Ferri"]])));
E("storeslog","Records","Stores sign-out, B3","Stores record","term",()=>D("FACILITIES STORES","B3",`<p>9 Oct 23:10: intumescent sealant ×2 and a sealant gun, signed out by <b>M. Ferri</b>. No fire-stop work orders open for B3.</p>`));
E("bankferri","Records","Ferri bank record","Financial record","term",()=>D("BANK RECORDS · ****6060","M. FERRI",`<p>3,500 a month since February 2026 from <b>Vale Risk Partners</b>, reference 'ADVISORY'.</p>`));
E("flightvale","Records","Vale flight record","Flight record","term",()=>D("MERIDIAN AIR","VALE, GIDEON",`<p>PMR → Singapore 8 Oct 02:10; Singapore → PMR 12 Oct 23:05. Passport scans confirm. Vale was abroad on 9 October.</p>`));
E("devalibi","Records","Dev Anand alibi","Alibi verification","term",()=>D("OLD TOWN CRICKET CLUB","9 OCT",`<p>Bar receipts 20:15–01:20 and club CCTV place Dev Anand at the club all evening.</p>`));
E("leahalibi","Records","Leah Pike alibi","Alibi verification","term",()=>D("PROVIDER LOGS","9 OCT",`<p>Video call between Leah Pike and her sister, 21:32–23:47, from the couple's home Wi-Fi.</p>`));
E("vanplate","Records","ANPR: Owen's van PM-7140","Vehicle record","term",()=>D("ANPR · PM-7140","9–11 OCT",KV([["9 Oct 21:48","Loading bay IN"],["11 Oct 10:12","Loading bay OUT, driven by D. Anand"]])));
})();
/* ---------------- CASE 6: THE GLASS ATRIUM ---------------- */
(function(){
const c = defCase({
  id:"atrium", title:"The Glass Atrium", code:"PMPD-26-1019-071", short:"CASE 071", crime:"Suspicious death", genre:"Corporate noir", diff:5, cover:"atrium",
  blurb:"Gideon Vale, the man who bought Halcyon's stolen keys, falls twelve floors inside his own office the night before he was due to talk. His laptop says suicide.",
  briefDate:"20 Oct 2026, 08:00", headline:"The buyer didn't make it to Wednesday",
  summary:[
    "At 23:20 last night the night guard at Harbour Exchange found Gideon Vale at the bottom of the twelve-storey atrium inside Vale Risk Partners. On his laptop on the level 12 balcony was a typed note: an apology and a goodbye.",
    "Vale was out on bail and due to give a full statement on Wednesday naming 'the person who ran the money'. A journalist had an interview booked with him at 22:30. His wife was about to lose a fortune. His partner says she left at 22:15. Everyone wants this to be a suicide. Make sure it is one."],
  intro:["Deceased: Gideon Vale, 46. Director, Vale Risk Partners.","Found 23:20 at the foot of the atrium, Harbour Exchange.","A typed note on his laptop says he couldn't go on.","He was two days from naming names.","Prove the note right or wrong, Detective {name}."],
  screen:["PMPD RECORDS v4.2","> lift marlow","P2 → L12 22:38 …","> company valeriskpartners","INCORPORATED 2018 …"],
  CLEARS:{dinner:["sabine"],gym:["mina"],tariqcam:["tariq"],hugophone:["hugo"],printlab:["sabine","hugo","mina","tariq"],handlab:["sabine","hugo","mina","tariq"]},
  POINTS:{safe:["celeste"],memo:["celeste"],diary:["celeste"],printlab:["celeste"],handlab:["celeste"],liftlog:["celeste"],dascell:["celeste"],anprc:["celeste"],liftcctv:["celeste"],notemeta:["celeste"],tipguard:["celeste"],visitors:["hugo"],messages:["hugo","sabine","celeste"],transcripts:["celeste","hugo"],lawyer:["celeste","sabine"],article:["hugo"],accesslog:["celeste"]}
});
c.SUS = {
  celeste:{name:"Celeste Marlow",init:"CM",short:"Managing partner",age:49,role:"Co-founder and managing partner, Vale Risk Partners; runs the firm's finances",phone:"050 555 4949",car:"PM-4949",motive:"None stated. Says she and Vale were 'like family'.",alibi:"Says she left the office at 22:15 and drove home.",rel:"Founded the firm with Vale."},
  sabine:{name:"Sabine Vale",init:"SV",short:"Wife",age:44,role:"Gideon's wife; art consultant",phone:"055 555 0444",car:"PM-0444",motive:"A prenup that paid her little; Vale was moving assets abroad.",alibi:"Says she was at a gallery dinner all evening.",rel:"Married 2015. Separated in all but name."},
  hugo:{name:"Hugo Lenz",init:"HL",short:"Journalist",age:38,role:"Investigative reporter, Port Meridian Ledger",phone:"055 555 0812",car:"None",motive:"Had a 22:30 interview with Vale. The visitor book says he arrived.",alibi:"Says Vale cancelled by text at 22:05 and he stayed at the newsroom.",rel:"Has written four stories about Vale this month."},
  mina:{name:"Mina Kovac",init:"MK",short:"Former PA",age:31,role:"Vale's personal assistant until fired in September",phone:"052 555 0315",car:"None",motive:"Fired without notice. Knows where everything is kept.",alibi:"Says she was at a late spin class.",rel:"Worked for Vale for three years."},
  tariq:{name:"Tariq Bello",init:"TB",short:"Driver",age:52,role:"Vale's driver",phone:"050 555 0052",car:"PM-0123 (company)",motive:"Owed three months' wages.",alibi:"Says he waited in the car on P1 all evening.",rel:"Drove Vale for six years."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search the level 12 balcony",d:"Find four points of interest where Vale went over.",reward:["autopsy","accesslog"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"Someone knows what the note says.",reward:["notemeta"]},
  {id:"cipher",lab:"Cipher",t:"Decode Vale's diary",d:"The last page of his desk diary is enciphered.",reward:["memo"]},
  {id:"code",lab:"Office safe",t:"Open Vale's safe",d:"A six-digit code. His old PA knows how he picked them.",reward:["safe"]},
  {id:"prints",lab:"Fingerprints",t:"Match the balustrade print",d:"A partial was lifted from the inside face of the glass rail.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who signed in Hugo Lenz?",d:"The visitor book says the journalist arrived at 22:30.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the night",d:"Order the night's events.",reward:["liftcctv"],needs:"scene"},
  {id:"records",t:"Work the terminal",d:"Turn up four records that confirm or break an alibi.",reward:[]}
];
c.records = {ev:["dinner","gym","tariqcam","hugophone","liftlog","dascell","anprc"],n:4};
c.hints = {
  scene:["Look at the rail, the table, the bench and the floor. A suicide leaves a different scene from a struggle.","The smear and scuff at the rail, two coffee cups, the laptop, and something tiny under the bench (zoom in)."],
  statements:["What did police release about the note? Read the incident report.","The note's words were withheld. Who quotes them anyway?"],
  cipher:["Vale left a hint for the key in the margin of the diary.","It's a keyword cipher. The key is what he looked down into every day from his office."],
  code:["Ask his former PA how he chose his codes, in the interview room.","Mina says: the year the firm was founded, then the floor number. The terminal's company record has the year."],
  prints:["Rotate the latent over each reference and watch the core.","A whorl latent. Two candidates are whorls; only one lines up, at about +31°."],
  hand:["Compare the H, the 2 and the tick with each exemplar.","The visitor-book line wasn't written by the journalist. Look at the hand that slants hard to the right."],
  timeline:["Use the access log, the autopsy, the laptop report, Vale's messages and the terminal's lift and plate records.","She badged out, then came back up in the lift. The note was written after the last pulse."],
  records:["Test every alibi, and follow the partner's car, phone and fob.","Try alibi on each suspect, phone on the journalist and the partner, lift marlow and plate PM-4949."]
};
c.react = {
  scene:"Grip marks, two cups, and a wiped keyboard. People who jump don't wipe keyboards. The autopsy and access log are in.",
  statements:"She quoted the note. We never released a word of it. The lab has finished with the laptop.",
  cipher:"'CM held the wallet.' And he recorded a voice memo an hour before he died.",
  code:"The safe's open. Payment records for the keys, approved by one person.",
  prints:"Her prints on the inside of the rail, right where he went over.",
  hand:"She wrote Hugo Lenz into the visitor book herself. Setting up the journalist.",
  timeline:"The car-park lift camera has a clear frame of whoever rode up at 22:38.",
  records:"The alibis are thinning out. One person never really left the building."
};
c.unlockLines = {dinner:"Sabine was at a table of twelve all night.",gym:"Mina's class ran until eleven.",tariqcam:"Tariq never left the car.",hugophone:"Hugo's phone never left the newsroom.",liftlog:"So she did come back up.",dascell:"Her phone stayed in the building.",anprc:"Her car didn't leave until 23:09."};

c.cipher = {plain:"CM HELD THE WALLET AND THE MONEY. WEDNESDAY I TELL THEM EVERYTHING.", title:"Vale's desk diary", intro:"The last entry in Vale's desk diary, written the day he died. Decode it.", success:"'CM' held the crypto wallet that paid for Halcyon's keys, and Vale was going to tell police everything on Wednesday."};
c.cipher.ct = vig(c.cipher.plain,"ATRIUM",1);

c.codeQ = {title:"Vale's office safe", intro:"A six-digit keypad safe in Vale's office. Wrong codes count against you.", q:"Safe code", placeholder:"••••••", accept:["201812"], success:"Open. Inside: a hardware wallet card marked 'CM' and a payment ledger."};

c.scene = {
  title:"Level 12 balcony, 23:45", intro:"The balcony above the atrium, photographed after Vale was found. Find four points of interest. One is very small.",
  hots:[
    {id:"rail",x:560,y:250,r:30,t:"A hand smear on the inside of the glass balustrade at hip height, and a black rubber scuff on the floor in front of it. Signs of a struggle, not a climb."},
    {id:"cups",x:300,y:374,r:26,t:"Two coffee cups on the low table. One has a berry-red lipstick mark. Vale had a visitor up here."},
    {id:"laptop",x:176,y:308,r:28,t:"Vale's laptop, open on the bench, the note on screen. The keyboard has been wiped: no prints at all, not even his."},
    {id:"earring",x:232,y:452,r:9,zoom:2,t:"A gold butterfly earring back under the bench. Vale didn't wear earrings."}],
  draw(){
    let floors=""; for(let i=0;i<7;i++){ const x=40+i*36, w=720-i*72, y=30+i*26; floors+=`<rect x="${x}" y="${y}" width="${w}" height="2" fill="#2a313a"/>`; for(let j=0;j<8;j++) floors+=`<rect x="${x+20+j*(w-40)/8}" y="${y-12}" width="10" height="7" fill="${(i+j)%3?'#1a2027':'#e9d9a8'}" opacity="${(i+j)%3?1:.35}"/>`; }
    return `<rect width="800" height="500" fill="#12161b"/><rect width="800" height="300" fill="#0a0d11"/>${floors}
    <rect y="300" width="800" height="200" fill="#1d2228"/>${Array.from({length:9},(_,i)=>`<rect x="${i*100}" y="300" width="1" height="200" fill="#262c33"/>`).join("")}
    <rect x="0" y="208" width="800" height="96" fill="#9fc3d6" opacity=".1" stroke="#6e8fa3"/><rect x="0" y="202" width="800" height="7" fill="#b8c4cc"/>
    ${[100,300,500,700].map(x=>`<rect x="${x}" y="208" width="4" height="96" fill="#55606a"/>`).join("")}
    <rect x="534" y="238" width="52" height="16" rx="6" fill="#e9eef2" opacity=".22"/><path d="M528 322 q30 -6 60 4" stroke="#050607" stroke-width="5" fill="none" opacity=".8"/>
    <rect x="80" y="330" width="220" height="26" rx="3" fill="#3a2e26"/><rect x="92" y="356" width="8" height="40" fill="#2a2019"/><rect x="280" y="356" width="8" height="40" fill="#2a2019"/>
    <polygon points="138,330 214,330 222,338 130,338" fill="#9aa3ab"/><rect x="144" y="288" width="64" height="42" rx="2" fill="#20262d"/><rect x="148" y="292" width="56" height="34" fill="#dfe9f0"/>${[0,1,2,3].map(i=>`<rect x="152" y="${297+i*7}" width="${44-i*7}" height="2" fill="#5d6870"/>`).join("")}
    <ellipse cx="300" cy="392" rx="74" ry="16" fill="#2a2f36"/><rect x="296" y="392" width="8" height="42" fill="#22272d"/>
    <rect x="276" y="366" width="16" height="20" rx="2" fill="#f1ede4"/><rect x="314" y="364" width="16" height="20" rx="2" fill="#f1ede4"/><path d="M279 368 q5 3 10 0" stroke="#b0243b" stroke-width="2.4" fill="none"/>
    <circle cx="232" cy="452" r="3.2" fill="#d6b45a"/><circle cx="232" cy="452" r="1.2" fill="#8a6f2a"/>
    <text x="780" y="490" fill="#7d8a94" font-family="IBM Plex Mono, monospace" font-size="10" text-anchor="end">HARBOUR EXCHANGE · L12 · ATRIUM BALCONY</text>`;
  }
};
c.statements = {
  intro:"Police released only that Vale 'fell from an upper floor' and that 'a note was found'. Its words were withheld. One sentence shows knowledge of the note. Click it.",
  blocks:[
    {who:"Celeste Marlow",s:[["c1","I left at quarter past ten. He was fine. Tired, but fine."],["c2","He wrote that he couldn't face the trial. That's the part I can't get past."],["c3","Gideon and I were like family."]]},
    {who:"Sabine Vale",s:[["s1","I was at the Halden gallery dinner until after midnight."],["s2","We hadn't really been married for years."],["s3","He'd never kill himself. He was too vain."]]},
    {who:"Hugo Lenz",s:[["h1","He cancelled our interview by text at five past ten."],["h2","I never went to Harbour Exchange that night."],["h3","He was finally going to talk. Someone made sure he didn't."]]},
    {who:"Mina Kovac",s:[["m1","He fired me by email. Three years, and an email."],["m2","I was at spin class till eleven."],["m3","Celeste ran the money side. He ran the clients."]]},
    {who:"Tariq Bello",s:[["t1","I waited on P1 the whole night, like always."],["t2","He owes me three months. I still wouldn't hurt him."],["t3","Ms Marlow's car was still on P2 when I went for coffee at eleven."]]}],
  correct:"c2",
  fb:{c1:"An alibi claim. Test it.",c3:"Sentiment.",s1:"Testable.",s2:"Motive, openly.",s3:"An opinion.",h1:"Check his phone record.",h2:"The visitor book disagrees. Which is lying?",h3:"Suspicious, but not knowledge of the note.",m1:"Motive.",m2:"Testable.",m3:"Interesting, but not a slip.",t1:"Testable.",t2:"Motive, openly.",t3:"That's worth checking on the terminal."},
  success:"The note's words were never released. Celeste Marlow quotes them: 'couldn't face the trial'. She read that note, and she says she left two hours before it was written."
};
c.prints = {
  title:"Latent print, glass balustrade", latentLabel:"Lifted latent (inside face of the rail)", cands:["celeste","sabine","hugo","tariq"], culprit:"celeste", rot:31,
  P:{celeste:{type:"whorl",cx:100,cy:120,sx:1.25,a:3.9,w:2.9,ph:1.6,k:.6,seed:131},sabine:{type:"whorl",cx:96,cy:114,sx:1.5,a:2.4,w:3.2,ph:.5,k:.58,seed:132},hugo:{type:"loop",cx:102,cy:110,w:2.7,ph:2.2,k:.61,seed:133},tariq:{type:"arch",cx:100,cy:128,a:40,b:46,w:2.6,ph:1.1,k:.6,seed:134}},
  fails:{sabine:"A whorl, but the core sits too high at every rotation.",hugo:"A loop can't make this circular core.",tariq:"An arch has no core."},
  success:"Identified: Celeste Marlow, left index."
};
c.hand = {
  intro:"The 22:30 line in the reception visitor book says Hugo Lenz came up to see Vale. Compare it with exemplars.",
  note:"22:30 · H. Lenz<br>to G. Vale · L12 ✓", noteFont:"'Homemade Apple', cursive", noteSize:18,
  exemplar:"Visitor: 21/10 · 22:30 · Level 12 · Host G.V. ✓",
  cands:[{k:"celeste",f:"'Homemade Apple', cursive",sz:15},{k:"hugo",f:"'Reenie Beanie', cursive",sz:28},{k:"mina",f:"Caveat, cursive",sz:24},{k:"tariq",f:"'Nothing You Could Do', cursive",sz:18}],
  culprit:"celeste", success:"Match: Celeste Marlow. The hard right slant, the looped 2 and the long tick."
};
c.timeline = {
  intro:"Order the night using the access log, autopsy, laptop report, Vale's messages and terminal records. Times are hidden until you get it right.",
  ev:[{id:"a",t:"Vale's phone texts Hugo Lenz cancelling the interview",tm:"22:05"},{id:"b",t:"Celeste Marlow's fob exits the lobby turnstile",tm:"22:15"},{id:"c",t:"Celeste's fob calls the car-park lift from P2 to level 12",tm:"22:38"},{id:"d",t:"Vale's smartwatch records its last pulse",tm:"22:47"},{id:"e",t:"The 'suicide note' file is created on Vale's laptop",tm:"23:01"},{id:"f",t:"Fire stair 2 opens from inside on level 12",tm:"23:04"},{id:"g",t:"Celeste's car PM-4949 leaves the car park",tm:"23:09"},{id:"h",t:"The night guard finds Vale in the atrium",tm:"23:20"}],
  success:"She badged out, rode back up, and the note was written fourteen minutes after Vale's heart stopped."
};
c.verdict = {
  culprit:"celeste", methodLabel:"How Vale died", method:"pushed", methodMiss:"That doesn't fit the grip bruises, the smeared rail or the note written after death.",
  methods:{pushed:"Pushed over the balustrade, then a suicide note typed on his laptop",jumped:"Jumped after writing a note",fell:"Fell while leaning over the rail",struck:"Struck in his office and thrown from the balcony"},
  motive:"celeste", motives:{celeste:"Stop Vale naming her as the one who ran the key-sale money",sabine:"Keep the assets before the prenup applied",hugo:"A story gone wrong",mina:"Revenge for being fired",tariq:"Unpaid wages"},
  pillars:[
    {ev:["safe","memo","diary","tipguard"],pts:3,hit:"Motive: Vale was about to name her as the one who held the wallet and ran the money.",miss:"No motive shown for the accused."},
    {ev:["printlab","notemeta"],pts:3,hit:"Means: her prints are on the rail where he went over, and the note was typed after he died.",miss:"Nothing shows the accused touched Vale or the note."},
    {ev:["liftlog","dascell","anprc","liftcctv"],pts:3,hit:"Opportunity: she rode back up to level 12 and stayed until after he fell.",miss:"The jury believes the accused left at 22:15."}],
  bonus:[{ev:"transcripts",pts:1,hit:"She quoted the withheld note in her interview."},{ev:"handlab",pts:1,hit:"She forged the journalist into the visitor book."}],
  defence:[
    {claim:"The visitor book shows Hugo Lenz going up to see Mr Vale at 22:30.",rebut:["handlab","hugophone"],pts:3},
    {claim:"Our client left the building at 22:15. The turnstile log proves it.",rebut:["liftlog","dascell","anprc","liftcctv"],pts:3}],
  questions:[
    {q:"When was the 'suicide note' written?",o:["Before the fall, by Vale","About fourteen minutes after his last pulse","The next morning","It was printed, not typed"],a:1},
    {q:"How did the killer get back to level 12?",o:["Through the lobby with a visitor","The car-park lift from P2, on her own fob","Up the fire stairs from the street","She never went down"],a:1},
    {q:"Who was the false trail laid for?",o:["Tariq Bello","Hugo Lenz","Sabine Vale","Mina Kovac"],a:1}],
  solution:"Celeste Marlow ran the money behind Vale Risk Partners, including the crypto wallet that paid Priya Raman for Halcyon's keys. Out on bail, Vale told his lawyer he would name 'the person who ran the money' on Wednesday. On Monday night Celeste badged out at 22:15 to be seen leaving, went down to her car, then rode the car-park lift back up to level 12 at 22:38. Over coffee on the balcony she pushed Vale over the balustrade at 22:47, losing an earring back as they struggled. She texted the journalist off from Vale's phone before she went down, typed a suicide note on his laptop at 23:01, wiped the keyboard, wrote Hugo Lenz into the visitor book, and left by the fire stairs and the car park at 23:09. In interview she quoted a note nobody had been told about."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  plate <plate>     Vehicle registration and ANPR hits
  phone <number>    Carrier record and cell sites
  lift <name>       Harbour Exchange lift log by fob holder
  company <name>    Companies register
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  clear             Clear the screen`,
  quick:["help","person marlow","company valeriskpartners","alibi sabine","phone 055 555 0812"],
  alias:{celeste:"marlow",marlow:"marlow",sabine:"sabine",hugo:"lenz",lenz:"lenz",mina:"kovac",kovac:"kovac",tariq:"bello",bello:"bello",gideon:"vale",vale:"vale"},
  miss:{person:"No citizen record matches.",plate:"No vehicle under that plate.",phone:"No carrier record for that number.",lift:"No lift journeys for that fob holder on 19 Oct.",company:"No company by that name.",alibi:"No alibi on file.",case:"No such case."},
  cmds:{
    "person marlow":{out:"MARLOW, Celeste\nDOB 1977-02-02 · Res: Cliff Road 14\nPhone 050 555 4949 · Vehicle PM-4949 (white saloon)\nDirector, Vale Risk Partners. Signatory on all firm accounts.\nPriors: none"},
    "person sabine":{out:"VALE, Sabine\nDOB 1982-06-21 · Res: Old Harbour, House 7\nPhone 055 555 0444 · Vehicle PM-0444\nPriors: none"},
    "person lenz":{out:"LENZ, Hugo\nDOB 1988-03-12 · Reporter, Port Meridian Ledger\nPhone 055 555 0812 · Vehicle: none\nPriors: none"},
    "person kovac":{out:"KOVAC, Mina\nDOB 1995-09-09 · Former PA, Vale Risk Partners (dismissed 22 Sep)\nPhone 052 555 0315\nPriors: none"},
    "person bello":{out:"BELLO, Tariq\nDOB 1974-04-30 · Chauffeur, Vale Risk Partners\nPhone 050 555 0052\nPriors: none"},
    "person vale":{out:"VALE, Gideon (DECEASED 19 Oct)\nDOB 1980-05-22 · Director, Vale Risk Partners\nOn bail (PMPD-26-1016-060). Statement scheduled Wed 21 Oct, 10:00."},
    "company valeriskpartners":{out:"VALE RISK PARTNERS LTD\nIncorporated 2018 · Offices: Harbour Exchange, level 12\nDirectors: VALE, Gideon · MARLOW, Celeste\nFinance signatory: MARLOW, Celeste"},
    "plate pm4949":{out:"PM-4949 · white saloon · keeper MARLOW, Celeste\nANPR · Harbour Exchange car park\n  19 Oct 08:12  IN\n  19 Oct 23:09  OUT",cls:"hit",unl:"anprc"},
    "plate pm0123":{out:"PM-0123 · company car · Vale Risk Partners\nANPR: car park IN 19:05 · OUT 00:40 (police release)"},
    "lift marlow":{out:"HARBOUR EXCHANGE · CAR-PARK LIFT B\nFob 4949 · MARLOW, C.\n  19 Oct 22:16  L12 → P2\n  19 Oct 22:38  P2 → L12\n  19 Oct 23:06  (fire stair 2 used; no lift)",cls:"hit",unl:"liftlog"},
    "lift vale":{out:"Fob 0001 · VALE, G. · 19 Oct: L0 → L12 18:40. No further journeys."},
    "phone 0505554949":{out:"050 555 4949 · MARLOW, Celeste\n19 Oct: Harbour Exchange indoor network 08:10–23:06\n         Cliff Road mast from 23:24",cls:"hit",unl:"dascell"},
    "phone 0555550812":{out:"055 555 0812 · LENZ, Hugo\n19 Oct 22:05 SMS IN from 050 555 0001 (G. Vale): 'Not tonight. Tomorrow.'\nCell: Ledger newsroom mast 18:00–01:20",cls:"hit",unl:"hugophone"},
    "phone 0505550001":{out:"050 555 0001 · VALE, Gideon\n19 Oct 21:50 SMS IN 050 555 4949 (C. Marlow)\n19 Oct 21:58 voice memo recorded (on device)\n19 Oct 22:05 SMS OUT to H. Lenz\nCell: Harbour Exchange indoor network all evening"},
    "alibi sabine":{out:"ALIBI · VALE, Sabine: VERIFIED\nHalden Gallery dinner, table 3, 20:00–00:30. Eleven guests and the gallery's camera.",cls:"hit",unl:"dinner"},
    "alibi kovac":{out:"ALIBI · KOVAC, Mina: VERIFIED\nPulse Studio class 22:00–23:00, check-in and instructor confirm.",cls:"hit",unl:"gym"},
    "alibi bello":{out:"ALIBI · BELLO, Tariq: VERIFIED\nP1 camera shows him in the car 21:30–23:25 except a coffee run 23:00–23:07 (vending, P1).",cls:"hit",unl:"tariqcam"},
    "alibi lenz":{out:"ALIBI · LENZ, Hugo: see 'phone 055 555 0812'"},
    "alibi marlow":{out:"ALIBI · MARLOW, Celeste: says she left 22:15. Turnstile log agrees. Unverified beyond that."},
    "case pmpd261016060":{out:"PMPD-26-1016-060 · HOMICIDE · PIKE, Owen · CHARGED: FERRI, Marco\nAssociated: VALE, Gideon (bailed 18 Oct)"},
    "case pmpd261019071":{out:"PMPD-26-1019-071 · SUSPICIOUS DEATH · VALE, Gideon · OPEN"}
  }
};
const E=c.ev;
E("incident","Reports","Incident report","Police report",null,()=>D("PORT MERIDIAN POLICE DEPT.","PMPD-26-1019-071",KV([["Filed","19 Oct 2026, 23:52"],["Location","Harbour Exchange, Vale Risk Partners, levels 9–12 atrium"],["Deceased","Gideon VALE, 46"],["Found","23:20 by night guard on rounds, foot of the atrium (level 9)"],["Note","A typed note was found open on the deceased's laptop on the level 12 balcony."]])+`<h4>Information release</h4><p>Press told only that Mr Vale 'fell from an upper floor' and that 'a note was found'. <b>The wording of the note is WITHHELD.</b></p>`,"CONFIDENTIAL"));
E("scene","Scene","Balcony photograph","Photograph",null,()=>D("SCENE PHOTO 04 / LEVEL 12 BALCONY","19 OCT 23:45",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("laptop","Scene","The note on the laptop","Physical evidence",null,()=>D("ITEM 2 · LAPTOP SCREEN","PHOTOGRAPHED 23:46",`<div style="background:#dfe9f0;color:#1b2228;font-family:var(--body);font-size:20px;line-height:1.6;padding:20px 24px;border:6px solid #20262d;border-radius:4px">I can't face the trial.<br>I'm sorry for everything.<br>— G</div><p class="dim" style="margin-top:10px">Unsigned, untitled document. Font set to 20pt. No other document on the machine uses 20pt.</p>`));
E("visitors","Scene","Reception visitor book","Physical evidence",null,()=>D("HARBOUR EXCHANGE · RECEPTION","VISITOR BOOK, 19 OCT",TB(["Time","Visitor","Host","Floor"],[["14:10","A. Mendes (courier)","Post room","G"],["17:30","Cleaning crew (4)","Facilities","All"],[`<span style="font-family:'Homemade Apple',cursive">22:30</span>`,`<span style="font-family:'Homemade Apple',cursive">H. Lenz</span>`,`<span style="font-family:'Homemade Apple',cursive">G. Vale</span>`,`<span style="font-family:'Homemade Apple',cursive">L12 ✓</span>`]])+`<p class="dim" style="margin-top:8px">Reception desk unstaffed after 21:00. Visitors sign themselves in.</p>${LAB("hand","Compare handwriting")}`));
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 20 OCT","INTERVIEW ROOM 3",c.statements.blocks.map(b=>`<h4>${b.who}</h4><p>${b.s.map(x=>x[1]).join(" ")}</p>`).join("")));
E("messages","Digital","Vale's phone: messages","Text messages",null,()=>D("HANDSET · G. VALE","19 OCT",`<div class="chat">
<div class="msg"><small>Sabine · 18:12</small>My lawyer says the transfers to Zurich breach the agreement. Stop.</div>
<div class="msg"><small>Celeste · 21:50</small>We need to talk before Wednesday. Coming up for coffee.</div>
<div class="msg me"><small>Gideon → Celeste · 21:51</small>There's nothing to talk about.</div>
<div class="msg me"><small>Gideon → Hugo Lenz · 22:05</small>Not tonight. Tomorrow.</div></div>`));
E("lawyer","Records","Letter from Vale's lawyer","Legal letter",null,()=>`<div class="doc mail"><div class="mh">FROM: R. Asante, Asante & Kerr · TO: PMPD Major Crimes · 19 Oct 16:40<br>SUBJECT: VALE, G. · voluntary statement</div><p>My client will attend on Wednesday 21 October at 10:00 to give a full statement, including the identity of the person who arranged and controlled the payments for the Halcyon material.</p></div>`);
E("diary","Digital","Vale's desk diary, last page","Coded message",null,()=>D("ITEM 6 · DESK DIARY","19 OCT",`<p style="font-size:18px;letter-spacing:.08em;word-break:break-word">${c.cipher.ct}</p><p class="dim" style="font-family:'Reenie Beanie',cursive;font-size:22px">(margin) key = what I look down into every day</p>${C.done.cipher?`<p><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Work on it in the lab")}`));
E("article","Press","Ledger: Consultant bailed","Newspaper article",null,()=>`<div class="doc news"><div class="mast">The Port Meridian Ledger</div><p class="dim" style="text-align:center;font-family:var(--mono);font-size:12px">SUNDAY 18 OCTOBER 2026 · BY HUGO LENZ</p><h5>Security consultant bailed in Halcyon key-theft probe</h5><div class="cols"><p>Gideon Vale, whose firm audited Meridian Tower's security twice, was released on bail yesterday. Sources say he has offered to cooperate.</p><p>His firm's managing partner, Celeste Marlow, said the firm was 'shocked' and had 'no knowledge of any wrongdoing'.</p></div></div>`);
E("autopsy","Reports","Autopsy summary","Autopsy report","scene",()=>D("OFFICE OF THE MEDICAL EXAMINER","ME-26-2410",KV([["Cause","Multiple injuries consistent with a fall of about 12 m"],["Other","Fingertip bruising to both upper arms, fresh, inflicted shortly before death"],["Time","Smartwatch: last pulse <b>22:47:31</b>"],["Toxicology","Alcohol 0.02%. Nothing else."]])));
E("accesslog","Records","Building access log","Access log","scene",()=>D("HARBOUR EXCHANGE · ACCESS CONTROL","19 OCT",TB(["Time","Point","Fob / event"],[["18:40","Lobby turnstile IN","0001 G. Vale"],["22:15","Lobby turnstile OUT","4949 C. Marlow"],["23:04","Fire stair 2, L12","Door opened from inside (no fob needed)"],["23:20","Guard rounds","Alarm raised"]])+`<p class="dim" style="margin-top:8px">The car-park lifts keep their own log. Ask the terminal.</p>`));
E("notemeta","Reports","Laptop forensics","Lab report","statements",()=>D("DIGITAL FORENSICS","DF-26-0732",KV([["Note file","Created 19 Oct <b>23:01:12</b>, never saved"],["Keyboard","Wiped with a solvent wipe. No prints."],["Last activity by Vale","22:31 (email draft to his lawyer, unsent)"],["Typing","Note typed at about 70 wpm. Vale's documents average 30 wpm with two fingers."]])));
E("memo","Digital","Vale's voice memo, 21:58","Audio recording","cipher",()=>audioDoc("VOICE MEMO · G. VALE","19 OCT 21:58 · 0:24",[[0,"[0:00] It's Monday night. If you're hearing this, Wednesday didn't happen."],[1500,"[0:06] Celeste is coming up for coffee. She wants to talk me out of it."],[3200,"[0:13] The wallet card is in my safe. Her initials are on it."],[4800,"[0:20] [lift chime in the background]"]]));
E("safe","Records","Contents of Vale's safe","Physical evidence","code",()=>D("ITEM 9 · OFFICE SAFE","OPENED BY PMPD",TB(["Item","Detail"],[["Hardware wallet card","Label: 'CM'. Holds the account that paid P. Raman in crypto (Feb–Oct)"],["Payment ledger","31 payments, each approved 'C.M.'"],["Note","'If they ask, it was her money. GV'"]])));
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-1102",`<p>Partial latent on the inside face of the balustrade, L12. Identified: <b>C. Marlow</b>. Others excluded.</p>`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0201",`<p>The 22:30 visitor-book entry was very probably written by <b>C. Marlow</b>. Not written by H. Lenz.</p>`));
E("liftcctv","Records","Car-park lift camera","CCTV","timeline",()=>D("LIFT B · INTERNAL CAMERA","19 OCT 22:38",`<p>A woman in a dark coat with a berry-red scarf rides from P2 to level 12, alone, using fob 4949. Face clearly visible: <b>Celeste Marlow</b>.</p>`));
E("dinner","Records","Sabine Vale's alibi","Alibi verification","term",()=>D("HALDEN GALLERY","19 OCT",`<p>Sabine Vale at table 3 from 20:00 to 00:30, confirmed by eleven guests and the gallery camera.</p>`));
E("gym","Records","Mina Kovac's alibi","Alibi verification","term",()=>D("PULSE STUDIO","19 OCT",`<p>Mina Kovac checked in at 21:52; class 22:00–23:00.</p>`));
E("tariqcam","Records","Tariq Bello's alibi","Alibi verification","term",()=>D("HARBOUR EXCHANGE · P1 CAMERA","19 OCT",`<p>Tariq Bello in the company car 21:30–23:25, apart from a vending-machine coffee on P1 at 23:00.</p>`));
E("hugophone","Records","Hugo Lenz phone record","Phone record","term",()=>D("CARRIER RECORD · 055 555 0812","19 OCT",`<p>Received 'Not tonight. Tomorrow.' from Vale's phone at 22:05. Handset on the Ledger newsroom mast 18:00–01:20.</p>`));
E("liftlog","Records","Lift log: C. Marlow","Access record","term",()=>D("CAR-PARK LIFT B","FOB 4949",TB(["Time","Journey"],[["22:16","L12 → P2"],["22:38","P2 → L12"]])));
E("dascell","Records","Celeste Marlow phone record","Phone record","term",()=>D("CARRIER RECORD · 050 555 4949","19 OCT",`<p>Handset on Harbour Exchange's indoor network until <b>23:06</b>. Cliff Road mast from 23:24.</p>`));
E("anprc","Records","ANPR: PM-4949","Vehicle record","term",()=>D("ANPR · HARBOUR EXCHANGE","PM-4949",KV([["IN","19 Oct 08:12"],["OUT","19 Oct 23:09"]])));
})();

/* ---------------- CASE 7: THE LAST FARE ---------------- */
(function(){
const c = defCase({
  id:"fare", title:"The Last Fare", code:"PMPD-26-1021-083", short:"CASE 083", crime:"Homicide", genre:"Night city", diff:5, cover:"taxi",
  blurb:"A night cabbie is found dead at the far end of the airport rank, his takings gone and his dashcam card ripped out. It looks like a robbery. It's meant to.",
  briefDate:"21 Oct 2026, 07:30", headline:"Cab 11's meter stopped at 02:49",
  summary:[
    "At 03:40 an airport cleaner found Elias Brandt, 58, slumped in his taxi at the dark end of the PMR rank. A blow to the head. Wallet gone, takings gone, the dashcam's memory card pulled out. Uniform have written it up as a robbery.",
    "Brandt had a feud with another driver, a daughter who inherits, and a dispatcher he'd reported. His last fare booked as 'J. Smith' from the Marina and should have been on the 05:40 to London. Five years ago Brandt was the only witness to a hit-and-run nobody solved."],
  intro:["Victim: Elias Brandt, 58. Night taxi driver, cab 11.","Found 03:40 at the far end of the PMR airport rank.","Wallet, takings and dashcam card gone.","Five years ago he saw something on Marina Road.","Find his last passenger, Detective {name}."],
  screen:["PMPD RECORDS v4.2","> card 3301","HOLDER: …","> cab 44","03:02 DROP-OFF …"],
  CLEARS:{dariogps:["dario"],lenaflight:["lena"],martadispatch:["marta"],jonahcctv:["jonah"],printlab:["dario","lena","marta","jonah"],handlab:["dario","lena","marta","jonah"]},
  POINTS:{cloudclip:["silas"],witness2019:["silas"],notebook:["silas"],printlab:["silas"],handlab:["silas"],cardholder:["silas"],returncab:["silas"],airportcctv:["silas"],silasflight:["silas"],tiprank:["silas"],booking:["silas"],transcripts:["silas","dario"],wallet:["jonah"],messages:["lena","dario","marta"],feud:["dario"],dashlab:["silas"]}
});
c.SUS = {
  silas:{name:"Silas Grey",init:"SG",short:"The last fare",age:41,role:"Corporate lawyer, Marina Point; booked on PM 611 to London at 05:40",phone:"050 555 3301",car:"PM-8833 (grey saloon)",motive:"None known. Says he got out at Departures and flew.",alibi:"Says he was on the 05:40 to London.",rel:"No known link to Brandt."},
  dario:{name:"Dario Fenn",init:"DF",short:"Rival cabbie",age:29,role:"Taxi driver, cab 27",phone:"052 555 0027",car:"Cab 27",motive:"Fought Brandt on the rank last week over queue-jumping. Threatened him in front of witnesses.",alibi:"Says he was driving fares all night.",rel:"Shares the airport rank."},
  lena:{name:"Lena Brandt",init:"LB",short:"Daughter",age:34,role:"Flight attendant, Meridian Air",phone:"056 555 0711",car:"PM-0711",motive:"Inherits the cab licence, worth a lot. They argued about selling it.",alibi:"Says she was working a flight back from Cairo.",rel:"Only child."},
  marta:{name:"Marta Quill",init:"MQ",short:"Dispatcher",age:46,role:"Night dispatcher, Meridian Cabs",phone:"050 555 0900",car:"PM-0909",motive:"Brandt filed a complaint that she sold the best airport jobs.",alibi:"On shift in the dispatch office.",rel:"His dispatcher for ten years."},
  jonah:{name:"Jonah Mbeki",init:"JM",short:"Airport cleaner",age:23,role:"Night cleaner, PMR Terminal 2 forecourt",phone:"055 555 0123",car:"None",motive:"Brandt's wallet was found in a bin beside his trolley. Has a theft caution from 2024.",alibi:"Says he found the cab on his rounds and raised the alarm.",rel:"Knew Brandt by sight."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search cab 11",d:"Find four points of interest in the taxi.",reward:["autopsy"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"Someone knows what was taken from the cab.",reward:["dashlab"]},
  {id:"cipher",lab:"Cipher",t:"Decode Brandt's notebook",d:"The last page of his logbook is enciphered.",reward:["witness2019"]},
  {id:"code",lab:"Dashcam cloud",t:"Open the dashcam cloud account",d:"The camera uploaded clips. You need Brandt's four-digit PIN.",reward:["cloudclip"]},
  {id:"prints",lab:"Fingerprints",t:"Match the door-handle print",d:"A partial in blood on the inside rear door handle.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who signed as 'J. Smith'?",d:"The last fare signed Brandt's paper receipt book.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the last ride",d:"Order the night's events.",reward:["airportcctv"],needs:"scene"},
  {id:"records",t:"Work the terminal",d:"Turn up four records that confirm or break an alibi.",reward:[]}
];
c.records = {ev:["booking","cardholder","silasflight","returncab","dariogps","lenaflight","martadispatch","jonahcctv"],n:4};
c.hints = {
  scene:["Front, back, dashboard and floor. What was taken, and where did the attack come from?","The empty dashcam slot, the meter, the rear door handle, and something small in the rear footwell (zoom in)."],
  statements:["Read what police released about the dashcam.","Only 'damage to the dashcam' was released. Who knows the card itself was taken?"],
  cipher:["Brandt wrote how to read it in the margin.","A shift cipher. The number is on his taxi licence."],
  code:["His daughter knows how he chose PINs. Ask her in the interview room.","The date of the Marina Road crash, day then month. The 2019 newspaper piece has it."],
  prints:["Rotate the latent and watch the core and delta.","A loop latent. Two candidates have loops; the match lines up at about −26°."],
  hand:["Compare the J, the S and the long final stroke.","The 'J. Smith' signature leans left with a tall S. One exemplar writes like that."],
  timeline:["Use the booking, the cab's GPS in the incident report, the meter, the terminal's returning-cab record and the cleaner's call.","The fare was booked, picked up, parked at the dark end, the meter stopped, then someone left in another cab."],
  records:["Follow the booking and the card that paid for it. Test each alibi.","Try booking brandt, card 3301, flight grey, cab 44, gps fenn, flight lena, alibi quill and cctv rank."]
};
c.react = {
  scene:"He was hit from the back seat. And someone dropped a boarding-pass stub. The autopsy's in.",
  statements:"Nobody told anyone about the card. The dashcam maker came back to us: the camera kept a cloud backup.",
  cipher:"'The Marina lawyer is the 2019 driver.' Brandt's old witness statement is in the file.",
  code:"We're in. The last clip uploaded before the card was pulled. Listen to it.",
  prints:"Silas Grey's print, in Brandt's blood, on the back door handle.",
  hand:"'J. Smith' is Silas Grey's handwriting.",
  timeline:"The drop-off camera caught the man who walked away from cab 11.",
  records:"The booking, the card, the flight. Paperwork tells on people."
};
c.unlockLines = {booking:"Booked as J. Smith, paid by card.",cardholder:"J. Smith's card has a real name on it.",silasflight:"Seat 3A flew empty.",returncab:"Cab 44 took someone back to the Marina.",dariogps:"Dario was across town.",lenaflight:"Lena was at 30,000 feet.",martadispatch:"Marta never left the dispatch desk.",jonahcctv:"Someone else used that bin first."};

c.cipher = {plain:"THE MARINA LAWYER IS THE 2019 DRIVER. SAME SCAR. TELL THE POLICE.", title:"Brandt's logbook", intro:"The last line in Brandt's fare logbook, written in the days before he died. Decode it.", success:"Brandt believed a lawyer from the Marina was the driver in the 2019 hit-and-run he witnessed, and recognised him by a scar."};
c.cipher.ct = shiftTxt(c.cipher.plain,11);

c.codeQ = {title:"Dashcam cloud account", intro:"Brandt's dashcam uploaded audio clips to the cloud. The account needs his four-digit PIN. Wrong PINs count against you.", q:"Four-digit PIN", placeholder:"••••", accept:["1408"], success:"Unlocked. The last clip uploaded at 02:46, three minutes before the meter stopped."};

c.scene = {
  title:"Cab 11, 03:55", intro:"The taxi as found at the far end of the rank, photographed from the back seat. Find four points of interest. One is small.",
  hots:[
    {id:"dashcam",x:400,y:70,r:24,t:"The dashcam is still on the windscreen, but its card slot hangs open and the card is gone."},
    {id:"meter",x:612,y:196,r:26,t:"The meter reads 61.70 and STOPPED at 02:49. Marina Point to the airport is about 27 km: roughly 61.70 on the night tariff."},
    {id:"handle",x:70,y:300,r:22,t:"Blood smeared on the inside rear door handle. Whoever hit Brandt was sitting behind him."},
    {id:"stub",x:520,y:452,r:9,zoom:2,t:"A torn boarding-pass stub in the rear footwell: PM 611 PMR→LHR 05:40, seat 3A. The name is torn off."}],
  draw(){
    let lights=""; const r=rng(17); for(let i=0;i<30;i++) lights+=`<circle cx="${(r()*800).toFixed(0)}" cy="${(40+r()*120).toFixed(0)}" r="${(1+r()*3).toFixed(1)}" fill="${r()<.5?'#f2c96b':'#ff8a5a'}" opacity="${(.3+r()*.6).toFixed(2)}"/>`;
    return `<rect width="800" height="500" fill="#0c0d10"/><path d="M60 20 Q400 -10 740 20 L700 200 Q400 180 100 200 Z" fill="#141a24"/>${lights}
    <rect x="368" y="54" width="64" height="30" rx="5" fill="#1c1f24"/><rect x="380" y="60" width="18" height="18" rx="9" fill="#0a0b0d" stroke="#3a3f45"/><rect x="408" y="66" width="20" height="4" fill="#3a3f45"/><rect x="418" y="84" width="10" height="12" fill="#2a2d33" transform="rotate(20 418 84)"/>
    <path d="M0 200 Q400 170 800 200 L800 280 L0 280 Z" fill="#1e2026"/><rect x="560" y="178" width="104" height="38" rx="4" fill="#0a0b0d"/><text x="612" y="196" fill="#ff4b3a" font-family="IBM Plex Mono, monospace" font-size="16" text-anchor="middle">61.70</text><text x="612" y="210" fill="#ff8a5a" font-family="IBM Plex Mono, monospace" font-size="8" text-anchor="middle">STOPPED 02:49</text>
    <path d="M90 270 Q90 230 140 226 L330 226 Q370 230 370 280 L370 420 L90 420 Z" fill="#2b2f36"/><path d="M430 280 Q430 230 470 226 L660 226 Q710 230 710 270 L710 420 L430 420 Z" fill="#2b2f36"/>
    <rect x="160" y="196" width="140" height="40" rx="14" fill="#262a30"/><rect x="500" y="196" width="140" height="40" rx="14" fill="#262a30"/>
    <rect y="420" width="800" height="80" fill="#15161a"/><rect x="0" y="240" width="40" height="200" fill="#1a1c21"/><rect x="40" y="288" width="54" height="22" rx="6" fill="#4a4e55"/><path d="M52 296 q14 -4 30 6" stroke="#7a1a12" stroke-width="5" fill="none" opacity=".9"/>
    <rect x="512" y="446" width="22" height="12" fill="#f1ede2" transform="rotate(-12 523 452)"/><rect x="514" y="450" width="10" height="2" fill="#23262a" transform="rotate(-12 523 452)"/>
    <rect x="700" y="30" width="80" height="22" rx="3" fill="#e2b13f"/><text x="740" y="46" fill="#1b1606" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="14" text-anchor="middle">CAB 11</text>`;
  }
};
c.statements = {
  intro:"Police released only that the driver was found dead and 'the dashcam had been damaged'. That the memory card was missing was withheld. One sentence shows knowledge of it. Click it.",
  blocks:[
    {who:"Silas Grey",s:[["g1","I got out at Departures and went straight through security."],["g2","Whoever did it took the camera's memory card, I suppose, so there's no footage."],["g3","I'd never seen that driver before in my life."]]},
    {who:"Dario Fenn",s:[["d1","Yes, we had a fight. Over a fare, nothing more."],["d2","Heard he got robbed for his takings. Sad way to go."],["d3","I was driving all night. Check my cab."]]},
    {who:"Lena Brandt",s:[["l1","Dad texted me at half two. He said he finally knew."],["l2","I was working the Cairo flight."],["l3","We argued about selling the licence. I didn't want to."]]},
    {who:"Marta Quill",s:[["q1","His complaint was nonsense. Ask anyone."],["q2","I didn't move from the dispatch desk all night."],["q3","He'd parked at the dark end. He never did that."]]},
    {who:"Jonah Mbeki",s:[["j1","I saw the cab door open and the light on."],["j2","I never touched any wallet."],["j3","I called security straight away."]]}],
  correct:"g2",
  fb:{g1:"An alibi claim. Check the flight.",g3:"Testable.",d1:"Motive, openly.",d2:"Robbery is what everyone heard. Not a slip.",d3:"Testable.",l1:"Interesting. Knew what?",l2:"Testable.",l3:"Motive, openly.",q1:"Defensive, but not a slip.",q2:"Testable.",q3:"Worth noting, but anyone on the rank could see that.",j1:"Consistent with his call.",j2:"Testable on camera.",j3:"Testable."},
  success:"Police only said the dashcam was 'damaged'. Silas Grey knows the memory card itself was taken. Only the person who took it would know that."
};
c.prints = {
  title:"Latent print, rear door handle", latentLabel:"Lifted latent (inside rear handle, in blood)", cands:["silas","dario","jonah","lena"], culprit:"silas", rot:-26,
  P:{silas:{type:"loop",cx:98,cy:114,w:2.9,ph:.9,k:.61,seed:141},dario:{type:"loop",cx:104,cy:110,w:3.3,ph:2.6,k:.6,seed:142},jonah:{type:"whorl",cx:100,cy:120,sx:1.3,a:3.4,w:2.7,ph:1.8,k:.59,seed:143},lena:{type:"arch",cx:100,cy:128,a:36,b:52,w:2.8,ph:.4,k:.62,seed:144}},
  fails:{dario:"A loop, but the delta never lines up.",jonah:"A whorl can't make this open loop.",lena:"An arch has no core."},
  success:"Identified: Silas Grey, right thumb."
};
c.hand = {
  intro:"The last fare signed Brandt's paper receipt book as 'J. Smith'. Compare the signature with exemplars.",
  note:"61.70 — paid card<br>J. Smith", noteFont:"'Nothing You Could Do', cursive", noteSize:26,
  exemplar:"Received with thanks — 61.70 — J. Smith",
  cands:[{k:"silas",f:"'Nothing You Could Do', cursive",sz:18},{k:"dario",f:"'Reenie Beanie', cursive",sz:28},{k:"jonah",f:"Caveat, cursive",sz:24},{k:"marta",f:"'Homemade Apple', cursive",sz:15}],
  culprit:"silas", success:"Match: Silas Grey. The tall S and the long trailing h."
};
c.timeline = {
  intro:"Order the last ride using the booking, the incident report, the meter, the terminal records and the cleaner's call. Times are hidden until you get it right.",
  ev:[{id:"a",t:"A ride is booked from Marina Point as 'J. Smith'",tm:"02:04"},{id:"b",t:"Cab 11 picks up the fare at Marina Point",tm:"02:10"},{id:"c",t:"Cab 11 parks at the unlit far end of the rank",tm:"02:44"},{id:"d",t:"The meter stops at 61.70",tm:"02:49"},{id:"e",t:"A man gets into cab 44 at the Departures drop-off",tm:"03:02"},{id:"f",t:"Dario Fenn drops a fare in Old Town",tm:"03:15"},{id:"g",t:"Jonah Mbeki finds cab 11 and calls security",tm:"03:40"},{id:"h",t:"PM 611 to London departs with seat 3A empty",tm:"05:40"}],
  success:"The fare never went to Departures. He walked from the dark end of the rank into another cab, back to the Marina."
};
c.verdict = {
  culprit:"silas", methodLabel:"How Brandt was killed", method:"backseat", methodMiss:"That doesn't fit the blow from behind, the blood on the rear handle or the staged robbery.",
  methods:{backseat:"Struck from the back seat, then a robbery staged",mugged:"Mugged at the rank by a passer-by",fight:"Killed in a fight with another driver",collapse:"Collapsed, then robbed"},
  motive:"silas", motives:{silas:"Silence the only witness to his 2019 hit-and-run",dario:"A feud over the rank",lena:"Inherit the cab licence",marta:"Stop his complaint about her",jonah:"Robbery"},
  pillars:[
    {ev:["cloudclip","witness2019","notebook"],pts:3,hit:"Motive: Brandt had recognised him as the 2019 hit-and-run driver.",miss:"No motive shown for the accused."},
    {ev:["printlab"],pts:3,hit:"Means: his print is on the inside rear handle, in Brandt's blood.",miss:"Nothing ties the accused to the blow."},
    {ev:["cardholder","returncab","airportcctv","tiprank","silasflight"],pts:3,hit:"Opportunity: he booked the ride, never boarded his flight, and left in another cab.",miss:"The jury believes the accused flew to London."}],
  bonus:[{ev:"transcripts",pts:1,hit:"He knew the memory card was taken."},{ev:"handlab",pts:1,hit:"He signed the receipt as 'J. Smith'."}],
  defence:[
    {claim:"Mr Brandt's wallet turned up in a bin beside the cleaner's trolley.",rebut:["jonahcctv"],pts:3},
    {claim:"Our client was on a flight to London that morning.",rebut:["silasflight","returncab","airportcctv"],pts:3}],
  questions:[
    {q:"Where was Brandt struck from?",o:["The driver's door","The back seat","Outside the cab","The front passenger seat"],a:1},
    {q:"What name was the ride booked under?",o:["Silas Grey","J. Smith","Dario Fenn","No name"],a:1},
    {q:"Why did the killer take the dashcam card?",o:["To sell it","It recorded Brandt naming him","It held the takings","By accident"],a:1}],
  solution:"In August 2019 Silas Grey killed a cyclist on Marina Road and drove away. Elias Brandt saw the car and a driver with a scarred eyebrow, but not the plate. Five years later Brandt picked up a 'J. Smith' from Marina Point and recognised the scar in his mirror. On the way he said so, and the dashcam heard it. Grey had him park at the dark end of the rank, hit him from the back seat, pulled the dashcam card, took the wallet and takings to fake a robbery, and dumped the wallet in a bin by the cleaners' trolley. He walked to Departures, took cab 44 home to the Marina, and let his London flight leave without him. He forgot that the camera backed itself up, and that police had never said the card was missing."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  booking <name>    Ride-app bookings for a driver's last job
  card <last 4>     Payment card holder lookup
  flight <name>     Airline manifests and boarding status
  gps <name>        Taxi GPS trace (licensed cabs)
  cab <number>      Airport taxi rank log for a cab
  cctv <area>       Airport cameras (rank, dropoff)
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  clear             Clear the screen`,
  quick:["help","person brandt","booking brandt","cctv rank","case PMPD-19-0814-033"],
  alias:{silas:"grey",grey:"grey",dario:"fenn",fenn:"fenn",lena:"lena",marta:"quill",quill:"quill",jonah:"mbeki",mbeki:"mbeki",elias:"brandt",brandt:"brandt"},
  miss:{person:"No citizen record matches.",booking:"No bookings for that driver.",card:"No card on file with those digits.",flight:"No flights for that name.",gps:"No licensed cab for that driver.",cab:"No rank log for that cab.",cctv:"No camera for that area. Try rank or dropoff.",alibi:"No alibi on file.",case:"No such case."},
  cmds:{
    "person grey":{out:"GREY, Silas\nDOB 1985-11-03 · Res: Marina Point Tower, apt 2201\nPhone 050 555 3301 · Vehicle PM-8833 (grey saloon, resprayed 2019)\nPartner, Grey & Holt LLP\nDistinguishing marks: scar through left eyebrow\nPriors: none"},
    "person fenn":{out:"FENN, Dario\nDOB 1997-01-14 · Taxi driver, cab 27\nPriors: affray caution (2025)"},
    "person lena":{out:"BRANDT, Lena\nDOB 1992-07-07 · Cabin crew, Meridian Air\nNext of kin of BRANDT, Elias"},
    "person quill":{out:"QUILL, Marta\nDOB 1980-04-04 · Night dispatcher, Meridian Cabs\nComplaint against her filed 2 Oct by E. Brandt (job allocation)"},
    "person mbeki":{out:"MBEKI, Jonah\nDOB 2003-02-11 · Cleaner, PMR Terminal 2\nPriors: theft caution (2024)"},
    "person brandt":{out:"BRANDT, Elias (DECEASED 21 Oct)\nDOB 1968-03-30 · Taxi licence PMT-4418, cab 11\nWitness in PMPD-19-0814-033 (Marina Road hit-and-run)\nNext of kin: Lena Brandt (daughter)"},
    "booking brandt":{out:"RIDENOW · CAB 11 · LAST JOB\nBooked 02:04 · Name: 'J. Smith' · Pickup Marina Point · Drop PMR Departures\nPaid by card ****3301",cls:"hit",unl:"booking"},
    "card 3301":{out:"CARD ****3301 · Harbour Mutual Bank\nHolder: GREY, Silas",cls:"hit",unl:"cardholder"},
    "flight grey":{out:"MERIDIAN AIR PM 611 · PMR → LHR · 21 Oct 05:40\nGREY, Silas · seat 3A · checked in online 20 Oct 22:10\nBOARDING STATUS: DID NOT BOARD · no security scan",cls:"hit",unl:"silasflight"},
    "flight lena":{out:"MERIDIAN AIR PM 344 · CAI → PMR · 21 Oct\nCrew: BRANDT, Lena · departed 23:50 · landed 04:20",cls:"hit",unl:"lenaflight"},
    "gps fenn":{out:"CAB 27 · FENN, Dario · 21 Oct\n02:20–02:55 Marina → Old Town fare\n03:15 drop-off Old Town\n03:30–04:10 Old Town rank",cls:"hit",unl:"dariogps"},
    "gps brandt":{out:"CAB 11 · BRANDT, Elias · 21 Oct\n02:10 Marina Point\n02:44 PMR rank, far end (unlit bay 31)\nNo movement after 02:44"},
    "cab 44":{out:"PMR RANK LOG · CAB 44\n03:02 Hired at Departures drop-off (not from rank)\n03:31 Drop: Marina Point Tower · paid cash",cls:"hit",unl:"returncab"},
    "cab 11":{out:"PMR RANK LOG · CAB 11 · entered 02:44, never joined the queue"},
    "cctv rank":{out:"PMR RANK CAMERA 2 (far end, low light)\n02:58  Figure in a grey coat walks from bay 31 toward the forecourt\n03:00  Same figure drops an item in the bin beside the cleaners' trolley\n03:38  J. Mbeki arrives at bay 31\n03:40  J. Mbeki calls security",cls:"hit",unl:"jonahcctv"},
    "cctv dropoff":{out:"Departures drop-off footage held by the lab. See exhibits."},
    "alibi quill":{out:"ALIBI · QUILL, Marta: VERIFIED\nDispatch radio and desk camera 22:00–06:00.",cls:"hit",unl:"martadispatch"},
    "alibi fenn":{out:"ALIBI · FENN, Dario: see 'gps fenn'"},
    "alibi lena":{out:"ALIBI · BRANDT, Lena: see 'flight lena'"},
    "alibi mbeki":{out:"ALIBI · MBEKI, Jonah: on shift, forecourt rounds. See 'cctv rank'."},
    "alibi grey":{out:"ALIBI · GREY, Silas: says he flew PM 611. See 'flight grey'."},
    "case pmpd190814033":{out:"PMPD-19-0814-033 · FATAL HIT-AND-RUN · 14 Aug 2019 01:30, Marina Road\nCyclist killed. Grey saloon, driver in a suit, scar through left eyebrow (witness E. Brandt). Plate not seen.\nStatus: OPEN"},
    "case pmpd261021083":{out:"PMPD-26-1021-083 · HOMICIDE · BRANDT, Elias · OPEN"}
  }
};
const E=c.ev;
E("incident","Reports","Incident report","Police report",null,()=>D("PMR AIRPORT POLICE POST","PMPD-26-1021-083",KV([["Found","21 Oct 2026, 03:40, by cleaner J. Mbeki"],["Location","PMR taxi rank, unlit far end (bay 31)"],["Victim","Elias BRANDT, 58, cab 11"],["Apparent motive","Robbery: wallet and takings missing"]])+`<h4>Information release</h4><p>Press told 'the driver was found dead and the dashcam had been damaged'. <b>That the dashcam memory card was removed is WITHHELD.</b></p>`,"CONFIDENTIAL"));
E("scene","Scene","Cab 11 photograph","Photograph",null,()=>D("SCENE PHOTO 01 / CAB 11","21 OCT 03:55",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("licence","Records","Brandt's taxi licence","Licence",null,()=>D("PORT MERIDIAN TAXI AUTHORITY","LICENCE PMT-4418",KV([["Driver","BRANDT, Elias"],["Cab","No. 11"],["Plate","PM-T011"],["Since","1999"]])));
E("wallet","Scene","Wallet in the bin","Physical evidence",null,()=>D("ITEM 4 · WALLET","RECOVERED 04:30",`<p>Brandt's wallet, empty of cash, found in the forecourt bin beside the cleaners' trolley.</p>`));
E("receipt","Scene","Receipt book","Physical evidence",null,()=>D("ITEM 6 · PAPER RECEIPT BOOK","CAB 11",`<div style="display:grid;place-items:center;padding:16px 0"><div class="sticky" style="background:#f6f3ea;font-family:'Nothing You Could Do',cursive;font-size:26px">${c.hand.note}</div></div><p>The last receipt, signed by the passenger.</p>${LAB("hand","Compare handwriting")}`));
E("article","Press","Ledger: Five years, no arrest","Newspaper article",null,()=>`<div class="doc news"><div class="mast">The Port Meridian Ledger</div><p class="dim" style="text-align:center;font-family:var(--mono);font-size:12px">THURSDAY 14 AUGUST 2025</p><h5>Six years on, no arrest in Marina Road cyclist death</h5><div class="cols"><p>It is six years today since cyclist Tom Ashby was killed on Marina Road in the early hours of 14 August 2019. The car, a grey saloon, was never found.</p><p>The only witness, a taxi driver, told police he would 'know the face again anywhere'.</p></div></div>`);
E("messages","Digital","Brandt's phone: messages","Text messages",null,()=>D("HANDSET · E. BRANDT","20–21 OCT",`<div class="chat">
<div class="msg"><small>Dario (cab 27) · 20 Oct 22:14</small>Jump the queue again old man and see what happens</div>
<div class="msg"><small>Marta (dispatch) · 20 Oct 23:40</small>Withdraw the complaint and you get the airport jobs back.</div>
<div class="msg me"><small>Elias → Lena · 21 Oct 02:31</small>Can't talk. Tell you at breakfast. I finally know.</div></div>`));
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 21 OCT","AIRPORT POLICE POST",c.statements.blocks.map(b=>`<h4>${b.who}</h4><p>${b.s.map(x=>x[1]).join(" ")}</p>`).join("")));
E("notebook","Digital","Brandt's logbook, last page","Coded message",null,()=>D("ITEM 7 · FARE LOGBOOK","LAST ENTRY",`<p style="font-size:18px;letter-spacing:.08em;word-break:break-word">${c.cipher.ct}</p><p class="dim" style="font-family:'Reenie Beanie',cursive;font-size:22px">(margin) shift back by my cab number</p>${C.done.cipher?`<p><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Work on it in the lab")}`));
E("feud","Statements","Rank argument, 14 Oct","Witness statement",null,()=>D("STATEMENT · RANK MARSHAL","14 OCT",`<p>"Fenn and Brandt went at it over the queue. Fenn said he'd 'sort him out'. I split them up. It was words, mostly."</p>`));
E("autopsy","Reports","Autopsy summary","Autopsy report","scene",()=>D("OFFICE OF THE MEDICAL EXAMINER","ME-26-2433",KV([["Cause","Single heavy blow to the back left of the head"],["Direction","From behind and slightly above: consistent with an attacker in the rear seat"],["Time","About 02:45–03:00"]])));
E("dashlab","Reports","Dashcam maker's report","Lab report","statements",()=>D("ROADEYE DASHCAMS · SUPPORT","CAMERA RE-11-4418",`<p>The card was ejected while recording at 02:48. This model also uploads short audio clips to the owner's cloud account. The last upload completed at <b>02:46</b>. The account is protected by the owner's four-digit PIN.</p>${LAB("code","Open the cloud account")}`));
E("witness2019","Records","Brandt's 2019 witness statement","Witness statement","cipher",()=>D("PMPD-19-0814-033","WITNESS: E. BRANDT",`<p>"A grey saloon came off Marina Road fast. The driver got out for a second, a man in a suit, thirties, with a scar right through his left eyebrow. Then he drove off. I didn't get the plate. I'd know the face again."</p>`));
E("cloudclip","Digital","Dashcam cloud clip, 02:45","Audio recording","code",()=>audioDoc("ROADEYE CLOUD · CAB 11","21 OCT 02:45 · 0:28",[[0,"[0:00] Brandt: You don't remember me. Marina Road. August 2019."],[1700,"[0:07] Passenger: I think you've got me confused with someone."],[3300,"[0:13] Brandt: That scar. I said I'd know it. I'm going to the police in the morning."],[5000,"[0:21] Passenger: Pull in at the end there. Away from the lights."]]));
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-1144",`<p>Partial latent in blood on the inside rear door handle. Identified: <b>S. Grey</b>. Others excluded.</p>`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0212",`<p>The 'J. Smith' receipt signature was very probably written by <b>S. Grey</b>.</p>`));
E("airportcctv","Records","Departures drop-off camera","CCTV","timeline",()=>D("PMR · DEPARTURES DROP-OFF CAM 4","21 OCT 03:02",`<p>A man in a grey coat with a scar through his left eyebrow gets into cab 44. Facial match: <b>Silas Grey</b>.</p>`));
E("booking","Records","Last booking: cab 11","Booking record","term",()=>D("RIDENOW","CAB 11 · LAST JOB",KV([["Booked","02:04 as 'J. Smith'"],["Pickup","Marina Point, 02:10"],["Paid","Card ****3301"]])));
E("cardholder","Records","Card ****3301","Financial record","term",()=>D("HARBOUR MUTUAL BANK","CARD ****3301",`<p>Holder: <b>GREY, Silas</b>.</p>`));
E("silasflight","Records","PM 611 boarding record","Flight record","term",()=>D("MERIDIAN AIR · PM 611","21 OCT 05:40",`<p>GREY, Silas, seat 3A. Checked in online. <b>Did not board.</b> No security scan.</p>`));
E("returncab","Records","Cab 44 rank log","Taxi record","term",()=>D("PMR RANK LOG","CAB 44",`<p>Hired at the Departures drop-off at 03:02, not from the rank. Dropped at Marina Point Tower at 03:31. Paid cash.</p>`));
E("dariogps","Records","Cab 27 GPS","Alibi verification","term",()=>D("TAXI GPS · CAB 27","21 OCT",`<p>Dario Fenn was on a Marina → Old Town fare 02:20–03:15, then at the Old Town rank.</p>`));
E("lenaflight","Records","Lena Brandt's flight","Alibi verification","term",()=>D("MERIDIAN AIR · PM 344","CAI → PMR",`<p>Lena Brandt working as crew. Landed 04:20.</p>`));
E("martadispatch","Records","Dispatch desk record","Alibi verification","term",()=>D("MERIDIAN CABS · DISPATCH","21 OCT",`<p>Marta Quill on the radio and on the desk camera all night.</p>`));
E("jonahcctv","Records","Rank camera: far end","CCTV","term",()=>D("PMR RANK CAMERA 2","21 OCT",TB(["Time","Event"],[["02:58","Grey-coated figure walks from bay 31 to the forecourt"],["03:00","Same figure drops something in the bin by the cleaners' trolley"],["03:38","J. Mbeki reaches bay 31"],["03:40","J. Mbeki calls security"]])));
})();

/* ---------------- CASE 8: WARD NINE ---------------- */
(function(){
const c = defCase({
  id:"ward", title:"Ward Nine", code:"PMPD-26-1022-094", short:"CASE 094", crime:"Homicide", genre:"Hospital noir", diff:5, cover:"ward",
  blurb:"The lights on Ward Nine went out for four minutes. When they came back, the man in room 9 was dead, his monitor muted, and his will still unchanged.",
  briefDate:"22 Oct 2026, 09:00", headline:"Four minutes of dark on Ward Nine",
  summary:[
    "At 02:12 the power on Ward Nine of Harbour General failed. It came back at 02:17. At 02:31 the night nurse found Victor Hale, 67, dead in room 9, his heart monitor's alarm muted. A sedative nobody prescribed was in his blood.",
    "Hale was a property developer recovering well from surgery. He had a lawyer booked for 09:00 to change his will. His daughter inherits, his business partner wanted control, his nurse had him on the drip, and a porter's initials are on the plant-room sheet. His son-in-law, a doctor at this hospital, says he was home asleep."],
  intro:["Victim: Victor Hale, 67. Property developer. Room 9, Ward Nine.","The ward's power failed at 02:12. It came back at 02:17.","His monitor was muted. A drug nobody prescribed was in his drip.","A lawyer was booked for nine to change his will.","The lights are on now, Detective {name}. Find out who turned them off."],
  screen:["PMPD RECORDS v4.2","> card 7712","PLANT ROOM L2 02:11 …","> plate PM-7712","STAFF CAR PARK …"],
  CLEARS:{abelcall:["abel"],kofiradio:["kofi"],clarahome:["clara"],ruthhotel:["ruth"],printlab:["abel","kofi","clara","ruth"],handlab:["abel","kofi","clara","ruth"]},
  POINTS:{lawyermail:["marcus"],notebook:["marcus"],debts:["marcus"],tipboard:["marcus"],printlab:["marcus"],handlab:["marcus"],cardlog:["marcus"],marcuscar:["marcus"],plantcctv:["marcus"],abel2:["marcus"],signsheet:["kofi"],transcripts:["marcus","abel"],messages:["clara","ruth","marcus"],tox:["abel","marcus"],monitorlog:["abel","marcus"],will:["clara","ruth"]}
});
c.SUS = {
  marcus:{name:"Dr Marcus Wren",init:"MW",short:"Son-in-law, anaesthetist",age:43,role:"Consultant anaesthetist at Harbour General; married to Clara",phone:"050 555 7712",car:"PM-7712",motive:"None stated. Says he loved Victor 'like a father'.",alibi:"Says he was at home asleep. Clara says so too.",rel:"Married Clara in 2016."},
  clara:{name:"Clara Wren",init:"CW",short:"Daughter",age:39,role:"Victor's only daughter; interior designer",phone:"055 555 1909",car:"PM-1909",motive:"Inherits most of the estate under the current will.",alibi:"Says she was home with Marcus.",rel:"Visited her father until 23:40."},
  abel:{name:"Abel Ortiz",init:"AO",short:"Night nurse",age:36,role:"Charge nurse, Ward Nine, nights",phone:"052 555 0909",car:"None",motive:"Set up the drip. Found the body sixteen minutes after the alarm was muted.",alibi:"Says he was with a patient in room 4.",rel:"Nursed Victor for three nights."},
  kofi:{name:"Kofi Asante",init:"KA",short:"Porter",age:28,role:"Night porter, Harbour General",phone:"054 555 0717",car:"None",motive:"His initials are on the plant-room sign-in sheet at 02:10.",alibi:"Says he was moving patients in A&E all night.",rel:"Took Victor to theatre last week."},
  ruth:{name:"Ruth Delaney",init:"RD",short:"Business partner",age:55,role:"Partner, Hale & Delaney Developments",phone:"050 555 5500",car:"PM-5500",motive:"Wanted control of the company. Victor's shares go to Clara, not to her.",alibi:"Says she was at a hotel in Doha for a conference.",rel:"Partners for twenty years."}
};
c.OBJ = [
  {id:"scene",lab:"Scene photo",t:"Search room 9",d:"Find four points of interest in Victor's room.",reward:["tox","monitorlog"]},
  {id:"statements",lab:"Statements",t:"Catch the slip",d:"Someone knows how the drug went in.",reward:["abel2"]},
  {id:"cipher",lab:"Cipher",t:"Decode Victor's crossword notes",d:"The last page of his puzzle book is enciphered.",reward:["lawyermail"]},
  {id:"prints",lab:"Fingerprints",t:"Match the breaker print",d:"A partial was lifted from the Ward Nine breaker in the plant room.",reward:["printlab"]},
  {id:"hand",lab:"Handwriting",t:"Who signed the plant-room sheet?",d:"The 02:10 line says 'K.A., maintenance'.",reward:["handlab"]},
  {id:"timeline",lab:"Timeline",t:"Reconstruct the four minutes",d:"Order the night's events.",reward:["plantcctv"],needs:"scene"},
  {id:"records",t:"Work the terminal",d:"Turn up four records that confirm or break an alibi.",reward:[]}
];
c.records = {ev:["abelcall","kofiradio","clarahome","ruthhotel","marcuscar","cardlog","debts"],n:4};
c.hints = {
  scene:["The drip, the monitor, the floor and the bedside table.","The IV bag's injection port, the muted monitor, something small under the bed (zoom in), and the card on the flowers."],
  statements:["Police withheld how the drug was given. Re-read the incident report.","Who mentions the injection port on the drip?"],
  cipher:["Victor wrote a hint for the key in the margin.","A keyword cipher. The key is his room number, spelt out."],
  prints:["Rotate the latent over each reference.","A loop latent. Only one candidate lines up, at about +19°."],
  hand:["Compare the K, the A and the 2s with each exemplar.","Initials can be faked; letter shapes can't. Look for the tight, upright hand."],
  timeline:["Use the visitor log in the incident report, the monitor log, the terminal's card and car records, and the nurse's discovery.","The drug store, then the plant room, then the dark, then the mute, then the arrest."],
  records:["Test every alibi, then follow the staff card and the staff car park.","Try alibi on each suspect, card 7712, plate PM-7712 and debt wren."]
};
c.react = {
  scene:"A fresh puncture in the drip port, a muted alarm, and a theatre shoe cover under the bed. Tox and the monitor log are in.",
  statements:"He described the port on the drip. That was never released. And the nurse has remembered something.",
  cipher:"'M is stealing from theatre stock.' The lawyer's email confirms Monday's appointment.",
  prints:"Marcus Wren's print on the Ward Nine breaker.",
  hand:"The porter's initials, in Marcus Wren's hand.",
  timeline:"The plant-room corridor runs on a different circuit. Its camera kept recording.",
  records:"The card, the car, the debts. The doctor wasn't asleep."
};
c.unlockLines = {abelcall:"Abel was in room 4 the whole time.",kofiradio:"Kofi was in A&E on the radio.",clarahome:"Clara was home.",ruthhotel:"Ruth was in Doha.",marcuscar:"His car was in the staff car park.",cardlog:"His card opened two doors that night.",debts:"He owes a casino a great deal."};

c.cipher = {plain:"MONDAY: NEW WILL. M IS STEALING FROM THEATRE STOCK. DO NOT TELL CLARA YET.", title:"Victor's puzzle book", intro:"The last page of Victor's crossword book isn't a crossword. Decode it.", success:"Victor had found that 'M' was stealing drugs from theatre stock, and was changing his will on Monday."};
c.cipher.ct = vig(c.cipher.plain,"NINE",1);

c.scene = {
  title:"Room 9, 02:40", intro:"Victor's room shortly after he was found. Find four points of interest. One is on the floor and small.",
  hots:[
    {id:"iv",x:160,y:130,r:28,t:"The IV bag's injection port has a fresh puncture and a bead of clear fluid. Nothing was due through the port overnight."},
    {id:"monitor",x:640,y:160,r:32,t:"The heart monitor shows ALARM MUTED. It was silenced at the bedside, not from the nurses' station."},
    {id:"bootie",x:430,y:456,r:10,zoom:2,t:"A blue theatre shoe cover under the bed. Ward staff don't wear them. Theatre staff do."},
    {id:"card",x:690,y:360,r:20,t:"A card on the flowers: 'Get well soon, Dad. Love, C & M'."}],
  draw(){
    return `<rect width="800" height="500" fill="#161b1f"/><rect width="800" height="320" fill="#1d2428"/><rect x="300" y="40" width="200" height="140" fill="#0b1018" stroke="#2c353b" stroke-width="6"/><circle cx="440" cy="80" r="10" fill="#d9e1e6" opacity=".4"/>
    <rect y="320" width="800" height="180" fill="#20272b"/>${Array.from({length:8},(_,i)=>`<rect x="${i*100}" y="320" width="1" height="180" fill="#2a3237"/>`).join("")}
    <rect x="150" y="60" width="6" height="300" fill="#8a949b"/><rect x="120" y="58" width="70" height="5" fill="#8a949b"/><rect x="134" y="96" width="44" height="64" rx="8" fill="#d9eef5" opacity=".75" stroke="#9fbccc"/><rect x="152" y="160" width="8" height="10" fill="#c9d4da"/><circle cx="156" cy="168" r="3" fill="#7fd1ff"/><path d="M156 172 Q170 260 300 290" stroke="#c9d4da" stroke-width="2" fill="none"/>
    <rect x="240" y="260" width="360" height="110" rx="8" fill="#e6e9ea"/><rect x="240" y="300" width="360" height="70" rx="6" fill="#9fb3bf"/><rect x="250" y="270" width="90" height="34" rx="10" fill="#f6f7f7"/><path d="M340 300 Q420 285 520 300 L590 300 L590 330 L340 330Z" fill="#b8c8d1"/>
    <rect x="250" y="370" width="10" height="70" fill="#5d666c"/><rect x="580" y="370" width="10" height="70" fill="#5d666c"/>
    <rect x="590" y="110" width="110" height="90" rx="6" fill="#0d1215" stroke="#3a454e" stroke-width="4"/><path d="M600 160 l14 0 6 -16 8 30 6 -14 16 0" stroke="#5fb380" stroke-width="2" fill="none" opacity=".35"/><text x="645" y="134" fill="#ff5a45" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle">ALARM MUTED</text><text x="645" y="188" fill="#ff8a5a" font-family="IBM Plex Mono, monospace" font-size="13" text-anchor="middle">HR — —</text>
    <rect x="640" y="330" width="110" height="80" fill="#3a2e26"/><rect x="660" y="300" width="20" height="32" rx="4" fill="#cfe3ee" opacity=".6"/>${[0,1,2,3,4].map(i=>`<circle cx="${662+i*5}" cy="${296-(i%2)*8}" r="6" fill="${["#d9634f","#e2b13f","#f0b8c8","#d9634f","#b48ead"][i]}"/>`).join("")}<rect x="680" y="350" width="26" height="18" fill="#f6f3ea" transform="rotate(-6 693 359)"/>
    <ellipse cx="430" cy="458" rx="14" ry="6" fill="#5b8fd1"/><path d="M418 456 q12 -6 24 0" stroke="#3a6ea5" stroke-width="1.5" fill="none"/>
    <rect x="30" y="20" width="90" height="26" rx="3" fill="#e2b13f"/><text x="75" y="38" fill="#1b1606" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="15" text-anchor="middle">ROOM 9</text>`;
  }
};
c.statements = {
  intro:"Police said only that Mr Hale died 'after an unexpected drug reaction during a power cut'. How the drug was given was withheld. One sentence reveals it. Click it.",
  blocks:[
    {who:"Dr Marcus Wren",s:[["w1","I was at home asleep. Clara will tell you."],["w2","In the dark, anyone could have pushed something into the port on his drip."],["w3","Victor was like a father to me."]]},
    {who:"Clara Wren",s:[["c1","We left Dad at twenty to midnight. He was joking with the nurse."],["c2","Marcus was asleep next to me all night."],["c3","Dad said he had news for us on Monday."]]},
    {who:"Abel Ortiz",s:[["a1","I was in room 4 when the lights went."],["a2","The alarm should have sounded at the station. It didn't."],["a3","I checked his drip at midnight. It was fine."]]},
    {who:"Kofi Asante",s:[["k1","I've never been in that plant room."],["k2","I was in A&E all night, on the radio."],["k3","Those aren't my initials. Well, they are, but I didn't write them."]]},
    {who:"Ruth Delaney",s:[["r1","I was in Doha. Check the hotel."],["r2","Victor and I disagreed about the company. That's business."],["r3","Clara will be a very rich woman now."]]}],
  correct:"w2",
  fb:{w1:"An alibi claim. Test it.",w3:"Sentiment.",c1:"Matches the visitor log.",c2:"She's his alibi. Test it.",c3:"Interesting. What news?",a1:"Testable.",a2:"True: it was muted at the bedside.",a3:"Testable.",k1:"The sheet says otherwise.",k2:"Testable.",k3:"Interesting. Compare the handwriting.",r1:"Testable.",r2:"Motive, openly.",r3:"Spiteful, but not a slip."},
  success:"Nobody was told how the drug got in. Dr Wren mentions 'the port on his drip', the exact route. Only someone who used it, or watched it used, would know."
};
c.prints = {
  title:"Latent print, Ward Nine breaker", latentLabel:"Lifted latent (breaker W9 handle, plant room L2)", cands:["marcus","kofi","abel","clara"], culprit:"marcus", rot:19,
  P:{marcus:{type:"loop",cx:100,cy:112,w:3,ph:1.3,k:.62,seed:151},kofi:{type:"loop",cx:96,cy:118,w:2.6,ph:2.9,k:.6,seed:152},abel:{type:"whorl",cx:102,cy:120,sx:1.4,a:3.1,w:2.8,ph:.7,k:.59,seed:153},clara:{type:"arch",cx:100,cy:130,a:42,b:44,w:2.7,ph:1.9,k:.61,seed:154}},
  fails:{kofi:"A loop, but the ridge count from core to delta doesn't match.",abel:"A whorl can't make this loop.",clara:"An arch has no core."},
  success:"Identified: Dr Marcus Wren, right index."
};
c.hand = {
  intro:"The plant-room sign-in sheet says 'K.A., maintenance' at 02:10. Compare the entry with exemplars.",
  note:"02:10 — K.A.<br>maintenance W9", noteFont:"Caveat, cursive", noteSize:30,
  exemplar:"02:20 — K.A. — W9 check — 22/10",
  cands:[{k:"marcus",f:"Caveat, cursive",sz:24},{k:"kofi",f:"'Reenie Beanie', cursive",sz:28},{k:"abel",f:"'Nothing You Could Do', cursive",sz:18},{k:"ruth",f:"'Homemade Apple', cursive",sz:15}],
  culprit:"marcus", success:"Match: Dr Marcus Wren. Upright, tight letters and a looped 2."
};
c.timeline = {
  intro:"Order the night using the incident report, the monitor log and the terminal records. Times are hidden until you get it right.",
  ev:[{id:"a",t:"Clara and Marcus leave Victor's room",tm:"23:40"},{id:"b",t:"Marcus's car enters the staff car park",tm:"01:49"},{id:"c",t:"Marcus's card opens the theatre drug store",tm:"01:58"},{id:"d",t:"A staff card opens the level 2 plant room",tm:"02:11"},{id:"e",t:"Ward Nine loses power",tm:"02:12"},{id:"f",t:"Room 9's monitor alarm is muted at the bedside",tm:"02:13"},{id:"g",t:"Power returns to Ward Nine",tm:"02:17"},{id:"h",t:"Nurse Ortiz finds Victor",tm:"02:31"}],
  success:"Drug store, plant room, darkness, a muted alarm. Someone planned those four minutes."
};
c.verdict = {
  culprit:"marcus", methodLabel:"How Victor died", method:"iv", methodMiss:"That doesn't fit the toxicology, the punctured port or the planned power cut.",
  methods:{iv:"A sedative pushed into his drip during a power cut he caused",neglect:"Died because the nurse missed the alarm",natural:"Natural heart failure during the blackout",smother:"Smothered in the dark"},
  motive:"marcus", motives:{marcus:"Stop Victor reporting his thefts and changing the will",clara:"Inherit before the will changed",abel:"A mercy killing",kofi:"Robbery",ruth:"Take control of the company"},
  pillars:[
    {ev:["lawyermail","notebook","debts","tipboard"],pts:3,hit:"Motive: Victor had caught him stealing theatre drugs and was changing the will in the morning.",miss:"No motive shown for the accused."},
    {ev:["printlab","cardlog"],pts:3,hit:"Means: his card opened the drug store and the plant room, and his print is on the breaker.",miss:"Nothing ties the accused to the drug or the power cut."},
    {ev:["marcuscar","plantcctv","abel2"],pts:3,hit:"Opportunity: he was in the hospital when the lights went out.",miss:"The jury believes the accused was at home asleep."}],
  bonus:[{ev:"transcripts",pts:1,hit:"He described the route of the drug before anyone knew it."},{ev:"handlab",pts:1,hit:"He forged the porter's initials on the plant-room sheet."}],
  defence:[
    {claim:"The plant-room sheet shows the porter, Kofi Asante, at 02:10.",rebut:["handlab","kofiradio"],pts:3},
    {claim:"Dr Wren was at home asleep. His wife says so.",rebut:["marcuscar","cardlog","plantcctv"],pts:3}],
  questions:[
    {q:"Why was the ward's power cut?",o:["To steal from the ward","To kill the cameras and release the door locks","By accident","To stop the drip pump"],a:1},
    {q:"How did the drug get into Victor?",o:["In a tablet","Through the injection port on his drip","In his water","By inhaler"],a:1},
    {q:"Who was set up to take the blame?",o:["Nurse Ortiz","Porter Asante","Clara Wren","Ruth Delaney"],a:1}],
  solution:"Dr Marcus Wren had been stealing controlled drugs from theatre stock to cover casino debts. Victor found out, wrote it down in code, and booked his lawyer for 09:00 to change his will and report Marcus. That night Marcus slipped out while Clara slept, parked in the staff car park at 01:49, took a sedative from the theatre store at 01:58, and at 02:11 used his card on the level 2 plant room. He wrote 'K.A., maintenance' on the sign-in sheet and switched off Ward Nine's breaker. In four minutes of darkness, with the cameras down and the door locks released, he pushed the drug into Victor's drip, muted the monitor and left, losing a theatre shoe cover under the bed. The plant-room corridor camera, on a separate circuit, recorded him leaving."
};
c.term = {
  help:`COMMANDS
  person <name>     Citizen record
  plate <plate>     Vehicle registration and ANPR hits
  card <id>         Hospital staff-card door log
  debt <name>       Civil judgments and debts
  alibi <name>      Alibi verification status
  case <number>     Case file lookup
  clear             Clear the screen`,
  quick:["help","person wren","alibi ortiz","card 7712","debt wren"],
  alias:{marcus:"wren",wren:"wren",clara:"clara",abel:"ortiz",ortiz:"ortiz",kofi:"asante",asante:"asante",ruth:"delaney",delaney:"delaney",victor:"hale",hale:"hale"},
  miss:{person:"No citizen record matches.",plate:"No vehicle under that plate.",card:"No staff card with that ID. Staff cards in this case: 7712, 0909, 0717.",debt:"No judgments on file.",alibi:"No alibi on file.",case:"No such case."},
  cmds:{
    "person wren":{out:"WREN, Dr Marcus\nDOB 1983-08-08 · Consultant anaesthetist, Harbour General\nStaff card 7712 · Phone 050 555 7712 · Vehicle PM-7712\nPriors: none\nNote: hospital audit of theatre controlled-drug stock opened 15 Oct (discrepancies)"},
    "person clara":{out:"WREN, Clara (née Hale)\nDOB 1987-01-19 · Interior designer\nPhone 055 555 1909 · Vehicle PM-1909"},
    "person ortiz":{out:"ORTIZ, Abel\nDOB 1990-12-02 · Charge nurse, Ward Nine · Staff card 0909"},
    "person asante":{out:"ASANTE, Kofi\nDOB 1998-05-05 · Porter, Harbour General · Staff card 0717\nNo plant-room access on his card."},
    "person delaney":{out:"DELANEY, Ruth\nDOB 1971-03-03 · Partner, Hale & Delaney Developments\nPhone 050 555 5500"},
    "person hale":{out:"HALE, Victor (DECEASED 22 Oct)\nDOB 1959-06-14 · Hale & Delaney Developments\nNext of kin: Clara Wren (daughter)"},
    "plate pm7712":{out:"PM-7712 · keeper WREN, Marcus\nANPR · Harbour General staff car park\n  22 Oct 01:49  IN\n  22 Oct 02:40  OUT",cls:"hit",unl:"marcuscar"},
    "plate pm1909":{out:"PM-1909 · keeper WREN, Clara · no movement 21 Oct 23:58 → 22 Oct 08:10"},
    "card 7712":{out:"STAFF CARD 7712 · WREN, Dr M.\n22 Oct 01:58  Theatre controlled-drug store · OPEN\n22 Oct 02:11  Plant room L2 · OPEN\n(Off duty. No theatre lists that night.)",cls:"hit",unl:"cardlog"},
    "card 0909":{out:"STAFF CARD 0909 · ORTIZ, A. · Ward Nine doors only, 19:00–07:00"},
    "card 0717":{out:"STAFF CARD 0717 · ASANTE, K. · A&E and lifts. No plant-room access."},
    "debt wren":{out:"CIVIL JUDGMENTS · WREN, Marcus\n2026-03  Casino Royale Meridian Ltd  96,000  unpaid\n2026-07  Casino Royale Meridian Ltd  84,000  unpaid",cls:"hit",unl:"debts"},
    "alibi ortiz":{out:"ALIBI · ORTIZ, Abel: VERIFIED\nCall-bell log: room 4 bell answered 02:05, reset 02:22. Patient confirms.",cls:"hit",unl:"abelcall"},
    "alibi asante":{out:"ALIBI · ASANTE, Kofi: VERIFIED\nPorter radio log, A&E 01:50–02:40. A&E camera.",cls:"hit",unl:"kofiradio"},
    "alibi clara":{out:"ALIBI · WREN, Clara: VERIFIED\nHome Wi-Fi activity and phone at home all night. Doorbell camera: no one left the front door. (Garage door not covered.)",cls:"hit",unl:"clarahome"},
    "alibi delaney":{out:"ALIBI · DELANEY, Ruth: VERIFIED\nMarsa Hotel, Doha, 20–23 Oct. Key-card use 02:00.",cls:"hit",unl:"ruthhotel"},
    "alibi wren":{out:"ALIBI · WREN, Marcus: says home asleep; wife confirms. Unverified."},
    "case pmpd261022094":{out:"PMPD-26-1022-094 · HOMICIDE · HALE, Victor · OPEN"}
  }
};
const E=c.ev;
E("incident","Reports","Incident report","Police report",null,()=>D("PORT MERIDIAN POLICE DEPT.","PMPD-26-1022-094",KV([["Filed","22 Oct 2026, 04:10"],["Location","Harbour General, Ward Nine, room 9"],["Victim","Victor HALE, 67"],["Power","Ward Nine supply off 02:12–02:17 (breaker W9, plant room L2). Ward cameras and door maglocks fail open without power."],["Visitors","C. & M. Wren signed out 23:40"],["Found","02:31 by charge nurse A. Ortiz"]])+`<h4>Information release</h4><p>Family and press told Mr Hale died 'after an unexpected drug reaction during a power cut'. <b>How the drug was given is WITHHELD.</b></p>`,"CONFIDENTIAL"));
E("scene","Scene","Room 9 photograph","Photograph",null,()=>D("SCENE PHOTO 01 / WARD NINE, ROOM 9","22 OCT 02:40",`<div style="border-radius:2px;overflow:hidden">${sceneSVG(false)}</div>${LAB("scene","Examine in the lab")}`));
E("signsheet","Scene","Plant-room sign-in sheet","Physical evidence",null,()=>D("PLANT ROOM L2 · SIGN-IN SHEET","22 OCT",TB(["Time","Name","Reason"],[["19:30","Estates (J. Pell)","Chiller check"],[`<span style="font-family:Caveat,cursive;font-size:20px">02:10</span>`,`<span style="font-family:Caveat,cursive;font-size:20px">K.A.</span>`,`<span style="font-family:Caveat,cursive;font-size:20px">maintenance W9</span>`]])+LAB("hand","Compare handwriting")));
E("will","Records","Victor Hale's current will","Legal document",null,()=>D("LAST WILL · V. HALE","2019",`<p>Estate to Clara Wren. Company shares to Clara Wren, with Ruth Delaney given first refusal to buy.</p>`));
E("messages","Digital","Victor's phone: messages","Text messages",null,()=>D("HANDSET · V. HALE","21 OCT",`<div class="chat">
<div class="msg"><small>Ruth · 18:02</small>Sign the share option before you do anything rash, Victor.</div>
<div class="msg me"><small>Victor → R. Asante (lawyer) · 20:15</small>Confirmed. Monday 9am, at the hospital. Bring the new papers.</div>
<div class="msg"><small>Clara · 23:52</small>Night Dad. Marcus says don't stress about Monday x</div>
<div class="msg"><small>Marcus · 23:55</small>Sleep well, Victor.</div></div>`));
for (const k of Object.keys(c.SUS)) E("s_"+k,"Suspects",c.SUS[k].name,"Suspect profile",null,()=>profileDoc(k));
E("transcripts","Statements","Interview transcripts","Interrogation transcripts",null,()=>D("INTERVIEWS · 22 OCT","HARBOUR GENERAL, ROOM B12",c.statements.blocks.map(b=>`<h4>${b.who}</h4><p>${b.s.map(x=>x[1]).join(" ")}</p>`).join("")));
E("notebook","Digital","Victor's puzzle book","Coded message",null,()=>D("ITEM 8 · CROSSWORD BOOK","LAST PAGE",`<p style="font-size:18px;letter-spacing:.08em;word-break:break-word">${c.cipher.ct}</p><p class="dim" style="font-family:'Reenie Beanie',cursive;font-size:22px">(margin) key = my room number, in letters</p>${C.done.cipher?`<p><b>Decoded:</b> ${c.cipher.plain}</p>`:LAB("cipher","Work on it in the lab")}`));
E("tox","Reports","Toxicology","Lab report","scene",()=>D("FORENSIC TOXICOLOGY","TX-26-0588",KV([["Finding","A fast-acting sedative not prescribed to the patient, at a fatal level"],["Route","Given intravenously, within the last hour of life"],["Source","The drug is held only in theatre stock at Harbour General"]])));
E("monitorlog","Records","Monitor event log","System log","scene",()=>D("PATIENT MONITOR · ROOM 9","22 OCT",TB(["Time","Event"],[["02:12","Mains lost → battery"],["02:13","ALARM MUTED at bedside"],["02:16","Cardiac arrest pattern (alarm suppressed)"],["02:17","Mains restored"]])));
E("abel2","Statements","Abel Ortiz, second interview","Interrogation transcript","statements",()=>D("INTERVIEW · 22 OCT 11:00","ABEL ORTIZ",`<p>"When the lights went, I looked out of room 4. Someone tall was walking away from room 9 toward the stairs. Theatre scrubs, I'm sure of it, the blue shows up in the exit lights. I thought it was the anaesthetics team. There was no anaesthetist rostered on the ward."</p>`));
E("lawyermail","Digital","Lawyer's email","Email","cipher",()=>`<div class="doc mail"><div class="mh">FROM: R. Asante · TO: V. Hale · 21 Oct 17:10<br>SUBJECT: Monday</div><p>New will drafted as instructed, with Clara's share placed in trust so Marcus has no access. I have also drafted your letter to the hospital board about the theatre stock. We'll sign both at 9.</p></div>`);
E("printlab","Reports","Latent print report","Lab report","prints",()=>D("FORENSIC LAB · LATENT PRINTS","LP-26-1180",`<p>Partial latent on the W9 breaker handle, plant room L2. Identified: <b>Dr M. Wren</b>. Others excluded.</p>`));
E("handlab","Reports","Questioned document report","Lab report","hand",()=>D("QUESTIONED DOCUMENTS","QD-26-0224",`<p>The '02:10 K.A.' entry was very probably written by <b>Dr M. Wren</b>. Not written by K. Asante.</p>`));
E("plantcctv","Records","Plant-room corridor camera","CCTV","timeline",()=>D("HARBOUR GENERAL · L2 SERVICE CORRIDOR","SEPARATE SUPPLY",TB(["Time","Event"],[["02:10","Man in theatre scrubs enters plant room"],["02:12","Leaves toward Ward Nine stairs"],["02:15","Returns past the camera, one shoe cover missing"],["Face match","Dr Marcus Wren"]])));
E("abelcall","Records","Call-bell log, room 4","Alibi verification","term",()=>D("WARD NINE · CALL BELLS","22 OCT",`<p>Room 4 bell answered at 02:05 by A. Ortiz and reset at 02:22. The patient confirms he stayed.</p>`));
E("kofiradio","Records","Porter radio log","Alibi verification","term",()=>D("PORTER RADIO · A&E","22 OCT",`<p>Kofi Asante on the radio and on the A&E camera 01:50–02:40. His card has no plant-room access.</p>`));
E("clarahome","Records","Clara Wren's alibi","Alibi verification","term",()=>D("HOME NETWORK & DOORBELL","WREN HOUSEHOLD",`<p>Clara's phone at home all night. Front doorbell camera: nobody left by the front door. The garage door isn't covered.</p>`));
E("ruthhotel","Records","Ruth Delaney's alibi","Alibi verification","term",()=>D("MARSA HOTEL · DOHA","20–23 OCT",`<p>Ruth Delaney checked in; key card used at 02:00 local.</p>`));
E("marcuscar","Records","ANPR: PM-7712","Vehicle record","term",()=>D("ANPR · STAFF CAR PARK","PM-7712",KV([["IN","22 Oct 01:49"],["OUT","22 Oct 02:40"]])));
E("cardlog","Records","Staff card 7712","Access record","term",()=>D("HARBOUR GENERAL · DOOR LOG","CARD 7712",TB(["Time","Door"],[["01:58","Theatre controlled-drug store"],["02:11","Plant room L2"]])));
E("debts","Records","Judgments: M. Wren","Financial record","term",()=>D("CIVIL JUDGMENTS","WREN, Marcus",`<p>180,000 owed to Casino Royale Meridian, unpaid.</p>`));
})();
/*CASES-END*/
