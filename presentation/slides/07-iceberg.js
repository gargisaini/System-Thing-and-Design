Deck.add({
  slide: 7,
  title: 'From events to system structure',
  chapter: 'realise',
  sources: [
    { file: 'P1', page: 12, section: '5.4 Iceberg model (Fig 8)' },
    { file: 'P1', page: 13, section: 'From visible events to system structure' },
    { file: 'P2', page: 8, section: 'Iceberg Model of Lab Resource Use' }
  ],
  notes: {
    say: [
      'Above the waterline is the event: a junior cannot settle at a claimed desk.',
      'Below it is the pattern: incumbent priority persists and newcomers negotiate. Then the structure: no common desk release rule, and access follows affiliation. At the bottom are the mental models: a familiar desk feels like mine, a small issue should stay private, a resource our group paid for belongs to our group.',
      'Not all of these beliefs are harmful. Respect for others\' equipment and a preference for peaceful dialogue support trust. The design challenge is to keep those benefits.',
      'Phase 2 extended this into a five-column iceberg (thumbnail).'
    ],
    basis: ['P1 p12 Fig 8: all layer text verbatim.', 'P1 p13: "Not all mental models are harmful…" and the events → structure chain.', 'P2 p8: extended iceberg figure (thumbnail only).'],
    avoid: ['The mental-model lines are belief statements the team inferred, not interview quotes. Do not attribute them to a participant.']
  },
  html: () => {
    const W = 1180, H = 700;
    const bands = [
      [0, 160, 'events', 'react', ['A junior cannot settle at a claimed desk.', 'Resource conflict among students.'], 'none'],
      [160, 340, 'patterns', 'anticipate', ['Incumbent priority persists; newcomers negotiate.', 'Local workarounds recur as demand rises.'], '#E1E9F8'],
      [340, 520, 'structures', 'design', ['No common desk release rule; access follows affiliation.', 'Service labour and decision rights sit with different actors.'], '#9DB7E8'],
      [520, 700, 'mental models', 'transform', ['A familiar desk feels like mine. A small issue should stay private.', 'A resource paid for by our group belongs to our group.'], '#B9A7F5']
    ];
    return `
    ${C.head({ no: '07', kicker: 'Events → patterns → structures → mental models', title: 'below the waterline', tag: 'iceberg', tagColor: 'blue', size: 'md' })}
    <div style="display:grid;grid-template-columns:${W}px 1fr;gap:40px;margin-top:30px">
      <svg class="diagram anim" style="--d:2" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Iceberg model with four layers">
        ${bands.map(([y0, y1, , , , f]) => f === 'none' ? '' : `<rect x="0" y="${y0}" width="${W}" height="${y1 - y0}" fill="${f}" stroke="#111" stroke-width="2"/>`).join('')}
        <line x1="0" y1="160" x2="${W}" y2="160" stroke="#111" stroke-width="4"/>
        <path d="M500 160 L575 28 L630 80 L670 50 L750 160 Z" fill="#FFFDF5" stroke="#111" stroke-width="3"/>
        <path d="M500 160 L330 340 L260 520 L360 680 L590 698 L850 675 L960 520 L910 340 L750 160 Z" fill="#FFFDF5" fill-opacity=".55" stroke="#111" stroke-width="2.5" stroke-dasharray="8 7"/>
        ${bands.map(([y0, y1, name, verb, lines], k) => `
          <g class="anim" style="--d:${3 + k * 2}">
            <text x="30" y="${y0 + 46}" class="display" style="font-size:30px">${name}</text>
            <rect x="${W - 190}" y="${y0 + 22}" width="166" height="36" rx="18" fill="${k === 0 ? '#DFFF00' : '#FFFDF5'}" stroke="#111" stroke-width="2"/>
            <text x="${W - 107}" y="${y0 + 41}" text-anchor="middle" dominant-baseline="middle" style="font-size:18px;font-weight:700;letter-spacing:.1em">${verb.toUpperCase()}</text>
            ${lines.map((l, j) => `<text x="${W / 2 + 30}" y="${(y0 + y1) / 2 + (j - 0.5) * 36 + (k === 0 ? 20 : 12)}" text-anchor="middle" style="font-size:24px;font-weight:${k === 3 ? 700 : 500};paint-order:stroke;stroke:#FFFDF5;stroke-width:7px;stroke-linejoin:round">${l}</text>`).join('')}
          </g>`).join('')}
      </svg>
      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="anim" style="--d:6">
          <div class="label">Phase 1, in one line ${C.badge('analysis')}</div>
          <p style="margin:12px 0 0;font:500 23px/1.4 var(--font-sans)">A newcomer's difficulty finding a desk is the <span class="hl">event</span>. Repeated incumbent priority is the <span class="hl-blue">pattern</span>. Persistent claims without common release conditions form the <span class="hl-teal">structure</span>. Belief in entitlement keeps it alive, even when nobody intends to exclude a colleague.</p>
        </div>
        <div class="anim" style="--d:8;border-left:8px solid var(--lavender);padding-left:16px">
          <div class="label">Not all mental models are harmful</div>
          <p class="body" style="margin:8px 0 0">Respect for another person's equipment and a preference for peaceful dialogue support trust.</p>
        </div>
        <figure class="photo anim" style="--d:10;rotate:2deg;margin-right:12px"><img src="assets/figures/phase2-iceberg.jpg" alt="Phase 2 five-column iceberg figure" style="height:180px;object-fit:cover;object-position:top"><figcaption>Extended to five columns · P2 p8</figcaption></figure>
      </div>
    </div>`;
  }
});
