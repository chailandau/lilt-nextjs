import { PAGES_QUERY } from '@/api/graphqlQueries';
import Page from '@/templates/Page';
import { getData } from '@/utils/getData';

interface Params {
    params: {
        slug: string;
    };
}

export const revalidate = 1;
export const generateStaticParams = async () => {
    const { Pages } = await getData(PAGES_QUERY);

    if (!Pages?.docs || Pages.docs.length === 0) {
        return [];
    }

    return Pages.docs
        .filter((doc) => typeof doc?.slug === 'string')
        .map((doc) => ({
            params: {
                slug: doc?.slug
            }
        }));
};

const NextPage = async ({ params: { slug } }: Params) => <Page slug={slug} />;

export default NextPage;
