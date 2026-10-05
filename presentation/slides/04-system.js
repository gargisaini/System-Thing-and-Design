Deck.add({
  slide: 4,
  title: 'We entered the system',
  chapter: 'investigate',
  sources: [
    { file: 'P1', page: 1, section: '1.1 System boundary and context' },
    { file: 'P1', page: 2, section: '1.6 System map (Fig 1); Elements and interconnections; Boundary tension' },
    { file: 'P1', page: '7, 10', section: 'Field photographs' }
  ],
  notes: {
    say: [
      'Our boundary: desks and chairs, local GPU access, food amenities, storage, meeting rooms, and the people who authorise or negotiate their use.',
      'Institute rules, maintenance and cleaning, procurement and administrators sit on the boundary as dependencies. Campus construction, admissions and research evaluation shape capacity and demand, but are outside direct control.',
      'Four clusters feed one outcome, access to usable research space. There is no single floor-wide allocation process, only several local arrangements.',
      'Boundary tension: a shared location and a shared resource are different boundaries.'
    ],
    basis: ['P1 p1 §1.1; P1 p2 Fig 1 (clusters and edge labels redrawn from the source figure); P1 p2 "Elements and interconnections" and "Boundary tension".', 'Photographs are from P1 p7 and p10.'],
    avoid: ['Do not read the photographs as showing misuse. They document notices and facilities only.']
  },
  html: () => {
    const cx = 500, cy = 390;
    const cl = [
      { x: 230, y: 175, c: 'pink', t: 'people and practice', b: 'SERC and Precog students · seniors, juniors and visitors · courtesy, claims and negotiation', e: 'requests' },
      { x: 770, y: 175, c: 'lavender', t: 'authority and support', b: 'Faculty and lab leadership · admin, supervisor and cleaners · budgets, permissions, repairs', e: 'authorises' },
      { x: 230, y: 610, c: 'orange', t: 'finite resources', b: 'Desks, chairs and GPU time · fridge, microwave and coffee · cafeteria space and storage', e: 'capacity' },
      { x: 770, y: 610, c: 'blue', t: 'information channels', b: 'Names and personal belongings · tracker, Slack and WhatsApp · notices and spoken instructions', e: 'signals' }
    ];
    return `
    ${C.head({ no: '04', kicker: 'Entering the system', title: 'we entered<br>the system', tag: 'boundary', tagColor: 'blue', size: 'md' })}
    <svg class="diagram system-map anim" style="--d:2;position:absolute;left:830px;top:180px" viewBox="0 0 1000 790" width="880" height="695" role="img" aria-label="System boundary map: four clusters feeding access to usable research space">
      <rect x="6" y="6" width="988" height="778" rx="60" class="boundary"/>
      <rect x="44" y="44" width="912" height="702" rx="44" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="10 8"/>
      ${cl.map(k => `<line x1="${k.x}" y1="${k.y}" x2="${cx}" y2="${cy}" class="edge" marker-end="url(#ah)" style="stroke-width:3"/>`).join('')}
      ${cl.map(k => `
        <circle cx="${k.x}" cy="${k.y}" r="150" class="node ${k.c}"/>
        <text x="${k.x}" y="${k.y - 58}" text-anchor="middle" class="display" style="font-size:22px">${k.t}</text>
        ${C.text(k.x, k.y + 14, k.b, { max: 24, lh: 24, cls: 't-sm', style: 'font-weight:500' })}`).join('')}
      ${cl.map(k => { const mx = (k.x * .45 + cx * .55), my = (k.y * .45 + cy * .55); return `<rect x="${mx - 62}" y="${my - 17}" width="124" height="34" rx="17" fill="#FFFDF5" stroke="#111" stroke-width="2"/><text x="${mx}" y="${my + 1}" text-anchor="middle" dominant-baseline="middle" style="font-size:18px;font-weight:700">${k.e}</text>`; }).join('')}
      <rect x="${cx - 128}" y="${cy - 58}" width="256" height="116" fill="#DFFF00" stroke="#111" stroke-width="3"/>
      ${C.text(cx, cy, 'access to usable research space', { max: 16, lh: 30, cls: 'display', style: 'font-size:25px' })}
      <rect x="300" y="752" width="400" height="34" rx="17" fill="#FFFDF5" stroke="#111" stroke-width="2"/><text x="500" y="770" text-anchor="middle" dominant-baseline="middle" style="font-size:19px;font-weight:700;letter-spacing:.08em">DEPENDENCIES ON THE BOUNDARY</text>
      <rect x="320" y="-12" width="360" height="34" rx="17" fill="#F7F4E8" stroke="#111" stroke-width="2"/><text x="500" y="6" text-anchor="middle" dominant-baseline="middle" style="font-size:19px;font-weight:700;letter-spacing:.08em">OUTSIDE DIRECT CONTROL</text>
    </svg>
    <div style="position:relative;width:640px;margin-top:40px;height:300px">
      <figure class="photo anim" style="--d:4;position:absolute;left:0;top:0;width:250px;height:280px;rotate:-3deg"><img src="assets/photos/fridge-rules-notice.jpg" alt="Photographed notice titled SERC Fridge Rules taped to a fridge door"></figure>
      <figure class="photo anim" style="--d:5;position:absolute;left:270px;top:40px;width:300px;height:220px;rotate:3deg"><img src="assets/photos/lockers.jpg" alt="Wall of storage lockers and shelves"></figure>
      <span class="accent-label lavender anim" style="--d:6;position:absolute;left:390px;top:-14px;font-size:17px">field photos · P1 p7, p10</span>
    </div>
    <div class="anim small" style="--d:10;position:absolute;left:840px;top:890px;width:880px;line-height:1.5">
      <strong>Dependencies:</strong> institute rules · maintenance and cleaning services · procurement · administrators.<br>
      <strong>Outside direct control:</strong> campus construction · overall admissions · research evaluation.
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;margin-top:auto;width:640px">
    <div class="color-block anim" style="--d:8;font:700 25px/1.3 var(--font-sans);border:2px solid var(--black)">
      Several local coordination arrangements, not one floor-wide allocation process.
    </div>
    <div class="anim body" style="--d:9;border-left:8px solid var(--orange);padding-left:16px">A shared location and a shared resource are different boundaries: the cafeteria is common space, but its appliances may be treated as one lab's.</div>
    </div>`;
  }
});
