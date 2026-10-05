Deck.add({
  slide: 19,
  title: "We didn't assume it would work",
  chapter: 'test',
  sources: [
    { file: 'P34', page: 16, section: 'Scenario model: eight scenarios' },
    { file: 'P34', page: '17–19', section: 'Scenario tests: expected outcomes' }
  ],
  notes: {
    say: [
      'We stress-tested the bundle against eight scenarios drawn from what the research actually found: a newcomer, peak demand, continuity, conflict, gaming, an absent owner, a cross-lab request, and a maintenance failure.',
      'Each scenario was walked through analytically against the prototypes. Every outcome on this slide is a reasoned prediction from existing evidence, not an observed result.',
      'The walkthroughs are also where the failure modes on the next slides came from.'
    ],
    basis: ['P34 p16 (titles, categories, triggers, what each examines: checked against the rendered page).', 'P34 p17–19 ("expected outcome" column).'],
    avoid: ['Never present these outcomes as pilot results. P34 p16: "reasoned predictions from existing evidence, not observed results".']
  },
  html: () => {
    const S = [
      ['S1', 'newcomer needs a desk', 'Newcomer · normal use', 'First week on the floor; no desk assigned.', 'Readability without insider knowledge', 'Seated the same day without a broker; on the queue for a desk of their own.', 'blue'],
      ['S2', 'deadline week on the GPUs', 'Peak demand', 'Conference deadline in 48 h; every A40 slot reserved.', 'Rules under stress; steward load; false urgency', 'Idle-held capacity recovered; priority depends less on persuasion.', 'orange'],
      ['S3', 'long run + planned travel', 'Continuity', 'Leaving for a 2-week conference mid-run.', 'Continuity protection; renewal abuse', 'Setup protected openly; others know exactly when it frees.', 'lavender'],
      ['S4', 'two legitimate users, one resource', 'Conflict', 'Both want the same borrowable window desk, or both have dated deadlines.', 'Steward legitimacy; decision by rule', 'Decided by a stated rule and recorded; repeated clashes become visible.', 'pink'],
      ['S5', 'holder renews without using', 'Non-compliance · gaming', 'Card renewed as AWAY UNTIL for 6 weeks; desk visibly unused.', 'Ritual renewal; steward social cost', 'Persistent claims become discussable, and are handled privately, not publicly.', 'pink'],
      ['S6', 'holder unreachable', 'Resource owner absent', 'Reservation made, job not started, holder offline.', 'Default decay without contacting anyone', 'Capacity returns without a message chain.', 'blue'],
      ['S7', 'Precog student needs idle SERC GPU', 'Cross-lab request', 'Overnight run needed; a SERC A40 shows idle.', 'Ownership boundary; LP6 goal in practice', 'Some idle capacity used; refusals become visible data for the review.', 'lavender'],
      ['S8', 'dead desk and fridge mess', 'Maintenance failure', 'A desk with no light or fan; unlabelled food recurring.', 'Routing; feedback loop; staff role', 'Faults gain a time-to-fix; mess is traced where labelled; recurring faults reach the review.', 'orange']
    ];
    return `
    ${C.head({ no: '19', kicker: 'Scenario model · Phase 4', title: "we didn't assume it would work", tag: 'eight stress tests', tagColor: 'orange', size: 'md' })}
    <div class="banner anim" style="--d:2;margin-top:30px">${C.badge('predicted')} <span>Each scenario is evaluated analytically against the prototypes. Outcomes are <strong>reasoned predictions from existing evidence, not observed results.</strong></span></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px;flex:1">
      ${S.map(([id, t, cat, trig, ex, out, c], k) => `
        <div class="anim" style="--d:${3 + k};border:2px solid var(--black);background:var(--cream-light);display:flex;flex-direction:column;box-shadow:var(--shadow)">
          <div style="background:var(--${c});border-bottom:2px solid var(--black);padding:10px 14px;display:flex;gap:10px;align-items:baseline">
            <span class="display" style="font-size:26px">${id}</span><span style="font:700 14px var(--font-sans);letter-spacing:.08em;text-transform:uppercase">${cat}</span></div>
          <div style="padding:10px 14px;display:flex;flex-direction:column;gap:6px;flex:1">
            <div class="section-title" style="font-size:25px;line-height:1.05">${t}</div>
            <div style="font:500 18.5px/1.32 var(--font-sans)">${trig}</div>
            <div style="font:700 15px/1.3 var(--font-sans);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3)">examines: ${ex}</div>
            <div style="margin-top:auto;border-top:2px dashed var(--black);padding-top:8px;font:700 18px/1.3 var(--font-sans)"><span style="color:var(--orange)">◇</span> ${out}</div>
          </div>
        </div>`).join('')}
    </div>`;
  }
});
