interface ISolidBorderElementStyle {
  borderStyle: string;
  borderWidth: string;
  borderColor: string;
}

type SolidBorderElementOptions = Pick<
  ISolidBorderElementStyle,
  'borderWidth' | 'borderColor'
>;

function createSolidBorder(
  element: HTMLElement,
  borderOptions?: SolidBorderElementOptions,
): void {
  const solidBorderElementStyle: ISolidBorderElementStyle = {
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'rgb(0,0,0)',
    ...borderOptions,
  };
  Object.assign(element.style, solidBorderElementStyle);
  return;
}

const element = document.getElementById('element') as HTMLElement;
createSolidBorder(element);
