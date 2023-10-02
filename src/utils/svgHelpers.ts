/**
 * Determine if provided image source URL is an SVG.
 *
 * @param sourceUrl - The URL of the image to check.
 * @returns True if the URL ends with ".svg", false otherwise.
 */
export const isSvg = (sourceUrl: string): boolean => sourceUrl.endsWith('.svg');

/**
 * Gets the placeholder value based on the presence of an SVG image.
 * If `svgImg` is `true`, returns `undefined`.
 * If `svgImg` is `false`, returns `'blur'`.
 *
 * @param svgImg - Indicates whether an SVG image is present.
 * @returns The placeholder value.
 */
export const getPlaceholder = (svgImg: boolean): undefined | 'blur' =>
    svgImg ? undefined : 'blur';
