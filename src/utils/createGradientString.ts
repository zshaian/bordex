/**
 * Generates a gradient string for the background property, creating a stripe effect
 * based on the provided colors and stripe width.
 *
 * @param {number} stripeWidth - The width of each color stripe in the gradient.
 * @param {string[]} colors - Array of colors to create alternating stripes.
 * @returns {string} A gradient string for use in CSS.
 */
function createGradientString(
  stripeWidth: number,
  colors: React.CSSProperties['color'][],
): string {
  let gradientString = '';
  for (let i = 0; i < colors.length; i++) {
    const position = stripeWidth * i;
    const nextPosition = stripeWidth * (i + 1);

    gradientString += `${colors[i]} ${position}px, ${colors[i]} ${nextPosition}px, `;
  }
  return gradientString.slice(0, -2);
}

export { createGradientString };
