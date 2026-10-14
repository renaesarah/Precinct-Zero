# Precinct Zero

A browser detective game: five cases in a Case Vault, an explorable office, a forensics lab, a police terminal, an evidence wall, an interview room, dispatch transmissions and a jury.

## Run it

Open `index.html` in a browser. No build step and no server needed (a local server such as `npx serve` also works).

## Files

| File | What's in it |
|---|---|
| `index.html` | Page shell: partner, toast and atmosphere layers; loads the CSS and scripts |
| `css/styles.css` | All styling and animations (theme tokens at the top of the file) |
| `js/cases.js` | Shared utilities (ciphers, check digits, document helpers) and the five case definitions |
| `js/game.js` | Engine: state and saving, faces, dispatch, interviews, Case Vault, office, lab puzzles, terminal, evidence wall, notebook, courtroom, sound, atmosphere, shared directory |

`cases.js` must load before `game.js`; they share top-level names.

## Adding a case

Copy one of the case blocks in `cases.js` (each starts with `defCase({...})`). Each case defines: suspects (`SUS`), objectives (`OBJ`), puzzle data (`scene`, `statements`, `cipher`, `prints`, `hand`, `timeline`, optional `code` / `mrz`), the verdict rules (`verdict`), terminal records (`term`) and exhibits (`ev(...)`).
Then in `game.js` add the case id to `CASE_ORDER` (in `cases.js`), give it a `clearance`, faces in `FACES`, interview questions in `INTERVIEWS`, and any dispatch entries in `DISPATCH`.

## Saving and multiplayer

Progress, your detective ID and your face are saved in the browser (`localStorage`).
The Precinct Directory and radio use the claude.ai artifact database. Outside claude.ai that service isn't available, so the directory shows a notice and everything else works offline. To run the directory on your own hosting, replace `initDirectory`, `pushProfile` and `sendRadio` in `game.js` with calls to your own backend (for example an ASP.NET Web API with a SQL Server `Detectives` table holding name, badge, face JSON, stars and posts).
