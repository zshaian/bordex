interface IColorTheme {
  primary: string;
  secondary: string;
}

const colorTheme: IColorTheme = {
  primary: '#960096',
  secondary: '#BFFF00',
} as const;

export { colorTheme };
