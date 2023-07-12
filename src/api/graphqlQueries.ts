import { gql } from 'graphql-request';

import { BUTTON_FRAGMENT, MENU_ITEMS_FRAGMENT } from './graphqlFragments';

export const PAGES_QUERY = gql`
    query PagesQuery {
        Pages {
            docs {
                id
                slug
                title
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
                    ${BUTTON_FRAGMENT}
            }
        }
    }
`;
