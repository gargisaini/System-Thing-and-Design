Deck.add({
  slide: 18,
  title: 'What if someone misuses the system?',
  chapter: 'test',
  sources: [
    { file: 'P34', page: 13, section: 'Prototype P3: Proportionate care (posted at the fridge)' },
    { file: 'P34', page: '3, 4', section: 'M4; LP1 current behaviour (coffee access withdrawn)' },
    { file: 'P2', page: 12, section: 'Unintended consequences: collective punishment' },
    { file: 'P1', page: 10, section: 'Field photograph (fridge)' }
  ],
  notes: {
    say: [
      'Today, misuse surfaces as a breakdown, and the response is restriction for everyone. Coffee access was withdrawn from all students.',
      'Proportionate care corrects the actor, not the population. First a signal: label and date every item, while the Saturday clear stays. Then a Thursday reminder list with no names. Then a private word for the same labelled owner twice in a term. A third time, the steward asks faculty for a time-limited individual restriction.',
      'A blanket restriction stays possible, but only as a last resort: faculty only, with a written reason and a review date within four weeks.',
      'Cleaning staff can report with one photo; they never confront or decide. The coffee machine is only a proposal to faculty. And we are explicit about what this cannot test: anonymous misuse, and whether faculty would relax existing restrictions.'
    ],
    basis: ['P34 p13 (all steps, staff role, coffee [H], tests/cannot test: verbatim).', 'P34 p3–4 (coffee access withdrawn from all students).', 'P2 p12 ("Collective punishment can replace targeted correction").', 'Photo: P1 p10.'],
    avoid: ['Do not say coffee access will be restored. It is a hypothesis-level proposal to faculty ([H]).', 'The photo shows the fridge only. It is not evidence of misuse.']
  },
  html: () => {
    const steps = [
      ['signal', 'Label + date every item (sticker station beside the fridge). The Saturday clear stays as the weekly reset.', 'blue'],
      ['reminder', 'Thursday: the amenities steward posts a list of unlabelled or expired shelves. No names.', 'lavender'],
      ['private word', 'Same labelled owner twice in a term → a private word from the steward. Not public naming.', 'lime'],
      ['individual limit', 'Third time → the steward asks faculty for a time-limited individual restriction (e.g. 2 weeks).', 'orange'],
      ['blanket: last resort', 'Faculty only, with a written reason and a review date within 4 weeks, posted here.', 'black']
    ];
    return `
    ${C.head({ no: '18', kicker: 'Prototype P3 · proportionate care', title: 'what if someone<br>misuses it?', tag: 'correct the actor', tagColor: 'lime', size: 'md' })}
    <div style="display:grid;grid-template-columns:520px 1fr;gap:48px;margin-top:44px;flex:1">
      <div style="position:relative">
        <div class="anim" style="--d:2;position:absolute;left:250px;top:10px;width:260px;height:260px;border-radius:50%;background:var(--pink)"></div>
        <figure class="photo anim" style="--d:3;position:absolute;left:20px;top:30px;width:270px;height:330px;rotate:-3deg"><img src="assets/photos/fridge-open.jpg" alt="Shared fridge with the door open"></figure>
        <span class="accent-label anim" style="--d:4;position:absolute;left:300px;top:300px;font-size:16px">field photo · P1 p10</span>
        <div class="anim" style="--d:5;position:absolute;left:0;right:0;top:400px">
          <div style="display:flex;gap:10px;align-items:center"><span class="section-title" style="font-size:30px">today</span>${C.badge('observed')}</div>
          <div style="margin-top:10px;background:var(--black);color:var(--cream);padding:16px 20px;font:700 23px/1.3 var(--font-sans)">One person's misuse → everyone gets restricted. Coffee access was withdrawn from all students.</div>
          <p class="small" style="margin:10px 0 0">Phase 2: <em>collective punishment can replace targeted correction.</em></p>
        </div>
      </div>
      <div style="display:flex;flex-direction:column">
        <div class="anim" style="--d:4;display:flex;gap:10px;align-items:center"><span class="section-title" style="font-size:30px">with proportionate care</span>${C.badge('proposed')}</div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;align-items:end;height:420px;margin-top:14px">
          ${steps.map(([t, d, c], k) => `<div class="anim" style="--d:${5 + k};height:${230 + k * 46}px;background:var(--${c});color:${c === 'black' ? 'var(--cream)' : 'var(--black)'};border:2px solid var(--black);padding:12px;display:flex;flex-direction:column">
            <span class="display" style="font-size:40px;line-height:.9">${k < 4 ? k + 1 : '!'}</span>
            <span class="section-title" style="font-size:21px;color:inherit;margin-top:6px">${t}</span>
            <span style="font:500 15.5px/1.32 var(--font-sans);margin-top:8px">${d}</span></div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:auto">
          <div class="anim" style="--d:10;border-left:8px solid var(--orange);padding-left:12px"><div class="label">Cleaning & service staff</div><div class="small" style="font-size:16.5px">May send one photo of a recurring mess to the amenities steward. They report; they never confront or decide.</div></div>
          <div class="anim" style="--d:11;border-left:8px solid var(--lavender);padding-left:12px"><div class="label">Coffee machine ${C.badge('hypothesis')}</div><div class="small" style="font-size:16.5px">A proposal to faculty, not a rule change: a conditional student trial with named users and a care rota, reverted if damage recurs.</div></div>
          <div class="anim" style="--d:12;border-left:8px solid var(--black);padding-left:12px"><div class="label">Cannot test</div><div class="small" style="font-size:16.5px">Anonymous misuse; faculty willingness to relax existing restrictions.</div></div>
        </div>
      </div>
    </div>`;
  }
});
