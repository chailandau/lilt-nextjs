import {
    CallToAction,
    CallToAction_LinkType,
    Header_MenuItems_LinkType
} from '@/api/graphqlTypes';

interface GetLink {
    linkType?: CallToAction_LinkType | Header_MenuItems_LinkType | null;
    externalLink?: CallToAction['externalLink'];
    internalLink?: CallToAction['internalLink'];
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
    const isExternal =
        linkType === 'external' &&
        !externalLink?.includes('longislandlasertag.com');

    const isHome = linkType === 'internal' && internalLink?.slug === 'home';

    if (isExternal && externalLink) {
        return `${externalLink}`;
    } else if (internalLink?.slug) {
        return isHome
            ? `${process.env.NEXT_PUBLIC_BASE_URL}`
            : `${process.env.NEXT_PUBLIC_BASE_URL}/${internalLink.slug}`;
    } else {
        return '';
    }
};
