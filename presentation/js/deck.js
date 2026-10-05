/* Deck engine: builds slides from registered data objects, scales the 1920x1080 canvas,
   handles keyboard/touch navigation, speaker notes (N), sources view (S), fullscreen (F). */
window.Deck = (function () {
  const FILES = { P1: 'TheSystemError_Phase1.pdf', P2: 'TheSystemError_Phase2.pdf', P34: 'TheSystemError_Phase3_4.pdf' };
  const slides = [];
  let cur = 0, els = [];

  const pad = n => String(n).padStart(2, '0');
  const srcShort = s => s.sources.map(x => `${x.file} p${x.page}`).join(' · ');

  function foot(s, k) {
    return `<footer class="slide-foot"><span>Research Lab Commons · SERC × Precog · The System Error</span>
      <span class="src">SOURCE · ${srcShort(s)} &nbsp;·&nbsp; ${pad(k + 1)} / ${pad(slides.length)}</span></footer>`;
  }

  function fit() {
    const st = document.getElementById('stage');
    const sc = Math.min(st.clientWidth / 1920, st.clientHeight / 1080);
    document.getElementById('canvas').style.transform = `scale(${sc})`;
  }

  function renderNotes() {
    const n = slides[cur].notes || {};
    document.getElementById('notes').innerHTML = `
      <div><h4>Say · slide ${cur + 1}: ${slides[cur].title}</h4>${(n.say || []).map(p => `<p>${p}</p>`).join('')}</div>
      <div class="basis"><h4>Source basis</h4>${(n.basis || []).map(p => `<p>${p}</p>`).join('')}</div>
      <div class="avoid"><h4>Do not claim</h4>${(n.avoid || []).map(p => `<p>${p}</p>`).join('')}</div>`;
  }

  function renderSources() {
    const rows = slides.map((s, k) => `<tr class="${k === cur ? 'current' : ''}"><td class="num">${pad(k + 1)}</td><td>${s.title}</td><td>${s.sources
      .map(x => `<code>${FILES[x.file]}</code> · p${x.page} · ${x.section}`).join('<br>')}</td></tr>`).join('');
    document.getElementById('sources').innerHTML = `<button class="close" onclick="Deck.toggle('sources-open')">close · S / Esc</button>
      <h2>Sources by slide</h2><p class="sub">P1 = ${FILES.P1} · P2 = ${FILES.P2} · P34 = ${FILES.P34} · full claim trace in CONTENT_VALIDATION.md</p>
      <table><thead><tr><th>#</th><th>Slide</th><th>File · page · section</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  function go(k) {
    cur = Math.max(0, Math.min(slides.length - 1, k));
    els.forEach((e, j) => { e.classList.toggle('active', j === cur); e.classList.toggle('past', j < cur); e.setAttribute('aria-hidden', j !== cur); });
    document.getElementById('progress').style.width = `${((cur + 1) / slides.length) * 100}%`;
    document.getElementById('pos').textContent = `${pad(cur + 1)} / ${pad(slides.length)}`;
    if (location.hash !== `#${cur + 1}`) history.replaceState(null, '', `#${cur + 1}`);
    renderNotes();
    if (document.body.classList.contains('sources-open')) renderSources();
  }

  function toggle(cls) {
    document.body.classList.toggle(cls);
    if (cls === 'notes-open') { document.body.style.setProperty('--notes-h', document.body.classList.contains(cls) ? '34vh' : '0px'); fit(); }
    if (cls === 'sources-open') renderSources();
  }

  function start() {
    const canvas = document.getElementById('canvas');
    slides.forEach((s, k) => {
      if (s.slide !== k + 1) console.warn(`Slide metadata number ${s.slide} loaded at position ${k + 1}`);
      const sec = document.createElement('section');
      sec.className = 'slide ' + (s.theme || '');
      sec.setAttribute('aria-label', `Slide ${k + 1}: ${s.title}`);
      const ch = s.chapter && window.CHAPTERS[s.chapter];
      sec.innerHTML = (ch ? `<div class="chapter-mark" title="Chapter: ${s.chapter}">${C.shape(ch[0], ch[1], 'cream', 96)}</div>` : '') + s.html() + foot(s, k);
      canvas.appendChild(sec);
      if (s.mount) s.mount(sec);
    });
    els = [...canvas.children];
    fit();
    addEventListener('resize', fit);
    addEventListener('keydown', e => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const k = e.key;
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(k)) { e.preventDefault(); go(cur + 1); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); go(cur - 1); }
      else if (k === 'Home') go(0);
      else if (k === 'End') go(slides.length - 1);
      else if (k === 'n' || k === 'N') toggle('notes-open');
      else if (k === 's' || k === 'S') toggle('sources-open');
      else if (k === 'h' || k === 'H') toggle('clean');
      else if (k === 'f' || k === 'F') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
      else if (k === 'Escape') document.body.classList.remove('sources-open');
    });
    let tx = null;
    addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    addEventListener('touchend', e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); tx = null; });
    addEventListener('hashchange', () => go(parseInt(location.hash.slice(1), 10) - 1 || 0));
    const isQa = location.hash === '#qa';
    go(parseInt(location.hash.slice(1), 10) - 1 || 0);
    if (isQa) qa();
  }

  /* QA mode (#qa): metadata + overflow check, report written to <pre id="qa-report"> for qa/check.sh. */
  function qa() {
    const bad = [];
    const expected = document.querySelectorAll('script[src^="slides/"]').length;
    if (slides.length !== expected) bad.push(`FAIL deck: ${slides.length} slides loaded, ${expected} slide scripts (a slide file failed to load or parse)`);
    els.forEach((sec, k) => {
      const s = slides[k];
      if (s.slide !== k + 1) bad.push(`FAIL slide ${k + 1}: metadata number ${s.slide}`);
      if (!s.sources || !s.sources.length) bad.push(`FAIL slide ${k + 1}: no sources`);
      if (!s.notes || !s.notes.say || !s.notes.avoid) bad.push(`FAIL slide ${k + 1}: notes incomplete`);
      sec.classList.add('active');
      sec.querySelectorAll('.anim').forEach(e => { e.style.animation = 'none'; e.style.transform = 'none'; });
      const box = sec.getBoundingClientRect(), sc = box.width / 1920;
      sec.querySelectorAll('*').forEach(e => {
        if (e.closest('.slide-foot, .chapter-mark, [data-bleed]') || (e.closest('svg') && e.tagName !== 'svg')) return;
        const r = e.getBoundingClientRect();
        if (!r.width) return;
        const y = (r.bottom - box.top) / sc, x = (r.right - box.left) / sc, xl = (r.left - box.left) / sc;
        if (y > 990 || x > 1810 || xl < 100) bad.push(`FAIL slide ${k + 1}: <${e.tagName.toLowerCase()}> "${(e.textContent || '').trim().slice(0, 40)}" spans x=${xl | 0}..${x | 0}, ends y=${y | 0}`);
      });
      sec.classList.remove('active');
    });
    if (!document.querySelectorAll('.lens .card').length) bad.push('FAIL slide 5: lens empty');
    const pre = document.createElement('pre'); pre.id = 'qa-report';
    pre.textContent = bad.length ? [...new Set(bad)].join('\n') : 'PASS';
    document.body.appendChild(pre);
  }

  return { add: s => slides.push(s), start, go, toggle, next: () => go(cur + 1), prev: () => go(cur - 1), slides };
})();
