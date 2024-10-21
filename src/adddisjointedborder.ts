import { colorTheme } from './utils/defaultstyle';
import { borderContainerElement } from './utils/createbordercontainer';
import { validateHTMLElement } from './utils/validatehtmlelement';
import { insertAfterElement } from './utils/insertafterelement';

interface IDisjointedBorderOptions {
  angle?: string;
  borderColor?: string;
}

/**
 * add a disjointed borde to an element
 * @param {HTMLElement} element - The element to add a border.
 * @param {IDisjointedBorderOptions} [borderOptions = {}] - The border options (`angle`, `borderColor`)
 * @throws {Error} Will throw an error if the first argument is not an HTML element.
 * @return void
 * @example
 * const element = document.getElementById('element');
 * const anotherElement = document.getElementById('anotherElement');
 *
 * // add a disjointed border to an element with a default options
 * addDisjointedBorder(element);
 *
 * // add a disjointed border to an element with a 90deg angle and a color of orange
 * addDisjointedBorder(element,{angle: '90deg', borderColor: 'orange'});
 */
function addDisjointedBorder(
  element: HTMLElement,
  borderOptions: IDisjointedBorderOptions = {},
): void {
  validateHTMLElement(element);
  const borderContainer = borderContainerElement(element);

  // append the the disjointedBorder element that's going to act as a bordrer to the borderContainer element
  insertAfterElement(element, borderContainer);
  borderContainer.append(element, disjointedBorder(borderOptions));
}

function disjointedBorder(
  borderOptions: IDisjointedBorderOptions,
): HTMLDivElement {
  const borderOffset = '0.3rem';
  const { angle = '45deg', borderColor = colorTheme.primary } = borderOptions;
  const borderElement = document.createElement('div');
  const borderElementDesign = {
    height: `calc(100% + ${borderOffset})`,
    width: `calc(100% + ${borderOffset})`,
    background: `linear-gradient(${angle},#00000000 1%,${borderColor} 50%,#00000000 99%)`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: 'inherit',
    zIndex: '-1',
  };
  Object.assign(borderElement.style, borderElementDesign);
  return borderElement;
}

export { addDisjointedBorder };
