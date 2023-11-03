import { gql } from 'graphql-request';

import {
    ACCORDION_FRAGMENT,
    CONVERSION_PANEL_FRAGMENT,
    CTA_FRAGMENT,
    FEATURED_MEDIA_FRAGMENT,
    FEATURE_GRID_FRAGMENT,
    HEADING_FRAGMENT,
    HERO_FRAGMENT,
    ICON_TILE__GRID_FRAGMENT,
    IMAGE_FRAGMENT,
    MENU_ITEMS_FRAGMENT,
    META_FRAGMENT,
    PROCESS_FRAGMENT,
    RICH_TEXT_FRAGMENT,
    SLUG_FRAGMENT,
    SPECIALS_FRAGMENT,
    SWITCHBACK_FRAGMENT,
    TEXT_GRID_FRAGMENT,
    TILE_GRID_FRAGMENT
} from './graphqlFragments';

export const PAGES_QUERY = gql`
query PagesQuery {
    Pages {
        ${SLUG_FRAGMENT}
    }
}
`;

export const LEGAL_PAGES_QUERY = gql`
query PagesQuery {
    LegalPages {
        ${SLUG_FRAGMENT}
    }
}
`;

export const PAGE_CONTENT_QUERY = gql`
query PageContentQuery($slug: String!) {
    Pages(where:{ slug: { equals: $slug }}) {
        docs {
            id
            slug
            title
            ${META_FRAGMENT}
            pageSections {
                enableGrid
                gridColor
                enableShapes
                shapes {
                    id
                    shape
                    location
                }
                blocks {
                    ${HERO_FRAGMENT}
                    ${ACCORDION_FRAGMENT}
                    ${CONVERSION_PANEL_FRAGMENT}
                    ${FEATURE_GRID_FRAGMENT}
                    ${FEATURED_MEDIA_FRAGMENT}
                    ${ICON_TILE__GRID_FRAGMENT}
                    ${PROCESS_FRAGMENT}
                    ${SPECIALS_FRAGMENT}
                    ${SWITCHBACK_FRAGMENT}
                    ${TEXT_GRID_FRAGMENT}
                    ${TILE_GRID_FRAGMENT}
                }
            }
            
        }
    }
}
`;

export const LEGAL_PAGE_CONTENT_QUERY = gql`
query LegalPageContentQuery($slug: String!) {
    LegalPages(where:{ slug: { equals: $slug }}) {
        docs {
            id
            title
            slug
            updatedAt
            legalBlocks {
                ${HEADING_FRAGMENT}
                ${RICH_TEXT_FRAGMENT}
            }
        }
    }
}
`;

export const HEADER_QUERY = gql`
query HeaderQuery  {
    Header {
        menuItems {
            ${MENU_ITEMS_FRAGMENT}
            submenuItems {
                ${MENU_ITEMS_FRAGMENT}
            }
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;

export const FOOTER_QUERY = gql`
query FooterQuery {
    Footer {
        socialLinks {
            icon {
                ${IMAGE_FRAGMENT}
            }
            url
            id
        }
        menuItems {
            ${MENU_ITEMS_FRAGMENT}
        }
        copyrightText
    }
}
`;
