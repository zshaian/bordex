export function getStripeBorderString(
  colors: React.CSSProperties['color'][],
  stripeWidth: React.CSSProperties['width'],
): string {
  let previousColorStop = 0;
  const result = [];
  for (let i = 0; i < colors.length; i++) {
    const nextColorStop = parseInt(stripeWidth as string) * (i + 1);
    const currentColor = colors[i];
    result.push(
      `${currentColor} ${previousColorStop}%,${currentColor} ${nextColorStop}%`,
    );
    previousColorStop = nextColorStop;
  }
  return result.join(',');
}
