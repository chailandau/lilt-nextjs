import { PAGE_CONTENT_QUERY } from '@/api/graphqlQueries';
import { Page_Meta } from '@/api/graphqlTypes';
import Page from '@/templates/Page';
import { getData } from '@/utils/getData';
import { getMetadataInfo } from '@/utils/getMetadataInfo';

export const generateMetadata = async () => {
    const { Pages } = await getData(PAGE_CONTENT_QUERY, 'home');
    const meta = Pages?.docs?.map((doc) => doc?.meta) as Page_Meta[];

    return getMetadataInfo(meta);
};

export default async function Home() {
    return <Page slug='home' />;
}
