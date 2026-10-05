Deck.add({
  slide: 1,
  title: 'The empty desk',
  sources: [
    { file: 'P2', page: 4, section: 'Bottlenecks: "Temporarily empty but socially occupied desks"' },
    { file: 'P1', page: 1, section: 'Title / team' }
  ],
  notes: {
    say: [
      'Open on the contradiction, not the project. The desk is empty, and yet a newcomer cannot use it.',
      'Hold the question. The next slides show how we started out thinking about it, and how that changed.'
    ],
    basis: [
      'Hook line supplied by the team. Its basis is P2 p4: "A desk may be physically free but still considered someone\'s desk".',
      'The drawing is an illustration, not a photograph from the research.'
    ],
    avoid: ['Do not present the hook line as an interview quote.', 'Do not present the illustration as an observed desk.']
  },
  html: () => `
    <div data-bleed style="position:absolute;right:0;top:0;width:820px;height:1080px">
      <div class="anim" style="--d:1;position:absolute;right:0;top:0;width:560px;height:560px;background:var(--lavender);border-bottom-left-radius:560px"></div>
      <div class="anim" style="--d:2;position:absolute;right:90px;bottom:120px;width:150px;height:150px;background:var(--lime)"></div>
      <div class="anim" style="--d:3;position:absolute;left:40px;top:120px">${C.shape('flower', 'orange', 'cream', 110)}</div>
      <svg class="diagram anim" style="--d:4;position:absolute;left:30px;top:250px" viewBox="0 0 760 600" width="760" height="600" role="img" aria-label="Line illustration of an empty desk with a jacket on the chair and a name label">
        <rect x="70" y="270" width="600" height="26" fill="#FFFDF5" stroke="#111" stroke-width="4"/>
        <path d="M100 296v250M640 296v250M100 450h540" stroke="#111" stroke-width="4" fill="none"/>
        <rect x="270" y="90" width="250" height="160" fill="#FFFDF5" stroke="#111" stroke-width="4"/>
        <path d="M395 250v20M350 270h90" stroke="#111" stroke-width="4"/>
        <g transform="rotate(-4 200 283)"><rect x="140" y="268" width="130" height="34" fill="#F58B4D" stroke="#111" stroke-width="3"/>
          <path d="M156 285c10-9 18 9 28 0s18 9 28 0 18 9 30 0" stroke="#111" stroke-width="3" fill="none"/></g>
        <path d="M530 340h120l-10 110h-100z" fill="#FFFDF5" stroke="#111" stroke-width="4"/>
        <path d="M545 450l-12 100M635 450l12 100" stroke="#111" stroke-width="4"/>
        <path d="M542 332c-6-60 10-120 48-140 38 20 54 80 48 140" fill="none" stroke="#111" stroke-width="4"/>
        <path d="M552 214c18 20 58 20 76 0l12 132c-30 14-74 14-100 0z" fill="#F19AC5" stroke="#111" stroke-width="3"/>
        <path d="M590 216v128" stroke="#111" stroke-width="3"/>
      </svg>
      <span class="accent-label anim" style="--d:6;position:absolute;right:120px;top:600px;font-size:20px">illustration · not evidence</span>
    </div>

    <div style="position:relative;max-width:1100px;margin-top:40px">
      <div class="kicker anim" style="--d:0"><span class="no">SERC × Precog</span><span>Research Lab Commons</span></div>
      <h1 class="display-title xl anim" style="--d:2;margin-top:56px;font-size:156px">the desk<br>is empty.</h1>
      <h1 class="display-title anim" style="--d:5;margin-top:34px;font-size:96px;line-height:1.08">so why <span class="hl">can't <span class="keep-case">I</span> use it?</span></h1>
      <div class="anim" style="--d:8;margin-top:86px;display:flex;gap:16px;align-items:center;flex-wrap:wrap">
        <span class="accent-label" style="rotate:-2deg">team the system error</span>
        <span class="label" style="color:var(--ink-3)">Gargi Saini · Deepti Koranga · Dhawal Pawanarkar</span>
      </div>
    </div>`
});
