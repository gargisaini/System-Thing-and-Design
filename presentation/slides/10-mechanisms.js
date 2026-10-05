Deck.add({
  slide: 10,
  title: 'What is actually producing the behaviour?',
  chapter: 'realise',
  sources: [
    { file: 'P34', page: 3, section: 'Five mechanisms produce the outcomes we observed' },
    { file: 'P34', page: 6, section: 'Why each intervention exists (M4 alternate wording)' }
  ],
  notes: {
    say: [
      'Five mechanisms produce what we observed. Read each column top to bottom: what we saw, the structure behind it, the behaviour that results.',
      'M1: claims persist, because there is no shared release or expiry condition, so empty is not available. M2: status is unreadable, so every check becomes a person-to-person query.',
      'M3: access runs on asking, so offered permission is not felt permission. M4: problems surface late and correction is blunt; coffee access was withdrawn from all students. M5: allocation follows history and funding.',
      'Beneath all five sit the mental models. Some of them do useful work, so the aim is to redirect them, not remove them.'
    ],
    basis: ['P34 p3: all column text verbatim. Loop tags as labelled in Phase 3.', 'M4 is worded "Misuse surfaces as a breakdown" on P34 p6 (CONTENT_VALIDATION C9).'],
    avoid: ['Loop IDs (R1, B1 …) mean different things in different phases (CONTENT_VALIDATION C1, C2). If asked, say these are Phase 3\'s labels.']
  },
  html: () => {
    const M = [
      ['M1', 'claims persist', 'orange', 'Names and belongings mark desks; holders keep return priority; GPU slots are held weeks ahead of use.', 'No shared release or expiry condition for desks or idle reservations.', 'Empty ≠ available. Users reserve earlier and longer, most of all near deadlines.', 'R1 · R3 · R4'],
      ['M2', 'status is unreadable', 'blue', 'SERC uses a tracker, Precog uses Slack, desks use names. Users check, then still message the holder.', 'No common view of who holds what, since when, or how to reach them.', 'Every check is a person-to-person query; an idle slot looks like an active one.', 'R2 · RC3'],
      ['M3', 'access runs on asking', 'pink', 'Juniors hesitate at desks they were never refused; GPU priority is won by persuasion on Slack.', 'Permission is informal, held by incumbents and seniors; norms travel by word of mouth.', 'Offered permission ≠ felt permission. Access follows confidence and network.', 'R2 · RC2 · RC7'],
      ['M4', 'problems surface late; correction is blunt', 'pink', 'Complaints stay in WhatsApp; notices appear after breakdowns; coffee access was withdrawn from all students.', 'No channel returns small, recurring issues to someone who can act; restriction is the only correction.', 'Authority stays under-informed, then responds broadly; the shared benefit is lost.', 'B1 · RC9 · RC10'],
      ['M5', 'allocation follows history and funding', 'lavender', 'Desk arrangement between labs predates current headcount; compute access follows the professor (a "hard rule, no exceptions").', 'No standing process to revisit allocation; boundaries are set by who paid.', 'Idle capacity in one group while another is short.', 'R3 · RC1 · RC5 · RC8']
    ];
    const down = `<div style="display:grid;place-items:center;height:22px"><svg width="16" height="20" aria-hidden="true"><path d="M8 0v16M2 11l6 7 6-7" fill="none" stroke="#111" stroke-width="2.5"/></svg></div>`;
    return `
    ${C.head({ no: '10', kicker: 'Systemic mechanisms', title: 'what produces<br>the behaviour?', tag: 'five mechanisms', tagColor: 'pink', size: 'md' })}
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:20px;margin-top:30px">
      ${M.map(([id, t, c, o, s, r, l], k) => `
        <div class="anim" style="--d:${2 + k};display:flex;flex-direction:column">
          <div style="display:flex;gap:10px;align-items:flex-start;min-height:62px">
            <span class="tag ${c}" style="font-size:20px">${id}</span>
            <span class="section-title" style="font-size:24px;line-height:1.05">${t}</span></div>
          <div style="margin-top:8px;padding:10px 12px;border:2px solid var(--black);background:var(--cream-light);font:500 16.5px/1.33 var(--font-sans);flex:1"><span class="label" style="font-size:13px;color:var(--ink-3)">observed</span><br>${o}</div>
          ${down}
          <div style="padding:10px 12px;border:2px solid var(--black);background:var(--${c});font:700 16.5px/1.33 var(--font-sans);flex:1"><span class="label" style="font-size:13px">structure</span><br>${s}</div>
          ${down}
          <div style="padding:10px 12px;border:2px solid var(--black);background:var(--black);color:var(--cream);font:500 16.5px/1.33 var(--font-sans);flex:1"><span class="label" style="font-size:13px;color:var(--lime)">behaviour</span><br>${r}</div>
          <div class="mono" style="margin-top:8px;font-size:16px;font-weight:600">${l}</div>
        </div>`).join('')}
    </div>
    <div class="anim" style="--d:8;margin-top:auto;display:grid;grid-template-columns:220px 1fr;gap:20px;align-items:center;border-top:3px solid var(--black);padding-top:12px">
      <div class="label">Beneath all five:<br>mental models</div>
      <p style="margin:0;font:500 19px/1.4 var(--font-sans)"><span class="hl-teal">Resources bought by a professor belong to that group</span> · <span class="hl-teal">A desk someone regularly uses is effectively theirs</span> · <span class="hl-teal">Small conflicts should be solved among students</span>. Belief statements, not quotes: some do useful work, so <strong>redirect them, not remove them</strong>.</p>
    </div>`;
  }
});
