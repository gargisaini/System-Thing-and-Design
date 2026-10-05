Deck.add({
  slide: 23,
  title: 'The final system',
  chapter: 'synthesis',
  sources: [
    { file: 'P34', page: 28, section: 'Nine layers of change' },
    { file: 'P34', page: 29, section: 'What does not change' },
    { file: 'P34', page: 32, section: 'Final recommendation: staged minimum bundle; why this set' }
  ],
  notes: {
    say: [
      'The recommendation, in one sentence: make claims readable, let them decay by default, give each resource a named first stop, then let one short review turn what the log shows into rule and allocation changes.',
      'Around the shared resources, nine layers change, each kept to the minimum: information, rules, process, responsibilities, physical objects, governance, roles, tools, and feedback.',
      'Just as important is what stays: the ask-first norm, faculty authority, attribution of purchased equipment, GPU quotas and the 6-hour cap, the Saturday fridge clear, meeting-room booking, seniors mentoring, and case-by-case judgment.',
      'Why this set: it covers LP3 → LP4 → LP5 with the fewest parts, and every part can be removed without leaving damage behind.'
    ],
    basis: ['P34 p28 (layer text, verbatim).', 'P34 p29 (kept items).', 'P34 p32 (headline, staging and "why this set", verbatim).'],
    avoid: ['This is the recommended design, not an implemented system.']
  },
  html: () => {
    const L = [
      ['information', 'Claim state on every desk; expected release and OK-to-pause on the GPU page; a one-line issue log.', 'blue'],
      ['rules', '7 / 21 / 5-day desk rule; locker renewal each term; 2-h GPU lapse; continuity exceptions; care steps.', 'lavender'],
      ['process', 'Peer → steward (≤2 working days) → faculty (≤1 week); request → time-boxed use → confirmed release.', 'lavender'],
      ['responsibilities', 'Holders date their card weekly and declare exceptions. Stewards walk the bay weekly and log. Admin fixes routed faults.', 'pink'],
      ['physical', 'Card sleeves at desk edges; a bay notice naming the stewards; a label-and-date station at the fridge.', 'orange'],
      ['governance', 'Decision-rights matrix; blanket restrictions need a written reason and a review date; one joint termly review.', 'black'],
      ['roles', 'Desk, amenities and GPU stewards in cross-lab pairs, one term each; cleaning staff may report (not enforce).', 'pink'],
      ['tools', 'Paper cards in sleeves; two fields on the existing student-built GPU page; a shared sheet for the log.', 'blue'],
      ['feedback', 'Log → termly review → change a number, a state or a role → post the change on the bay notice.', 'lime']
    ];
    const W = 1200, cw = 384, chh = 150, gx = 24, gy = 16;
    const byName = Object.fromEntries(L.map(l => [l[0], l]));
    const grid = [['information', 'rules', 'process'], ['tools', null, 'roles'], ['physical', 'governance', 'responsibilities']];
    const cell = (n, r, c) => { const [, t, col] = byName[n]; return `<div class="anim" style="--d:${4 + r + c * .5};position:absolute;left:${c * (cw + gx)}px;top:${r * (chh + gy)}px;width:${cw}px;height:${chh}px;border:2px solid var(--black);background:var(--cream-light);box-shadow:var(--shadow)">
          <div style="background:var(--${col});color:${col === 'black' ? 'var(--cream)' : 'var(--black)'};border-bottom:2px solid var(--black);padding:4px 12px;font:400 20px var(--font-display);text-transform:lowercase">${n}</div>
          <div style="padding:6px 12px;font:500 16px/1.3 var(--font-sans)">${t}</div></div>`; };
    const gh = 3 * chh + 2 * gy, hubX = cw + gx + cw / 2, hubY = chh + gy + chh / 2;
    const kept = ['Ask-first norm and informal lending', 'Faculty authority', 'Attribution of purchased equipment', 'GPU quota tiers and the 6-h cap', 'The Saturday fridge clear', 'Meeting-room booking', 'Seniors mentoring newcomers', 'Case-by-case judgment'];
    return `
    ${C.head({ no: '23', kicker: 'Final system design recommendation', title: 'the final system', tag: 'nine layers, minimum change', tagColor: 'lime', size: 'md' })}
    <div style="display:grid;grid-template-columns:450px 1fr;gap:40px;margin-top:18px">
      <div style="display:flex;flex-direction:column;gap:16px;padding-top:20px">
        <div class="anim" style="--d:2">${C.badge('recommendation')}</div>
        <p class="anim" style="--d:3;margin:0;font:400 31px/1.12 var(--font-display);letter-spacing:-.01em">Make claims readable, let them decay by default, and give each resource a named first stop. <span class="hl">Then let one short review turn what the log shows into rule and allocation changes.</span></p>
        <div class="anim" style="--d:4;display:flex;flex-direction:column;gap:8px">
          <div style="border:2px solid var(--black);padding:10px 14px;background:var(--cream-light)"><div class="label">stage 1 · core system</div><div style="font:500 17px/1.3 var(--font-sans);margin-top:4px">1 Claim Signals · 2 Default-Decay · 4 Stewards (with 3 Care inside 4)</div></div>
          <div style="border:2px solid var(--black);padding:10px 14px;background:var(--lime-soft)"><div class="label">stage 2 · every term</div><div style="font:500 17px/1.3 var(--font-sans);margin-top:4px">5 Review (light): one 45-min joint SERC–Precog review, using the issue log</div></div>
        </div>
        <p class="anim small" style="--d:5;margin:0">Why this set: it covers the Phase 3 chain LP3 → LP4 → LP5 with the fewest parts. <strong>Every part can be removed without leaving damage behind.</strong></p>
      </div>
      <div class="system-map" style="position:relative;width:${W}px;height:${gh + 100}px">
        <svg class="diagram" style="position:absolute;inset:0" width="${W}" height="${gh + 100}" aria-hidden="true">
          ${grid.flatMap((row, r) => row.map((n, c) => n ? `<line x1="${hubX}" y1="${hubY}" x2="${c * (cw + gx) + cw / 2}" y2="${r * (chh + gy) + chh / 2}" stroke="#111" stroke-width="2"/>` : '')).join('')}
        </svg>
        ${grid.flatMap((row, r) => row.map((n, c) => n ? cell(n, r, c) : '')).join('')}
        <div class="anim" style="--d:3;position:absolute;left:${hubX - 105}px;top:${hubY - 75}px;width:210px;height:150px;border-radius:50%;background:var(--lime);border:3px solid var(--black);display:grid;place-items:center;text-align:center;font:400 22px/1.1 var(--font-display)">shared desks · GPUs · amenities</div>
        <div class="anim" style="--d:9;position:absolute;left:0;right:0;top:${gh + 22}px;height:56px;background:var(--lime);border:2px solid var(--black);display:flex;align-items:center;gap:14px;padding:0 16px">
          <span style="font:400 26px var(--font-display)">↻</span><span style="font:400 20px var(--font-display)">feedback</span><span style="font:500 17px var(--font-sans)">${byName.feedback[1]}</span></div>
      </div>
    </div>
    <div class="anim" style="--d:9;margin-top:auto;display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <span class="label" style="margin-right:4px">Kept on purpose</span>
      ${kept.map(t => `<span style="font:700 15.5px var(--font-sans);padding:6px 12px;border:2px solid var(--black);border-radius:999px;background:var(--cream-light)">✓ ${t}</span>`).join('')}
    </div>`;
  }
});
