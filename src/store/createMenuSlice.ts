import { ZuSlice } from 'declarations';

import { Header_MenuItems } from '@/api/graphqlTypes';

export interface MenuSlice {
    menuOpen: boolean;
    setMenuOpen: (arg: MenuSlice['menuOpen']) => void;
    openSubmenu: Header_MenuItems['id'];
    setOpenSubmenu: (arg: MenuSlice['openSubmenu']) => void;
}

const createMenuSlice: ZuSlice<MenuSlice> = (
    set: (arg: () => Partial<MenuSlice>) => void
) => ({
    menuOpen: false,
    setMenuOpen: (arg) => set(() => ({ menuOpen: arg })),
    openSubmenu: null,
    setOpenSubmenu: (arg) => set(() => ({ openSubmenu: arg }))
});

export default createMenuSlice;
