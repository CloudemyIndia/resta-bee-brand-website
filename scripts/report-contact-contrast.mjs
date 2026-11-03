const luminance = (hex) => {
  const rgb = hex.slice(1).match(/../g).map(channel => parseInt(channel, 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};
const ratio = (foreground, background) => {
  const a = luminance(foreground), b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
};
const pairs = [
  ['body text on paper', '#252a24', '#faf9f5'],
  ['secondary text on paper', '#51574e', '#faf9f5'],
  ['kicker and links on paper', '#963b18', '#faf9f5'],
  ['secondary text on dark section', '#d0d4ca', '#252b24'],
  ['kicker on dark section', '#ffb17d', '#252b24'],
  ['company text on sage section', '#42493f', '#e8ecdf'],
  ['contact link on card', '#81320f', '#f5f6f0'],
  ['CTA text on peach section', '#493e35', '#f0caa8'],
  ['button text on orange', '#242820', '#ff8a35'],
];
let minimum = Infinity;
for (const [label, foreground, background] of pairs) {
  const value = ratio(foreground, background);
  minimum = Math.min(minimum, value);
  console.log(`${label}: ${value.toFixed(2)}:1`);
  if (value < 4.5) process.exitCode = 1;
}
console.log(`Selected text contrast minimum: ${minimum.toFixed(2)}:1 (WCAG AA normal-text threshold: 4.5:1).`);
