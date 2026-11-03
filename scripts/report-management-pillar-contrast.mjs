const luminance = hex => {
  const channels = hex.slice(1).match(/.{2}/g).map(channel => parseInt(channel, 16) / 255);
  const linear = channels.map(channel => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
};
const pairs = [
  ['body text on page paper', '#4c534a', '#faf9f5'],
  ['body text on white card', '#4f554c', '#fffefa'],
  ['body text on warm panel', '#4f554c', '#f0eee6'],
  ['body text on green panel', '#41483f', '#e8ecdf'],
  ['dark accent on page paper', '#963b18', '#faf9f5'],
  ['dark accent on white card', '#963b18', '#fffefa'],
  ['dark accent on warm panel', '#963b18', '#f0eee6'],
  ['dark accent on green panel', '#963b18', '#e8ecdf'],
  ['feature link on green panel', '#85310e', '#e8ecdf'],
  ['feature link on warm panel', '#85310e', '#f0eee6'],
  ['focus outline on page paper', '#a53c0e', '#faf9f5'],
  ['button text on orange button', '#242820', '#ff8a35'],
  ['button text on orange hover', '#242820', '#ff9e56'],
  ['light headings on dark section', '#f7f5ef', '#252b24'],
  ['light body text on dark section', '#d0d4ca', '#252b24'],
  ['light accent on dark section', '#ffb17d', '#252b24'],
  ['CTA copy on peach panel', '#493e35', '#f0caa8'],
  ['CTA kicker on peach panel', '#783516', '#f0caa8'],
];
const ratio = (foreground, background) => {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
};
let minimum = Infinity;
for (const [name, foreground, background] of pairs) {
  const value = ratio(foreground, background);
  minimum = Math.min(minimum, value);
  console.log(`${name}: ${value.toFixed(2)}:1`);
  if (value < 4.5) throw new Error(`${name} fails WCAG AA normal-text contrast.`);
}
console.log(`Minimum checked source pair: ${minimum.toFixed(2)}:1. Image and rendered pixel contrast requires browser review.`);
