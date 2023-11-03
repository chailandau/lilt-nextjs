import { FC } from 'react';

import NotFound from '../404';
import LegalPage from '../LegalPage';

import {
    LEGAL_PAGE_CONTENT_QUERY,
    PAGE_CONTENT_QUERY
} from '@/api/graphqlQueries';
import { LegalPage_LegalBlocks, Page_PageSections } from '@/api/graphqlTypes';
import { getData } from '@/utils/getData';
import RenderSections from '@/utils/RenderSections';

interface PageProps {
    slug: string;
}

const Page: FC<PageProps> = async ({ slug }) => {
    const { Pages } = await getData(PAGE_CONTENT_QUERY, slug);
    const { LegalPages } = await getData(LEGAL_PAGE_CONTENT_QUERY, slug);

    const pagesSections = Pages?.docs?.flatMap(
        (doc) => doc?.pageSections?.flatMap((section) => section)
    ) as Page_PageSections[];

    const legalPageBlocks = LegalPages?.docs?.flatMap(
        (doc) => doc?.legalBlocks?.flatMap((block) => block)
    ) as LegalPage_LegalBlocks[];

    const legalPageTitle = LegalPages?.docs?.[0]?.title;

    const legalLastUpdated = LegalPages?.docs?.[0]?.updatedAt;

    if (
        (!pagesSections || !pagesSections.length) &&
        (!legalPageBlocks || !legalPageBlocks.length)
    ) {
        return <NotFound />;
    }

    return (
        <>
            {legalPageBlocks.length > 0 && (
                <LegalPage
                    title={legalPageTitle}
                    blocks={legalPageBlocks}
                    updatedAt={legalLastUpdated}
                />
            )}
            {pagesSections.length > 0 && (
                <RenderSections sections={pagesSections} />
            )}
        </>
    );
};

export default Page;
