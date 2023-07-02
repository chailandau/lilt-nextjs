import { ZuSlice } from 'declarations';

export interface MenuSlice {
    menuOpen: boolean;
    setMenuOpen: (arg: boolean) => void;
}

const createMenuSlice: ZuSlice<MenuSlice> = (set) => ({
    menuOpen: false,
    setMenuOpen: (arg) => set(() => ({ menuOpen: arg })),
});

export default createMenuSlice;
