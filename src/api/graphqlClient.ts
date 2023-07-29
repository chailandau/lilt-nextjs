import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_PAYLOAD_SCHEMA as string;

export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`
    }
});
