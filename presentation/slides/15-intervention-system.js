Deck.add({
  slide: 15,
  title: 'The intervention system',
  chapter: 'leverage',
  sources: [
    { file: 'P34', page: 10, section: 'Alternative Interventions: five concepts + dependency chain [I]' },
    { file: 'P34', page: 28, section: 'Nine layers: FEEDBACK' },
    { file: 'P34', page: 32, section: 'Recommended: a staged minimum bundle' }
  ],
  notes: {
    say: [
      'Five interventions, designed as one system rather than five features.',
      'The dependencies are explicit in our Phase 4 analysis: decay only works if lapses are visible, which is Claim Signals, and if someone other than faculty confirms them, which is the Stewards. The termly review needs the stewards\' issue log. Proportionate Care stands alone for amenities, so the recommendation runs it inside the steward role.',
      'Stage 1 is the core system; stage 2 is the review every term. The review closes the loop: it can change a number, a state or a role, and posts the change on the bay notice.'
    ],
    basis: ['P34 p10: names, depth/type, main new burden, and the dependency chain marked [I] (inference).', 'P34 p32: staging and final wording of what each part does.', 'P34 p28 FEEDBACK row.'],
    avoid: ['These are proposed interventions. Nothing has been deployed.', 'The dependency chain is the team\'s analytical inference ([I]), not an observed effect.']
  },
  html: () => {
    const box = (x, y, w, h, c, id, name, type, does, burden, d) => `
      <div class="anim" style="--d:${d};position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;border:3px solid var(--black);background:var(--${c});color:${c === 'black' ? 'var(--cream)' : 'var(--black)'};padding:16px 18px;box-shadow:var(--shadow);display:flex;flex-direction:column">
        <div style="display:flex;align-items:baseline;gap:10px"><span class="display" style="font-size:40px;line-height:.8">${id}</span><span class="section-title" style="font-size:24px;color:inherit">${name}</span></div>
        <div style="font:700 13px var(--font-sans);letter-spacing:.12em;text-transform:uppercase;margin-top:8px;opacity:.8">${type}</div>
        <div style="font:500 18px/1.32 var(--font-sans);margin-top:8px">${does}</div>
        ${burden ? `<div style="margin-top:auto;font:700 15px/1.3 var(--font-sans)">new burden: ${burden}</div>` : ''}
      </div>`;
    const lab = (x, y, t, w = 250) => `<div class="anim" style="--d:9;position:absolute;left:${x}px;top:${y}px;width:${w}px;font:700 16px/1.25 var(--font-sans);background:var(--cream);padding:2px 6px;text-align:center">${t}</div>`;
    return `
    ${C.head({ no: '15', kicker: 'The intervention bundle · Phase 4', title: 'one system, five parts', tag: 'proposed', tagColor: 'lavender', size: 'md' })}
    <div style="position:relative;height:700px;margin-top:30px">
      <div style="position:absolute;left:0;right:0;top:0;height:470px;border:2px dashed var(--black);"></div>
      <div style="position:absolute;left:0;right:0;top:494px;height:206px;border:2px dashed var(--black);background:var(--lime-soft)"></div>
      <span class="accent-label lime" style="position:absolute;left:18px;top:-16px;font-size:17px">stage 1 · core system</span>
      <span class="accent-label" style="position:absolute;left:18px;top:478px;font-size:17px">stage 2 · every term</span>
      <svg class="diagram" style="position:absolute;inset:0" width="1696" height="700" aria-hidden="true">
        <path class="edge draw" style="--d:6;stroke-width:3.5" d="M450 170 H612" marker-end="url(#ah)"/>
        <path class="edge draw" style="--d:7;stroke-width:3.5" d="M1250 170 H1052" marker-end="url(#ah)"/>
        <path class="edge draw" style="--d:8;stroke-width:3.5" d="M1420 450 V590 H1090" marker-end="url(#ah)"/>
        <path class="edge dashed" d="M630 640 H240 V292" marker-end="url(#ah)" style="stroke-width:3"/>
        <path class="edge dashed" d="M830 520 V306" marker-end="url(#ah)" style="stroke-width:3"/>
      </svg>
      ${box(40, 70, 410, 220, 'blue', '1', 'claim signals', 'light · information flow', 'Dated desk cards; two fields on the existing GPU page (expected release, OK to pause?).', 'holders update markers', 3)}
      ${box(620, 70, 420, 230, 'orange', '2', 'default-decay claims', 'moderate · rule', 'Tiered 7 / 21 / 5-day desk rule; 2-h GPU lapse; continuity exceptions.', 'holders renew; someone confirms lapses', 4)}
      ${box(1250, 30, 420, 420, 'lavender', '4', 'stewards + ladder', 'moderate · role + routing', 'Cross-lab pairs, capped at 1 h/week; GPU steward = existing POC; peer → steward → faculty; issue log.<br><strong style="font-size:15px">new burden: stewards (largest new load)</strong>', '', 5)}
      ${box(1280, 260, 360, 172, 'pink', '3', 'proportionate care', 'light · rule + process · runs inside 4', 'Label → reminder → private word → individual limit, run by the amenities steward.', '', 6)}
      ${box(640, 508, 440, 180, 'black', '5', 'allocation & issue review', 'deep · governance', 'One 45-min joint SERC–Precog review each term, using the issue log.', 'faculty time', 7)}
      ${lab(456, 120, 'makes lapses visible', 160)}
      ${lab(1046, 110, 'confirms lapses (not faculty)', 200)}
      ${lab(1120, 600, 'issue log feeds the review', 260)}
      ${lab(250, 380, 'change a number, a state or a role → post on the bay notice', 330)}
    </div>`;
  }
});
