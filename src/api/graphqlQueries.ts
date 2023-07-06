import { gql } from 'graphql-request';

export const PAGES_QUERY = gql`{
    Pages {
        docs {
            id
            slug
            title
        }
    }
}
`;

