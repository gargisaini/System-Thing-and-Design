Deck.add({
  slide: 24,
  title: 'What changed in the system',
  chapter: 'synthesis',
  sources: [
    { file: 'P34', page: 6, section: 'Why each intervention exists: A–E, mechanism → opportunity → expected effect; LP6 + LP7' },
    { file: 'P34', page: 3, section: 'Mechanisms M1–M5: resulting behaviour' },
    { file: 'P34', page: 10, section: 'Intervention names (mapping to A–E inferred)' }
  ],
  notes: {
    say: [
      'This is the transformation in structural terms: each mechanism we found, and what the design changes about it.',
      'Status that was unreadable becomes readable. Claims that persisted now end, per resource. Access that ran on asking gets a named route. Blunt, population-wide correction becomes correction of the actor. Allocation that followed history begins to follow use.',
      'The right-hand column is the expected system effect. It is predicted, not measured.',
      'Underneath all of it is the goal shift, from protect-what-my-group-funded to use-idle-capacity-with-attribution. If that stays unnamed, the changes can drift back into ownership behaviour.'
    ],
    basis: ['P34 p6: branches A–E (mechanism, intervention opportunity, expected system effect; verbatim, slightly shortened).', 'P34 p3: "before" behaviour per mechanism.', 'Pairing A–E with interventions 1–5 is inferred from matching mechanism and leverage point on P34 p6 vs p10 (CONTENT_VALIDATION row 24).'],
    avoid: ['Do not say these effects were achieved.', 'Do not present the A–E ↔ 1–5 pairing as a table from the source; it is our mapping.']
  },
  html: () => {
    const R = [
      ['M2', 'status is unreadable', 'Every check is a person-to-person query; an idle slot looks like an active one.', 'A', 'make status readable', '1 · Claim Signals', 'Fewer manual checks; idle holding gets noticed; free capacity reads as free.', 'blue'],
      ['M1', 'claims persist', 'Empty ≠ available. Users reserve earlier and longer, most of all near deadlines.', 'B', 'let claims end, per resource', '2 · Default-Decay', 'Claims track actual use; less defensive reserving before deadlines.', 'orange'],
      ['M3', 'access runs on asking', 'Offered permission ≠ felt permission. Access follows confidence and network.', 'C', 'give small needs a route', '4 · Stewards + ladder', 'Asking becomes cheaper and less personal; unmet need reaches someone who can act.', 'lavender'],
      ['M4', 'problems surface late; correction is blunt', 'Authority stays under-informed, then responds broadly; the shared benefit is lost.', 'D', 'correct misuse, keep benefit', '3 · Proportionate Care', 'Misuse still controlled; shared amenities stay open to students.', 'pink'],
      ['M5', 'allocation follows history', 'Idle capacity in one group while another is short.', 'E', 'let allocation follow use', '5 · Review', 'Allocation adapts before crises; idle capacity used with attribution.', 'lime']
    ];
    return `
    ${C.head({ no: '24', kicker: 'The transformation', title: 'what changed in the system', tag: 'before → after', tagColor: 'pink', size: 'md' })}
    <div style="display:grid;grid-template-columns:1fr 330px 1fr;gap:12px 22px;margin-top:30px">
      <div class="label anim" style="--d:2">Before · mechanism today</div><div class="label anim" style="--d:2;text-align:center">Change</div>
      <div class="label anim" style="--d:2;display:flex;gap:10px;align-items:center">After · expected system effect ${C.badge('predicted')}</div>
      ${R.map(([m, mt, before, L, lt, iv, after, c], k) => `
        <div class="anim" style="--d:${3 + k};display:flex;gap:14px;align-items:center;padding:10px 14px;border:2px dashed var(--black);background:var(--cream-light)">
          <span class="display" style="font-size:22px;color:var(--ink-3);text-decoration:line-through">${m}</span>
          <div><div style="font:400 19px var(--font-display);color:var(--ink-3)">${mt}</div><div style="font:500 16.5px/1.3 var(--font-sans);color:var(--ink-2)">${before}</div></div></div>
        <div class="anim" style="--d:${3 + k};display:flex;align-items:center;gap:8px">
          ${C.arrow()}
          <div style="flex:1;background:var(--black);color:var(--cream);padding:8px 12px">
            <div style="font:400 18px/1.1 var(--font-display)"><span style="color:var(--${c})">${L}</span> ${lt}</div>
            <div style="font:700 13.5px var(--font-sans);letter-spacing:.08em;text-transform:uppercase;margin-top:4px;opacity:.85">${iv}</div></div>
          ${C.arrow()}
        </div>
        <div class="anim" style="--d:${3.5 + k};display:flex;align-items:center;padding:10px 16px;background:var(--${c});border:2px solid var(--black);font:700 19px/1.3 var(--font-sans);box-shadow:var(--shadow)">${after}</div>`).join('').replace(/<svg viewBox="0 0 34 16"/g, '<svg style="flex:0 0 30px;width:30px" viewBox="0 0 34 16"')}
    </div>
    <div class="anim insight" style="--d:9;margin-top:auto;display:grid;grid-template-columns:330px 1fr;gap:20px;align-items:center;padding:16px 26px">
      <div class="label">Underneath every branch<br>LP6 goal + LP7 mental models</div>
      <p style="margin:0;font-size:24px">Goal (inferred): <em style="color:#C9CDD2">protect what my group funded</em> → <em style="background:var(--lime);color:var(--black);padding:0 6px">use idle capacity, with attribution</em>. If these stay unnamed, the changes can drift back into ownership behaviour.</p>
    </div>`;
  }
});
