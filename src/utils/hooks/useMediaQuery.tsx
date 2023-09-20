import { useEffect, useState } from 'react';

export type MediaQueryMatches = boolean | null;

/**
 * Hook returning a boolean indicating whether the current viewport matches the specified media query.
 *
 * @param mediaQueryString - Media query string to match against the viewport.
 * @return `true` if the browser window matches the media query, `false` otherwise. Returns `null` if no window detected.
 *  @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * @example useMediaQuery('screen and (min-width: 600px)');
 */
export const useMediaQuery = (mediaQueryString: string): MediaQueryMatches => {
    if (typeof window === 'undefined') {
        return null;
    }
    const [matches, setMatches] = useState<MediaQueryMatches>(null);

    const updateMatches = () => {
        setMatches(window.matchMedia(mediaQueryString).matches);
    };

    useEffect(() => {
        updateMatches();

        window.addEventListener('resize', updateMatches);

        return () => {
            window.removeEventListener('resize', updateMatches);
        };
    }, [mediaQueryString]);

    return matches;
};
export const laptopQuery = 'screen and (min-width: 992px)';
