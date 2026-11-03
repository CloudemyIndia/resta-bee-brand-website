from html import unescape
from pathlib import Path
import re


PAGE = Path('dist/features/restaurant-billing-software/index.html')
PRIMARY = 'restaurant billing software'
SUPPORTING = [
    'billing software for restaurant',
    'restaurant billing software india',
    'restaurant billing system',
    'restaurant billing app',
    'billing software for restaurant in india',
]


def count_phrase(text: str, phrase: str) -> int:
    pattern = r'(?<!\w)' + re.escape(phrase) + r'(?!\w)'
    return len(re.findall(pattern, text, flags=re.IGNORECASE))


document = PAGE.read_text()
main_match = re.search(r'<main\b[^>]*>(.*?)</main>', document, flags=re.DOTALL)
if not main_match:
    raise SystemExit(f'Main content not found in {PAGE}; run npm run build first.')

main = re.sub(r'<(?:script|style)\b[^>]*>.*?</(?:script|style)>', ' ', main_match.group(1), flags=re.DOTALL | re.IGNORECASE)
visible_main = unescape(re.sub(r'<[^>]+>', ' ', main))
visible_main = re.sub(r'\s+', ' ', visible_main).strip()
words = re.findall(r"[\w₹]+(?:['’][\w]+)?", visible_main, flags=re.UNICODE)
title_match = re.search(r'<title>(.*?)</title>', document, flags=re.DOTALL | re.IGNORECASE)
title = unescape(title_match.group(1)) if title_match else ''
coverage_text = f'{title} {visible_main}'

primary_count = count_phrase(visible_main, PRIMARY)
primary_density = 100 * primary_count / len(words)
print(f'Visible main-body words: {len(words)}')
print(f'Primary phrase in visible main body: {primary_count}')
print(f'Primary phrase density: {primary_density:.3f}%')
if primary_density < 0.5:
    raise SystemExit(f'Primary phrase density is below 0.5%: {primary_density:.3f}%')
print('Supporting keyword coverage (body or SEO title):')
missing = []
for phrase in SUPPORTING:
    if phrase == 'restaurant billing software india':
        count = len(re.findall(r'(?<!\w)restaurant billing software(?:\s+in)?\s+india(?!\w)', coverage_text, flags=re.IGNORECASE))
    else:
        count = count_phrase(coverage_text, phrase)
    location = 'covered' if count else 'missing'
    print(f'  {phrase}: {location} ({count})')
    if not count:
        missing.append(phrase)

if missing:
    raise SystemExit('Missing mapped supporting terms: ' + ', '.join(missing))
