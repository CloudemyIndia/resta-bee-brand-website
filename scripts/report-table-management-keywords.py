from html.parser import HTMLParser
from pathlib import Path
import re

PAGE = Path('dist/features/restaurant-table-management/index.html')
PRIMARY = re.compile(r'(?<!\w)restaurant\s+table\s+management\s+software(?!\w)', re.IGNORECASE)
WORD = re.compile(r"[\w₹]+(?:[’'-][\w]+)*", re.UNICODE)
SUPPORTING = ['restaurant table management', 'table management restaurant', 'restaurant table management systems', 'pos table management', 'table management app']
class VisibleMainText(HTMLParser):
    def __init__(self): super().__init__(convert_charrefs=True); self.stack=[]; self.main_depth=0; self.parts=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs); ignored=tag in {'script','style','svg','noscript'} or 'hidden' in attrs or attrs.get('aria-hidden')=='true'; parent=bool(self.stack and self.stack[-1][1]); self.stack.append((tag,ignored or parent)); self.main_depth += tag=='main'
    def handle_endtag(self, tag):
        for i in range(len(self.stack)-1,-1,-1):
            if self.stack[i][0]==tag: del self.stack[i:]; break
        if tag=='main' and self.main_depth: self.main_depth-=1
    def handle_data(self, data):
        if self.main_depth and not any(x[1] for x in self.stack): self.parts.append(data)
if not PAGE.is_file(): raise SystemExit('Build the static site first: npm run build')
html=PAGE.read_text(); parser=VisibleMainText(); parser.feed(html); text=' '.join(' '.join(parser.parts).split()); words=len(WORD.findall(text)); count=len(PRIMARY.findall(text)); density=count/words*100 if words else 0
print(f'Visible table-management page body: {words} words')
print(f'Primary phrase: {count} exact matches / {words} words = {density:.3f}%')
if density < .5: print('Review the primary phrase density against the 0.5% editorial QA floor; do not add awkward repetition.')
if words < 800: print('Review content depth against the 800-word planning target; this is guidance, not a hard release gate.')
title=re.search(r'<title>(.*?)</title>',html,re.I|re.S); coverage=f'{title.group(1) if title else ""} {text}'; missing=[]
print('Supporting keyword coverage (visible copy or SEO title):')
for phrase in SUPPORTING:
    n=len(re.findall(r'(?<!\w)'+re.escape(phrase)+r'(?!\w)',coverage,re.I)); print(f'  {phrase}: {n}')
    if not n: missing.append(phrase)
if missing: raise SystemExit('Missing mapped supporting terms: '+', '.join(missing))
