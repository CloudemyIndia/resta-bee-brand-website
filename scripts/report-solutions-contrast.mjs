// Calculate WCAG contrast ratios for declared solution page color pairs
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
  { name: 'Dark section (#252b24) / Light heading (#f6f5ef)', bg: '#252b24', fg: '#f6f5ef', target: 4.5 },
  { name: 'Dark section (#252b24) / Muted body (#d0d4ca)', bg: '#252b24', fg: '#d0d4ca', target: 4.5 },
  { name: 'Dark section (#252b24) / Peach kicker (#ffb17d)', bg: '#252b24', fg: '#ffb17d', target: 4.5 },
  { name: 'Reports tint (#e8ecdf) / Ink heading (#242820)', bg: '#e8ecdf', fg: '#242820', target: 4.5 },
  { name: 'Reports tint (#e8ecdf) / Body text (#42493f)', bg: '#e8ecdf', fg: '#42493f', target: 4.5 },
  { name: 'Reports tint (#e8ecdf) / Link text (#783516)', bg: '#e8ecdf', fg: '#783516', target: 4.5 },
  { name: 'Soft CTA card (#f0caa8) / CTA kicker (#783516)', bg: '#f0caa8', fg: '#783516', target: 4.5 },
  { name: 'Soft CTA card (#f0caa8) / CTA heading (#242820)', bg: '#f0caa8', fg: '#242820', target: 4.5 },
  { name: 'Soft CTA card (#f0caa8) / CTA description (#493e35)', bg: '#f0caa8', fg: '#493e35', target: 4.5 },
  { name: 'Orange button (#ff8a35) / Button text (#242820)', bg: '#ff8a35', fg: '#242820', target: 3.0 },
  { name: 'Solutions hub paper (#faf9f5) / Hero copy (#50564d)', bg: '#faf9f5', fg: '#50564d', target: 4.5 },
  { name: 'Solutions hub section (#f0eee6) / Kicker (#963b18)', bg: '#f0eee6', fg: '#963b18', target: 4.5 },
  { name: 'Solutions hub card (#fffefa) / Service label (#62665d)', bg: '#fffefa', fg: '#62665d', target: 4.5 },
  { name: 'Solutions hub card (#fffefa) / Card description (#50564d)', bg: '#fffefa', fg: '#50564d', target: 4.5 },
  { name: 'Solutions hub card (#fffefa) / Card link (#85310e)', bg: '#fffefa', fg: '#85310e', target: 4.5 },
  { name: 'Solutions hub CTA (#252b24) / CTA heading (#f7f5ec)', bg: '#252b24', fg: '#f7f5ec', target: 4.5 },
  { name: 'Solutions hub CTA (#252b24) / CTA description (#d6d9ce)', bg: '#252b24', fg: '#d6d9ce', target: 4.5 },
  { name: 'Solutions hub CTA (#252b24) / CTA kicker (#ffbd8b)', bg: '#252b24', fg: '#ffbd8b', target: 4.5 },
];

let allPass = true;
console.log('=== Solutions Design System Color Contrast Check (WCAG AA) ===');
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
console.log('All solution contrast pairs pass WCAG AA.');
