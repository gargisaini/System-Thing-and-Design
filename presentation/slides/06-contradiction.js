Deck.add({
  slide: 6,
  title: 'Physical availability ≠ usable availability',
  chapter: 'realise',
  sources: [
    { file: 'P1', page: 2, section: '1.5 Capacity is conditional' },
    { file: 'P1', page: '4, 5, 7', section: 'Conflicts between groups; 3.2 Formal and informal authority; 4.2 Rules and actual practice' },
    { file: 'P2', page: '4, 16', section: 'Bottlenecks; Challenging Initial Assumptions' }
  ],
  notes: {
    say: [
      'This is the turning point. Phase 1 defined a usable desk as one that is physically workable, socially available, and accessible at the required time. Each of our examples fails a different test.',
      'Desk: names, belongings and repeated use signal a claim, so a desk can be physically free and still be someone\'s.',
      'GPU: a respondent described slots being held weeks ahead "so that they might run the experiment some day". Phase 1 marks long unused SERC reservations as secondhand reports.',
      'Junior: a senior says borrowing is fine, yet a respondent who was never refused says "I still have this fear". Offered permission is not the same as felt permission.'
    ],
    basis: ['P1 p2 §1.5 (definition, dead-desk example).', 'P1 p4 ("A valid long job and an inactive held slot look alike without status detail").', 'P1 p7 (desk claim signals; SERC reservations are secondhand claims).', 'P2 p4 (socially occupied desks; urgent users blocked); P2 p16 (quotes; prime desks vacant daily while claimed).', 'P1 p5 §3.2 ("gap between offered permission and perceived permission").'],
    avoid: ['Do not say GPU hoarding was observed first-hand. It is a secondhand report.', 'Do not say juniors are refused. The documented point is that they are not.']
  },
  html: () => {
    const tests = [['1', 'physically workable', 'lavender'], ['2', 'socially available', 'orange'], ['3', 'accessible at the required time', 'blue']];
    const row = (k, tag, c, steps, fail, badge) => `
      <div class="anim" style="--d:${5 + k * 2};display:grid;grid-template-columns:240px 1fr 300px;gap:20px;align-items:stretch">
        <div style="display:flex;flex-direction:column;justify-content:center;gap:10px">
          <div class="section-title" style="font-size:44px;background:var(--${c});border:2px solid var(--black);padding:8px 12px;align-self:flex-start">${tag}</div>${badge}</div>
        ${C.chain(steps)}
        <div style="background:var(--black);color:var(--cream);padding:14px 18px;display:flex;flex-direction:column;justify-content:center">
          <div class="label" style="color:var(--pink)">✕ fails</div>
          <div style="font:700 22px/1.25 var(--font-sans);margin-top:6px">${fail}</div>
        </div>
      </div>`;
    return `
    ${C.head({ no: '06', kicker: 'The first contradiction', title: 'empty ≠ available', tag: 'the turning point', tagColor: 'pink' })}
    <div class="anim" style="--d:2;margin-top:44px;display:flex;align-items:center;gap:14px">
      <div class="label">A desk is usable only when it is…</div>
      <div style="display:flex;gap:10px">
        ${tests.map(([n, t, c]) => `<span style="display:inline-flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border:2px solid var(--black);border-radius:999px;background:var(--cream-light);font:700 20px var(--font-sans)"><span style="width:32px;height:32px;border-radius:50%;background:var(--${c});display:grid;place-items:center;font:400 17px var(--font-display);border:2px solid var(--black)">${n}</span>${t}</span>`).join('')}
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:22px;margin-top:30px">
      ${row(0, 'desk', 'orange', [
        { label: 'Seen', text: 'An empty desk' },
        { label: 'Signals', text: 'Names, belongings and repeated use signal a claim; the holder keeps return priority' },
        { label: 'Result', text: 'Physically free but still considered someone\'s desk; prime desks vacant daily while claimed' }
      ], 'test 2 · socially available', C.badge('observed'))}
      ${row(1, 'gpu', 'blue', [
        { label: 'Seen', text: 'A reserved slot, not actively running' },
        { label: 'Reported', text: '<span class="q">they just want to occupy it so that they might run the experiment some day</span>' },
        { label: 'Result', text: 'A valid long job and an inactive held slot look alike; urgent users get blocked' }
      ], 'test 3 · accessible at the required time', C.badge('quote', 'Quote · secondhand'))}
      ${row(2, 'junior', 'pink', [
        { label: 'Offered', text: 'A senior says borrowing is acceptable' },
        { label: 'Felt', text: '<span class="q">I still have this fear that I cannot [sit there]</span>, from a respondent never actually refused' },
        { label: 'Result', text: 'The junior avoids even asking' }
      ], 'offered permission ≠ perceived permission', C.badge('quote'))}
    </div>
    <div class="anim" style="--d:11;margin-top:auto;display:flex;gap:16px;align-items:center">
      <span style="width:32px;height:32px;border-radius:50%;background:var(--lavender);display:grid;place-items:center;font:400 17px var(--font-display);border:2px solid var(--black)">1</span>
      <span class="body">A space with no functioning light or ventilation became usable only after a student approached a faculty member. <strong>An empty surface is not yet a usable desk.</strong></span>
    </div>`;
  }
});
