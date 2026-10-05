Deck.add({
  slide: 2,
  title: 'The problem we started with',
  chapter: 'problem',
  sources: [{ file: 'P1', page: 1, section: '1.3 Symptoms and initial problem framing; 1.4 People and resource baseline' }],
  notes: {
    say: [
      'In Phase 1, participants described more students than desks, names and belongings that signal enduring claims, GPU contention, and food waste left at desks.',
      'They also described cooperative borrowing and peaceful negotiation. So our question became why a system that runs on courtesy for established members still leaves newcomers uncertain or excluded.',
      'Read the initial framing exactly as written.'
    ],
    basis: ['P1 p1 §1.3 (symptoms, analytical question, initial framing, quoted verbatim).', 'P1 p1 §1.4 baseline table ("Reported scale"). The GPU cell is blank in the source.'],
    avoid: ['Do not state a GPU count; none was reported.', 'Do not turn ~100 students vs 84 desks into a ratio or a "shortage" figure. They are reported scales, not a measured audit.']
  },
  html: () => {
    const stat = (n, l, c, d) => `<div class="stat anim" style="--d:${d}"><span class="number" style="${c ? `background:var(--${c});padding:0 10px` : ''}">${n}</span><div class="stat-label">${l}</div></div>`;
    return `
    ${C.head({ no: '02', kicker: 'What we thought the problem was', title: 'the problem we<br>started with', tag: 'phase 1', tagColor: 'orange' })}
    <div style="display:grid;grid-template-columns:640px 1fr;gap:72px;margin-top:54px">
      <div>
        <div class="label anim" style="--d:2;color:var(--ink-3)">People and resource baseline · reported scale</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:34px 30px;margin-top:22px">
          ${stat('~100', 'students', 'lime', 3)}
          ${stat('84', 'desks and chairs', '', 4)}
          ${stat('7+1', 'faculty · SERC 7, Precog 1', '', 5)}
          ${stat('2·12', 'meeting rooms · lockers', '', 6)}
        </div>
        <p class="small anim" style="--d:7;margin-top:26px">1 fridge · 1 coffee machine · 1 microwave. <strong>Local GPUs: not reported.</strong> Two labs share one floor and a nearby cafeteria area.</p>
      </div>
      <div>
        <div class="label anim" style="--d:3">Participants described ${C.badge('observed')}</div>
        <div style="position:relative;height:430px;margin-top:20px">
          ${[
            ['More students than desks', 'orange', 0, 0, -2],
            ['Names and belongings that signal enduring claims', 'orange', 450, 30, 2],
            ['GPU contention', 'orange', 30, 150, 1],
            ['Food waste left at desks', 'pink', 400, 200, -3],
            ['…and also cooperative borrowing and peaceful negotiation', 'lavender', 60, 300, -1]
          ].map(([t, c, x, y, r], k) => `<div class="color-block ${c} anim" style="--d:${4 + k};position:absolute;left:${x}px;top:${y}px;max-width:${k === 1 ? 420 : 520}px;font:700 27px/1.2 var(--font-sans);rotate:${r}deg;box-shadow:var(--shadow);border:2px solid var(--black)">${t}</div>`).join('')}
        </div>
      </div>
    </div>
    <div class="insight anim" style="--d:10;margin-top:auto;display:grid;grid-template-columns:230px 1fr;gap:28px;align-items:center">
      <div class="label">Initial framing<br>Phase 1</div>
      <p style="margin:0;font:500 30px/1.3 var(--font-sans)">How do resource boundaries, claim persistence, uneven information and distributed responsibility turn <span style="background:var(--lime);color:var(--black);padding:0 6px">nominal capacity into unequal usable access?</span></p>
    </div>`;
  }
});
