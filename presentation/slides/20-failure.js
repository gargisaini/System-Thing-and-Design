Deck.add({
  slide: 20,
  title: 'Where the intervention could fail',
  chapter: 'test',
  sources: [{ file: 'P34', page: '25–26', section: 'From intervention to unintended consequence (likelihood + evidence)' }],
  notes: {
    say: [
      'For every intervention we traced a chain: intended response, how stakeholders would adapt, the secondary effect, and the unintended consequence.',
      'LIKELY means the adaptation already happens under today\'s arrangement; there is documented evidence. POSSIBLE means plausible from the mechanism, with no direct evidence. Risks with no basis at all were dropped.',
      'The most likely failures: Protected becomes the default and signals lose meaning; ritual renewal keeps the claims spiral going; everyone declares a deadline at peak; and unpaid stewards drift, so cases go back to WhatsApp.'
    ],
    basis: ['P34 p25–26: all ten chains, likelihood ratings and evidence notes (checked against the rendered pages).'],
    avoid: ['These are anticipated failure modes from analysis, not failures that occurred.']
  },
  html: () => {
    const R = [
      ['1 · signals', 'Holders tick a state', 'Tick Protected "to be safe"', 'Protected becomes the default', 'Signals lose meaning; newcomers are back to guessing', 'LIKELY', 'Belongings already act as enduring claims [E]'],
      ['1 · signals', 'Expected release shown on the GPU page', 'Holders feel watched', 'Fields left blank or gamed', 'Surveillance effect; less honest data', 'POSSIBLE', 'No direct evidence; follows from the privacy tension'],
      ['2 · decay', 'Claims lapse unless renewed', 'Renew every week without use', 'Claims persist on paper', 'Ritual renewal; the R1 spiral continues', 'LIKELY', 'Claims persist today with no rule at all [E]'],
      ['2 · decay', 'Unstarted reservations lapse after 2 h', 'Start dummy jobs to hold the slot', 'Compute wasted', 'Availability gets worse than today', 'POSSIBLE', 'Idle-but-held slots already exist [E]'],
      ['2+4 · priority', 'Dated deadlines get priority', 'Everyone declares a deadline', 'The GPU steward is flooded', 'False urgency; the rule is discredited', 'LIKELY at peak', 'Urgency persuasion is already the norm [E]'],
      ['3 · care', 'Named correction for labelled items', 'Stop labelling food', 'Misuse becomes anonymous', 'Pressure returns for a blanket rule', 'POSSIBLE', 'Pattern of blanket responses [E]'],
      ['4 · stewards', 'Stewards arbitrate', 'Juniors defer; seniors lobby stewards', 'Steward becomes a gatekeeper', 'A new informal hierarchy', 'POSSIBLE', 'Seniors broker access today [E]'],
      ['4 · stewards', 'Unpaid role with duties', 'Volunteers drift after a few weeks', 'Log stops; cases go back to WhatsApp', 'Burden shifting, then collapse', 'LIKELY without a cap', 'Complaints already die in WhatsApp [E]'],
      ['5 · review', 'Joint faculty review', 'Each lab defends its share', 'Review ratifies the status quo', 'Formality; LP6/LP7 unchanged', 'POSSIBLE', 'Ownership boundary is strong [E]; faculty views untested'],
      ['all', 'More written rules', 'Newcomers face more to learn', 'Onboarding burden', 'Rules feel bureaucratic', 'POSSIBLE', 'Newcomers learn norms informally [E]']
    ];
    const cols = '140px 1fr 1fr 1fr 1.25fr 150px 1.15fr';
    const head = ['intervention', 'intended response', 'adaptation', 'secondary effect', 'unintended consequence', 'likelihood', 'evidence for the rating'];
    return `
    ${C.head({ no: '20', kicker: 'Unintended consequences · Phase 4', title: 'where it could fail', tag: 'we looked for it', tagColor: 'pink', size: 'md' })}
    <div style="margin-top:26px;display:grid;grid-template-columns:${cols};column-gap:10px">
      ${head.map(h => `<div class="label anim" style="--d:2;font-size:13px;padding-bottom:8px;border-bottom:3px solid var(--black)">${h}</div>`).join('')}
      ${R.map(([iv, a, b, c, d, lk, ev], k) => {
        const likely = lk.startsWith('LIKELY');
        const cell = 'padding:6px 0;border-bottom:1.5px solid var(--line);font:500 16px/1.25 var(--font-sans);display:flex;align-items:center';
        return `
        <div class="anim" style="--d:${3 + k * .5};${cell}"><span class="tag" style="font-size:14px">${iv}</span></div>
        <div class="anim" style="--d:${3 + k * .5};${cell}">${a}</div>
        <div class="anim" style="--d:${3 + k * .5};${cell}">${b}</div>
        <div class="anim" style="--d:${3 + k * .5};${cell}">${c}</div>
        <div class="anim" style="--d:${3 + k * .5};${cell}"><span style="background:var(--pink);padding:3px 6px;font-weight:700">${d}</span></div>
        <div class="anim" style="--d:${3 + k * .5};${cell}"><span style="font:700 14px var(--font-sans);letter-spacing:.06em;padding:5px 9px;border:2px ${likely ? 'solid' : 'dashed'} var(--black);background:${likely ? 'var(--black)' : 'transparent'};color:${likely ? 'var(--cream)' : 'var(--black)'}">${lk}</span></div>
        <div class="anim" style="--d:${3 + k * .5};${cell};color:var(--ink-2)">${ev}</div>`;
      }).join('')}
    </div>
    <p class="small anim" style="--d:9;margin:auto 0 0">${C.badge('predicted', 'anticipated, not observed')} <strong>LIKELY</strong> = the adaptation already happens under today's arrangement [E]. <strong>POSSIBLE</strong> = plausible from the mechanism, no direct evidence. SPECULATIVE = none rated this way; risks without any basis were dropped.</p>`;
  }
});
