/**
 * Inserts a new element immediately after the target element.
 * @param {HTMLElement} element - The target element to insert the new element after.
 * @param {HTMLElement} newElement - The new element to insert after the target element.
 * @returns {void} No return value.
 * @example
 * const element = document.getElementById('element');
 * const newElement = document.createElement('div');
 *
 * // Insert the new element after the target element
 * insertAfterElement(element, newElement);
 */
function insertAfterElement(
  element: HTMLElement,
  newElement: HTMLElement,
): void {
  const elementParent = element.parentElement;

  if (elementParent) {
    const elementNextSibling = element.nextSibling;

    if (elementNextSibling) {
      elementParent.insertBefore(newElement, elementNextSibling);
    } else {
      elementParent.append(newElement);
    }
  } else {
    throw new Error('Target element does not have a parent.');
  }
}

export { insertAfterElement };
