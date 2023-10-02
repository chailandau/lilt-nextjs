import { FC, Fragment } from 'react';

import { Page_PageSections_Blocks } from '@/api/graphqlTypes';
import Hero from '@/components/Hero';

interface Sections {
    /** Sections to render */
    components?: Page_PageSections_Blocks[];
}

const RenderComponents: FC<Sections> = ({ components }) => {
    if (!components || !components.length) {
        return null;
    }
    const renderComponent = (component: Page_PageSections_Blocks) => {
        switch (component?.__typename) {
            case 'HeroBlock':
                return <Hero {...component?.hero} key={component?.id} />;

            default:
                return null;
        }
    };

    return (
        <>
            {components?.map((component) => (
                <Fragment key={component?.id}>
                    {renderComponent(component)}
                </Fragment>
            ))}
        </>
    );
};

export default RenderComponents;
