# PRESENTATION_QA

**Deck:** `index.html` · **25 slides** · 1920×1080 canvas scaled to fit · plain HTML/CSS/JS + inline SVG, no build step.
**Sources:** P1 = TheSystemError_Phase1.pdf (14 pp) · P2 = TheSystemError_Phase2.pdf (21 pp) · P34 = TheSystemError_Phase3_4.pdf (32 pp). Full claim trace in `CONTENT_VALIDATION.md`; source map in `SOURCE_INDEX.md`.

## Automated checks (re-run any time)

| Check | Command | Result |
|---|---|---|
| Every slide file loads; slide metadata number matches position; every slide has `sources` + `notes.say/avoid`; no element crosses the content safe area (x 100–1810, y ≤ 990); slide 05 lens renders | `bash qa/check.sh` | **PASS** |
| Same check with Google Fonts blocked (fallback fonts Arial Black / Segoe UI) | font link temporarily disabled, then `qa/check.sh` | **PASS** (index.html restored afterwards) |
| Every quote-styled string (incl. all five tabs of slide 05) appears verbatim in the P2 text | `python qa/quotes.py <dom.html> <Phase2.txt>` | **15 / 15 verbatim** |
| Syntax of every JS file | `node --check` on `js/*.js slides/*.js` | clean |

The check found real bugs during the build: a slide that silently failed to parse (now caught by the load-count check), a left-margin overflow the first version of the check could not see, and several 1–4 px edge overruns. All are fixed.

## Visual QA (every slide screenshotted at 1920×1080 and inspected)

| # | Slide | Visual element | Status |
|---|---|---|---|
| 01 | the desk is empty | line illustration (labelled "illustration · not evidence") + geometric collage | ✔ |
| 02 | the problem we started with | stat stack + rotated symptom blocks + framing band | ✔ |
| 03 | before designing, we investigated | phase timeline with chapter shapes | ✔ |
| 04 | we entered the system | SVG boundary/system map + field photos | ✔ |
| 05 | same resource, different meanings | interactive resource × stakeholder lens (click tabs) | ✔ |
| 06 | empty ≠ available | three test pills + three causal chains | ✔ |
| 07 | below the waterline | SVG iceberg + P2 figure thumbnail | ✔ |
| 08 | we challenged our own assumptions | discarded vs modified sort | ✔ |
| 09 | the reframe | from → evidence → to + three framings weighed | ✔ |
| 10 | what produces the behaviour? | five vertical mechanism chains | ✔ |
| 11 | the feedback loop | SVG causal loop diagram R1/B1 (dashed = inference) | ✔ |
| 12 | where can we intervene? | leverage ladder + dependency chain | ✔ |
| 13 | design principles | principle → mechanism bipartite graph | ✔ |
| 14 | we didn't just build an app | struck-through exclusions + low-tech tool drawings | ✔ |
| 15 | one system, five parts | intervention dependency graph with stage bands | ✔ |
| 16 | follow one newcomer | Prototype P1 desk card + today/proposed journey | ✔ |
| 17 | what about a legitimate exception? | schematic two-lane decay timeline | ✔ |
| 18 | what if someone misuses it? | escalating staircase + fridge photo | ✔ |
| 19 | we didn't assume it would work | eight scenario tiles | ✔ |
| 20 | where it could fail | ten failure ribbons, LIKELY (solid) / POSSIBLE (dashed) | ✔ |
| 21 | version 1 → version 2 | row transformations V1 → risk → V2 | ✔ |
| 22 | how would we know it worked? | ten criteria tiles + "no pilot run" banner | ✔ |
| 23 | the final system | 3×3 layer hub + feedback band + kept-on-purpose chips | ✔ |
| 24 | what changed in the system | before → change → after, per mechanism | ✔ |
| 25 | how the system learns | review-loop diagram + closing statement | ✔ |

Checked on every slide: overflow/clipping, text size, spacing, diagram readability, contrast (text on accents is always black; accents never carry meaning alone, because each badge and pill also has a glyph or line style), alignment, footer source label, entrance animation end-state.

## Source verification status
- All slides traced (see `CONTENT_VALIDATION.md`, "Claim trace"). One row was added during the build: slide 09's three alternative framings (P2 p20).
- Tables whose PDF text extraction was scrambled (P34 p16–19, p22, p25–27) were verified against the **rendered pages**.

## Unresolved source issues (decision needed from the team)
See `CONTENT_VALIDATION.md`, "Conflicts requiring review":
- **C1–C3:** loop IDs (R1, B1, R4, B2) mean different loops in Phase 1, 2 and 3. The deck shows Phase 1 labels on slide 11, and Phase 3 tags on slide 10.
- **C4–C5:** Phase 3 says the visibility board "replaces" the tracker/Slack split and proposes "automatically surface active/idle state"; the final recommendation does the opposite. The deck follows the final recommendation.
- **C6:** the missing feedback loop is attributed to Phase 2 in P34 but stated in Phase 1 §5.7.
- **C7:** meeting-room booking is called "working" (P34) but listed as a bottleneck (P2).
- **C8:** coffee window "9–12" (P2) vs. cafeteria notice timings in the P1 photo.
- **C9–C11:** wording and terminology variance (M4 title; semesterly vs termly; coordinator vs steward).

## Claims requiring human confirmation
1. **Slide 24:** the pairing of P34 p6 branches A–E with interventions 1–5 is inferred from matching mechanisms and leverage points. It is not a table in the PDFs (flagged in the notes).
2. **Slide 14:** the PDFs list what is "not recommended now" but give no item-by-item reason. The slide shows the exclusions and the reports' general reasoning separately, and does not pair them.
3. **Slide 01:** the hook line is the team's framing (from the brief), not a quote.
4. **Slide 09 / 24:** the goal statements ("protect what my group funded" → "use idle capacity, with attribution") are inferred goals (P34 p6: "Goal (inferred)"), shown without quotation marks.

## Known limitations
- Fonts load from Google Fonts. Offline, it falls back to Arial Black / Segoe UI; the layout was verified to still fit.
- Slide 05 is interactive. Exported or printed, it shows only the default "Desks" tab.
- Speaker notes (N) open in a panel on the same screen, not a separate presenter window. The notes and sources overlays were verified by data checks (every slide has notes and sources); they were not screenshotted in headless mode.
- Some uppercase micro-labels and badges are 13–15 px on the 1920 canvas; all body text is ≥ 15.5 px.
- Lowercase display style also lowercases proper nouns inside titles (e.g. "serc students").
- There are no photographs of desks or GPUs in the PDFs. Field photos are used only for the fridge, notices and lockers; the desk on slide 01 is a labelled illustration.

## Final self-check
1. **Can every factual claim be traced to the PDFs?** Yes. Each slide has `sources` metadata (shown in the footer and in the S overlay), and every claim is in the CONTENT_VALIDATION trace.
2. **Is every quote exact?** Yes. 15/15 verified automatically against the P2 text; quotation marks are used for nothing else.
3. **Are hypotheses labelled as hypotheses?** Yes. Slide 11 (all CLD arrows; the inferred link is dashed) and slide 18 (coffee proposal [H]).
4. **Are predicted outcomes labelled as predictions?** Yes. Slides 16, 17, 19, 20, 24 carry "predicted, not observed"; slide 21 "proposed refinement"; slide 22 "target / proposed measure · no pilot has been run".
5. **Did we avoid inventing research results?** Yes. No interview counts, no GPU count (shown as "not reported"), no pilot results.
6. **Did we preserve the project terminology?** Yes. M1–M5, LP1–LP7, P1–P7, the intervention names, the card states, and the 7/21/5 · 2 h · ≤72 h · 1 h/week numbers.
7. **Does the story run problem → research → insight → reframe → leverage → intervention → evaluation?** Yes. The chapters are problem (01–02) → investigate (03–05) → realise (06–11) → leverage (12–15) → test (16–22) → synthesis (23–25), each marked by its corner shape.
8. **Does the visual language communicate systems thinking?** Yes. There are boundary maps, an iceberg, a CLD, a leverage ladder, dependency graphs, a timeline, a hub, and a learning loop.
9. **Are the systems diagrams readable?** Yes. All diagram text is ≥15.5 px, and all diagrams were checked in screenshots.
10. **Does the final recommendation match the submitted work?** Yes. Slide 23 quotes P34 p32 verbatim, with its staging, and P34 p28–29.
11. **Did we avoid turning the project into a generic booking app?** Yes. Slide 14 is built around the "not recommended now" list and "nothing new to install".
12. **Does the deck distinguish the current system from the proposed one?** Yes. "Today" vs "with the intervention" appears on 16–18 and 24, and [E] behaviour is badged as observed.
13. **Were source conflicts flagged instead of silently resolved?** Yes. C1–C11 are in CONTENT_VALIDATION.md.
14. **Is every slide visually necessary?** Each slide carries one story beat. 20 and 22 are the densest; they are kept because the brief asks for the full critical evaluation.
15. **Does the final slide explain what changed in the system?** Yes. Slide 24 maps each mechanism to its structural change; slide 25 shows the new learning loop, closing on P2 p17.
