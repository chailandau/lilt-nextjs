import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

/**
 * Returns the scroll direction based on the user's scrolling behavior.
 *
 * @returns The scroll direction ('up' or 'down').
 */
export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] =
        useState<ScrollDirection>('down');

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    return scrollDirection;
};
