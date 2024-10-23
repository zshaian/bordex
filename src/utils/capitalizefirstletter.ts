/**
 * Capitalizes the first letter of the given string.
 * @param {string} str - The string to capitalize the first letter of.
 * @returns {string} A new string with the first letter capitalized.
 */
function capitalizeFirstLetter(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export { capitalizeFirstLetter };
