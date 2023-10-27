import { getPlaceholder, isSvg } from '../functions';

describe('isSvg', () => {
    test.each([
        [true, 'https://example.com/image.svg'],
        [false, 'https://example.com/image.png']
    ])('returns %s for source URL %s', (expectedIsSvg, sourceUrl) => {
        expect(isSvg(sourceUrl)).toBe(expectedIsSvg);
    });
});

describe('getPlaceholder', () => {
    test.each([
        [undefined, true],
        ['blur', false]
    ])("returns '%s' when svgImg is %s", (expectedPlaceholder, svgImg) => {
        expect(getPlaceholder(svgImg)).toBe(expectedPlaceholder);
    });
});
