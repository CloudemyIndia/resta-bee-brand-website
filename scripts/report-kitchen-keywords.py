from html.parser import HTMLParser
from pathlib import Path
import re

PAGE = Path('dist/features/kitchen-display-system/index.html')
PRIMARY = re.compile(r'(?<!\w)kitchen\s+display\s+system(?!\w)', re.IGNORECASE)
WORD = re.compile(r"[\w₹]+(?:[’'-][\w]+)*", re.UNICODE)
SUPPORTING = [
    'kitchen display system for restaurant',
    'kitchen display systems',
    'restaurant kitchen display system',
    'kitchen display software',
    'pos with kitchen display',
    'restaurant kds',
]

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
        if self.main_depth and not any(ignored for _, ignored in self.stack):
            self.parts.append(data)

if not PAGE.is_file():
    raise SystemExit('Build the static site first: npm run build')
html = PAGE.read_text()
parser = VisibleMainText()
parser.feed(html)
text = ' '.join(' '.join(parser.parts).split())
word_count = len(WORD.findall(text))
primary_count = len(PRIMARY.findall(text))
density = primary_count / word_count * 100 if word_count else 0
print(f'Visible kitchen display page body: {primary_count} primary matches / {word_count} words = {density:.3f}%')
if density < 0.5:
    raise SystemExit(f'Primary keyword density is below 0.5%: {density:.3f}%')
title = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
coverage_text = f'{title.group(1) if title else ""} {text}'
missing = []
print('Supporting keyword coverage (visible copy or SEO title):')
for phrase in SUPPORTING:
    count = len(re.findall(r'(?<!\w)' + re.escape(phrase) + r'(?!\w)', coverage_text, re.IGNORECASE))
    print(f'  {phrase}: {count}')
    if count == 0:
        missing.append(phrase)
if missing:
    raise SystemExit('Missing mapped supporting terms: ' + ', '.join(missing))
