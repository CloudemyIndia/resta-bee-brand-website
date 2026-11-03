from html.parser import HTMLParser
from pathlib import Path
import re

PAGE = Path('dist/contact/index.html')
PRIMARY = re.compile(r'(?<!\w)restabee\s+contact(?!\w)', re.IGNORECASE)
WORD = re.compile(r"[\w₹]+(?:[’'-][\w]+)*", re.UNICODE)
SUPPORTING = ['restabee support', 'restabee phone']

class VisibleMainText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.main_depth = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        ignored = tag in {'script', 'style', 'svg', 'noscript'} or 'hidden' in attrs or attrs.get('aria-hidden') == 'true'
        parent_ignored = bool(self.stack and self.stack[-1][1])
        self.stack.append((tag, ignored or parent_ignored))
        if tag == 'main': self.main_depth += 1

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                del self.stack[index:]
                break
        if tag == 'main' and self.main_depth: self.main_depth -= 1

    def handle_data(self, data):
        if self.main_depth and not any(item[1] for item in self.stack): self.parts.append(data)

if not PAGE.is_file(): raise SystemExit('Build the static site first: npm run build')
html = PAGE.read_text()
parser = VisibleMainText()
parser.feed(html)
text = ' '.join(' '.join(parser.parts).split())
words = len(WORD.findall(text))
matches = len(PRIMARY.findall(text))
density = matches / words * 100 if words else 0
print(f'Visible contact page body: {words} words')
print(f'Primary phrase: {matches} exact matches / {words} words = {density:.3f}%')
print('Supporting phrase coverage (visible main copy):')
missing = []
for phrase in SUPPORTING:
    count = len(re.findall(r'(?<!\w)' + re.escape(phrase) + r'(?!\w)', text, re.I))
    print(f'  {phrase}: {count}')
    if not count: missing.append(phrase)
if density < 0.5: raise SystemExit('Primary keyword density is below the 0.5% editorial floor.')
if missing: raise SystemExit('Missing supporting phrases: ' + ', '.join(missing))
