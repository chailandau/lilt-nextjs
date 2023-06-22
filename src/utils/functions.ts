/**
 * Determine if provided image source URL is an SVG.
 *
 * @param {string} sourceUrl - The URL of the image to check.
 * @return {boolean} True if the URL ends with ".svg", false otherwise.
 */
export const isSvg = (sourceUrl: string): boolean => sourceUrl.endsWith('.svg');

