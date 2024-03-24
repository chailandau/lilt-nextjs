import { Page_Meta } from '@/api/graphqlTypes';

/**
 * Retrieves the metadata information from the given array of Page_Meta objects.
 *
 * @param meta - An array of Page_Meta objects containing the metadata information.
 * @returns - An object containing the title, description, and openGraph properties.
 */

const isLimg = process.env.NEXT_PUBLIC_THEME === 'green-theme';
const defaultTitle = isLimg ? 'Long Island Mini Golf' : 'Long Island Laser Tag';

export const getMetadataInfo = (meta: Page_Meta[]) => ({
    title: meta[0]?.title || defaultTitle,
    description: meta[0]?.description,
    openGraph: {
        title: meta[0]?.title || defaultTitle,
        description: meta[0]?.description,
        siteName: defaultTitle,
        images: [
            {
                url: meta[0]?.image?.url,
                width: meta[0]?.image?.width,
                height: meta[0]?.image?.height
            }
        ]
    }
});
