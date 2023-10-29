import { Page_Meta } from '@/api/graphqlTypes';

/**
 * Retrieves the metadata information from the given array of Page_Meta objects.
 *
 * @param meta - An array of Page_Meta objects containing the metadata information.
 * @returns - An object containing the title, description, and openGraph properties.
 */
export const getMetadataInfo = (meta: Page_Meta[]) => ({
    title: meta[0]?.title || 'Long Island Laser Tag',
    description: meta[0]?.description,
    openGraph: {
        title: meta[0]?.title || 'Long Island Laser Tag',
        description: meta[0]?.description,
        siteName: 'Long Island Laser Tag',
        images: [
            {
                url: meta[0]?.image?.url,
                width: meta[0]?.image?.width,
                height: meta[0]?.image?.height
            }
        ]
    }
});
