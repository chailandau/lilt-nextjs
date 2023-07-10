export const INTERNAL_LINK_FRAGMENT = `
    id
    title
    slug
`;

export const MENU_ITEMS_FRAGMENT = `
    id
    label
    linkType
    internalLink {
        ${INTERNAL_LINK_FRAGMENT}
    }
    externalLink
`;

export const BUTTON_FRAGMENT = `
    id
    label
    linkType
    internalLink {
        ${INTERNAL_LINK_FRAGMENT}
    }
    externalLink
    color
`;
