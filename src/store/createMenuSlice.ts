import { ZuSlice } from 'declarations';

export interface MenuSlice {
    menuOpen: boolean;
    setMenuOpen: (arg: boolean) => void;
}

const createMenuSlice: ZuSlice<MenuSlice> = (
    set: (arg: () => { menuOpen: boolean }) => void
) => ({
    menuOpen: false,
    setMenuOpen: (arg: boolean) => set(() => ({ menuOpen: arg }))
});

export default createMenuSlice;
