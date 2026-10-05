# Research Lab Commons Deck: Remaining Work Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finish the 25-slide code presentation (slides 08–25), add one automated QA check, run visual QA on every slide, and write PRESENTATION_QA.md and README.md.

**Architecture:** Plain HTML/CSS/JS with no build step, runnable from `file://`. `js/deck.js` builds slides from data objects registered via `Deck.add({...})`, one file per slide in `slides/`. Shared visuals come from `js/components.js` (`C.*`) and `styles/*.css`. Slides are authored on a fixed 1920×1080 canvas that is scaled to fit.

**Tech Stack:** HTML, CSS, vanilla JS, inline SVG, Google Fonts (Archivo Black, DM Sans, IBM Plex Mono), headless Chrome for screenshots and the QA check. No npm dependencies.

**Spec:**
- Content spec: the user's first brief (slide-by-slide story, source-fidelity rules) plus `CONTENT_VALIDATION.md` (the outline and the claim trace, which give the exact wording and page for every claim) and `SOURCE_INDEX.md`.
- Visual spec: the user's second brief (editorial cream/black + accent design system) and the reference image `c:\Users\ADMIN\Downloads\presenatation color inspo.jpg`.

## Global Constraints

- Every factual claim must trace to `CONTENT_VALIDATION.md`. **No new claims, statistics, quotes or outcomes.**
- Quotation marks only for verbatim interview quotes (P2 p16–19). Belief statements are not quotes.
- Predicted scenario outcomes carry `C.badge('predicted')`. Hypotheses carry `C.badge('hypothesis')`. Proposed measures (slide 22) are labelled "target / proposed measure"; **no pilot was run**.
- Palette: `--cream #F7F4E8`, `--cream-light #FFFDF5`, `--black #111111`, `--lime #DFFF00`, `--pink #F19AC5`, `--orange #F58B4D`, `--lavender #B9A7F5`, `--blue #9DB7E8`. Use 1–3 accents per slide; no gradients; text on accents is always black.
- Semantic accents: lime = key insight · blue = information/visibility · lavender = structure/rules/governance · pink = people/social friction/failure · orange = tension/risk/uncertainty.
- Headlines: `C.head({no, kicker, title, tag, tagColor, size})` with lowercase Archivo Black display titles. Minimum on-canvas text size is 16px.
- Content must stay inside y ≤ 988px (the footer rule sits at about 1022px). No horizontal overflow past x = 1808.
- Rotations use the CSS `rotate:` property, never `transform: rotate()`, because `.anim` overwrites `transform`.
- Each slide object has: `slide` (its number), `title`, `chapter` (problem | investigate | realise | leverage | test | synthesis), `sources[]` ({file: 'P1'|'P2'|'P34', page, section}), and `notes{say[], basis[], avoid[]}`.
- Loop IDs differ between phases (CONTENT_VALIDATION C1–C3). Any loop label shown must say which phase it comes from.

## Review Focus

1. **Text overflow at 1920×1080.** A slide whose content runs past y = 988 or x = 1808 collides with the footer. The QA check in Task 1 must fail on it.
2. **The interactive tab slide (05) in a static view.** The "Desks" default must render when no click happens, for PDF/print and screenshots. Covered by Task 1 (the check confirms `.lens` has 4 cards).
3. **A missing font (offline).** The fallbacks Arial Black / Segoe UI must still fit, so the QA check is run once with fonts blocked (Task 6, step 3).
4. **A quote paraphrased inside quotation marks.** Task 6 greps every `class="q"`, `C.quote(` and `.quote` string against the P2 text extraction.
5. **A predicted outcome shown without its label.** Task 6 greps slides 16–21 for `predicted` badges next to every "expected outcome".

---

## File Structure

| File | Responsibility | Status |
|---|---|---|
| `index.html` | shell, fonts, SVG markers, script order | done |
| `styles/tokens.css` · `typography.css` · `components.css` · `diagrams.css` · `layout.css` | design system | done |
| `js/components.js` | `C.badge/head/quote/chain/text/shape/arrow`, `CHAPTERS` | done |
| `js/deck.js` | engine, notes (N), sources (S), fullscreen (F), **QA mode (Task 1)** | modify |
| `slides/01–07*.js` | slides | done (new design) |
| `slides/08–25*.js` | slides | Tasks 2–5 |
| `qa/check.sh` | the one runnable check | Task 1 |
| `PRESENTATION_QA.md`, `README.md` | deliverables | Task 6 |

---

### Task 1: QA mode + check script (the one runnable check)

**Files:**
- Modify: `js/deck.js` (end of `start()`)
- Create: `qa/check.sh`

**Interfaces:**
- Produces: when opened with `#qa`, `deck.js` appends `<pre id="qa-report">` containing `PASS` or one `FAIL slide N: <reason>` line per problem. `qa/check.sh` prints that report and exits 1 on any FAIL.

- [ ] **Step 1: Write the check script first (it fails until QA mode exists)**

```bash
#!/bin/bash
# qa/check.sh: headless-render the deck in QA mode and print the report. Exit 1 on FAIL.
cd "$(dirname "$0")/.."
URL="file:///$(pwd -W 2>/dev/null || pwd)/index.html#qa"
OUT=$("/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --window-size=1920,1080 --virtual-time-budget=8000 --dump-dom "$URL" 2>/dev/null \
  | sed -n '/<pre id="qa-report">/,/<\/pre>/p')
echo "$OUT"
[ -n "$OUT" ] && ! echo "$OUT" | grep -q FAIL
```

- [ ] **Step 2: Run it and confirm it fails**

Run: `bash qa/check.sh; echo exit=$?`
Expected: empty output and `exit=1` (no report exists yet).

- [ ] **Step 3: Add QA mode to `deck.js`, at the end of `start()`**

```js
    if (location.hash === '#qa') {
      const bad = [];
      els.forEach((sec, k) => {
        const s = slides[k];
        if (s.slide !== k + 1) bad.push(`FAIL slide ${k + 1}: metadata number ${s.slide}`);
        if (!s.sources || !s.sources.length) bad.push(`FAIL slide ${k + 1}: no sources`);
        if (!s.notes || !s.notes.say || !s.notes.avoid) bad.push(`FAIL slide ${k + 1}: notes incomplete`);
        sec.classList.add('active'); // measure laid-out boxes
        const box = sec.getBoundingClientRect(), sc = box.width / 1920;
        sec.querySelectorAll('*').forEach(e => {
          if (e.closest('.slide-foot, .chapter-mark') || e.closest('svg') && e.tagName !== 'svg') return;
          const r = e.getBoundingClientRect();
          if (!r.width) return;
          const y = (r.bottom - box.top) / sc, x = (r.right - box.left) / sc;
          if (y > 992 || x > 1812) bad.push(`FAIL slide ${k + 1}: <${e.tagName.toLowerCase()} class="${e.className.baseVal ?? e.className}"> ends at x=${x | 0}, y=${y | 0}`);
        });
        sec.classList.remove('active');
      });
      if (!document.querySelectorAll('.lens .card').length) bad.push('FAIL slide 5: lens empty');
      const pre = document.createElement('pre'); pre.id = 'qa-report';
      pre.textContent = bad.length ? [...new Set(bad)].join('\n') : 'PASS';
      document.body.appendChild(pre);
    }
```

(The `.anim` elements are mid-animation when measured; translateY(10px) is within tolerance, hence the 992/1812 limits.)

- [ ] **Step 4: Run the check**

Run: `bash qa/check.sh; echo exit=$?`
Expected: a report listing FAIL lines only for slides 08–25 (not yet written: "metadata number" mismatches, because slides 08–10 still use the old `C.head(...)` string signature) or genuine overflows in 01–07. Fix any 01–07 overflows it reports before moving on.

---

### Task 2: Slides 08–11 (realisation chapter: assumptions, reframe, mechanisms, loop)

**Files:** rewrite `slides/08-assumptions.js`, `09-reframe.js`, `10-mechanisms.js`; create `slides/11-feedback-loop.js`.

**Interfaces:** consumes `C.head({...})`, `C.badge`, `C.shape`, `C.text`, `C.arrow`, markers `#ah`. Every file sets `chapter: 'realise'` and drops `theme: 'dark'` (the visual spec says to avoid dark backgrounds).

- [ ] **Step 1: 08: assumptions sorted into two zones.** Left zone, pink, "discarded": *Users are selfish* (quote "Everyone, 95%, …") and *Formal authority doesn't care* (broken light/fan/AC fixed immediately…). Right zone, lavender, "modified → points to structure": *not enough resources* (GPU quote + prime desks vacant), *juniors can't because seniors forbid* ("I still have this fear that I cannot [sit there]"), *peaceful settlement* ("We sort it among ourselves… why would I bother anyone about a very small situation?"). Discarded titles are struck through with a pink `C.shape('pinch')` glyph; modified titles show `→ <verdict reason>` on a lime block. Bottom: the "Reading the pattern" sentence (P2 p17), verbatim. Data and notes are as in the existing file; only the layout changes.
- [ ] **Step 2: 09: reframe on cream.** Title `'the reframe'`, tag `'readability'`. The left column (initial framing) is set in grey and small. The middle column holds five evidence chips stacked like the reference's question/answer blocks, each with an accent glyph. The right column is a lime `.color-block` with the full P2 p21 statement verbatim (25px). The phrase "physically available but still remain effectively unavailable" sits on a black block with cream text. P34 p2 headline as the lede.
- [ ] **Step 3: 10: mechanisms as five vertical columns** (width 320 each, gap 24). Each column: `M#` tag on its accent (M1 orange, M2 blue, M3 pink, M4 pink-on-black, M5 lavender), title in display 30px, then three stacked blocks *observed → structure → behaviour* joined by down arrows, with the loop tags at the bottom in mono. A black `.insight` band holds the three mental-model belief statements with the caption "belief statements, not interview quotes". Text is as in the current file, verbatim from P34 p3.
- [ ] **Step 4: 11: causal loop** (`chapter: 'realise'`). SVG at about 1000×640, recreating P1 Fig 9 exactly. Nodes: "Strength of persistent desk claims" (orange), "Desk availability for newcomers" (blue), "Unmet demand for desks" (pink), "Pressure to secure a personal desk" (orange), "Negotiated temporary sharing" (lavender). Edges and polarities: claims→availability (−), availability→unmet (−), unmet→pressure (+), pressure→claims (+, label "delay", **dashed** = "inference requiring validation"), unmet→sharing (+), sharing→availability (+). Large "R1" and "B1" loop glyphs (circle with an arrow). Right panel: a `hypothesis` badge with "All arrows are causal hypotheses (P1 Fig 9)"; "supported by borrowing and shortage accounts" next to the solid segment; B1 conditions ("holder absent, reachable and willing; requester feels able to ask"; "A junior's hesitation can weaken the balancing response"); the four delays from P1 p14. Footnote tag: "Phase 1 loop labels · numbering differs in later phases (see C1)". Sources: P1 p13 Fig 9, P1 p14.
- [ ] **Step 5: Run** `bash qa/check.sh` and screenshot 8–11 (`shoot.sh 8 9 10 11`). Read each PNG and fix overlaps until the check shows no FAIL for 1–11.

### Task 3: Slides 12–15 (leverage and design chapter)

**Files:** create `slides/12-leverage.js`, `13-principles.js`, `14-not-an-app.js`, `15-intervention-system.js`. `chapter: 'leverage'`.

- [ ] **Step 1: 12: leverage ladder.** A vertical depth axis, "shallow · fast, easy" at the top and "deep · harder, slower, higher leverage" at the bottom, drawn as steps (`C.shape('steps')` motif). Seven rungs: LP1 Correction Targeting (shallow) · LP2 Loop Gain on Hoarding (shallow → medium) · LP3 Information Flow (core · medium, lime, tag "highest-leverage buildable") · LP4 Rules of Engagement (medium → deep) · LP5 Self-Organization Capacity (deep structural) · LP6 System Goal (deep) · LP7 Mental Model (deepest, black). A dashed divider between LP5 and LP6 reads "deep structural conditions: decide whether LP3–LP5 persist, not buildable product features". Right: dependency SVG (LP3 →enables→ LP1, LP2, LP4; LP4 →enables→ LP5; LP6 ⇢shapes⇢ LP3–5; LP7 →generates→ LP6) and a lime callout "LP3 → LP4 → LP5 = highest practical leverage now". Bottom: the goal shift "protect what my group funded → utilization with attribution · not 'remove ownership'". Source P34 p4.
- [ ] **Step 2: 13: principles connected to mechanisms.** Left: seven principle rows (numbers in display font on alternating accent blocks) with the exact P34 p8 titles and one-liners. Right: nodes M1–M5 plus "RC1 · RC5 ownership as exclusivity". An SVG overlay draws a line from each principle to what it PREVENTS: P1→M2, P2→M4, P3→M1, P4→M3, P5→M5, P6→RC1·RC5, P7→M3. Compute row y as `top + k*rowH` in JS so the lines line up. `C.badge('principle')`.
- [ ] **Step 3: 14: "we didn't just build an app".** Left: the five P34 p32 "not recommended now" items as struck-through cards with a pink ✕. Right: "what it uses instead": three physical objects drawn as simple SVG (card in sleeve, two fields on the GPU page, one shared sheet), plus "Nothing new to install." Below: three sourced statements, each tagged with its source (P34 p2 capacity statement; P2 p12 "Automation can become fragmented rather than systemic"; P34 p2 "produced by rules, information flows and roles, not by selfish individuals"). Notes must say that the PDFs give no item-by-item reasons for the exclusions.
- [ ] **Step 4: 15: intervention system graph.** SVG nodes: 1 Claim Signals (blue), 2 Default-Decay Claims (orange), 4 Resource Stewards + Escalation Ladder (lavender), with 3 Proportionate Care Protocol (pink) nested inside node 4, and 5 Periodic Allocation & Issue Review (black). Edges: 1→2 "makes lapses visible", 4→2 "someone other than faculty confirms lapses", 4→5 "issue log", and a dashed feedback 5⇢{1,2,4} "change a number, a state or a role → post on the bay notice". Background bands: "stage 1 · core system" and "stage 2 · every term". Each node lists its depth/type and main new burden (P34 p10). `C.badge('proposed')`. Sources P34 p10, p28, p32.
- [ ] **Step 5: Run** the QA check and screenshots for 12–15, and fix.

### Task 4: Slides 16–19 (stress test chapter: journeys and scenarios)

**Files:** create `slides/16-newcomer.js`, `17-exception.js`, `18-misuse.js`, `19-scenarios.js`. `chapter: 'test'`.

- [ ] **Step 1: 16: follow one newcomer.** Left: the Prototype P1 desk card, built in HTML exactly as P34 p11 (header "DESK 27 · SERC BAY B · HOLDER: ____"; states IN USE (lavender) / AWAY UNTIL __/__ "max 14 days without a continuity exception" (blue) / FREE TO BORROW TODAY (lime) / PROTECTED SETUP · ASK FIRST "Ends __/__ · steward initials ____ (needs an end date)" (pink); "LAST HERE" line; "Date older than 7 days → anyone may borrow for the day"), rotated by −2deg. Right: two journey rows. **Current** (`observed` badge, P34 p17): reads names and jackets → asks a senior who knows who is away → may sit at a claimed desk and be moved on. **Proposed** (P34 p30): arrive → read cards → ask first → join queue → own desk. An orange `predicted` block: "Seated the same day without a broker; on the queue for a desk of their own." Failure mode: "Cards not updated, so ambiguity remains; or every card ticked Protected." Open question: "Will they actually sit at a stale-card desk?"
- [ ] **Step 2: 17: legitimate exception.** A timeline SVG with two lanes and a day axis. *Ordinary claim:* day 7 "anyone may borrow for the day" → day 21 "steward messages you" → +5 working days with no reply "desk returns to the queue". *Declared continuity (S3: PhD student, 10-day training run, 2-week conference):* PROTECTED with an end date; ≤4 weeks the steward approves, >4 weeks faculty approves; GPU page shows expected release. A black invariant bar: "Running jobs are never stopped by this rule · never automatic removal of belongings." Current (P34 p17): "Jacket and name hold the desk; nobody knows if the run is live; others avoid or contest it." Predicted: "Setup protected openly; others know exactly when it frees." Failure: "Exceptions renewed back-to-back become a permanent claim under a new name." Sources P34 p12, p16, p17, p27.
- [ ] **Step 3: 18: misuse.** Left: the "today" panel, coffee access withdrawn from all students (P34 p3) and "Collective punishment can replace targeted correction" (P2 p12), with the fridge photo `assets/photos/fridge-open.jpg` cropped behind a pink shape. Right: five rising steps (`steps` motif): 1 Signal (label + date; Saturday clear stays) → 2 Reminder (Thursday list, no names) → 3 Private word (same owner twice in a term) → 4 Individual limit (third time, e.g. 2 weeks, via faculty) → last resort: blanket (faculty only, written reason, review date within 4 weeks, posted). Small cards: staff "report; they never confront or decide"; coffee `hypothesis` ("a proposal to faculty, not a rule change"); "tests / cannot test" (P34 p13).
- [ ] **Step 4: 19: eight scenarios.** A 4×2 grid of tiles. Each tile: an `S#` badge on its accent, title, category, trigger, and "examines" (P34 p16), plus one predicted-outcome line (P34 p17–19) with a `predicted` badge. Top banner, verbatim: "Outcomes … are reasoned predictions from existing evidence, not observed results."
- [ ] **Step 5: Run** the QA check and screenshots for 16–19, and fix.

### Task 5: Slides 20–25 (critique and synthesis)

**Files:** create `slides/20-failure.js` … `25-learning.js`. Chapters: 20–22 `test`, 23–25 `synthesis`.

- [ ] **Step 1: 20: where it could fail.** Ten chains from P34 p25–26 as horizontal ribbons: intervention tag → adaptation → **unintended consequence** (pink block) → likelihood pill (LIKELY = solid black, POSSIBLE = dashed). Footnote with the LIKELY/POSSIBLE definitions, verbatim.
- [ ] **Step 2: 21: V1 → V2.** Five rows: V1 (grey, struck through) → main risk (pink) → walkthrough scenarios (S-tags) → **V2** (lime block, bold) → trade-off / still to test (small). Header line: "No intervention is dropped because a risk exists…" (P34 p27).
- [ ] **Step 3: 22: how we would know.** A large banner: "target / proposed measures for a 4-week pilot · no pilot has been run · no results exist". Ten criteria tiles (5×2), each with name (display font), definition, quantitative indicator, a ✓ success signal and a ✕ failure signal (P34 p22).
- [ ] **Step 4: 23: the final system.** A hub SVG: centre "shared desks · GPUs · amenities" (lime); nine layer nodes around it (information, rules, process, responsibilities, physical, governance, roles, tools, feedback), each with its P34 p28 text at ≥16px. A feedback arc runs from "feedback" back into "rules". Left column: the P34 p32 headline recommendation verbatim, `recommendation` badge, the Stage 1 / Stage 2 chips, and a "what does not change" strip (8 items, P34 p29).
- [ ] **Step 5: 24: what changed in the system.** Five before → after pairs (P34 p6): M2 status unreadable → A make status readable (Claim Signals); M1 claims persist → B let claims end (Default-Decay); M3 access runs on asking → C give small needs a route (Stewards + ladder); M4 problems surface late, correction blunt → D correct misuse, keep benefit (Proportionate Care); M5 allocation follows history → E let allocation follow use (Review). The "before" column sits on cream with pink ✕ glyphs; the "after" column on lavender/lime blocks, with the expected effect labelled `predicted`. Notes flag that the A–E ↔ 1–5 mapping is inferred (CONTENT_VALIDATION row 24).
- [ ] **Step 6: 25: how the system learns (closing).** A large circular loop SVG: use → observe → review → modify → publish, with "every term" in the centre. Left: P1 §5.7 "demand that disappears looks the same as demand that was met". Small: "an issue logged 3+ times goes on the review agenda"; can / cannot (P34 p31). Bottom, at display size with a lime highlight: "The system does not prevent access; it simply never informs the people who could enable it." (P2 p17). Team line underneath.
- [ ] **Step 7: Run** the QA check and screenshots for 20–25, and fix.

### Task 6: Verification pass and deliverables

**Files:** create `PRESENTATION_QA.md`, `README.md`; delete `docs/` only if the user asks.

- [ ] **Step 1:** `bash qa/check.sh` must print `PASS`.
- [ ] **Step 2:** Screenshot all 25 slides (`shoot.sh $(seq 1 25)`) and read every PNG. Check overflow, clipping, text under 16px, contrast (black on accents), alignment, and source footer present. Fix, then re-shoot the changed slides.
- [ ] **Step 3:** Offline-font run: temporarily comment out the Google Fonts `<link>`, run `qa/check.sh`, fix any FAIL, then restore the link.
- [ ] **Step 4: Quote audit.** Extract every string inside `class="q"`, `C.quote(` and `.quote` `<p>`, then check each one appears in `scratchpad/TheSystemError_Phase2.txt` (normalise whitespace and curly quotes):

```bash
grep -ohP '(?<=class="q">)[^<]+|(?<=quote" style="margin-top:\d\dpx"><p>)[^<]+' slides/*.js | sort -u > /tmp/quotes.txt
python -c "import re;t=re.sub(r'\s+',' ',open(r'<scratchpad>/TheSystemError_Phase2.txt',encoding='utf-8').read());[print('NOT FOUND:',q.strip()) for q in open('/tmp/quotes.txt',encoding='utf-8') if q.strip().replace('\\\\','') not in t]"
```

Expected: no `NOT FOUND` lines. Bracketed insertions such as "[sit there]" appear in the source as written.
- [ ] **Step 5:** Grep slides 16–22 for "expected", "outcome" and "success" and confirm each sits next to a `predicted` badge or a "proposed measure" label.
- [ ] **Step 6:** Write `PRESENTATION_QA.md`: slide count; source verification status; visual QA status per slide; unresolved conflicts C1–C11 (link CONTENT_VALIDATION.md); claims needing human confirmation (C8 coffee timings, the A–E mapping, M4 wording); known limitations (Google Fonts need internet; 05 is interactive, so print shows Desks only; notes appear on the same screen, not a presenter window); answers to the 15 self-check questions from the brief.
- [ ] **Step 7:** Write `README.md`: double-click `index.html` (no server needed); keys ←/→/Space/PgUp/PgDn/Home/End, N notes, S sources, F fullscreen, H hide HUD; `#12` deep link; `bash qa/check.sh` for the QA check; folder map; how to add a slide (create a file, add a `<script>` tag in order, set `slide:`).
