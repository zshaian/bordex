/**
 * check if the first argument pass is an HTML element. will throw an error if not.
 * @param {unknown} element - The value to check if it's an HTML element.
 * @throws {Error} Throws an error if the argument is not an HTML element.
 * @return {void} This function does not return a value; it either
 * throws an error or allows the progra to continue with the validated
 * HTMLElement type.
 * @example
 * const element = document.getElementById('element');
 * // going to check whethe an element is an HTML element. Throws an error if not.
 *try {
 *  validateHTMLElement(element);
 * }
 * catch(error){
 *  console.error(error);
 * }
 */
function validateHTMLElement(element: unknown): asserts element is HTMLElement {
  if (!(element instanceof HTMLElement)) {
    throw new Error(
      'Invalid argument type: This function only accepts an HTML element as its first argument.',
    );
  }
}

export { validateHTMLElement };
