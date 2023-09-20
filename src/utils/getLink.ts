import {
    Button,
    Button_LinkType,
    Header_MenuItems_LinkType
} from '@/api/graphqlTypes';

interface GetLink {
    linkType?: Button_LinkType | Header_MenuItems_LinkType | null;
    externalLink?: Button['externalLink'];
    internalLink?: Button['internalLink'];
}

/**
 * Returns appropriate link based on specified link type.
 *
 * @param linkType - Type of link to return.
 * @param externalLink - External link (if it exists).
 * @param internalLink - Internal link object (if it exists).
 * @return Appropriate link based on link type. Returns empty string if no link is found.
 */
export const getLink = ({ linkType, externalLink, internalLink }: GetLink) => {
    const isExternal = linkType === 'external';

    if (isExternal && externalLink) {
        return `${externalLink}`;
    } else if (internalLink?.slug) {
        return `${process.env.NEXT_PUBLIC_BASE_URL}/${internalLink.slug}`;
    } else {
        return '';
    }
};
