function rgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16));
}
function luminance(hex) {
  return rgb(hex).map(channel => channel / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
}
function ratio(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
const pairs = [
  ['Paper and body copy', '#faf9f5', '#51574e', 4.5],
  ['Paper and muted copy', '#faf9f5', '#62665d', 4.5],
  ['Paper and orange kicker', '#faf9f5', '#bd4817', 4.5],
  ['Paper and link', '#faf9f5', '#85310e', 4.5],
  ['Light section and body copy', '#f0eee6', '#51574e', 4.5],
  ['Light section and card index', '#f0eee6', '#a43e15', 4.5],
  ['Dark section and body copy', '#252b24', '#d0d4ca', 4.5],
  ['Dark section and kicker', '#252b24', '#ffb17d', 4.5],
  ['Dark card and note', '#30372f', '#e0e3da', 4.5],
  ['Green section and link', '#e8ecdf', '#85310e', 4.5],
  ['Green workflow and kicker', '#e8ecdf', '#85310e', 4.5],
  ['Orange CTA and body copy', '#f7e4d0', '#51574e', 4.5],
  ['Orange CTA and kicker', '#f7e4d0', '#85310e', 4.5],
  ['Product card and body copy', '#fffefa', '#51574e', 4.5],
  ['Product frame and caption', '#f1eee5', '#555b52', 4.5],
  ['Orange CTA button', '#ff8a35', '#242820', 4.5],
  ['Focus indicator on paper', '#faf9f5', '#a53c0e', 3.0],
];
let failed = false;
for (const [label, background, foreground, threshold] of pairs) {
  const value = ratio(background, foreground);
  const pass = value >= threshold;
  console.log(`${pass ? 'PASS' : 'FAIL'} ${label}: ${value.toFixed(2)}:1 (min ${threshold}:1)`);
  failed ||= !pass;
}
if (failed) process.exitCode = 1;
