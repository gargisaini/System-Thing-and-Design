Deck.add({
  slide: 9,
  title: 'The reframe',
  chapter: 'realise',
  sources: [
    { file: 'P1', page: 1, section: '1.3 Initial framing' },
    { file: 'P2', page: 20, section: 'Alternative Problem Framings' },
    { file: 'P2', page: 21, section: 'Reframed Problem Statement + Evidences' },
    { file: 'P34', page: 2, section: 'What Phase 2 taught us' }
  ],
  notes: {
    say: [
      'We started with a question about how boundaries, persistent claims, uneven information and distributed responsibility turn capacity into unequal access.',
      'The evidence pointed to five things: fragmented ownership, fragmented information, informal rules, access that depends on social coordination, and physical availability that is not usable availability.',
      'Read the reframed statement in full. The key move: a resource can be physically available but still effectively unavailable.',
      'Phase 3 summed it up as a readability problem sitting on top of a capacity problem. Scarcity is real, but it is not the whole story.'
    ],
    basis: ['P1 p1 (initial framing, verbatim).', 'P2 p21 (reframed statement, verbatim and unabridged; five evidence bullets, shortened to their lead clause).', 'P34 p2 (headline line, verbatim).'],
    avoid: ['Do not say capacity is adequate. P34 p2: "Peak-time shortage is real, and more capacity would help at the margin."']
  },
  html: () => {
    const ev = [['Resource ownership is fragmented', 'lavender'], ['Information is fragmented', 'blue'], ['Rules are often informal', 'lavender'], ['Access depends partly on social coordination', 'pink'], ['Physical availability is not the same as usable availability', 'lime']];
    return `
    ${C.head({ no: '09', kicker: 'The systemic reframe', title: 'the reframe', tag: 'readability', tagColor: 'lime' })}
    <p class="lede anim" style="--d:2;margin-top:30px">Phase 2 found a <strong>readability problem</strong> sitting on top of a <strong>capacity problem</strong>.</p>
    <div style="display:grid;grid-template-columns:330px 470px 1fr;gap:30px;margin-top:36px;align-items:start">
      <div class="anim" style="--d:3">
        <div class="label" style="color:var(--ink-3)">① from · Phase 1 framing</div>
        <p style="margin:12px 0 0;font:500 22px/1.4 var(--font-sans);color:var(--ink-3)">How do resource boundaries, claim persistence, uneven information and distributed responsibility turn nominal capacity into unequal usable access?</p>
      </div>
      <div class="anim" style="--d:4">
        <div class="label">② evidence · Phase 2</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px">
          ${ev.map(([t, c], k) => `<div class="anim" style="--d:${5 + k};display:flex;gap:12px;align-items:center;padding:10px 14px;border:2px solid var(--black);background:var(--cream-light);font:700 19px/1.25 var(--font-sans)"><span style="flex:0 0 22px;height:22px;border-radius:50%;background:var(--${c});border:2px solid var(--black)"></span>${t}</div>`).join('')}
        </div>
      </div>
      <div class="anim" style="--d:9;background:var(--lime);border:3px solid var(--black);padding:26px 30px;box-shadow:var(--shadow);rotate:-1deg;margin-right:10px">
        <div class="label">③ to · reframed problem statement</div>
        <p style="margin:12px 0 0;font:500 23px/1.42 var(--font-sans)">Shared resources in SERC are not only constrained by limited capacity; they are made harder to access by fragmented ownership, fragmented visibility, unwritten rules, and dependence on informal negotiation. This means a resource can be <span style="background:var(--black);color:var(--cream);padding:0 5px;font-weight:700">physically available but still remain effectively unavailable</span> because users may not know its status, may not know whether they are allowed to use it, or may hesitate to ask. The result is avoidable waiting, under-utilization, unequal ease of access, and repeated coordination effort.</p>
      </div>
    </div>
    <div class="anim" style="--d:11;margin-top:auto">
      <div class="label">Three framings we weighed · Phase 2</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px">
        ${[
          ['Capacity is scarce: the commons needs more desks, GPUs and amenities', 'Contradicted by the data: empty-claimed desks and GPUs "held in advance for someday" show availability failing, not supply', 'pink'],
          ['Resources and demand never see each other', "Doesn't account for juniors who see an available seat and still won't sit in it", 'blue'],
          ['Access is governed by personal permission and social confidence', 'Full formalization would break the courtesy network the system currently survives on; some permissioning is genuinely valuable (protecting equipment, setups)', 'orange']
        ].map(([f, lim, c]) => `<div style="border-left:8px solid var(--${c});padding:4px 0 4px 14px"><div style="font:700 19px/1.3 var(--font-sans)">${f}</div><div class="small" style="margin-top:4px;font-size:17px">Limitation: ${lim}</div></div>`).join('')}
      </div>
    </div>`;
  }
});
