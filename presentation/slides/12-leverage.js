Deck.add({
  slide: 12,
  title: 'Where can we intervene?',
  chapter: 'leverage',
  sources: [{ file: 'P34', page: 4, section: 'Leverage Point Map LP1–LP7 + dependency chain' }],
  notes: {
    say: [
      'Phase 3 ranked seven leverage points from shallow (fast and easy, lower structural leverage) to deep (harder, slower, higher leverage).',
      'LP3, information flow, is the highest-leverage point we can actually build. It enables LP1, LP2 and LP4: you cannot enforce a rule no one can see. LP4 enables LP5, so LP3 → LP4 → LP5 is the highest practical leverage now.',
      'LP6 and LP7, the system goal and the mental model, are deep structural conditions. They decide whether the rest persists, and they are not buildable features. The goal shift is to utilization with attribution, not removing ownership.'
    ],
    basis: ['P34 p4: names, depth labels, intervention directions and dependency arrows, all from the Leverage Point Map.'],
    avoid: ['These are leverage points identified analytically. Do not say they have been tested.', 'Do not say the goal is to remove ownership. P34 says explicitly: "Not \'remove ownership\'".']
  },
  html: () => {
    const LP = [
      ['LP1', 'correction targeting', 'shallow', 'Target correction at the responsible individual, not the entire group.', 'cream-light'],
      ['LP2', 'loop gain on hoarding', 'shallow → medium', 'Expose idle-holding so prolonged unused holding carries a social / reputational cost.', 'cream-light'],
      ['LP3', 'information flow', 'core · medium · ★ highest-leverage buildable', 'One shared, low-friction visibility layer: resource, holder, active/idle, time held, expected release, contact.', 'lime'],
      ['LP4', 'rules of engagement', 'medium → deep', 'Explicit lightweight rules: reservation expiry, idle-release, absence-triggered desk release, documented escalation path.', 'lavender'],
      ['LP5', 'self-organization capacity', 'deep structural', 'Standing mechanisms that let the system adapt, e.g. semesterly reallocation review on current headcount + usage.', 'lavender'],
      ['LP6', 'system goal', 'deep', 'Shift the operating goal to utilization with attribution. Not "remove ownership".', 'black'],
      ['LP7', 'mental model', 'deepest', 'Preserve attribution without turning attribution into exclusivity.', 'black']
    ];
    const rowH = 84, gapDiv = 34, yOf = k => k * rowH + (k >= 5 ? gapDiv : 0) + rowH / 2;
    const cx = 120, node = (k, label) => {
      const dark = LP[k][4] === 'black', fill = dark ? '#111' : LP[k][4] === 'lime' ? '#DFFF00' : LP[k][4] === 'lavender' ? '#B9A7F5' : '#FFFDF5';
      return `<circle cx="${cx}" cy="${yOf(k)}" r="27" fill="${fill}" stroke="#111" stroke-width="2.5"/><text x="${cx}" y="${yOf(k) + 1}" text-anchor="middle" dominant-baseline="middle" class="display" style="font-size:17px;fill:${dark ? '#F7F4E8' : '#111'}">${label}</text>`;
    };
    const lbl = (x, y, t, anchor = 'start') => `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" style="font-size:16px;font-weight:700">${t}</text>`;
    return `
    ${C.head({ no: '12', kicker: 'Leverage points · Phase 3', title: 'where can we intervene?', tag: 'shallow → deep', tagColor: 'lavender', size: 'md' })}
    <div style="position:relative;display:grid;grid-template-columns:1176px 1fr;gap:20px;margin-top:40px">
      <div style="position:relative">
        ${LP.map(([id, name, depth, dir, c], k) => `
          <div class="anim" style="--d:${2 + k};position:absolute;top:${yOf(k) - rowH / 2}px;left:${k * 26}px;right:0;height:${rowH - 8}px;display:grid;grid-template-columns:92px 340px 1fr;align-items:center;border:2px solid var(--black);background:var(--${c === 'black' ? 'black' : c});color:${c === 'black' ? 'var(--cream)' : 'var(--black)'};${k === 2 ? 'box-shadow:var(--shadow);' : ''}">
            <div class="display" style="font-size:26px;text-align:center;border-right:2px solid ${c === 'black' ? '#F7F4E8' : 'var(--black)'};height:100%;display:grid;place-items:center">${id}</div>
            <div style="padding:0 16px"><div class="section-title" style="font-size:25px;color:inherit">${name}</div><div style="font:700 13px var(--font-sans);letter-spacing:.12em;text-transform:uppercase;opacity:.75;margin-top:4px">${depth}</div></div>
            <div style="padding:0 16px;font:500 17px/1.3 var(--font-sans)">${dir}</div>
          </div>`).join('')}
        <div class="anim" style="--d:7;position:absolute;left:0;right:0;top:${5 * rowH + 2}px;border-top:3px dashed var(--black);text-align:center"><span style="position:relative;top:-14px;background:var(--cream);padding:0 12px;font:700 15px var(--font-sans);letter-spacing:.1em;text-transform:uppercase">▼ deep structural conditions: decide whether LP3–LP5 persist, not buildable features</span></div>
        <div style="height:${7 * rowH + gapDiv}px"></div>
      </div>
      <svg class="diagram anim" style="--d:9" viewBox="0 0 500 ${7 * rowH + gapDiv}" width="500" height="${7 * rowH + gapDiv}" role="img" aria-label="Dependency chain between leverage points">
        <path class="edge" d="M${cx} ${yOf(2) - 27} V${yOf(1) + 30}" marker-end="url(#ah)"/>
        <path class="edge" d="M${cx - 27} ${yOf(2) - 6} C ${cx - 90} ${yOf(2) - 40}, ${cx - 90} ${yOf(0) + 20}, ${cx - 28} ${yOf(0) + 8}" marker-end="url(#ah)"/>
        <path class="edge" d="M${cx} ${yOf(2) + 27} V${yOf(3) - 30}" marker-end="url(#ah)" style="stroke-width:4"/>
        <path class="edge" d="M${cx} ${yOf(3) + 27} V${yOf(4) - 30}" marker-end="url(#ah)" style="stroke-width:4"/>
        <path class="edge dashed" d="M${cx + 27} ${yOf(5) - 6} C ${cx + 330} ${yOf(5) - 40}, ${cx + 330} ${yOf(3) + 10}, ${cx + 32} ${yOf(3)}" marker-end="url(#ah)"/>
        <path class="edge" d="M${cx} ${yOf(6) - 27} V${yOf(5) + 30}" marker-end="url(#ah)"/>
        ${LP.map((l, k) => node(k, l[0])).join('')}
        ${lbl(cx + 40, yOf(1), 'weakens hoarding loop gain')}
        ${lbl(cx + 40, yOf(0), 'enables targeted accountability')}
        ${lbl(cx + 40, (yOf(2) + yOf(3)) / 2 + 12, 'enables · makes rules enforceable')}
        ${lbl(cx + 40, (yOf(3) + yOf(4)) / 2, 'enables')}
        ${lbl(cx + 40, yOf(4) + 52, 'shapes the design')}${lbl(cx + 40, yOf(4) + 72, 'of LP3–LP5')}
        ${lbl(cx + 40, (yOf(5) + yOf(6)) / 2, 'generates')}
        <rect x="${cx + 40}" y="${yOf(2) - 30}" width="300" height="60" fill="#DFFF00" stroke="#111" stroke-width="2"/>
        ${lbl(cx + 52, yOf(2) - 11, 'LP3 → LP4 → LP5 =')}${lbl(cx + 52, yOf(2) + 12, 'highest practical leverage now')}
      </svg>
    </div>`;
  }
});
