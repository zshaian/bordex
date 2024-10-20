/**
 * @param {HTMLElement} element - The element to get the property style value.
 * @param {string} propertyName - Any valid CSS Property name.
 * @returns {string | null} The property value of the passed `propertyName` argument or null if it doesn't exist or don't have a value
 */
function getComputedStyleValue(
  element: HTMLElement,
  propertyName: string,
): string | null {
  const elementPropertyStyleValue = window
    .getComputedStyle(element)
    .getPropertyValue(propertyName);

  return elementPropertyStyleValue || null;
}

export { getComputedStyleValue };
