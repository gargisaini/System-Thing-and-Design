Deck.add({
  slide: 11,
  title: 'The feedback loop',
  chapter: 'realise',
  sources: [
    { file: 'P1', page: 13, section: '5.5 Causal loop map (Fig 9); R1; B1' },
    { file: 'P1', page: 14, section: 'Stocks, flows and delays' }
  ],
  notes: {
    say: [
      'R1, persistent claims reinforce scarcity. Stronger claims reduce newcomer availability, which raises unmet demand, which increases pressure to secure a personal desk, which over time strengthens claims.',
      'Be precise: Phase 1 marks all arrows as causal hypotheses. The first half is supported by borrowing and shortage accounts. The step from pressure back to claims is an inference that still needs validation. That is why it is dashed.',
      'B1, peer negotiation provides relief, but only when the holder is absent, reachable and willing, and the requester feels able to ask. It cannot create space when every usable desk is occupied, and a junior\'s hesitation weakens it.'
    ],
    basis: ['P1 p13 Fig 9 (nodes and polarities redrawn exactly) and the R1/B1 text.', 'P1 p14 (delays).', 'Loop labels are Phase 1\'s. Later phases reuse the same IDs for different loops (CONTENT_VALIDATION C1).'],
    avoid: ['Do not present R1 as a demonstrated loop. It is a causal hypothesis with one inferred link.', 'Do not merge this R1 with Phase 2\'s "R1 scarcity → hoarding".']
  },
  html: () => {
    const N = {
      claims: [190, 110, 'Strength of persistent desk claims', 'orange'],
      avail: [790, 110, 'Desk availability for newcomers', 'blue'],
      unmet: [790, 560, 'Unmet demand for desks', 'pink'],
      pressure: [190, 560, 'Pressure to secure a personal desk', 'orange'],
      share: [490, 335, 'Negotiated temporary sharing', 'lavender']
    };
    const node = ([x, y, t, c]) => `<rect x="${x - 150}" y="${y - 48}" width="300" height="96" class="node ${c}"/>${C.text(x, y, t, { max: 22, lh: 26, cls: 't-md', style: 'font-weight:700' })}`;
    const pol = (x, y, s) => `<circle cx="${x}" cy="${y}" r="17" fill="#FFFDF5" stroke="#111" stroke-width="2"/><text x="${x}" y="${y + 1}" text-anchor="middle" dominant-baseline="middle" class="display" style="font-size:22px">${s}</text>`;
    const loopGlyph = (x, y, t, fill) => `<circle cx="${x}" cy="${y}" r="46" fill="${fill}" stroke="#111" stroke-width="2.5"/><path d="M${x + 30} ${y - 40} a50 50 0 1 1 -20 -10" fill="none" stroke="#111" stroke-width="2.5" marker-end="url(#ah)"/><text x="${x}" y="${y + 2}" text-anchor="middle" dominant-baseline="middle" class="display" style="font-size:32px">${t}</text>`;
    return `
    ${C.head({ no: '11', kicker: 'Causal loop · Phase 1 labels', title: 'the feedback loop', tag: 'causal hypotheses', tagColor: 'orange', size: 'md' })}
    <div style="display:grid;grid-template-columns:990px 1fr;gap:44px;margin-top:22px">
      <svg class="diagram anim" style="--d:2" viewBox="0 0 980 680" width="980" height="680" role="img" aria-label="Causal loop diagram R1 and B1">
        <path class="edge draw" style="--d:3" d="M340 110 H636" marker-end="url(#ah)"/>
        <path class="edge draw" style="--d:4" d="M790 158 V506" marker-end="url(#ah)"/>
        <path class="edge draw" style="--d:5" d="M640 560 H346" marker-end="url(#ah)"/>
        <path class="edge dashed" d="M190 512 V164" marker-end="url(#ah)" style="stroke-width:3"/>
        <path class="edge" d="M720 512 L590 383" marker-end="url(#ah)"/>
        <path class="edge" d="M590 287 L720 162" marker-end="url(#ah)"/>
        ${Object.values(N).map(node).join('')}
        ${pol(488, 110, '−')}${pol(790, 230, '−')}${pol(490, 560, '+')}${pol(190, 330, '+')}${pol(660, 450, '+')}${pol(660, 222, '+')}
        <text x="206" y="440" style="font-size:17px;font-weight:700">delay</text>
        ${loopGlyph(255, 335, 'R1', '#DFFF00')}${loopGlyph(727, 335, 'B1', '#B9A7F5')}
        <g transform="translate(40 640)">
          <line x1="0" y1="0" x2="60" y2="0" class="edge"/><text x="72" y="1" dominant-baseline="middle" class="t-sm" style="font-weight:600">supported by borrowing and shortage accounts</text>
          <line x1="500" y1="0" x2="560" y2="0" class="edge dashed" style="stroke-width:3"/><text x="572" y="1" dominant-baseline="middle" class="t-sm" style="font-weight:600">inference requiring validation</text>
        </g>
      </svg>
      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="anim" style="--d:6">${C.badge('hypothesis', 'All arrows are causal hypotheses')}</div>
        <div class="anim" style="--d:7">
          <div style="display:flex;gap:10px;align-items:center"><span class="tag lime">R1</span><span class="section-title" style="font-size:28px">claims reinforce scarcity</span></div>
          <p class="small" style="margin:8px 0 0">Reinforcing: two negative links. The delay marks the gradual establishment of a personal claim.</p>
        </div>
        <div class="anim" style="--d:8">
          <div style="display:flex;gap:10px;align-items:center"><span class="tag lavender">B1</span><span class="section-title" style="font-size:28px">negotiation gives relief</span></div>
          <p class="small" style="margin:8px 0 0">Works only when a holder is <strong>absent, reachable and willing</strong>, and the requester <strong>feels able to ask</strong>. It cannot create space when all usable desks are occupied. <span class="hl-coral">A junior's hesitation can weaken the balancing response.</span></p>
        </div>
        <div class="anim" style="--d:9;border-top:3px solid var(--black);padding-top:12px">
          <div class="label">Delays that hide the loop</div>
          <ul class="small" style="margin:8px 0 0;padding-left:20px">
            <li>absence → desk release</li><li>GPU reservation → actual use</li><li>shortage detection → replenishment</li><li>recurring minor problem → formal awareness</li>
          </ul>
        </div>
      </div>
    </div>`;
  }
});
