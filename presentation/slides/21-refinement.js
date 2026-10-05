Deck.add({
  slide: 21,
  title: 'From version 1 to version 2',
  chapter: 'test',
  sources: [{ file: 'P34', page: 27, section: 'Refining the Interventions (V1 → V2)' }],
  notes: {
    say: [
      'No intervention was dropped just because a risk exists. Each one got the smallest change that reduces its main failure mode.',
      'Signals: Protected now needs an end date and the steward\'s initials. Decay: a fixed "N days then reassign" became tiered, 7 / 21 / 5, and running jobs never lapse. Stewards: one broad steward became cross-lab pairs with a one-hour cap, deciding only by written rule.',
      'Every refinement leaves a trade-off and an open question. For example: are 7, 21 and 5 the right numbers? Only a pilot could tell.'
    ],
    basis: ['P34 p27: all cells verbatim (checked against the rendered page).'],
    avoid: ['V2 is a refined proposal derived from scenario walkthroughs, not from field testing.']
  },
  html: () => {
    const R = [
      ['1 · signals', 'blue', 'Four states on every desk card', 'Protected inflation; stale cards', 'S1, S3: Protected with no end date = a permanent claim', 'Protected needs an end date + steward initials; "last here" date line', 'One extra step for real continuity', 'Do holders date the card?'],
      ['2 · decay', 'orange', 'Fixed N days, then reassign', 'Punitive feel; false lapse; ritual renewal', 'S3, S5, S6: travellers hurt; renewal ≠ use', 'Tiered: 7 days borrowable → 21 days message → 5 days reply; running jobs never lapse; repeat renewal → conversation', 'Dead desks recovered more slowly', 'Are 7 / 21 / 5 the right numbers?'],
      ['3 · care', 'pink', 'Named correction for misuse', 'Anonymisation; shaming', 'S8: staff must report, not enforce', 'Private word, never public; blanket restriction needs a written reason and a review date; run by the amenities steward', 'Slower than a blanket rule', 'Faculty agreement'],
      ['4 · stewards', 'lavender', 'One steward per resource, broad rights', 'Bottleneck; junior vs senior; burnout', 'S2, S4: peak load exceeds 1 h; a junior alone lacks standing', 'Cross-lab pairs mixing seniority; 1 h/week cap with overflow to faculty; decide only by written rule; faculty back the role publicly; GPU steward = existing POC', 'Two people must coordinate', 'Volunteer supply; time at peak'],
      ['5 · review', 'black', 'Termly joint review decides allocations', 'Formality; faculty time; politics', 'S7: cross-lab calls fit the owning steward better than a committee', '45-min fixed agenda; decisions only from log counts; cross-lab decided by the owning steward; first run as a mock at pilot end', 'Structural change is slower', 'Faculty attendance']
    ];
    return `
    ${C.head({ no: '21', kicker: 'Refinement · Phase 4', title: 'version 1 → version 2', tag: 'smallest fix that works', tagColor: 'lime', size: 'md' })}
    <p class="lede anim" style="--d:2;margin-top:24px;font-size:22px">No intervention is dropped because a risk exists. Each gets the smallest change that reduces its main failure mode.</p>
    <div style="margin-top:18px;display:grid;grid-template-columns:150px 220px 40px 300px 40px 1fr 250px;gap:16px 8px;align-items:stretch">
      ${['', 'version 1', '', 'risk · revealed by', '', 'version 2 ' + C.badge('proposed', 'proposed refinement'), 'trade-off · still to test'].map(h => `<div class="label anim" style="--d:2;font-size:13px">${h}</div>`).join('')}
      ${R.map(([iv, c, v1, risk, walk, v2, trade, test], k) => `
        <div class="anim" style="--d:${3 + k};display:flex;align-items:center"><span class="tag ${c}" style="font-size:16px">${iv}</span></div>
        <div class="anim" style="--d:${3 + k};padding:10px 12px;border:2px dashed var(--black);color:var(--ink-3);font:500 18px/1.3 var(--font-sans);text-decoration:line-through;text-decoration-color:var(--ink-3)">${v1}</div>
        <div class="anim" style="--d:${3 + k};display:grid;place-items:center">${C.arrow()}</div>
        <div class="anim" style="--d:${3 + k};padding:8px 12px;background:var(--pink-soft);border-left:6px solid var(--pink)">
          <div style="font:700 18px/1.25 var(--font-sans)">${risk}</div>
          <div style="font:500 16.5px/1.3 var(--font-sans);margin-top:4px;color:var(--ink-2)">${walk}</div></div>
        <div class="anim" style="--d:${3 + k};display:grid;place-items:center">${C.arrow()}</div>
        <div class="anim" style="--d:${3 + k};padding:10px 14px;background:var(--lime);border:2px solid var(--black);font:700 19px/1.3 var(--font-sans);box-shadow:var(--shadow)">${v2}</div>
        <div class="anim" style="--d:${3 + k};font:500 16.5px/1.3 var(--font-sans);display:flex;flex-direction:column;justify-content:center;gap:4px"><span>⇄ ${trade}</span><span style="color:var(--ink-3)">? ${test}</span></div>`).join('')}
    </div>`;
  }
});
