export const menuAnimations = {
    closed: {
        y: '-100%',
        opacity: 0,
        height: 0,
        transition: {
            delay: 0.15,
            length: 1
        }
    },
    open: {
        y: 0,
        opacity: 1,
        height: '100vh',
        transition: {
            type: 'spring',
            duration: 0.4
        }
    }
};

export const dropdownAnimations = (isLaptop: boolean | null) => ({
    closed: {
        y: '15%',
        x: isLaptop ? 'calc(-50% - 6px)' : 0,
        opacity: 0,
        transition: {
            duration: 0.25
        }
    },
    open: {
        y: 0,
        x: isLaptop ? 'calc(-50% - 6px)' : 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.25
        }
    }
});

export const iconFlip = {
    closed: { rotate: 0, transition: { type: 'spring', duration: 0.25 } },
    open: {
        rotate: 180,
        transition: {
            type: 'spring',
            duration: 0.25
        }
    }
};
