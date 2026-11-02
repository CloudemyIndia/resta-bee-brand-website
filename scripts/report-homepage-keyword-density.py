from html.parser import HTMLParser
from pathlib import Path
import re

PAGE = Path('dist/index.html')
PHRASE = re.compile(r'(?<!\w)restaurant\s+pos(?!\w)', re.IGNORECASE)
WORD = re.compile(r"[\w₹]+(?:[’'-][\w]+)*", re.UNICODE)

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

    def handle_startendtag(self, tag, attrs):
        return

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
parser = VisibleMainText()
parser.feed(PAGE.read_text())
text = ' '.join(' '.join(parser.parts).split())
word_count = len(WORD.findall(text))
phrase_count = len(PHRASE.findall(text))
density = phrase_count / word_count * 100 if word_count else 0
print(f'Primary phrase: restaurant POS')
print(f'Visible homepage body: {phrase_count} occurrences / {word_count} words = {density:.3f}%')
