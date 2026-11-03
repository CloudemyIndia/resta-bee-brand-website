from html import unescape
from pathlib import Path
import re

html = Path('dist/restaurant-management-software/index.html').read_text()
main = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', html)
if not main:
    raise SystemExit('Restaurant management page has no main content.')
text = re.sub(r'<(script|style)\b[^>]*>[\s\S]*?</\1>', ' ', main.group(1), flags=re.I)
text = re.sub(r'<[^>]+>', ' ', text)
text = unescape(text)
words = re.findall(r"\b[\w₹]+(?:['’-][\w]+)*\b", text, flags=re.UNICODE)
visible = ' '.join(words).casefold()
primary = 'restaurant management software'
primary_count = len(re.findall(r'(?<!\w)' + re.escape(primary) + r'(?!\w)', visible))
density = primary_count / len(words) * 100 if words else 0
supporting = {
    'restaurant software': 'restaurant software',
    # Keep the workbook's query target in the map, but use natural word order in page copy.
    'restaurant software india': 'restaurant software for teams in india',
    'restaurant management software india': 'restaurant management software for teams in india',
    'restaurant software solutions': 'restaurant software solutions',
    'restaurant management system software': 'restaurant management system software',
}
support_counts = {phrase: len(re.findall(r'(?<!\w)' + re.escape(variant) + r'(?!\w)', visible)) for phrase, variant in supporting.items()}
print(f'Visible main-content words: {len(words)}')
print(f'Exact primary matches: {primary_count} / {len(words)} = {density:.3f}%')
for phrase, count in support_counts.items():
    variant = supporting[phrase]
    print(f'Supporting target: {phrase} = {count} ({variant})')
if density < 0.5:
    raise SystemExit('Primary-keyword editorial density is below 0.5%.')
missing = [phrase for phrase, count in support_counts.items() if not count]
if missing:
    raise SystemExit('Missing workbook supporting phrases: ' + ', '.join(missing))
