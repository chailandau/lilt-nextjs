import { act, fireEvent, renderHook } from '@testing-library/react';

import { useMediaQuery } from '../useMediaQuery';

const mediaQuery = () => useMediaQuery('screen and (min-width: 600px)');

const mockMatchMedia = (bool: boolean) => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
        matches: bool
    }));
};
const testMatchMediaQuery = (bool: boolean) => {
    mockMatchMedia(bool);
    const { result } = renderHook(() => mediaQuery());

    expect(result.current).toBe(bool);
};

describe('useMediaQuery with window', () => {
    const originalMatchMedia = window.matchMedia;

    afterEach(() => {
        window.matchMedia = originalMatchMedia;
    });

    it('returns true when media query matches', () => {
        testMatchMediaQuery(true);
    });

    it('returns false when media query does not match', () => {
        testMatchMediaQuery(false);
    });
    it('updates when window is resized', () => {
        mockMatchMedia(true);

        const { result } = renderHook(() => mediaQuery());

        expect(result.current).toBe(true);

        act(() => {
            mockMatchMedia(false);
            fireEvent(window, new Event('resize'));
        });

        expect(result.current).toBe(false);
    });
});

describe('useMediaQuery without window', () => {
    it('returns null if window is undefined', () => {
        const originalWindow = global.window;
        Object.defineProperty(global, 'window', {
            writable: true,
            value: undefined
        });

        const result = mediaQuery();

        expect(result).toBeNull();

        global.window = originalWindow;
    });
});
