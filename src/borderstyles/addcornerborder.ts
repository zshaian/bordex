import {
  IShorthandBorderOptions,
  CornerBorderOptions,
  CSSStyles,
} from '../types';
import {
  borderContainerElement,
  BORDER_SIZE,
  COLOR_THEME,
  capitalizeFirstLetter,
} from '../utils';

/**
 * Adds a corner border to an element.
 *
 * @param {HTMLElement} element - The element to which the corner border will be added.
 * @param {IShorthandBorderOptions} [borderOptions={}] - Options for the border, including width, color, and style.
 * @param {string} [className] - Optional class name to apply custom CSS styling to the container.
 * @returns {HTMLDivElement} The container element wrapping the original element with the corner border applied.
 */
function addCornerBorder(
  element: HTMLElement,
  borderOptions: IShorthandBorderOptions = {},
  className?: string,
): HTMLDivElement {
  const {
    borderWidth = BORDER_SIZE.sm,
    borderColor = COLOR_THEME.primary,
    borderStyle = 'solid',
  } = borderOptions;
  const cornerBorder = `${borderWidth} ${borderColor} ${borderStyle}`;

  const borderContainer = borderContainerElement(element, className);

  createAndAppendCornerBorder(borderContainer, cornerBorder); // appends all of the side border to the border container element.

  return borderContainer;
}

/**
 * Creates and appends corner borders to the specified border container.
 * This function generates corner border options for each corner and appends the corresponding
 * corner border elements to the container.
 *
 * @param {HTMLDivElement} borderContainer - The container to which the corner borders will be appended.
 * @param {string} cornerBorder - The border style string to apply to the corners.
 * @returns {void} - No return value.
 */
function createAndAppendCornerBorder(
  borderContainer: HTMLDivElement,
  cornerBorder: string,
): void {
  const cornerBlockPosition: CornerBorderOptions[] = [
    createCornerBorderOptions('top', 'left', cornerBorder),
    createCornerBorderOptions('top', 'right', cornerBorder),
    createCornerBorderOptions('bottom', 'left', cornerBorder),
    createCornerBorderOptions('bottom', 'right', cornerBorder),
  ];

  cornerBlockPosition.forEach(options =>
    borderContainer.append(createCornerBorder(options)),
  );
}

/**
 * Creates an options object for corner borders based on the specified vertical and horizontal positions.
 * This function returns an object that includes border styles and position properties for a specific corner.
 *
 * @param {'top' | 'bottom'} vertical - The vertical position of the corner (top or bottom).
 * @param {'left' | 'right'} horizontal - The horizontal position of the corner (left or right).
 * @param {string} borderStyle - The style of the border to apply to the corners.
 * @returns {CornerBorderOptions} - An object containing corner border options.
 */
function createCornerBorderOptions(
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'right',
  borderStyle: string,
): CornerBorderOptions {
  return {
    [vertical]: 0,
    [horizontal]: 0,
    [`border${capitalizeFirstLetter(vertical)}${capitalizeFirstLetter(horizontal)}Radius`]:
      'inherit',
    [`border${capitalizeFirstLetter(vertical)}`]: borderStyle,
    [`border${capitalizeFirstLetter(horizontal)}`]: borderStyle,
  };
}

/**
 * Creates a corner border element with the specified border options.
 * This function generates a div element styled as a corner border based on the provided options.
 *
 * @param {CornerBorderOptions} cornerBorderOptions - The options for styling the corner border.
 * @returns {HTMLDivElement} - The created corner border element.
 */
function createCornerBorder(
  cornerBorderOptions: CornerBorderOptions,
): HTMLDivElement {
  const cornerBorder = document.createElement('div');
  const borderBlockStyle: CSSStyles = {
    height: '40%',
    width: '20%',
    position: 'absolute',
    ...cornerBorderOptions,
  };
  Object.assign(cornerBorder.style, borderBlockStyle);
  return cornerBorder;
}

export { addCornerBorder };
