/**
 * Default color theme for the library.
 */
export const DEFAULT_COLOR_THEME = {
  primary: '#960096', // Main color (purple)
  secondary: '#BFFF00', // Accent color (lime green)
} as const;

/**
 * Default border sizes.
 */
export const DEFAULT_BORDER_SIZE = {
  sm: '5px',
  md: '10px',
  lg: '20px',
} as const;

/**
 * All Theme Defaults.
 */
export const THEME_DEFAULTS = {
  DEFAULT_BORDER_SIZE,
  DEFAULT_COLOR_THEME,
};
