Deck.add({
  slide: 17,
  title: 'What if the holder has a legitimate exception?',
  chapter: 'test',
  sources: [
    { file: 'P34', page: 12, section: 'Prototype P2: written rule' },
    { file: 'P34', page: '16–17', section: 'Scenario S3: Long run + planned travel' },
    { file: 'P34', page: 27, section: 'Refinement: Decay V2 tiered rule' }
  ],
  notes: {
    say: [
      'Scenario S3: a PhD student with a 10-day training run and a desk setup is leaving for a two-week conference mid-run.',
      'The rule is not "everything expires". An ordinary undated claim decays in tiers: after 7 days anyone may borrow for the day, after 21 days the steward messages the holder, and only after 5 more working days with no reply does the desk return to the queue.',
      'A legitimate exception is declared openly: Protected, with an end date and the steward\'s initials. The steward approves up to 4 weeks; beyond that, faculty. Running jobs are never stopped, and belongings are never removed automatically.',
      'Predicted: the setup is protected openly, and others know exactly when it frees. The risk is exceptions renewed back to back, becoming a permanent claim under a new name.'
    ],
    basis: ['P34 p12 (rule text: 7 / 21 / 5, 14-day AWAY, ≤4 weeks steward / longer faculty, never stops running jobs, never automatic removal).', 'P34 p16–17 S3 (actors, current, with intervention, failure mode, expected outcome).', 'P34 p27 (tiering came from the S3/S5/S6 walkthrough).'],
    avoid: ['The timeline is schematic, not to scale. "+5" means working days.', 'The S3 current-system cell carries no [E] marker in the source. Present it as the scenario\'s description, not as documented evidence.']
  },
  html: () => {
    const W = 1696, x = d => 170 + d * 37; // schematic day → px
    const mark = (d, y, t, c, up) => `<line x1="${x(d)}" y1="${y - 26}" x2="${x(d)}" y2="${y + 26}" stroke="#111" stroke-width="3"/>
      <rect x="${x(d) - 4}" y="${up ? y - 92 : y + 34}" width="300" height="56" fill="${c}" stroke="#111" stroke-width="2"/>
      ${C.text(x(d) + 9, up ? y - 64 : y + 62, t, { max: 30, lh: 21, anchor: 'start', cls: 't-sm', style: 'font-weight:700' })}`;
    return `
    ${C.head({ no: '17', kicker: 'Scenario S3 · continuity', title: 'what about a legitimate exception?', tag: 'not "everything expires"', tagColor: 'orange', size: 'md' })}
    <div class="anim" style="--d:2;margin-top:26px;display:flex;gap:14px;align-items:center">
      <span class="tag blue">S3</span><span style="font:600 21px var(--font-sans)">PhD student with a 10-day training run and a desk setup · leaving for a 2-week conference mid-run</span>
    </div>
    <svg class="diagram anim" style="--d:3;margin-top:8px" viewBox="0 0 ${W} 380" width="${W}" height="380" role="img" aria-label="Schematic timeline of the tiered decay rule and the continuity exception">
      <text x="0" y="104" class="display" style="font-size:22px">undated</text><text x="0" y="128" class="display" style="font-size:22px">claim</text>
      <line x1="${x(0)}" y1="116" x2="${x(36)}" y2="116" stroke="#111" stroke-width="4" marker-end="url(#ah)"/>
      ${mark(0, 116, 'last here: dated', '#FFFDF5', true)}
      ${mark(7, 116, '>7 days: anyone may borrow for the day', '#DFFF00', false)}
      ${mark(21, 116, '>21 days: steward messages you', '#F58B4D', true)}
      ${mark(28, 116, '+5 working days, no reply: back to the queue', '#F19AC5', false)}
      <text x="0" y="288" class="display" style="font-size:22px">declared</text><text x="0" y="312" class="display" style="font-size:22px">exception</text>
      <rect x="${x(0)}" y="276" width="${x(28) - x(0)}" height="44" fill="#B9A7F5" stroke="#111" stroke-width="3"/>
      <text x="${x(0) + 16}" y="299" dominant-baseline="middle" style="font-size:19px;font-weight:700">PROTECTED SETUP · ends __/__ · steward initials · steward approves ≤ 4 weeks</text>
      <rect x="${x(28)}" y="276" width="${x(36) - x(28)}" height="44" fill="#111" stroke="#111" stroke-width="3"/>
      <text x="${x(28) + 14}" y="299" dominant-baseline="middle" style="font-size:18px;font-weight:700;fill:#F7F4E8">longer → faculty approves</text>
      <rect x="${x(0)}" y="236" width="${x(14) - x(0)}" height="30" fill="#9DB7E8" stroke="#111" stroke-width="2"/>
      <text x="${x(0) + 12}" y="252" dominant-baseline="middle" style="font-size:16px;font-weight:700">or AWAY UNTIL __/__ · up to 14 days</text>
      <text x="${x(36)}" y="360" text-anchor="end" class="t-sm muted" style="font-weight:700">schematic · not to scale</text>
    </svg>
    <div class="anim" style="--d:5;background:var(--black);color:var(--cream);padding:14px 22px;font:700 22px var(--font-sans);display:flex;gap:30px">
      <span><span style="color:var(--lime)">■</span> Running jobs are never stopped by this rule</span>
      <span><span style="color:var(--lime)">■</span> Never automatic removal of belongings</span>
      <span><span style="color:var(--lime)">■</span> GPU page shows the expected release</span>
    </div>
    <div style="margin-top:auto;display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:22px">
      <div class="anim" style="--d:7;border-left:8px solid var(--black);padding-left:14px"><div class="label">Scenario: current system</div><div class="body" style="font-size:19px;margin-top:4px">Jacket and name hold the desk; nobody knows if the run is live; others avoid or contest it.</div></div>
      <div class="anim" style="--d:8;background:var(--orange);border:2px dashed var(--black);padding:12px 16px">${C.badge('predicted')}<div style="font:700 23px/1.25 var(--font-sans);margin-top:8px">Setup protected openly; others know exactly when it frees.</div></div>
      <div class="anim" style="--d:9;border-left:8px solid var(--pink);padding-left:14px"><div class="label">Likely failure mode</div><div class="body" style="font-size:19px;margin-top:4px">Exceptions renewed back-to-back become a permanent claim under a new name.</div></div>
    </div>`;
  }
});
