"""Quote audit: every quote-styled string on the slides must appear verbatim in the Phase 2 PDF text.
Usage: python qa/quotes.py <rendered-dom.html> <Phase2.txt>   (exit 1 if any quote is not found)"""
import html, re, sys
from pathlib import Path

dom = Path(sys.argv[1]).read_text(encoding='utf-8')
quotes = set(re.findall(r'class="q">(.*?)</span>', dom))
quotes |= set(re.findall(r'<div class="quote[^"]*"[^>]*><p[^>]*>(.*?)</p>', dom))
# Slide 05 only renders its default tab; read every tab's quote (2nd string of each data row) from source.
for line in Path(__file__).parent.parent.joinpath('slides/05-perspectives.js').read_text(encoding='utf-8').splitlines():
    toks = re.findall(r"'((?:[^'\\]|\\.)*)'", line)
    if line.strip().startswith('[') and len(toks) == 3 and toks[1]:
        quotes.add(toks[1].replace("\\'", "'"))

def norm(t):
    t = html.unescape(re.sub(r'<[^>]+>', '', t))
    for a, b in (('’', "'"), ('‘', "'"), ('“', '"'), ('”', '"')):
        t = t.replace(a, b)
    return re.sub(r'\s+', ' ', t).strip()

src = norm(Path(sys.argv[2]).read_text(encoding='utf-8'))
missing = [q for q in sorted(map(norm, quotes)) if q and q not in src]
for q in sorted(map(norm, quotes)):
    print('NOT FOUND:' if q in missing else '  ok      ', q[:90])
print(f'{len(quotes) - len(missing)} verbatim, {len(missing)} not found')
sys.exit(1 if missing else 0)
