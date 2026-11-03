from html.parser import HTMLParser
from pathlib import Path
import re

PAGE = Path('dist/features/multi-outlet-restaurant-management/index.html')
PRIMARY = re.compile(r'(?<!\w)multi\s+outlet\s+restaurant\s+pos(?!\w)', re.IGNORECASE)
WORD = re.compile(r"[\w₹]+(?:[’'-][\w]+)*", re.UNICODE)
SUPPORTING = ['franchise pos', 'multiple outlet pos system', 'restaurant chain pos', 'multi location restaurant pos', 'central menu management']

class VisibleMainText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.main_depth, self.parts = [], 0, []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        ignored = tag in {'script', 'style', 'svg', 'noscript'} or 'hidden' in attrs or attrs.get('aria-hidden') == 'true'
        self.stack.append((tag, ignored or bool(self.stack and self.stack[-1][1])))
        if tag == 'main': self.main_depth += 1
    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                del self.stack[index:]
                break
        if tag == 'main' and self.main_depth: self.main_depth -= 1
    def handle_data(self, data):
        if self.main_depth and not any(ignored for _, ignored in self.stack): self.parts.append(data)

if not PAGE.is_file(): raise SystemExit('Build the static site first: npm run build')
html = PAGE.read_text()
parser = VisibleMainText(); parser.feed(html)
text = ' '.join(' '.join(parser.parts).split())
words, matches = len(WORD.findall(text)), len(PRIMARY.findall(text))
density = matches / words * 100 if words else 0
print(f'Visible multi-outlet body: {words} words')
print(f'Primary phrase: {matches} exact matches / {words} words = {density:.3f}%')
if density < .5: print('Review the primary phrase against the 0.5% editorial QA floor without forcing repetition.')
if words < 800: print('Review page depth against the 800-word planning target; it is guidance, not a hard gate.')
title = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
coverage = (title.group(1) if title else '') + ' ' + text
missing=[]
for phrase in SUPPORTING:
    count=len(re.findall(r'(?<!\w)'+re.escape(phrase)+r'(?!\w)',coverage,re.I))
    print(f'  {phrase}: {count}')
    if not count: missing.append(phrase)
if missing: raise SystemExit('Missing workbook supporting phrases: '+', '.join(missing))
