/* Reusable visual components. Each returns an HTML/SVG string. */
(function () {
  const BADGE = {
    observed: 'Observed [E]', quote: 'Interview quote', analysis: 'Analysis', hypothesis: 'Hypothesis',
    predicted: 'Predicted, not observed', proposed: 'Proposed', principle: 'Design principle',
    recommendation: 'Recommendation', risk: 'Risk'
  };
  const COL = { lime: '#DFFF00', pink: '#F19AC5', orange: '#F58B4D', lavender: '#B9A7F5', blue: '#9DB7E8', black: '#111111', cream: '#F7F4E8', light: '#FFFDF5' };
  const col = c => COL[c] || c;

  const arrowSvg = (color = '#111111') =>
    `<svg viewBox="0 0 34 16" aria-hidden="true"><path d="M0 8h28M22 2l8 6-8 6" fill="none" stroke="${color}" stroke-width="2.6"/></svg>`;

  /* Geometric motif library (100x100 viewBox). Used as chapter markers and as diagram glyphs. */
  const SHAPES = {
    flower: (a) => `<circle cx="27" cy="27" r="23" fill="${a}"/><circle cx="73" cy="27" r="23" fill="${a}"/><circle cx="27" cy="73" r="23" fill="${a}"/><circle cx="73" cy="73" r="23" fill="${a}"/>`,
    pinch: (a, b) => `<rect width="100" height="100" fill="${a}"/><circle cx="0" cy="50" r="34" fill="${b}"/><circle cx="100" cy="50" r="34" fill="${b}"/>`,
    ring: (a, b) => `<circle cx="50" cy="50" r="48" fill="${a}"/><circle cx="50" cy="50" r="33" fill="${b}"/><circle cx="50" cy="50" r="18" fill="${a}"/>`,
    cross: (a) => `<path d="M50 2 L64 36 L98 50 L64 64 L50 98 L36 64 L2 50 L36 36Z" fill="${a}"/>`,
    quarter: (a) => `<path d="M0 0H100A100 100 0 0 1 0 100Z" fill="${a}"/>`,
    half: (a) => `<path d="M0 100A50 50 0 0 1 100 100Z" fill="${a}"/>`,
    steps: (a) => `<path d="M0 66h34v34H0zM33 33h34v67H33zM66 0h34v100H66z" fill="${a}"/>`,
    arch: (a, b) => `<rect width="100" height="100" fill="${a}"/><path d="M20 100V50a30 30 0 0 1 60 0v50" fill="none" stroke="${b}" stroke-width="18"/>`
  };

  window.C = {
    col,
    badge: (type, text) => `<span class="badge ${type}">${text || BADGE[type]}</span>`,

    /** Geometric motif as inline SVG. */
    shape: (name, a = 'lime', b = 'cream', size = 96, style = '') =>
      `<svg viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true" style="${style}">${SHAPES[name](col(a), col(b))}</svg>`,

    /** Slide header. o = {no, kicker, title, tag, tagColor, lede, size: 'md'|'' } */
    head: (o) => `
      <header style="position:relative">
        <div class="kicker anim" style="--d:0"><span class="no">${o.no}</span><span>${o.kicker}</span></div>
        <h1 class="display-title ${o.size || ''} anim" style="--d:1;margin-top:22px;display:inline-block;position:relative;max-width:${o.maxw || 1500}px">${o.title}${o.tag ? `<span class="accent-label ${o.tagColor || ''}" style="position:absolute;right:-26px;bottom:-22px;font-size:24px">${o.tag}</span>` : ''}</h1>
        ${o.lede ? `<p class="lede anim" style="--d:2">${o.lede}</p>` : ''}
      </header>`,

    /** Verbatim interview quote only. */
    quote: (text, who = '', cls = '') =>
      `<div class="quote ${cls}"><p>${text}</p>${who ? `<div class="who">${who}</div>` : ''}</div>`,

    arrow: arrowSvg,

    /** Horizontal flow: nodes = [{label, text, style}] joined by arrows. */
    chain: (nodes, arrowColor) => `<div class="chain">${nodes.map((n, k) =>
      (k ? `<div class="arrow">${arrowSvg(arrowColor)}</div>` : '') +
      `<div class="node" style="${n.style || ''}">${n.label ? `<span class="label">${n.label}</span>` : ''}<span>${n.text}</span></div>`
    ).join('')}</div>`,

    /** SVG multi-line text, word-wrapped at ~max chars, vertically centred on y. */
    text: (x, y, str, { max = 24, lh = 24, cls = 't-md', anchor = 'middle', style = '' } = {}) => {
      const lines = [];
      str.split('\n').forEach(par => {
        let line = '';
        par.split(' ').forEach(w => {
          if ((line + ' ' + w).trim().length > max && line) { lines.push(line); line = w; }
          else line = (line + ' ' + w).trim();
        });
        lines.push(line);
      });
      const y0 = y - ((lines.length - 1) * lh) / 2;
      return `<text class="${cls}" text-anchor="${anchor}" style="${style}">${lines
        .map((l, k) => `<tspan x="${x}" y="${y0 + k * lh}" dominant-baseline="middle">${l}</tspan>`).join('')}</text>`;
    }
  };

  /* Chapter = shape + colour marker shown top-right on each slide (navigation cue). */
  window.CHAPTERS = {
    problem: ['flower', 'orange'], investigate: ['ring', 'blue'], realise: ['pinch', 'pink'],
    leverage: ['cross', 'lavender'], test: ['steps', 'orange'], synthesis: ['flower', 'lime']
  };
})();
