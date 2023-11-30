/**
 * Toggles the scroll behavior of the document body based on the provided condition.
 *
 * @param condition - A boolean value indicating whether to enable or disable scrolling.
 */
export const setNoScroll = (condition: boolean) => {
    if (document === undefined) {
        return;
    }
    if (condition) {
        document.documentElement.style.overflowY = 'hidden';
    } else {
        document.documentElement.style.overflowY = '';
    }
};
