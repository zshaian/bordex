import { CSSStyles } from '../types/styles.type';
import { borderContainerElement } from '../utils/createbordercontainer';
import { COLOR_THEME } from '../utils/defaultstyle';

type ThinBorderSides =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'horizontal'
  | 'vertical';

interface IThinBorder {
  color?: string;
  side?: ThinBorderSides;
  outset?: string;
}

/**
 * Add a thin border to an element.
 * @param {HTMLElement} element - The element to add the thin border.
 * @param {IThinBorder} [borderOptions={}] - The border options (`color`, `side`, `outset`).
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @throws {Error} Will throw an error if the first argument is not an HTML element, or if one the borderSide is not valid.
 * @returns {HTMLDivElement} The container element wrapping the original element with the corner border applied.
 *
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // Add thin border to the element with default options
 * addFancytBorder(element);
 *
 * // Add a thin border to the element with a provided options
 * addFancyBorder(anotherElement, { color: 'yellow' , side: 'horizontal', outset: '5px' });
 */
function addThinBorder(
  element: HTMLElement,
  borderOptions: IThinBorder = {},
  className?: string,
): HTMLDivElement {
  const {
    color = COLOR_THEME.secondary, // use the secondary color cause it's more bright.
    side = 'left',
    outset = '0px',
  } = borderOptions;

  const validBorderSides = [
    'top',
    'right',
    'bottom',
    'left',
    'horizontal',
    'vertical',
  ];

  // validate the side property of borderOptions.
  if (!validBorderSides.includes(side)) {
    throw new Error(
      `Invalid side value: ${side}. Must be one of ${validBorderSides.join(', ')}`,
    );
  }

  const borderContainer = borderContainerElement(element, className);

  const isThinBorderOnSide = ['left', 'right', 'horizontal'].includes(side);
  const gradientAngle = isThinBorderOnSide ? 'to bottom' : 'to left';
  /*
   if the thin border is on the side we will apply the outset spacing in horizontal direction (space on left, right),
   otherwise we will apply the border outset space in the vertical direction (space on top, bottom).
  */
  const computedBorderOutset = `${isThinBorderOnSide ? `0 ${outset}` : `${outset} 0`}`;
  const borderImageSlice = getBorderImageSlice(side);

  const thinBorderStyle: CSSStyles = {
    borderImageSource: `linear-gradient(${gradientAngle},rgba(0,0,0,0) 1%, ${color} 50%, rgba(0,0,0,0) 99%)`,
    borderImageOutset: computedBorderOutset,
    borderImageWidth: '1.5px', // width of the border, maybe adjust it later if it's too thin.
    borderImageSlice,
  };

  Object.assign(borderContainer.style, thinBorderStyle);

  return borderContainer;
}

/**
 * This is going to return a value on where or what side to put the border.
 *
 * @param {ThinBorderSides} side - The side to put the border.
 * @returns {string} The `border-image-slice` CSS property value.
 */
// TODO: Allow the option to apply a thin border to all four sides of the element.
function getBorderImageSlice(side: ThinBorderSides): string {
  switch (side) {
    case 'left':
      return '0 0 0 100%';
    case 'right':
      return '0 100% 0 0';
    case 'top':
      return '100% 0 0 0';
    case 'bottom':
      return '0 0 100% 0';
    case 'horizontal':
      return '0 100% 0 100%';
    case 'vertical':
      return '100% 0 100% 0';
    default:
      return '0 0 0 100%'; // Fallback case (though it should not hit this due to validation)
  }
}

export { addThinBorder };
