/**
 * Formats a given timestamp into a string representation of the date.
 *
 * @param timestamp - The timestamp to be formatted.
 * @returns The formatted date string.
 */
export const formatDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
};
