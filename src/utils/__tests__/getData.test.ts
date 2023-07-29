import { getData } from '../getData';

import { graphQLClient } from '@/api/graphqlClient';
import { HEADER_QUERY } from '@/api/graphqlQueries';

jest.mock('@/api/graphqlClient', () => ({
    graphQLClient: {
        request: jest.fn()
    }
}));

describe('getData', () => {
    it('calls graphQLClient.request with the correct arguments', async () => {
        await getData(HEADER_QUERY);
        expect(graphQLClient.request).toHaveBeenCalledWith(HEADER_QUERY);
        expect(graphQLClient.request).toMatchSnapshot();
    });
});
