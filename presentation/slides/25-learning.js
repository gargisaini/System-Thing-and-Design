Deck.add({
  slide: 25,
  title: 'How the system learns',
  chapter: 'synthesis',
  sources: [
    { file: 'P1', page: 14, section: '5.7 The system has no feedback loop yet' },
    { file: 'P34', page: 31, section: 'Review loop: how the system learns' },
    { file: 'P2', page: 17, section: 'Reading the pattern (closing line)' }
  ],
  notes: {
    say: [
      'Phase 1 found that the system had no feedback loop. A junior who gives up on a desk, a request quietly withdrawn, a fault never reported: none of these leaves a trace. Demand that disappears looks the same as demand that was met.',
      'The final design adds that loop: use, observe, review, modify, publish, every term. Any issue logged three or more times in a term goes on the review agenda automatically.',
      'The review can change numbers, card states, steward roles, the desk split and cross-lab guidance. It cannot override ownership of purchased equipment or the institute\'s rules.',
      'Close on the line that sums up what we learned: the system does not prevent access; it simply never informs the people who could enable it.'
    ],
    basis: ['P1 p14 §5.7 (no feedback loop; demand that disappears…).', 'P34 p31 (loop stages, 3+ rule, can/cannot: verbatim).', 'P2 p17 (closing sentence, verbatim). P34 p31 attributes the missing loop to Phase 2 (CONTENT_VALIDATION C6).'],
    avoid: ['The loop is proposed. Do not say it is running.']
  },
  html: () => {
    const S = [['use', 'Cards, page fields and the ladder run day to day.', 'blue'], ['observe', 'Weekly bay walk; one log line per case; steward hours.', 'lavender'], ['review', 'Stewards check in mid-term; the joint review sits at the end of each term.', 'pink'], ['modify', 'Change a number (7/21/5, 2 h), a card state, a role or the desk split.', 'orange'], ['publish', 'Post the change on the bay notice and GPU page; it applies next term.', 'lime']];
    const R = 236, cx = 346, cy = 340;
    const p = S.map((_, k) => { const a = -Math.PI / 2 + k * 2 * Math.PI / 5; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
    return `
    ${C.head({ no: '25', kicker: 'Review loop · how the system learns', title: 'how the system learns', tag: 'every term', tagColor: 'lime', size: 'md' })}
    <div style="display:grid;grid-template-columns:680px 1fr;gap:30px;margin-top:6px;flex:1">
      <div class="anim" style="--d:2;position:relative;width:680px;height:700px">
        <svg class="diagram" style="position:absolute;inset:0" width="680" height="700" aria-hidden="true">
          <circle class="draw" style="--d:3" cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#111" stroke-width="4" stroke-dasharray="14 10"/>
          ${p.map(([x, y], k) => { const [x2, y2] = p[(k + 1) % 5]; const mx = (x + x2) / 2, my = (y + y2) / 2, ox = (mx - cx) * .22, oy = (my - cy) * .22; return `<path d="M${mx - (x2 - x) * .06 + ox} ${my - (y2 - y) * .06 + oy} L${mx + (x2 - x) * .06 + ox} ${my + (y2 - y) * .06 + oy}" stroke="#111" stroke-width="4" marker-end="url(#ah)"/>`; }).join('')}
        </svg>
        <div style="position:absolute;left:${cx - 90}px;top:${cy - 90}px;width:180px;height:180px;border-radius:50%;background:var(--black);color:var(--lime);display:grid;place-items:center;text-align:center;font:400 26px/1 var(--font-display)">every<br>term</div>
        ${S.map(([t, d, c], k) => `<div class="anim" style="--d:${3 + k};position:absolute;left:${p[k][0] - 108}px;top:${p[k][1] - 62}px;width:216px;border:2px solid var(--black);background:var(--cream-light);box-shadow:var(--shadow)">
          <div style="background:var(--${c});border-bottom:2px solid var(--black);padding:3px 10px;font:400 20px var(--font-display)">${k + 1} ${t}</div>
          <div style="padding:5px 10px;font:500 16px/1.28 var(--font-sans)">${d}</div></div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:22px;padding-top:26px">
        <div class="anim" style="--d:4">
          <div class="label">Phase 1 found ${C.badge('analysis')}</div>
          <p style="margin:10px 0 0;font:400 36px/1.2 var(--font-display);letter-spacing:-.01em">the system has no feedback loop yet. <span class="hl-coral">demand that disappears looks the same as demand that was met.</span></p>
        </div>
        <div class="anim" style="--d:6;display:grid;grid-template-columns:1fr 1fr;gap:18px">
          <div style="border-left:8px solid var(--lime);padding-left:14px"><div class="label">Recurring issue → policy question</div><div class="small" style="font-size:18px;margin-top:4px">An issue logged 3+ times in a term is automatically on the review agenda. The decision is recorded on the bay notice.</div></div>
          <div style="border-left:8px solid var(--black);padding-left:14px"><div class="label">The review can / cannot</div><div class="small" style="font-size:18px;margin-top:4px"><strong>Can:</strong> numbers, states, steward roles, desk split, cross-lab guidance. <strong>Cannot:</strong> override ownership of purchased equipment or the institute's rules.</div></div>
        </div>
        <div class="anim" style="--d:9;margin-top:auto;background:var(--lime);border:3px solid var(--black);padding:18px 24px;rotate:-1deg;margin:0 8px 8px 0;box-shadow:var(--shadow)">
          <p style="margin:0;font:400 36px/1.12 var(--font-display);letter-spacing:-.015em">The system does not prevent access; it simply never informs the people who could enable it.</p>
          <div class="label" style="margin-top:12px">Our Phase 2 reading · team the system error</div>
        </div>
      </div>
    </div>`;
  }
});
