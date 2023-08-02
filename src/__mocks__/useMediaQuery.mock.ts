export const mockUseMediaQuery = (bool: boolean) => {
    jest.mock('@/utils/hooks/useMediaQuery', () => ({
        useMediaQuery: jest.fn(() => bool)
    }));
};
