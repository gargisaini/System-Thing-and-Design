# The Empty Desk: Research Lab Commons (SERC × Precog)

A code-built presentation of the Systems Thinking & Design project by Team The System Error.
It has 25 slides, every claim is traced to the three project PDFs, and there is no build step.

## Run it
1. Open `index.html` in Chrome, Edge or Firefox (double-click works; no server needed).
2. Press **F** for fullscreen.

Internet is only needed for the Google Fonts (Archivo Black, DM Sans, IBM Plex Mono). Offline, it falls back to system fonts, and the layout is verified to still fit.

## Keys
| Key | Action |
|---|---|
| → · Space · PgDn · Enter | next slide |
| ← · PgUp · Backspace | previous slide |
| Home / End | first / last slide |
| **N** | speaker notes: what to say · source basis · what *not* to claim |
| **S** | sources view: file · page · section for every slide |
| **F** | fullscreen |
| **H** | hide the corner counter |
| Esc | close sources view |

Deep link to a slide: `index.html#12`. Swipe works on touch screens. On slide 05, click the resource tabs.

## Checks
```bash
bash qa/check.sh        # loads all slides headless; checks metadata, notes, sources, overflow → PASS/FAIL
python qa/quotes.py <rendered-dom.html> <Phase2.txt>   # every displayed quote must be verbatim in Phase 2
```
`qa/check.sh` expects Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe` and runs in Git Bash.
To produce the DOM for `quotes.py`: `chrome --headless=new --dump-dom "file:///…/index.html#1" > dom.html`.

## Folder map
```
index.html              shell: fonts, SVG arrow markers, script order
styles/tokens.css       palette + semantic colour roles (lime/blue/lavender/pink/orange)
styles/typography.css   display-title, section-title, accent-label, hl…
styles/components.css   badge, card, quote, insight, stat, chain/journey, tag, photo, tabs…
styles/diagrams.css     shared SVG node/edge styles
styles/layout.css       canvas scaling, transitions, notes + sources panels
js/components.js        C.head / badge / quote / chain / text / shape / arrow; chapter shapes
js/deck.js              engine: navigation, notes, sources, fullscreen, #qa mode
slides/NN-name.js       one file per slide, each a Deck.add({...}) data object
assets/photos/          field photographs extracted from the Phase 1 PDF
assets/figures/         Phase 2 figures used as source thumbnails
qa/                     check.sh, quotes.py
SOURCE_INDEX.md         what is in each PDF
CONTENT_VALIDATION.md   claim → PDF/page trace + conflicts needing review
PRESENTATION_QA.md      QA results, open issues, self-check
```

## Add or edit a slide
Each slide is a data object:
```js
Deck.add({
  slide: 26,                       // must equal its position (qa/check.sh enforces this)
  title: 'Short title',
  chapter: 'synthesis',            // problem | investigate | realise | leverage | test | synthesis
  sources: [{ file: 'P34', page: 32, section: 'Final recommendation' }],
  notes: { say: ['…'], basis: ['…'], avoid: ['…'] },
  html: () => `${C.head({ no: '26', kicker: '…', title: 'lowercase headline', tag: 'tag', tagColor: 'lime' })} …`
});
```
Add `<script src="slides/26-name.js"></script>` to `index.html` in order, then run `bash qa/check.sh`.
Rotate elements with the CSS `rotate:` property, not `transform`, because entrance animations use `transform`.
