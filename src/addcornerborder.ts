import {
  IShorthandBorder,
  IShorthandBorderOptions,
  IPositions,
} from './types/borderstyle';
import { borderContainerElement } from './utils/createbordercontainer';
import { BORDER_SIZE, COLOR_THEME } from './utils/defaultstyle';
import { insertAfterElement } from './utils/insertafterelement';
import { capitalizeFirstLetter } from './utils/capitalizefirstletter';

interface IBorderRadius {
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
}

type ICornerBorderOptions = IShorthandBorder & IPositions & IBorderRadius;

// TODO: document this function
function addCornerBorder(
  element: HTMLElement,
  borderOptions: IShorthandBorderOptions = {},
): void {
  const {
    borderWidth = BORDER_SIZE.sm,
    borderColor = COLOR_THEME.primary,
    borderStyle = 'solid',
  } = borderOptions;
  const cornerBorder = `${borderWidth} ${borderColor} ${borderStyle}`;

  const borderContainer = borderContainerElement(element);

  insertAfterElement(element, borderContainer);
  createAndAppendCornerBorder(borderContainer, cornerBorder); // appends all of the side border to the border container element.
  borderContainer.append(element);
}

// TODO: document this function
function createAndAppendCornerBorder(
  borderContainer: HTMLDivElement,
  cornerBorder: string,
): void {
  const cornerBlockPosition: ICornerBorderOptions[] = [
    createCornerBorderOptions('top', 'left', cornerBorder),
    createCornerBorderOptions('top', 'right', cornerBorder),
    createCornerBorderOptions('bottom', 'left', cornerBorder),
    createCornerBorderOptions('bottom', 'right', cornerBorder),
  ];

  cornerBlockPosition.forEach(options =>
    borderContainer.append(createCornerBorder(options)),
  );
}

// TODO: document this function
function createCornerBorderOptions(
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'right',
  borderStyle: string,
): ICornerBorderOptions {
  return {
    [vertical]: 0,
    [horizontal]: 0,
    [`border${capitalizeFirstLetter(vertical)}${capitalizeFirstLetter(horizontal)}Radius`]:
      'inherit',
    [`border${capitalizeFirstLetter(vertical)}`]: borderStyle,
    [`border${capitalizeFirstLetter(horizontal)}`]: borderStyle,
  };
}

// TODO: document this function
function createCornerBorder(
  cornerBorderOptions: ICornerBorderOptions,
): HTMLDivElement {
  const cornerBorder = document.createElement('div');
  const borderBlockStyle = {
    height: '40%',
    width: '20%',
    position: 'absolute',
    ...cornerBorderOptions,
  };
  Object.assign(cornerBorder.style, borderBlockStyle);
  return cornerBorder;
}

export { addCornerBorder };
