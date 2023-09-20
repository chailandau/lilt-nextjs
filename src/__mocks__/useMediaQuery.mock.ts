export const mockIsLaptop = (bool: boolean) => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
        matches: bool,
        media: 'screen and (min-width: 992px)',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }));
    window.dispatchEvent(new Event('resize'));
};
