Deck.add({
  slide: 13,
  title: 'Design principles',
  chapter: 'leverage',
  sources: [{ file: 'P34', page: '8–9', section: 'Design Principles 01–07 (+ key on p9)' }],
  notes: {
    say: [
      'Seven principles, each tied to the mechanism it is meant to prevent. Every line on the right is a "prevents" link stated in Phase 3.',
      'Visibility first: rules only work when people can see whether they are being followed. Claims decay: a hold needs an ongoing signal of use, not a one-time claim. Correct the actor, not the population.',
      'Two principles both point at M3, access runs on asking: route the need, and favour self-serve. Asking has to become cheaper without adding another layer of approval.'
    ],
    basis: ['P34 p8: titles, one-liners and PREVENTS links, verbatim. Short names (Visibility first, …) from the key on P34 p9.'],
    avoid: ['These are design principles, not findings. Do not say they have been shown to work.']
  },
  html: () => {
    const P = [
      ['P1', 'Make availability visible before making it enforceable', 'Rules only work when people can see whether they are being followed.', 'Unwritten norms that no one can check', 'blue', [1]],
      ['P2', 'Correct the actor, not the population', 'Consequences land on the person responsible, not on everyone.', 'Collective restriction that removes the shared benefit', 'pink', [3]],
      ['P3', 'Let claims decay by default', 'A hold needs an ongoing signal of use, not a one-time claim.', 'Persistent claims and idle occupation', 'orange', [0]],
      ['P4', 'Route unmet need to whoever can act on it', 'A proportionate step between peers and faculty.', 'Needs lost in WhatsApp or silent yielding', 'lavender', [2]],
      ['P5', 'Design for actual usage, not historical allocation', 'Allocation updates as the population does.', 'Desk arrangements frozen at an old split', 'lime', [4]],
      ['P6', 'Preserve attribution while enabling sharing', 'Credit and control stay visible; idle capacity can still flow.', 'Ownership treated as exclusivity', 'blue', [5]],
      ['P7', 'Favour self-serve, lightweight mechanisms over added approval', 'Reduce the friction of asking; don\'t add another layer.', 'New processes ignored, as escalation to faculty is now', 'pink', [2]]
    ];
    const M = [['M1', 'claims persist'], ['M2', 'status is unreadable'], ['M3', 'access runs on asking'], ['M4', 'problems surface late; correction is blunt'], ['M5', 'allocation follows history'], ['RC1·RC5', 'ownership treated as exclusivity']];
    const rowH = 96, gap = 8, py = k => k * (rowH + gap) + rowH / 2;
    const H = 7 * rowH + 6 * gap, mH = 82, mGap = (H - 6 * mH) / 5, my = j => j * (mH + mGap) + mH / 2;
    const LW = 1000, SW = 260;
    return `
    ${C.head({ no: '13', kicker: 'Design principles · Phase 3', title: 'design principles', tag: 'each prevents a mechanism', tagColor: 'lime', size: 'md' })}
    <div style="position:relative;height:${H}px;margin-top:34px">
      ${P.map(([id, t, line, prev, c], k) => `
        <div class="anim" style="--d:${2 + k};position:absolute;left:0;top:${py(k) - rowH / 2}px;width:${LW}px;height:${rowH}px;display:grid;grid-template-columns:76px 1fr;border:2px solid var(--black);background:var(--cream-light)">
          <div class="display" style="background:var(--${c});border-right:2px solid var(--black);display:grid;place-items:center;font-size:24px">${id}</div>
          <div style="padding:8px 16px;display:flex;flex-direction:column;justify-content:center">
            <div style="font:700 21px/1.15 var(--font-sans)">${t}</div>
            <div style="font:400 16.5px/1.3 var(--font-sans);color:var(--ink-2);margin-top:3px">${line}</div>
            <div style="font:700 15px/1.3 var(--font-sans);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);margin-top:3px">prevents: ${prev}</div>
          </div>
        </div>`).join('')}
      <svg class="diagram anim" style="--d:9;position:absolute;left:${LW}px;top:0" width="${SW}" height="${H}" aria-hidden="true">
        ${P.map(([, , , , , to], k) => to.map(j => `<path class="edge" d="M0 ${py(k)} C ${SW / 2} ${py(k)}, ${SW / 2} ${my(j)}, ${SW - 8} ${my(j)}" marker-end="url(#ah)"/><circle cx="0" cy="${py(k)}" r="5" fill="#111"/>`).join('')).join('')}
      </svg>
      ${M.map(([id, t], j) => `
        <div class="anim" style="--d:${10 + j};position:absolute;left:${LW + SW}px;right:0;top:${my(j) - mH / 2}px;height:${mH}px;display:flex;align-items:center;gap:14px;padding:0 18px;background:var(--black);color:var(--cream)">
          <span class="display" style="font-size:${id.length > 3 ? 17 : 24}px;color:var(--lime);white-space:nowrap">${id}</span>
          <span style="font:700 19px/1.2 var(--font-sans)">${t}</span>
        </div>`).join('')}
    </div>`;
  }
});
