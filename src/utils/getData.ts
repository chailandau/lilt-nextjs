import { graphQLClient } from '@/api/graphqlClient';
import { Query } from '@/api/graphqlTypes';

/**
 * Retrieves data from the API using the provided GraphQL query.
 *
 * @param QUERY - The GraphQL query to be executed.
 * @param slug - (Optional) The slug to be used as a variable in the query.
 * @returns A promise that resolves to the data retrieved from the API.
 */
export const getData = async (QUERY: string, slug: string | null = null) => {
    try {
        const variables = slug !== null ? { slug } : {};

        return await graphQLClient.request<Query>(QUERY, variables);
    } catch (error) {
        console.error('GraphQL request error:', error);
        throw error;
    }
};
