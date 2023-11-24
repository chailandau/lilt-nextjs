import { ZuSlice } from 'declarations';

export interface CookieBannerSlice {
    showCookieBanner: boolean;
    setShowCookieBanner: (arg: CookieBannerSlice['showCookieBanner']) => void;
}

const createCookieBannerSlice: ZuSlice<CookieBannerSlice> = (
    set: (arg: () => Partial<CookieBannerSlice>) => void
) => ({
    showCookieBanner: false,
    setShowCookieBanner: (arg) => set(() => ({ showCookieBanner: arg }))
});

export default createCookieBannerSlice;
