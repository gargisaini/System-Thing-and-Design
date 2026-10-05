/* Interactive: pick a resource, see four stakeholder lenses on it.
   Quoted text is verbatim from P2 p18–19; other text is the report's own description. */
(function () {
  const ACTORS = [['SERC students', 'lavender'], ['Juniors & newcomers', 'pink'], ['Precog students', 'blue'], ['Cleaning staff', 'orange']];
  const DATA = {
    'Desks': [
      ['A settled norm', 'no booking system, only name writing system', 'courtesy is asking first'],
      ['A site of anxiety', 'I still have this fear', 'of senior tables, despite never being refused'],
      ['A scarcity: 30–40 students, more people than desks; two juniors have none', 'if everyone is sitting, there\'s no solution', ''],
      ['Not their domain; concerns are broken/dirty furniture, not claims', null, '']
    ],
    'Fridge & amenities': [
      ['Lab-labeled, with informal exceptions', null, ''],
      ['Readily exclusive', 'it is written… SERC fridge rules', ''],
      ['Achievable by workaround', 'you can just write anyone\'s name from SERC', ''],
      ['A workload assigned to them: Saturday disposal rule made by management, not them', null, '']
    ],
    'Coffee machine': [
      ['A privilege lost by student failure to maintain it', null, ''],
      ['Seen simply as', 'not for students', 'eligibility assumed, not questioned'],
      ['Always professor-only since they arrived; history unknown to them', null, ''],
      ['Duty and enforcement burden: staff refill and the guard turns students away', null, '']
    ],
    'GPUs': [
      ['A peer-negotiated queue', 'request other try to find the workload within themselves', 'website prevents blind kills'],
      ['Mostly invisible; UG students', 'at a little distance disadvantage', ''],
      ['A Slack persuasion market', 'convince someone that I want it more, and if they agree', ''],
      ['No entry in the source', null, '']
    ],
    'Raising problems': [
      ['', 'First talk to the person… it does go to professors', 'when unsolvable'],
      ['', 'Why would I bother anyone about a very small situation?', ''],
      ['Solve among ourselves; only unresolved cases reach PK', null, ''],
      ['Have their own clear chain (tell admin, inform supervisor) that students lack', null, '']
    ]
  };
  const POS = [[0, 0], [1010, 0], [0, 304], [1010, 304]];

  const cell = ([f, q, t], k) => `
    <div class="card" style="position:absolute;left:${POS[k][0]}px;top:${POS[k][1]}px;width:686px;height:286px;border-top:14px solid var(--${ACTORS[k][1]})">
      <div class="section-title" style="font-size:30px">${ACTORS[k][0].toLowerCase()}</div>
      ${f ? `<p style="margin:12px 0 0;font:500 23px/1.35 var(--font-sans)${f === 'No entry in the source' ? ';color:var(--ink-3)' : ''}">${f}</p>` : ''}
      ${q ? `<div class="quote" style="margin-top:12px"><p>${q}</p></div>` : ''}
      ${t ? `<p class="small" style="margin:10px 0 0">${t}</p>` : ''}
    </div>`;

  const render = (sec, key) => {
    sec.querySelectorAll('.tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.k === key));
    sec.querySelector('.res-name').textContent = key.toLowerCase();
    sec.querySelector('.lens').innerHTML = DATA[key].map(cell).join('');
  };

  Deck.add({
    slide: 5,
    title: 'The same resource looked different to everyone',
    chapter: 'investigate',
    sources: [{ file: 'P2', page: '18–19', section: 'Comparing Stakeholder Perspectives (verbatim quotes)' }],
    notes: {
      say: [
        'Click through the resources. The resource stays the same; what it means changes with who is looking.',
        'For SERC students, desks are a settled norm. For juniors they are a source of anxiety. For Precog they are a plain shortage. For cleaning staff they are about broken or dirty furniture.',
        'The report reads this divergence itself as evidence: information is unevenly distributed.'
      ],
      basis: ['P2 p18–19. Text in quotation marks is verbatim, as the report states ("quotes are verbatim from the interviews").', 'Unquoted text is the report\'s own description of each lens.'],
      avoid: ['Do not paraphrase a quote and keep the quotation marks.', '"30–40 students" is a participant-reported scale for Precog, not a headcount audit.', 'Cleaning staff have no GPU entry in the source. Do not fill it in.']
    },
    html: () => `
      ${C.head({ no: '05', kicker: 'Stakeholder lenses', title: 'same resource,<br>different meanings', tag: 'P2 · verbatim', tagColor: 'pink', size: 'md' })}
      <div class="anim" style="--d:2;position:absolute;right:112px;top:300px;display:flex;flex-direction:row;align-items:center;gap:10px">
        <span class="label" style="color:var(--ink-3)">Click a resource ↓</span>
        <div class="tabs" role="tablist">${Object.keys(DATA).map(k => `<button role="tab" data-k="${k}">${k}</button>`).join('')}</div>
      </div>
      <div class="anim" style="--d:3;position:relative;margin-top:84px;height:590px">
        <div class="lens"></div>
        <div style="position:absolute;left:50%;top:295px;transform:translate(-50%,-50%);width:290px;height:290px;border-radius:50%;background:var(--lime);border:3px solid var(--black);display:grid;place-items:center;text-align:center;box-shadow:var(--shadow)">
          <div><div class="label">Same resource</div><div class="res-name display-title" style="font-size:38px;margin-top:8px;padding:0 24px;line-height:1"></div></div>
        </div>
      </div>`,
    mount: sec => {
      sec.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => render(sec, b.dataset.k)));
      render(sec, 'Desks');
    }
  });
})();
