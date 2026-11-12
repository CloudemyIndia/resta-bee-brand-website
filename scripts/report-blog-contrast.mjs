// Calculate WCAG contrast ratios for declared blog color pairs
function parseHex(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
}

function luminance([r, g, b]) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function ratio(c1, c2) {
  const l1 = luminance(parseHex(c1));
  const l2 = luminance(parseHex(c2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  { name: 'Paper canvas (#faf9f5) / Ink text (#242820)', bg: '#faf9f5', fg: '#242820', target: 4.5 },
  { name: 'Paper canvas (#faf9f5) / Muted text (#62665d)', bg: '#faf9f5', fg: '#62665d', target: 4.5 },
  { name: 'Paper canvas (#faf9f5) / Lede copy (#51574e)', bg: '#faf9f5', fg: '#51574e', target: 4.5 },
  { name: 'Paper canvas (#faf9f5) / Dark orange text/kickers (#963b18)', bg: '#faf9f5', fg: '#963b18', target: 4.5 },
  { name: 'Orange tint (#ffe7cf) / Dark orange badge text (#963b18)', bg: '#ffe7cf', fg: '#963b18', target: 4.5 },
  { name: 'Card background (#f1eee5) / Body text (#42473e)', bg: '#f1eee5', fg: '#42473e', target: 4.5 },
  { name: 'Ticket paper (#fffefa) / Body text (#42473e)', bg: '#fffefa', fg: '#42473e', target: 4.5 },
  { name: 'TOC container (#f6f5ef) / TOC links (#51574e)', bg: '#f6f5ef', fg: '#51574e', target: 4.5 },
  { name: 'Orange button (#ff8a35) / Button text (#242820)', bg: '#ff8a35', fg: '#242820', target: 3.0 },
  { name: 'Soft CTA card (#f0caa8) / CTA kicker (#783516)', bg: '#f0caa8', fg: '#783516', target: 4.5 },
  { name: 'Soft CTA card (#f0caa8) / CTA heading (#242820)', bg: '#f0caa8', fg: '#242820', target: 4.5 },
  { name: 'Soft CTA card (#f0caa8) / CTA description (#493e35)', bg: '#f0caa8', fg: '#493e35', target: 4.5 },
];

let allPass = true;
console.log('=== Blog Design System Color Contrast Check (WCAG AA) ===');
for (const p of pairs) {
  const r = ratio(p.bg, p.fg);
  const pass = r >= p.target;
  if (!pass) allPass = false;
  console.log(`${pass ? 'PASS' : 'FAIL'}: ${p.name} -> ${r.toFixed(2)}:1 (Min required: ${p.target}:1)`);
}

if (!allPass) {
  console.error('Some contrast pairs failed WCAG AA');
  process.exit(1);
}
console.log('\nAll blog design system color contrast checks passed.');
