import { getComputedStyleValue } from './getcomputedstylevalue';

/**
 * Copies the background styles from the source element to the target element.
 * Specifically, it copies the full `background` property.
 *
 * @param {HTMLElement} sourceElement - The element whose background properties will be copied.
 * @param {HTMLElement} targetElement - The element that will receive the background properties.
 * @returns {void} No return value.
 */
function copySourceBackground(
  sourceElement: HTMLElement,
  targetElement: HTMLElement,
): void {
  const sourceElementBg = getComputedStyleValue(
    sourceElement,
    'background',
  ) as string;

  targetElement.style.background = sourceElementBg;
}

export { copySourceBackground };
