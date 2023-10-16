import { FC, Fragment } from 'react';

import { Page_PageSections_Blocks } from '@/api/graphqlTypes';
import ConversionPanel from '@/components/ConversionPanel';
import Hero from '@/components/Hero';
import IconTileGrid from '@/components/IconTileGrid';
import Switchback from '@/components/Switchback';

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
                return <Hero key={component?.id} {...component?.hero} />;
            case 'SwitchbackBlock':
                return (
                    <Switchback
                        key={component?.id}
                        {...component?.switchback}
                    />
                );
            case 'ConversionPanelBlock':
                return (
                    <ConversionPanel
                        key={component?.id}
                        {...component?.conversionPanel}
                    />
                );
            case 'IconTileGridBlock':
                return (
                    <IconTileGrid
                        key={component?.id}
                        {...component?.iconTileGrid}
                    />
                );
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
