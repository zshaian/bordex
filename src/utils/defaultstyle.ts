/**
 * The default color theme to use if no other value is provided.
 */
const COLOR_THEME = {
  primary: '#960096', // Main color (purple)
  secondary: '#BFFF00', // Accent color (lime green)
} as const;

const BORDER_SIZE = {
  sm: '5px',
  md: '10px',
  lg: '20px',
} as const;

export { COLOR_THEME, BORDER_SIZE };
