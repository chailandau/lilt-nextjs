import { useEffect, useMemo, useState } from 'react';

/**
 * Check if viewport matches provided media query
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event
 *
 * Example:
 *
 *    useMediaQuery('(max-width: 600px)');
 *
 *    useMediaQuery('screen and (min-width: 600px)');
 */

export const useMediaQuery = (mediaQueryString: string): boolean => {
    if (typeof window !== 'undefined') {
        const query = useMemo(
            () => window.matchMedia(mediaQueryString),
            [mediaQueryString]
        );
        const [matches, setMatches] = useState(query.matches);
        useEffect(() => {
            const listener = (e: {
                matches: boolean | ((prevState: boolean) => boolean);
            }) => setMatches(e.matches);
            query.addEventListener('change', listener);

            return () => query.removeEventListener('change', listener);
        }, [query]);

        return matches;
    }

    return false;
};
