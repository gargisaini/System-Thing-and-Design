Deck.add({
  slide: 14,
  title: "We didn't just build an app",
  chapter: 'leverage',
  sources: [
    { file: 'P34', page: 32, section: 'Final recommendation: NOT RECOMMENDED NOW' },
    { file: 'P34', page: 28, section: 'Nine layers of change: TOOLS' },
    { file: 'P34', page: '2, 6', section: 'Why Phase 3 looks at structure; possible unintended consequences' },
    { file: 'P2', page: 12, section: 'Unintended consequences: fragmented automation' }
  ],
  notes: {
    say: [
      'The recommendation explicitly sets aside a new booking app or dashboard, automated idle detection or sensors, algorithmic allocation, pooling GPUs across labs beyond the request path, and a coffee rule change, which goes to faculty as a separate proposal.',
      'What it uses instead is deliberately low-tech: paper cards in sleeves, two fields on the GPU page students already built, and one shared sheet for the log. Nothing new to install.',
      'The reasoning in our own reports: the behaviour is produced by rules, information flows and roles, not by selfish individuals. More capacity under the same rules would be claimed the same way. And Phase 2 found tools here tend to multiply into parallel systems rather than unify.'
    ],
    basis: ['P34 p32 (exclusion list, verbatim).', 'P34 p28 TOOLS (verbatim).', 'P34 p2 (capacity under same rules; produced by rules, information flows and roles).', 'P2 p12 ("Automation can become fragmented rather than systemic").', 'P34 p6 (risk: "a third parallel system").'],
    avoid: ['The PDFs do not give an item-by-item reason for each exclusion. Present the statements as the project\'s general reasoning, not as the stated reason for each item.', 'Do not say a digital tool was tested and rejected.']
  },
  html: () => {
    const no = ['A new booking app or dashboard', 'Automated idle detection or sensors', 'Algorithmic allocation', 'Pooling GPUs across labs beyond the request path', 'A coffee rule change (sent to faculty as a separate proposal)'];
    const why = [
      ['P34 p2', 'Defensive reserving, silent yielding and blanket restriction are produced by rules, information flows and roles, not by selfish individuals.'],
      ['P34 p2', 'Under the same rules, added capacity would be claimed the same way.'],
      ['P2 p12', 'Automation can become fragmented rather than systemic: one group creates a tracker while another continues using Slack or direct messages, producing multiple parallel systems.']
    ];
    return `
    ${C.head({ no: '14', kicker: 'Systemic, not technological', title: "we didn't just<br>build an app", tag: 'structure, not interface', tagColor: 'pink', size: 'md' })}
    <div style="display:grid;grid-template-columns:780px 1fr;gap:60px;margin-top:34px">
      <div>
        <div class="label anim" style="--d:2">Not recommended now ${C.badge('recommendation')}</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:14px">
          ${no.map((t, k) => `<div class="anim" style="--d:${3 + k};display:flex;align-items:center;gap:16px;padding:12px 16px;border:2px solid var(--black);background:var(--cream-light);rotate:${[-1, .6, -.4, .8, -.6][k]}deg">
            <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="14" fill="#F19AC5" stroke="#111" stroke-width="2"/><path d="M9 9l12 12M21 9L9 21" stroke="#111" stroke-width="3"/></svg>
            <span style="font:700 23px/1.25 var(--font-sans);text-decoration:line-through;text-decoration-thickness:2px">${t}</span></div>`).join('')}
        </div>
      </div>
      <div class="anim" style="--d:5">
        <div class="label">What it uses instead</div>
        <svg class="diagram" viewBox="0 0 860 310" width="856" height="309" style="margin-top:10px" role="img" aria-label="Three low-tech tools: desk card in sleeve, two fields on the GPU page, one shared sheet">
          <g transform="rotate(-4 120 150)"><rect x="30" y="40" width="190" height="240" fill="#DFFF00" stroke="#111" stroke-width="3"/>
            <rect x="48" y="62" width="154" height="26" fill="#111"/><text x="56" y="76" dominant-baseline="middle" style="font-size:14px;font-weight:700;fill:#F7F4E8">DESK 27</text>
            ${[0, 1, 2, 3].map(i => `<rect x="50" y="${104 + i * 38}" width="20" height="20" fill="#FFFDF5" stroke="#111" stroke-width="2"/><rect x="80" y="${110 + i * 38}" width="${[100, 80, 110, 90][i]}" height="9" fill="#111"/>`).join('')}</g>
          <text x="125" y="298" text-anchor="middle" style="font-size:17px;font-weight:700">card in a sleeve</text>
          <rect x="300" y="40" width="270" height="200" fill="#FFFDF5" stroke="#111" stroke-width="3"/><rect x="300" y="40" width="270" height="30" fill="#9DB7E8" stroke="#111" stroke-width="3"/>
          ${[0, 1, 2].map(i => `<circle cx="${318 + i * 18}" cy="55" r="5" fill="#111"/>`).join('')}
          <text x="320" y="104" style="font-size:16px;font-weight:700">expected release</text><rect x="320" y="114" width="230" height="30" fill="#FFFDF5" stroke="#111" stroke-width="2"/>
          <text x="320" y="174" style="font-size:16px;font-weight:700">OK to pause?</text><rect x="320" y="184" width="230" height="30" fill="#DFFF00" stroke="#111" stroke-width="2"/>
          <text x="435" y="276" text-anchor="middle" style="font-size:17px;font-weight:700">2 fields on the GPU page</text>
          <rect x="640" y="50" width="200" height="190" fill="#FFFDF5" stroke="#111" stroke-width="3"/>
          ${[1, 2, 3, 4, 5].map(i => `<line x1="640" y1="${50 + i * 32}" x2="840" y2="${50 + i * 32}" stroke="#111" stroke-width="1.5"/>`).join('')}
          ${[1, 2].map(i => `<line x1="${640 + i * 66}" y1="50" x2="${640 + i * 66}" y2="240" stroke="#111" stroke-width="1.5"/>`).join('')}
          <text x="740" y="276" text-anchor="middle" style="font-size:17px;font-weight:700">1 shared sheet (log)</text>
        </svg>
        <div class="display" style="font-size:44px;margin-top:8px"><span class="hl">nothing new to install.</span></div>
      </div>
    </div>
    <div style="margin-top:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:26px">
      ${why.map(([src, t], k) => `<div class="anim" style="--d:${9 + k};border-top:3px solid var(--black);padding-top:10px">
        <div class="label" style="color:var(--ink-3)">From our reports · ${src}</div>
        <p style="margin:6px 0 0;font:500 19px/1.38 var(--font-sans)">${t}</p></div>`).join('')}
    </div>`;
  }
});
