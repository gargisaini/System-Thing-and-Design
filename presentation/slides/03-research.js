Deck.add({
  slide: 3,
  title: 'Before designing, we investigated',
  chapter: 'investigate',
  sources: [
    { file: 'P1', page: 7, section: '4.1 Research objectives and methods' },
    { file: 'P1', page: '1–14', section: 'Phase 1 deliverables' },
    { file: 'P2', page: '2–21', section: 'Phase 2 deliverables' },
    { file: 'P34', page: '2–32', section: 'Phase 3–4 deliverables' }
  ],
  notes: {
    say: [
      'We did not start from a solution. Phase 1 asked five questions: who can use each resource, how a claim begins and ends, how urgent needs are negotiated, who restores depleted capacity, and what happens when agreement fails.',
      'Interview accounts were coded by resource, actor, rule, workaround, escalation and change over time. We kept first-person experience, secondhand report and causal interpretation apart. That distinction carries through the whole deck.',
      'Each phase built on the one before: understand, analyse, find leverage, then test and recommend.'
    ],
    basis: ['P1 p7 §4.1 (questions and coding method).', 'Phase deliverables follow the section structure of P1, P2 and P34 (see SOURCE_INDEX.md).'],
    avoid: ['Do not state how many interviews were done; the reports give no number.', 'Do not claim observation sessions, surveys or a pilot. None are documented.']
  },
  html: () => {
    const qs = ['Who can use each resource?', 'How does a claim begin and end?', 'How are urgent needs negotiated?', 'Who restores depleted capacity?', 'What happens when agreement fails?'];
    const phases = [
      ['phase 1', 'understand', 'ring', 'blue', ['System context and boundary', 'Stakeholder and power maps', 'Interviews and photographed notices', 'Process tracing (swim lanes)', 'Behaviour over time', 'Iceberg · causal loops · stocks']],
      ['phase 2', 'analyse', 'pinch', 'pink', ['System map', 'Formal vs informal structure', 'Bottlenecks and tensions', 'Root causes RC1–RC10', 'Assumption audit', 'Stakeholder lenses → reframe']],
      ['phase 3', 'find leverage', 'cross', 'lavender', ['Mechanisms M1–M5', 'Leverage points LP1–LP7', 'Seven design principles', 'Candidate interventions']],
      ['phase 4', 'test', 'steps', 'orange', ['Five prototypes', 'Eight scenarios', 'Simulated stakeholder responses', 'Ten evaluation criteria', 'Unintended consequences → V2', 'Final recommendation']]
    ];
    return `
    ${C.head({ no: '03', kicker: 'We investigated', title: 'before designing,<br>we investigated', tag: 'method', tagColor: 'blue' })}
    <div class="anim" style="--d:2;margin-top:40px;display:flex;flex-wrap:wrap;gap:10px;align-items:center">
      <span class="label" style="margin-right:6px">What we asked</span>
      ${qs.map(q => `<span style="font:700 20px var(--font-sans);padding:9px 16px;background:var(--cream-light);border:2px solid var(--black);border-radius:999px">${q}</span>`).join('')}
    </div>
    <div class="timeline" style="position:relative;margin-top:40px;display:grid;grid-template-columns:repeat(4,1fr);gap:28px">
      <svg class="diagram" style="position:absolute;left:0;top:45px" width="1696" height="6" aria-hidden="true"><line class="draw" x1="0" y1="3" x2="1696" y2="3" stroke="#111" stroke-width="3"/></svg>
      ${phases.map(([p, t, sh, c, items], k) => `
        <div class="anim" style="--d:${3 + k * 2};position:relative">
          <div style="background:var(--cream);display:inline-block;padding-right:12px">${C.shape(sh, c, 'cream', 88)}</div>
          <div class="label" style="margin-top:14px;color:var(--ink-3)">${p}</div>
          <div class="section-title" style="font-size:42px;margin-top:4px">${t}</div>
          <ul style="list-style:none;padding:0;margin:14px 0 0">
            ${items.map(i => `<li style="font:500 18px/1.25 var(--font-sans);color:var(--ink-2);padding:6px 0;border-top:1.5px solid var(--line)">${i}</li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>
    <div class="anim" style="--d:12;margin-top:auto;display:flex;gap:18px;align-items:center;flex-wrap:wrap">
      <span class="color-block" style="padding:12px 18px;font:700 20px var(--font-sans)">Coded by resource · actor · rule · workaround · escalation · change over time</span>
      ${C.badge('observed')} ${C.badge('quote')} ${C.badge('hypothesis')} ${C.badge('predicted')}
    </div>`;
  }
});
