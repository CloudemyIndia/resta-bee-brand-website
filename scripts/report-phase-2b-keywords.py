from html import unescape
from pathlib import Path
import re


PAGES = {
    'split-billing': {
        'primary': 'split bills',
        'supporting': {
            'split bills app': 'split bills app',
            'restaurant split bill': 'restaurant split bill',
            'split payment restaurant': 'restaurant split payment',
            'split bill restaurant pos': 'restaurant POS split bill',
        },
    },
    'restaurant-gst-billing': {
        'primary': 'restaurant gst billing software',
        'supporting': {
            'gst billing software for restaurant': 'gst billing software for restaurant',
            'restaurant gst invoice': 'restaurant gst invoice',
            'gst restaurant bill': 'gst restaurant bill',
            'restaurant bill gst': 'gst details for a restaurant bill',
        },
    },
}


def count(text: str, phrase: str) -> int:
    return len(re.findall(r'(?<!\w)' + re.escape(phrase) + r'(?!\w)', text, flags=re.IGNORECASE))


for slug, targets in PAGES.items():
    path = Path(f'dist/features/{slug}/index.html')
    html = path.read_text()
    main = re.search(r'<main\b[^>]*>(.*?)</main>', html, flags=re.DOTALL | re.IGNORECASE)
    if not main:
        raise SystemExit(f'Main content not found in {path}; run npm run build first.')
    rendered = re.sub(r'<(?:script|style)\b[^>]*>.*?</(?:script|style)>', ' ', main.group(1), flags=re.DOTALL | re.IGNORECASE)
    visible = unescape(re.sub(r'<[^>]+>', ' ', rendered))
    visible = re.sub(r'\s+', ' ', visible).strip()
    words = re.findall(r"[\w₹]+(?:['’][\w]+)?", visible, flags=re.UNICODE)
    primary_count = count(visible, targets['primary'])
    density = 100 * primary_count / len(words)
    print(f'{slug}: {len(words)} visible words; {primary_count} exact primary matches; {density:.3f}% density')
    if density < 0.5:
        raise SystemExit(f'{slug} primary phrase density is below 0.5%.')
    missing = []
    for phrase, editorial_variant in targets['supporting'].items():
        matches = count(visible, editorial_variant)
        print(f'  {phrase}: {matches} ({editorial_variant})')
        if not matches:
            missing.append(phrase)
    if missing:
        raise SystemExit(f'{slug} is missing supporting keyword coverage: {", ".join(missing)}')
