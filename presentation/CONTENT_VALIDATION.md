# CONTENT_VALIDATION

Every claim on every slide is traced to a page of the project PDFs. Abbreviations: **P1** = TheSystemError_Phase1.pdf, **P2** = TheSystemError_Phase2.pdf, **P34** = TheSystemError_Phase3_4.pdf (see SOURCE_INDEX.md).

Evidence types: OBSERVED · INTERVIEW QUOTE · ANALYSIS · HYPOTHESIS · DESIGN PRINCIPLE · PROPOSED INTERVENTION · PREDICTED OUTCOME · RECOMMENDATION.
"Verified" means: the wording was checked against the extracted text, or against the rendered page where the text extraction was scrambled (P34 tables).

---

## ⚠ CONFLICTS REQUIRING REVIEW

None of these is silently resolved in the deck. Where a slide touches one, it uses the labels of a single named phase, and the speaker notes say so.

| # | Status | Documents / pages | Conflicting statements | How the deck handles it |
|---|---|---|---|---|
| C1 | **CONFLICT REQUIRES REVIEW** | P1 p13 vs P2 p10 vs P34 p3/p6/p7 | **Loop IDs mean different things in each phase.** B1 = "Peer negotiation provides relief" (P1 Fig 9); B1 = "Poor maintenance → access restriction" (P2 p10); B1 = "misuse → blanket restriction / collective punishment" (P34 p6, p7, p10). R1 = "Persistent claims reinforce scarcity" (P1); R1 = "Resource scarcity → hoarding loop" (P2 p9); P34 uses "R1 desk spiral" (P1 sense) *and* "R1 scarcity → hoarding" (P2 sense). | Slide 11 draws P1 Fig 9 and labels it "Phase 1 loop labels". Slide 10 shows loop tags "as labelled in Phase 3", and its notes point to this row. |
| C2 | **CONFLICT REQUIRES REVIEW** | P2 p9 vs P34 p7 | R4 = "Deadline pressure → competition loop" (P2) vs "R4 · Seniority entitlement" (P34 p7, Incentives row). | R4 is not named on any slide; it appears only as a tag copied from P34 p3. |
| C3 | **CONFLICT REQUIRES REVIEW** | P1 p6 vs P1 p13 vs P2 p10 | P1 p6 says "Named care responsibilities strengthen B2 (Balancing Loop 2)", but P1's causal loop map (Fig 9) contains only R1 and B1. B2 is first defined in P2 as "Communication → conflict avoidance". | B2 is not explained on any slide. |
| C4 | **CONFLICT REQUIRES REVIEW** | P34 p9 vs P34 p6 & p32 | Visibility board "Replaces the SERC tracker / Precog Slack split" (p9) vs "building on the tracker and Slack, not replacing them" (p6), and the final recommendation of "two fields on the existing GPU page" (p32). | Deck uses the final recommendation (p32, p28). The Phase 3 wording on p9 is not shown. |
| C5 | **CONFLICT REQUIRES REVIEW** | P34 p7 vs P34 p32 | Phase 3 proposed change "Automatically surface active / idle state and holder" (p7) vs final "NOT RECOMMENDED NOW: … automated idle detection or sensors" (p32). This is probably a deliberate narrowing between Phase 3 and Phase 4, but the PDFs do not say so. | Slide 14 shows the p32 exclusion. It does **not** claim that the team "rejected" p7's idea or gives a reason the PDFs do not state. |
| C6 | **CONFLICT REQUIRES REVIEW** (minor) | P34 p31 vs P1 p14 | P34 p31: "This is the feedback loop **Phase 2** found missing". The explicit statement "The system has no feedback loop yet" is in **Phase 1** §5.7 (P2 RC9 "Weak feedback-to-policy conversion" is related). | Slide 25 cites both: P1 §5.7 for the finding, P34 p31 for the loop. |
| C7 | **CONFLICT REQUIRES REVIEW** (minor) | P34 p29 vs P2 p4 | Meeting-room booking: "Already formal and working [E]; out of scope" (P34) vs bottleneck "Meeting-room booking clashes" (P2 p4). | Meeting rooms are mentioned only as part of the system boundary (P1 p1). |
| C8 | Needs confirmation | P2 p16 vs P1 p7 photo | Assumption audit cites "coffee window 9–12". The photographed D-Block cafeteria notice (P1 p7) reads "10.00 am to 1.15 pm / 02.10 pm – 04.30 pm · Cafeteria Facility is for IIIT Faculty & Staff". These may describe different things (machine vs cafeteria). | No timings are stated on slides. The photo is captioned only as "notice photographed in Phase 1". |
| C9 | Wording variance | P34 p3 vs P34 p6 | M4 is "Problems surface late; correction is blunt" (p3) and "Misuse surfaces as a breakdown" (p6). | Slide 10 uses the p3 title; the notes mention p6. |
| C10 | Labelling slip | P34 p7 | "Log the reservation-to-usage gap" is tagged "R1 · Collective punishment" (collective punishment is B1 elsewhere). | Not shown. |
| C11 | Terminology evolution (not a conflict) | P34 p4–9 vs p10–32 | "Semesterly" review / "rotating resource coordinator" (Phase 3) become "termly" review / "stewards in cross-lab pairs" (Phase 4). | Deck uses the final Phase 4 terms. |

---

## Slide-by-slide outline (Step 6)

| # | Story beat | Title | Core content | Visual |
|---|---|---|---|---|
| 01 | The empty desk | The desk is empty. So why can't I use it? | Hook only (user-supplied framing line) | SVG desk with claim residue; network motif |
| 02 | What we thought the problem was | The problem we started with | P1 symptoms, baseline, initial framing (verbatim) | Symptom nodes + baseline ledger |
| 03 | We investigated | Before designing, we investigated | Documented methods and deliverables, by phase | Research path / timeline |
| 04 | We entered the system | We entered the system | P1 boundary + Fig 1 clusters + photographs | SVG boundary map + photo strip |
| 05 | Same resource, different meanings | The same resource looked different to everyone | P2 p18–19 verbatim quotes, per resource | Interactive resource × actor lens |
| 06 | Contradiction | Physical availability ≠ usable availability | Three documented chains (desk, GPU, junior) + P1 usability test | Three filtered flows |
| 07 | Events → mental models | From events to system structure | P1 Fig 8 iceberg (verbatim) | SVG iceberg |
| 08 | Assumptions | We challenged our own assumptions | 5 audited assumptions from P2 p16–17 | Assumption → verdict → evidence cards |
| 09 | Reframe | The reframe | Initial framing → evidence → reframed statement (full) | Three-stage transformation |
| 10 | Mechanisms | What is actually producing the behaviour? | M1–M5 observed → structure → behaviour | Causal chains |
| 11 | Feedback loop | The feedback loop | P1 Fig 9 R1 + B1, evidence vs inference labelled | SVG CLD |
| 12 | Leverage | Where can we intervene? | LP1–LP7 + dependency chain (P34 p4) | Depth ladder + chain |
| 13 | Principles | Design principles | P1–P7 (P34 p8) linked to mechanisms | Principle → prevents mapping |
| 14 | Not an app | We didn't just build an app | P34 p32 not-recommended list + documented reasoning | Crossed-out vs kept |
| 15 | Intervention system | The intervention system | 5 interventions + documented dependencies + staging | Dependency graph |
| 16 | One user | Follow one newcomer | S1 + Journey A + Prototype P1 card | Card mock + current/proposed |
| 17 | Legitimate exception | What if the holder has a legitimate exception? | S3 + tiered decay + continuity rules | Timeline |
| 18 | Misuse | What if someone misuses the system? | Prototype P3 proportionate care steps | Step ladder + fridge photo |
| 19 | Scenario test | We didn't assume it would work | S1–S8 | Scenario grid |
| 20 | Failure | Where the intervention could fail | P34 p25–26 unintended consequences | Risk chains |
| 21 | V1 → V2 | From version 1 to version 2 | P34 p27 refinement table | Row transformations |
| 22 | Evaluation | How would we know it worked? | P34 p22 ten criteria (proposed, not measured) | Criteria grid |
| 23 | Final system | The final system | P34 p28 nine layers + p32 staging + p29 kept | System diagram |
| 24 | Transformation | What changed in the system | M1–M5 → interventions A–E (P34 p6) | Before/after |
| 25 | Learning | How the system learns | P34 p31 review loop; P1 §5.7; P2 p17 closing line | Loop |

---

## Claim trace (Step 7)

| Slide | Claim/content | Source PDF | Page/section | Evidence type | Verified |
|---|---|---|---|---|---|
| 01 | "The desk is empty. So why can't I use it?": a rhetorical hook supplied by the user, not a quote. Shown without quotation marks. | P2 | p4 "Temporarily empty but socially occupied desks: A desk may be physically free but still considered someone's desk" | ANALYSIS (basis) | ✔ |
| 01 | Research Lab Commons · SERC × Precog · Team The System Error, with team names | P1 / P34 | P1 p1 title; P34 p1 | OBSERVED | ✔ |
| 02 | Symptoms: more students than desks; names and belongings signal enduring claims; GPU contention; food waste left at desks; also cooperative borrowing and peaceful negotiation | P1 | p1 §1.3 | OBSERVED (participant descriptions) | ✔ |
| 02 | Baseline: ~100 students; faculty SERC 7 / Precog 1; 84 desks & chairs; 1 fridge, 1 coffee machine, 1 microwave; 2 meeting rooms; 12 lockers. GPU count **not given** and shown as "not reported". | P1 | p1 §1.4 | OBSERVED (reported scale) | ✔ |
| 02 | Analytical question: "why a system that works through courtesy for established members can still leave newcomers uncertain or excluded" | P1 | p1 §1.3 | ANALYSIS | ✔ verbatim |
| 02 | Initial framing (verbatim) | P1 | p1 §1.3 | ANALYSIS | ✔ verbatim |
| 03 | Enquiry questions: who can use each resource, how a claim begins and ends, how urgent needs are negotiated, who restores depleted capacity, what happens when agreement fails | P1 | p7 §4.1 | ANALYSIS (method) | ✔ |
| 03 | Thematic coding by resource, actor, rule, workaround, escalation and change over time; accounts compared for agreement and contradiction; first-person, secondhand and causal interpretations distinguished | P1 | p7 §4.1 | ANALYSIS (method) | ✔ |
| 03 | Phase 1 deliverables: system context, stakeholder map, power-interest grid, leverage map, process maps, behaviour over time, iceberg, causal loops, stocks & flows; photographed notices | P1 | p1–14 | OBSERVED (document structure) | ✔ |
| 03 | Phase 2: system map, formal/informal structure, bottlenecks, tensions, loops, unintended consequences, root causes, assumption audit, stakeholder comparison, alternative framings, reframe | P2 | p2–21 | OBSERVED (document structure) | ✔ |
| 03 | Phase 3–4: mechanisms, leverage map, principles, intervention concepts, 5 prototypes, 8 scenarios, simulated stakeholder responses, evaluation framework, unintended consequences, refinement, recommendation | P34 | p2–32 | OBSERVED (document structure) | ✔ |
| 03 | No count of interviews is stated anywhere. Interview counts are **not** shown. | — | — | — | ✔ (omitted) |
| 04 | Boundary includes: desk & chair allocation, local GPU access, food amenities (coffee machine, refrigerator), storage, meeting rooms, and the people who authorise or negotiate their use | P1 | p1 §1.1 | ANALYSIS | ✔ |
| 04 | Dependencies: institute rules, maintenance and cleaning services, procurement, administrators. Outside direct control: campus construction, overall admissions, research evaluation | P1 | p1 §1.1 | ANALYSIS | ✔ |
| 04 | Four clusters + centre "Access to usable research space", with edges requests / authorises / capacity / signals and cluster contents | P1 | p2 Fig 1 | ANALYSIS | ✔ |
| 04 | "The system has several local coordination arrangements rather than a single floor wide allocation process." | P1 | p2 | ANALYSIS | ✔ verbatim |
| 04 | Boundary tension: "A shared location and a shared resource are different boundaries." | P1 | p2 | ANALYSIS | ✔ verbatim |
| 04 | Photographs: cafeteria notice, SERC fridge rules notice, lockers/storage | P1 | p7, p10 | OBSERVED (field photo) | ✔ |
| 05 | All quotes in the perspective lens are verbatim | P2 | p18–19 | INTERVIEW QUOTE | ✔ verbatim |
| 05 | Non-quoted descriptions (e.g. cleaning staff: "Not their domain; concerns are broken/dirty furniture, not claims") shown **without** quotation marks | P2 | p18–19 | ANALYSIS | ✔ |
| 05 | "the divergence itself is evidence for Phase 1's finding that information is unevenly distributed" | P2 | p18 | ANALYSIS | ✔ verbatim |
| 06 | Usable only when "physically workable, socially available and accessible at the required time" | P1 | p2 §1.5 | ANALYSIS | ✔ verbatim |
| 06 | Desk chain: names, belongings and repeated use signal a claim; holder keeps return priority; a desk may be physically free but still considered someone's desk; prime desks vacant daily while claimed | P1 / P2 | P1 p7; P2 p4, p16 | OBSERVED | ✔ |
| 06 | GPU chain: held weeks in advance, with "they just want to occupy it so that they might run the experiment some day". **Caveat:** P1 p7 says long unused SERC reservations are *secondhand* claims, so they are labelled secondhand | P2 / P1 | P2 p16; P1 p7 | INTERVIEW QUOTE (secondhand report) | ✔ |
| 06 | Junior chain: a senior says borrowing is acceptable, yet "I still have this fear that I cannot [sit there]", from a respondent never actually refused; "gap between offered permission and perceived permission" | P1 / P2 | P1 p5 §3.2; P2 p16 | INTERVIEW QUOTE + ANALYSIS | ✔ |
| 06 | Dead-desk example: a space with no functioning light or ventilation made usable after a student approached a faculty member | P1 | p2 §1.5 | OBSERVED | ✔ |
| 07 | Iceberg layer text (events, patterns, structures, mental models) verbatim from Fig 8; React / Anticipate / Design / Transform | P1 | p12 Fig 8 | ANALYSIS | ✔ verbatim |
| 07 | "Not all mental models are harmful. Respect for another person's equipment and a preference for peaceful dialogue support trust." | P1 | p13 | ANALYSIS | ✔ verbatim |
| 08 | Assumption: not enough resources → Modified; evidence: GPU quote + prime desks vacant | P2 | p16 | ANALYSIS + INTERVIEW QUOTE | ✔ |
| 08 | Users are selfish → Discarded; "Everyone, 95%, …" quote (95% flagged as the respondent's estimate) | P2 | p16 | INTERVIEW QUOTE | ✔ |
| 08 | Juniors can't use desks because seniors forbid it → Modified; "I still have this fear that I cannot [sit there]" | P2 | p16 | INTERVIEW QUOTE | ✔ |
| 08 | Formal authority doesn't care → Discarded; broken light/fan/AC fixed immediately when one student approached faculty | P2 | p17 | OBSERVED | ✔ |
| 08 | Peaceful settlement means needs met → Modified; "We sort it among ourselves… why would I bother anyone about a very small situation?" | P2 | p17 | INTERVIEW QUOTE | ✔ |
| 08 | Reading the pattern: "The discarded assumptions all located the problem in people or quantities … The surviving ones all locate it in structure" | P2 | p17 | ANALYSIS | ✔ verbatim |
| 09 | Initial framing (verbatim) | P1 | p1 | ANALYSIS | ✔ |
| 09 | Five evidence bullets (fragmented ownership; fragmented information; informal rules; social coordination; physical ≠ usable) | P2 | p21 | ANALYSIS | ✔ |
| 09 | Reframed problem statement shown **in full, verbatim** | P2 | p21 | ANALYSIS | ✔ verbatim |
| 09 | "Phase 2 found a readability problem sitting on top of a capacity problem" | P34 | p2 | ANALYSIS | ✔ verbatim |
| 09 | Three alternative framings (titles shortened at the dash) and their limitations (verbatim, incl. "some permissioning is genuinely valuable (protecting equipment, setups)") | P2 | p20 | ANALYSIS | ✔ |
| 10 | M1–M5 titles, observed, structure, resulting behaviour, loop/root-cause tags | P34 | p3 | ANALYSIS | ✔ |
| 10 | Mental models beneath all five (3 beliefs) + "the aim is to redirect them, not remove them" | P34 | p3 | ANALYSIS | ✔ |
| 11 | R1 nodes and polarities: claims −→ availability −→ unmet demand +→ pressure +(delay)→ claims; B1: unmet demand +→ negotiated sharing +→ availability | P1 | p13 Fig 9 | HYPOTHESIS ("All arrows are causal hypotheses") | ✔ |
| 11 | "The first part is supported by borrowing and shortage accounts; the pressure to claim as a response is an inference requiring validation." | P1 | p13 | ANALYSIS / HYPOTHESIS | ✔ verbatim |
| 11 | B1 works only "when a holder is absent, reachable and willing, and when a requester feels able to ask"; "A junior's hesitation can weaken the balancing response" | P1 | p13 | HYPOTHESIS | ✔ |
| 11 | Delays: absence → release; reservation → actual use; shortage → replenishment; recurring minor problem → formal awareness | P1 | p14 | ANALYSIS | ✔ |
| 12 | LP1–LP7 names, depth labels, intervention direction | P34 | p4 | ANALYSIS | ✔ |
| 12 | LP3 "highest-leverage buildable intervention"; enables LP1, LP2, LP4; LP4 enables LP5; "LP3 → LP4 → LP5 = highest practical leverage now"; LP6 shapes LP3–5; LP7 generates LP6 | P34 | p4 | ANALYSIS | ✔ |
| 12 | Goal shift to "utilization with attribution … Not 'remove ownership'" | P34 | p4 | ANALYSIS | ✔ |
| 13 | Seven principles, exact titles, one-line descriptions, PREVENTS mapping | P34 | p8 (key p9) | DESIGN PRINCIPLE | ✔ verbatim |
| 14 | Not recommended now: new booking app or dashboard · automated idle detection or sensors · algorithmic allocation · pooling GPUs across labs beyond the request path · a coffee rule change (sent to faculty as a separate proposal) | P34 | p32 | RECOMMENDATION | ✔ verbatim |
| 14 | "new desks or GPUs would not change how claims are made, how status is read or who feels able to ask. Under the same rules, added capacity would be claimed the same way." | P34 | p2 | ANALYSIS | ✔ verbatim |
| 14 | "Automation can become fragmented rather than systemic", with one group's tracker beside another's Slack producing "multiple parallel systems" | P2 | p12 | ANALYSIS | ✔ |
| 14 | Risk "a third parallel system" | P34 | p6 | ANALYSIS | ✔ |
| 14 | Tools: "Paper cards in sleeves; two fields on the existing student-built GPU page; a shared sheet for the log. Nothing new to install." | P34 | p28 | RECOMMENDATION | ✔ verbatim |
| 14 | Defensive reserving, silent yielding and blanket restriction "are produced by rules, information flows and roles, not by selfish individuals" | P34 | p2 | ANALYSIS | ✔ |
| 14 | **Note:** the PDFs give no item-by-item reason for each exclusion. The slide shows the exclusions and, separately, statements from the reports; it does not pair them as if they were stated reasons. | — | — | — | ✔ |
| 15 | Five interventions: names, depth/type, what changes, main new burden | P34 | p10 | PROPOSED INTERVENTION | ✔ |
| 15 | Dependency: "decay (2) is only enforceable if lapses are visible (1) and someone other than faculty confirms them (4); the review (5) needs the steward log (4). Concept 3 stands alone for amenities." | P34 | p10 | ANALYSIS | ✔ verbatim |
| 15 | Staging: Stage 1 core = 1, 2, 4, with 3 inside 4; Stage 2 every term = 5 (light) | P34 | p32 | RECOMMENDATION | ✔ |
| 15 | Feedback: "Log → termly review → change a number, a state or a role → post the change on the bay notice" | P34 | p28 | PROPOSED INTERVENTION | ✔ |
| 16 | Card states and rules (A5 card, IN USE / AWAY UNTIL max 14 days / FREE TO BORROW TODAY / PROTECTED needs end date + steward initials / LAST HERE; >7 days → borrowable) | P34 | p11 | PROPOSED INTERVENTION (prototype) | ✔ |
| 16 | S1 current system [E]: walks the bay reading names and jackets; asks a senior who knows who is away; may sit at a claimed desk and be moved on | P34 | p17 | OBSERVED ([E]) | ✔ |
| 16 | Journey A: Arrive → Read cards → Ask first → Join queue → Own desk | P34 | p30 | PROPOSED INTERVENTION | ✔ |
| 16 | Expected outcome "Seated the same day without a broker; on the queue for a desk of their own", labelled PREDICTED | P34 | p17 | PREDICTED OUTCOME | ✔ |
| 16 | Likely failure: cards not updated; every card ticked Protected. Unanswered: "Will they actually sit at a stale-card desk?" | P34 | p17, p20 | PREDICTED OUTCOME | ✔ |
| 17 | S3 actors/trigger: PhD student with a 10-day training run and a desk setup, leaving for a 2-week conference mid-run | P34 | p16, p17 | Scenario (analytical) | ✔ |
| 17 | Current: jacket and name hold the desk; nobody knows if the run is live; others avoid or contest it | P34 | p17 | Scenario current-state description | ✔ |
| 17 | Rules: continuity exception with an end date, up to 4 weeks steward / longer faculty; AWAY up to 14 days; 7 → 21 → +5 working days; running jobs never stopped; never automatic removal of belongings | P34 | p12, p27 | PROPOSED INTERVENTION | ✔ |
| 17 | Predicted: "Setup protected openly; others know exactly when it frees." Failure: "Exceptions renewed back-to-back become a permanent claim under a new name." | P34 | p17 | PREDICTED OUTCOME | ✔ |
| 18 | Current: coffee access withdrawn from all students; "Collective punishment can replace targeted correction" | P34 / P2 | P34 p3; P2 p12 | OBSERVED + ANALYSIS | ✔ |
| 18 | Steps: Signal → Reminder (Thursday, no names) → Private word (twice in a term) → Individual limit (third time; e.g. 2 weeks) → Blanket (faculty only, written reason, review date within 4 weeks) | P34 | p13 | PROPOSED INTERVENTION | ✔ |
| 18 | Staff "report; they never confront or decide"; coffee is a proposal [H] | P34 | p13 | PROPOSED INTERVENTION / HYPOTHESIS | ✔ |
| 18 | Tests / cannot test | P34 | p13 | ANALYSIS | ✔ |
| 18 | Fridge photographs | P1 | p10 | OBSERVED (photo) | ✔ |
| 19 | S1–S8: category, trigger, what it examines | P34 | p16 | Scenario (analytical) | ✔ |
| 19 | "Outcomes … are reasoned predictions from existing evidence, not observed results." | P34 | p16 | — | ✔ verbatim |
| 19 | Expected outcomes per scenario | P34 | p17–19 | PREDICTED OUTCOME | ✔ |
| 20 | Ten unintended-consequence chains with likelihood and evidence | P34 | p25–26 | PREDICTED OUTCOME | ✔ (checked on rendered pages) |
| 20 | LIKELY / POSSIBLE definitions; no risk rated speculative | P34 | p26 | ANALYSIS | ✔ |
| 21 | V1 → main risk → walkthrough → V2 → trade-off → still to test, for all five | P34 | p27 | PROPOSED INTERVENTION (refinement) | ✔ (rendered page) |
| 21 | "No intervention is dropped because a risk exists. Each gets the smallest change that reduces its main failure mode." | P34 | p27 | ANALYSIS | ✔ verbatim |
| 22 | Ten criteria, definitions, indicators, success/failure signals | P34 | p22 | PROPOSED MEASURE (labelled "TARGET / PROPOSED MEASURE") | ✔ (rendered page) |
| 22 | **No pilot was conducted:** P34 describes signals "we could actually observe in a 4-week pilot" and a review "first run as a mock at pilot end" (p27); no results are reported | P34 | p22, p27 | — | ✔ |
| 23 | Nine layers: Information, Rules, Process, Responsibilities, Physical, Governance, Roles, Tools, Feedback (contents) | P34 | p28 | RECOMMENDATION | ✔ |
| 23 | What does not change (ask-first, faculty authority, attribution, quotas and 6-h cap, Saturday clear, meeting rooms, mentoring, case-by-case judgment) | P34 | p29 | RECOMMENDATION | ✔ |
| 23 | Recommendation headline: "Make claims readable, let them decay by default, and give each resource a named first stop. Then let one short review turn what the log shows into rule and allocation changes." | P34 | p32 | RECOMMENDATION | ✔ verbatim |
| 23 | Why this set: "it covers the Phase 3 chain LP3 → LP4 → LP5 with the fewest parts … Every part can be removed without leaving damage behind." | P34 | p32 | RECOMMENDATION | ✔ |
| 24 | Mapping M2→A, M1→B, M3→C, M4→D, M5→E; intervention opportunity and expected system effect | P34 | p6 | ANALYSIS / PREDICTED OUTCOME | ✔ |
| 24 | A–E correspond to interventions 1, 2, 4, 3, 5 (Make status readable ↔ Claim Signals, etc.). This mapping is inferred from matching content on P34 p6 and p10; the PDF does not state it as a table. | P34 | p6, p10 | ANALYSIS (inference, flagged in notes) | ✔ flagged |
| 25 | "The system has no feedback loop yet … demand that disappears looks the same as demand that was met" | P1 | p14 §5.7 | ANALYSIS | ✔ |
| 25 | Use → Observe → Review → Modify → Publish, with contents; an issue logged 3+ times goes on the review agenda; can/cannot | P34 | p31 | PROPOSED INTERVENTION | ✔ |
| 25 | Closing: "The system does not prevent access; it simply never informs the people who could enable it." | P2 | p17 | ANALYSIS | ✔ verbatim |

### Removed during verification (not traceable, or would overstate)
- Any count of interviews or participants (not stated).
- GPU count in the baseline (blank in P1 p1).
- "Pilot results", "the intervention increased/reduced …": no pilot exists.
- The Phase 2 iceberg (P2 p8) mental-model lines appear in quotation marks in the source figure, but they are *belief statements*, not interview quotes. They are not reused as quotes.
- The Hindi quote "Ye abhi recently hua hai…" is left out of the slides, because the PDF gives no translation and adding one would be our own.
