#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

ARTICLES = [
    {
        'file': 'src/content/blog/what-is-kot-in-restaurant.json',
        'primary': 'kitchen order ticket',
        'supporting': [
            'kitchen order ticket system',
            'kot meaning in restaurant',
            'kot full form in hotel',
            'kitchen order ticket example'
        ]
    },
    {
        'file': 'src/content/blog/restaurant-pos-buying-checklist.json',
        'primary': 'restaurant pos buying checklist',
        'supporting': [
            'best pos for restaurant',
            'restaurant pos system',
            'restaurant management software',
            'restaurant billing system'
        ]
    },
    {
        'file': 'src/content/blog/restaurant-pos-cost-india.json',
        'primary': 'pos system price',
        'supporting': [
            'restaurant pos system price',
            'pos software price in india',
            'restaurant billing software price',
            'pos system price in india'
        ]
    }
]

def check_file(config):
    p = Path(config['file'])
    if not p.exists():
        print(f"ERROR: {config['file']} not found")
        return False
    with open(p) as f:
        data = json.load(f)

    text_parts = [data.get('title', ''), data.get('subtitle', ''), data.get('excerpt', '')]
    for s in data.get('sections', []):
        text_parts.append(s.get('heading', ''))
        text_parts.extend(s.get('paragraphs', []))
        text_parts.extend(s.get('paragraphs_after', []))
        if 'callout' in s:
            text_parts.append(s['callout'].get('title', ''))
            text_parts.append(s['callout'].get('text', ''))
        if 'checklist' in s:
            for item in s['checklist']:
                text_parts.append(item.get('item', ''))
                text_parts.append(item.get('detail', ''))
        if 'subsections' in s:
            for sub in s['subsections']:
                text_parts.append(sub.get('heading', ''))
                text_parts.extend(sub.get('paragraphs', []))
        if 'table' in s:
            t = s['table']
            text_parts.append(t.get('caption', ''))
            text_parts.extend(t.get('headers', []))
            for row in t.get('rows', []):
                if isinstance(row, dict):
                    text_parts.extend(str(value) for value in row.values())
                else:
                    text_parts.extend(row)
    for faq in data.get('faqs', []):
        text_parts.append(faq.get('question', ''))
        text_parts.append(faq.get('answer', ''))

    full_text = ' '.join(text_parts)
    words = re.findall(r'\b[A-Za-z0-9_/-]+\b', full_text)
    word_count = len(words)
    primary_matches = len(re.findall(re.escape(config['primary']), full_text, re.IGNORECASE))
    density = (primary_matches / word_count) * 100 if word_count else 0

    print(f"Article: {data.get('slug')}")
    print(f"  Visible words: {word_count}")
    print(f"  Primary '{config['primary']}': {primary_matches} matches ({density:.3f}%)")
    assert word_count >= 800, f"Visible words {word_count} is under 800 minimum"
    assert density >= 0.5, f"Primary density {density:.3f}% is below 0.5% threshold"

    for skw in config['supporting']:
        cnt = len(re.findall(re.escape(skw), full_text, re.IGNORECASE))
        print(f"    Supporting '{skw}': {cnt} matches")
        assert cnt >= 1, f"Missing supporting keyword: {skw}"
    print("  -> PASS\n")
    return True

if __name__ == '__main__':
    all_pass = all(check_file(c) for c in ARTICLES)
    if not all_pass:
        sys.exit(1)
    print("All blog article keyword checks passed.")
