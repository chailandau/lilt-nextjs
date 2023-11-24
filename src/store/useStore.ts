import { create } from 'zustand';

import createCookieBannerSlice, {
    CookieBannerSlice
} from './createCookieBannerSlice';

import createMenuSlice, { MenuSlice } from '@/store/createMenuSlice';

type StoreState = MenuSlice & CookieBannerSlice;

const useStore = create<StoreState>()((...args) => ({
    ...createMenuSlice(...args),
    ...createCookieBannerSlice(...args)
}));

export default useStore;
