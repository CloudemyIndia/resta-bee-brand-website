from html.parser import HTMLParser
from pathlib import Path
import re

PAGE = Path('dist/features/restaurant-sales-reports/index.html')
PRIMARY = re.compile(r'(?<!\w)restaurant\s+sales\s+reporting\s+software(?!\w)', re.IGNORECASE)
WORD = re.compile(r"[\w₹]+(?:[’'-][\w]+)*", re.UNICODE)
SUPPORTING = ['restaurant sales report', 'restaurant POS reports', 'restaurant analytics software', 'restaurant sales dashboard']

class VisibleMainText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.main_depth = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        ignored = tag in {'script', 'style', 'svg', 'noscript'} or 'hidden' in attrs or attrs.get('aria-hidden') == 'true'
        parent_ignored = bool(self.stack and self.stack[-1][1])
        self.stack.append((tag, ignored or parent_ignored))
        if tag == 'main':
            self.main_depth += 1

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                del self.stack[index:]
                break
        if tag == 'main' and self.main_depth:
            self.main_depth -= 1

    def handle_data(self, data):
        if self.main_depth and not any(item[1] for item in self.stack):
            self.parts.append(data)

if not PAGE.is_file():
    raise SystemExit('Build the static site first: npm run build')

html = PAGE.read_text()
parser = VisibleMainText()
parser.feed(html)
text = ' '.join(' '.join(parser.parts).split())
words = len(WORD.findall(text))
count = len(PRIMARY.findall(text))
density = count / words * 100 if words else 0
print(f'Visible restaurant sales reports page body: {words} words')
print(f'Primary phrase: {count} exact matches / {words} words = {density:.3f}%')
if density < 0.5:
    print('Below the 0.5% editorial QA floor. Revise naturally; do not force repetition.')
if words < 800:
    print('Below the 800-word planning target. Add useful detail only where it improves the page.')
title = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
coverage = f'{title.group(1) if title else ""} {text}'
missing = []
print('Supporting keyword coverage (visible copy or SEO title):')
for phrase in SUPPORTING:
    matches = re.findall(r'(?<!\w)' + re.escape(phrase) + r'(?!\w)', coverage, re.I)
    print(f'  {phrase}: {len(matches)}')
    if not matches:
        missing.append(phrase)
if missing:
    raise SystemExit('Missing mapped supporting terms: ' + ', '.join(missing))
