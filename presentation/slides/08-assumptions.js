Deck.add({
  slide: 8,
  title: 'We challenged our own assumptions',
  chapter: 'realise',
  sources: [{ file: 'P2', page: '16–17', section: 'Reframe the Problem: Challenging Initial Assumptions; Reading the pattern' }],
  notes: {
    say: [
      'Before reframing, we audited the beliefs in our Phase 1 framing, and in our own early reading, against the interview evidence. Each was kept, modified or discarded.',
      '"Users are selfish" was discarded. Helpfulness is high, but offers of help never reach those who need them. "Authority doesn\'t care" was discarded too: authority responds when reached; the signals just don\'t arrive.',
      '"Not enough resources" was modified. Capacity exists, but it is unreadable and does not get released.',
      'The pattern: the discarded assumptions put the problem in people or quantities. The surviving ones put it in structure.'
    ],
    basis: ['P2 p16–17 assumption table (verdicts and evidence verbatim).', 'P2 p17 "Reading the pattern".', 'Three further rows (no written rules: discarded; SERC–Precog boundary: discarded; system is stable: modified) are in the source but not shown, for space.'],
    avoid: ['"95%" is the respondent\'s own estimate inside a quote. It is not a survey statistic.', 'Do not say we measured helpfulness.']
  },
  html: () => {
    const discarded = [
      ['Users are selfish; that is why resources degrade', 'Helpfulness is high, but offers of help never reach those who need them', 'Everyone, 95%, will be willing to go out of their way to help… if someone requires genuine [need]', true],
      ['Formal authority doesn\'t care about student problems', 'Authority responds when reached; signals simply don\'t arrive', 'Broken light/fan/AC fixed immediately when one student approached faculty', false]
    ];
    const modified = [
      ['The core problem is not enough resources', 'Capacity exists but is unreadable and non-releasing', 'they just want to occupy it so that they might run the experiment some day', true],
      ['Juniors can\'t use desks because seniors forbid it', 'Access is usually granted when asked; the barrier is the belief asking will fail', 'I still have this fear that I cannot [sit there]', true],
      ['Peaceful settlement means everyone\'s needs are met', 'Peace is real but one-directional: juniors yield rather than negotiate', 'We sort it among ourselves… why would I bother anyone about a very small situation?', true]
    ];
    const ev = (t, isQuote) => isQuote ? `<div class="quote" style="margin-top:8px;padding:8px 12px"><p style="font-size:18px">${t}</p></div>` : `<p class="small" style="margin:8px 0 0">${t}</p>`;
    return `
    ${C.head({ no: '08', kicker: 'Assumption audit', title: 'we challenged<br>our own assumptions', tag: 'kept · modified · discarded', tagColor: 'orange', size: 'md' })}
    <div style="display:grid;grid-template-columns:640px 1fr;gap:40px;margin-top:34px">
      <div class="anim" style="--d:2">
        <div style="display:flex;align-items:center;gap:12px">${C.shape('pinch', 'pink', 'cream', 44)}<span class="section-title" style="font-size:34px">discarded</span></div>
        <p class="label" style="margin:6px 0 14px;color:var(--ink-3)">Verdict: discarded by the evidence</p>
        ${discarded.map(([a, why, e, q], k) => `
          <div class="card pink anim" style="--d:${3 + k};margin-bottom:16px;padding:16px 20px">
            <div style="font:700 21px/1.3 var(--font-sans);text-decoration:line-through;text-decoration-thickness:3px;text-decoration-color:var(--pink)">${a}</div>
            <div style="font:500 18px/1.35 var(--font-sans);margin-top:6px">→ ${why}</div>
            ${ev(e, q)}
          </div>`).join('')}
      </div>
      <div class="anim" style="--d:4">
        <div style="display:flex;align-items:center;gap:12px">${C.shape('quarter', 'lavender', 'cream', 44)}<span class="section-title" style="font-size:34px">modified</span></div>
        <p class="label" style="margin:6px 0 14px;color:var(--ink-3)">Verdict: modified by the evidence</p>
        ${modified.map(([a, why, e, q], k) => `
          <div class="card lavender anim" style="--d:${5 + k};margin-bottom:12px;padding:14px 20px;display:grid;grid-template-columns:1fr 1fr;gap:6px 22px">
            <div style="font:700 20px/1.3 var(--font-sans);color:var(--ink-3)">${a}</div>
            <div style="font:700 20px/1.3 var(--font-sans)"><span class="hl">${why}</span></div>
            <div style="grid-column:1/-1">${ev(e, q)}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="insight anim" style="--d:9;margin-top:auto;padding:18px 28px">
      <div class="label">Reading the pattern ${C.badge('analysis')}</div>
      <p style="font-size:24px;margin-top:6px">The discarded assumptions all located the problem in people or quantities. The surviving ones all locate it in <span style="background:var(--lime);color:var(--black);padding:0 6px">structure</span>.</p>
    </div>`;
  }
});
