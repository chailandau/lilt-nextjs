import { useEffect, useMemo, useState } from 'react';

/**
 * Hook returning a boolean indicating whether the current viewport matches the specified media query.
 *
 * @param {string} mediaQueryString - The media query string to match against the viewport.
 * @return {boolean} True if the browser window matches the media query, false otherwise. Returns null if no window detected.
 *  @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * @example useMediaQuery('screen and (min-width: 600px)');
 */
export const useMediaQuery = (mediaQueryString: string): boolean | null => {
    if (typeof window !== 'undefined') {
        const query = useMemo(() => {
            try {
                return window.matchMedia(mediaQueryString);
            } catch (error) {
                console.error(
                    'Error occurred while creating media query:',
                    error
                );
            }
        }, [mediaQueryString]);

        if (!query) {
            return null;
        }

        const [matches, setMatches] = useState(query.matches);

        useEffect(() => {
            const listener = (e: { matches: boolean }) => setMatches(e.matches);
            try {
                query.addEventListener('change', listener);
            } catch (error) {
                console.error(
                    'Error occurred while adding event listener:',
                    error
                );
            }

            return () => {
                try {
                    query.removeEventListener('change', listener);
                } catch (error) {
                    console.error(
                        'Error occurred while removing event listener:',
                        error
                    );
                }
            };
        }, [query]);

        return matches;
    }

    return null;
};
