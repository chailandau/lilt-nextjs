import parseUrl, { ParsedUrl } from '../parseUrl';

describe('parseUrl', () => {
    it('returns undefined for empty URL', () => {
        const result = parseUrl('');
        expect(result).toBeUndefined();
    });

    it('returns undefined for invalid URL', () => {
        const result = parseUrl('invalid-url');
        expect(result).toBeUndefined();
    });

    it('returns correct object for internal URL', () => {
        const originalDomain = process.env.NEXT_PUBLIC_DOMAIN;
        process.env.NEXT_PUBLIC_DOMAIN = 'internal.com';

        const internalUrl = 'https://www.internal.com/slug';
        const result = parseUrl(internalUrl);

        const expected: ParsedUrl = {
            isInternal: true,
            rel: '',
            target: '',
            href: '/slug'
        };

        expect(result).toEqual(expected);

        process.env.NEXT_PUBLIC_DOMAIN = originalDomain;
    });

    it('returns correct object for external URL', () => {
        const result = parseUrl('https://www.external.com');
        const expected: ParsedUrl = {
            isInternal: false,
            rel: 'noreferrer noopener',
            target: '_blank',
            href: 'https://www.external.com'
        };
        expect(result).toEqual(expected);
    });
});
