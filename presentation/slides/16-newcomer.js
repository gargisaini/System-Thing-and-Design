Deck.add({
  slide: 16,
  title: 'Follow one newcomer',
  chapter: 'test',
  sources: [
    { file: 'P34', page: 11, section: 'Prototype P1: Desk claim card' },
    { file: 'P34', page: 17, section: 'Scenario test S1: Newcomer needs a desk' },
    { file: 'P34', page: 30, section: 'User journey A: a newcomer needs a desk' },
    { file: 'P34', page: 20, section: 'Simulated stakeholder responses: unanswered question' }
  ],
  notes: {
    say: [
      'Scenario S1: a new MS student, first week on the floor, no desk assigned.',
      'Today, which our research documented: they walk the bay reading names and jackets, ask a senior who knows who is away, and may sit at a claimed desk and be moved on.',
      'With the intervention, they read the claim cards. FREE, or a "last here" date more than 7 days old, means they can sit for the day. They still ask first, out of courtesy, and join the steward\'s queue for a desk of their own.',
      'The predicted outcome is seated the same day without a broker. That is a prediction. The open question we flagged is whether newcomers will actually sit at a stale-card desk.'
    ],
    basis: ['P34 p11 (card design, verbatim states).', 'P34 p17 S1 (current [E], with intervention, failure mode, expected outcome).', 'P34 p30 Journey A.', 'P34 p20 (unanswered question).'],
    avoid: ['Never say "newcomers were seated faster". No prototype was deployed; this is a scenario walkthrough.']
  },
  html: () => {
    const states = [['IN USE', 'I work here most days.', 'lavender'], ['AWAY UNTIL __ / __', 'Planned absence, max 14 days without a continuity exception.', 'blue'], ['FREE TO BORROW TODAY', 'Use it and leave it as you found it.', 'lime'], ['PROTECTED SETUP · ASK FIRST', 'Ends __ / __ · steward initials ____ (needs an end date)', 'pink']];
    const now = ['Walks the bay reading names and jackets', 'Asks a senior who knows who is away', 'May sit at a claimed desk and be moved on'];
    const next = [['arrive', 'Bay notice names the desk steward; 10-min norms briefing.'], ['read cards', 'FREE or stale (7+ days) → sit for the day. Protected → never.'], ['ask first', 'Courtesy stays: a quick word with neighbours or the holder.'], ['join queue', 'The steward adds them; stale claims are chased (21 + 5 days).'], ['own desk', 'Offered in queue order; dated card from day one.']];
    return `
    ${C.head({ no: '16', kicker: 'Scenario S1 · journey A', title: 'follow one newcomer', tag: 'first week, no desk', tagColor: 'blue', size: 'md' })}
    <div style="display:grid;grid-template-columns:540px 1fr;gap:56px;margin-top:30px;flex:1">
      <div class="anim" style="--d:2;rotate:-2deg;border:3px solid var(--black);background:var(--cream-light);box-shadow:var(--shadow);align-self:start">
        <div style="background:var(--black);color:var(--cream);padding:14px 18px;display:flex;justify-content:space-between;font:700 18px var(--font-sans)"><span>DESK 27 · SERC BAY B</span><span>HOLDER: ______</span></div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
          ${states.map(([t, d, c]) => `<div style="display:flex;gap:12px;align-items:center;background:var(--${c});border:2px solid var(--black);padding:10px 12px"><span style="flex:0 0 24px;height:24px;border:2.5px solid var(--black);background:var(--cream-light)"></span><div><div style="font:700 18px var(--font-sans)">${t}</div><div style="font:400 15.5px/1.3 var(--font-sans)">${d}</div></div></div>`).join('')}
          <div style="border-top:2px solid var(--black);padding-top:10px;font:700 18px var(--font-sans)">LAST HERE: __/__ __/__ __/__ __/__</div>
          <div style="font:400 15.5px/1.35 var(--font-sans)">Date older than 7 days → anyone may borrow for the day. Questions: desk steward (name on bay notice).</div>
        </div>
        <div class="label" style="padding:0 16px 12px;color:var(--ink-3)">Prototype P1 · A5 card, desk edge</div>
      </div>
      <div style="display:flex;flex-direction:column;justify-content:space-between;gap:20px;padding-bottom:6px">
        <div class="anim" style="--d:3">
          <div style="display:flex;gap:12px;align-items:center"><span class="section-title" style="font-size:30px">today</span>${C.badge('observed')}</div>
          <div style="display:flex;gap:10px;margin-top:10px;align-items:center">
            ${now.map((t, k) => `${k ? C.arrow() : ''}<div style="flex:1;padding:12px 14px;border:2px dashed var(--black);background:var(--pink-soft);font:500 20px/1.3 var(--font-sans)">${t}</div>`).join('').replace(/<svg/g, '<svg style="flex:0 0 30px;width:30px"')}
          </div>
        </div>
        <div class="anim" style="--d:5">
          <div style="display:flex;gap:12px;align-items:center"><span class="section-title" style="font-size:30px">with the intervention</span>${C.badge('proposed')}</div>
          <div class="journey" style="margin-top:12px;gap:8px">
            ${next.map(([t, d], k) => `<div style="flex:1;border:2px solid var(--black);background:${k === 4 ? 'var(--lime)' : 'var(--cream-light)'};padding:10px 12px">
              <div class="display" style="font-size:22px"><span style="opacity:.45">${k + 1}</span> ${t}</div>
              <div style="font:400 17px/1.35 var(--font-sans);margin-top:6px">${d}</div></div>`).join('')}
          </div>
        </div>
        <div class="anim" style="--d:7;display:grid;grid-template-columns:1.2fr 1fr;gap:16px">
          <div style="background:var(--orange);border:2px dashed var(--black);padding:14px 18px">
            ${C.badge('predicted')}
            <p style="margin:10px 0 0;font:700 25px/1.25 var(--font-sans)">Seated the same day without a broker; on the queue for a desk of their own.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="border-left:8px solid var(--pink);padding-left:12px"><div class="label">Likely failure mode</div><div class="small">Cards not updated, so ambiguity remains; or every card ticked Protected.</div></div>
            <div style="border-left:8px solid var(--black);padding-left:12px"><div class="label">Still unanswered</div><div class="small">Will they actually sit at a stale-card desk?</div></div>
          </div>
        </div>
      </div>
    </div>`;
  }
});
