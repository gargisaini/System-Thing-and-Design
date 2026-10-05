Deck.add({
  slide: 22,
  title: 'How would we know it worked?',
  chapter: 'test',
  sources: [{ file: 'P34', page: 22, section: 'Evaluation framework: ten criteria, signals for a 4-week pilot' }],
  notes: {
    say: [
      'We defined ten criteria, each with a signal we could actually observe in a four-week pilot: qualitative, quantitative, a success signal and a failure signal.',
      'Some are about access: effective availability and newcomer access. Some protect what works: continuity, flexibility, trust and cooperation. Some guard against the design itself: burden and gaming resistance. And one asks whether the system learns.',
      'To be clear: these are targets and proposed measures. We have not run the pilot, so there are no results yet.'
    ],
    basis: ['P34 p22: all criteria, definitions, indicators and signals (checked against the rendered page).', 'P34 p27: the review\'s "first run as a mock at pilot end" is proposed, not done.'],
    avoid: ['Never say "the intervention increased / reduced …". No measurement exists.', '"Under 30% of desks Protected" and "seated within 2 days" are proposed success thresholds, not findings.']
  },
  html: () => {
    const K = [
      ['effective availability', 'Physically free desks and GPU hours become usable.', 'Stale desks borrowed per week; unstarted reservations lapsed', 'Stale desks get used within a week', 'Cards everywhere, desks still empty', 'blue'],
      ['newcomer access', 'Access without an insider broker.', 'Days from arrival to a first usable desk', 'Seated within 2 days, no senior needed', 'Access still runs through seniors', 'blue'],
      ['continuity protection', 'Legitimate runs, rigs and absences untouched.', 'Running jobs or protected setups disrupted (target 0)', 'Zero wrongful lapses', 'Any running job or rig disturbed', 'lavender'],
      ['coordination cost', 'People and messages needed per access.', 'People contacted per request', 'Falls against the baseline week', 'New steps added to simple cases', 'lavender'],
      ['predictability', 'Comparable cases handled alike.', 'Share of steward decisions citing a rule', 'Most decisions cite a rule', 'Seniority still decides', 'lavender'],
      ['flexibility', 'Exceptions and judgment remain possible.', 'Exceptions requested vs approved; share of desks Protected', 'Exceptions approved, and under 30% of desks Protected', 'Refused by rule, or exception inflation', 'pink'],
      ['burden', 'Load on stewards, faculty, admin and staff.', 'Steward hours per week (cap 1)', 'Within the cap', 'Over 2 h for 2 weeks running', 'orange'],
      ['trust & cooperation', 'Lending and the ask-first norm survive.', 'Informal lending mentioned in interviews', 'Lending continues', '"Not my job, the rule says"', 'pink'],
      ['system learning', 'Issues reach people who can change rules.', 'Log entries; issues discussed; rules changed', '≥1 recurring issue reaches the review', 'Log empty or unread', 'lime'],
      ['gaming resistance', 'Strategic behaviour stays low.', 'Ritual renewals; false deadlines; dummy jobs', 'Rare and caught early', 'Ritual becomes the norm', 'orange']
    ];
    return `
    ${C.head({ no: '22', kicker: 'Evaluation framework · Phase 4', title: 'how would we know it worked?', tag: 'targets, not results', tagColor: 'orange', size: 'md' })}
    <div class="anim" style="--d:2;margin-top:28px;display:flex;align-items:center;gap:16px;background:var(--black);color:var(--cream);padding:12px 20px">
      <span class="badge" style="background:var(--orange)">target / proposed measure</span>
      <span style="font:700 20px var(--font-sans)">Signals we could observe in a 4-week pilot. <span style="color:var(--lime)">No pilot has been run · no results exist.</span></span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr 1fr;gap:14px;margin-top:18px;flex:1">
      ${K.map(([n, def, m, ok, bad, c], k) => `
        <div class="anim" style="--d:${3 + k * .6};border:2px solid var(--black);background:var(--cream-light);display:flex;flex-direction:column">
          <div style="background:var(--${c});border-bottom:2px solid var(--black);padding:8px 12px"><span class="section-title" style="font-size:21px">${n}</span></div>
          <div style="padding:8px 12px;display:flex;flex-direction:column;gap:6px;flex:1">
            <div style="font:500 18px/1.3 var(--font-sans)">${def}</div>
            <div style="font:500 17px/1.3 var(--font-sans);color:var(--ink-2)"><strong>measure:</strong> ${m}</div>
            <div style="margin-top:auto;font:700 17px/1.3 var(--font-sans)">✓ ${ok}</div>
            <div style="font:500 16.5px/1.3 var(--font-sans);color:var(--ink-3)">✕ ${bad}</div>
          </div>
        </div>`).join('')}
    </div>`;
  }
});
