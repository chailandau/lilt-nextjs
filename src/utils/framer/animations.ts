export const menuAnimations = {
    closed: {
        y: '-100%',
        opacity: 0,
        transition: {
            delay: 0.15,
            length: 1
        }
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.4
        }
    }
};
