import { FC } from 'react';

import NotFound from '../404';

import { PAGE_CONTENT_QUERY } from '@/api/graphqlQueries';
import { Page_PageSections } from '@/api/graphqlTypes';
import { getData } from '@/utils/getData';
import RenderComponents from '@/utils/RenderComponents';

interface PageProps {
    slug: string;
}

const Page: FC<PageProps> = async ({ slug }) => {
    const { Pages } = await getData(PAGE_CONTENT_QUERY, slug);

    const sections = Pages?.docs?.flatMap(
        (doc) => doc?.pageSections
    ) as Page_PageSections[];

    if (!sections || !sections.length) {
        return <NotFound />;
    }

    return <RenderComponents components={sections} />;
};

export default Page;
