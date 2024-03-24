/**
 * Replaces all occurrences of "%CURRENT_YEAR%" in the given string with the current year. If the string is empty, returns a default copyright text.
 *
 * @param str - The string to be modified.
 * @returns The modified string with all occurrences of "%CURRENT_YEAR%" replaced with the current year.
 */

const isLimg = process.env.NEXT_PUBLIC_THEME === 'green-theme';

export const getCopyrightText = (str?: string | null): string => {
    if (!str) {
        str = `Copyright © %CURRENT_YEAR% ${
            isLimg ? 'Long Island Mini Golf' : 'Long Island Laser Tag'
        }. All Rights Reserved.`;
    }
    const currentYear = new Date().getFullYear().toString();

    return str.replaceAll('%CURRENT_YEAR%', currentYear);
};
