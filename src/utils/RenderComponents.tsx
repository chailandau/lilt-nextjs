import { FC, Fragment } from 'react';

import { Page_PageSections } from '@/api/graphqlTypes';

interface Sections {
    /** Sections to render */
    components?: Page_PageSections[];
}

const RenderComponents: FC<Sections> = ({ components }) => {
    if (!components || !components.length) {
        return null;
    }
    const renderComponent = (component: Page_PageSections) => {
        switch (component?.__typename) {
            case 'HeroBlock':
                return 'hero goes here';

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
