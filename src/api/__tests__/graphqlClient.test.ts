import { config } from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import { graphQLClient } from '../graphqlClient';

jest.mock('graphql-request');

describe('graphQLClient', () => {
    beforeAll(() => {
        config({ path: '.env.test' });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('creates GraphQLClient with correct endpoint and headers', () => {
        expect(GraphQLClient).toHaveBeenCalledWith(
            process.env.NEXT_PUBLIC_PAYLOAD_SCHEMA,
            {
                headers: {
                    Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`
                }
            }
        );
        expect(graphQLClient).toBeInstanceOf(GraphQLClient);
    });
});
