import { graphQLClient } from '@/api/graphqlClient';
import { Query } from '@/api/graphqlTypes';

export const getData = (QUERY: string) => graphQLClient.request<Query>(QUERY);
