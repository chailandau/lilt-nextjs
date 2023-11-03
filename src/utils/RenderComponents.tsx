import { FC, Fragment } from 'react';

import {
    LegalPage_LegalBlocks,
    Page_PageSections_Blocks
} from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Accordion from '@/components/Accordion';
import ConversionPanel from '@/components/ConversionPanel';
import FeaturedMedia from '@/components/FeaturedMedia';
import FeatureGrid from '@/components/FeatureGrid';
import Hero from '@/components/Hero';
import IconTileGrid from '@/components/IconTileGrid';
import Process from '@/components/Process';
import Special from '@/components/Special';
import Switchback from '@/components/Switchback';
import TextContent from '@/components/TextContent';
import TextGrid from '@/components/TextGrid';
import TileGrid from '@/components/TileGrid';
import RichText from '@/molecules/RichText';

interface Sections {
    /** Sections to render */
    components?: Page_PageSections_Blocks[] | LegalPage_LegalBlocks[];
}
const RenderComponents: FC<Sections> = ({ components }) => {
    if (!components || !components.length) {
        return null;
    }
    const renderComponent = (
        component: Page_PageSections_Blocks | LegalPage_LegalBlocks
    ) => {
        switch (component?.__typename) {
            case 'AccordionBlock':
                return (
                    <Accordion key={component?.id} {...component?.accordion} />
                );
            case 'ConversionPanelBlock':
                return (
                    <ConversionPanel
                        key={component?.id}
                        {...component?.conversionPanel}
                    />
                );
            case 'FeaturedMediaBlock':
                return (
                    <FeaturedMedia
                        key={component?.id}
                        {...component?.featuredMedia}
                    />
                );
            case 'FeatureGridBlock':
                return (
                    <FeatureGrid
                        key={component?.id}
                        {...component?.featureGrid}
                    />
                );
            case 'HeadingBlock':
                return (
                    component?.heading && (
                        <Heading key={component?.id} size='xs' color='blue'>
                            {component?.heading}
                        </Heading>
                    )
                );
            case 'HeroBlock':
                return <Hero key={component?.id} {...component?.hero} />;
            case 'IconTileGridBlock':
                return (
                    <IconTileGrid
                        key={component?.id}
                        {...component?.iconTileGrid}
                    />
                );
            case 'ProcessBlock':
                return <Process key={component?.id} {...component?.process} />;
            case 'RichTextBlock':
                return (
                    <RichText
                        key={component?.id}
                        richText={component?.content}
                    />
                );
            case 'SpecialBlock':
                return <Special key={component?.id} {...component?.special} />;
            case 'SwitchbackBlock':
                return (
                    <Switchback
                        key={component?.id}
                        {...component?.switchback}
                    />
                );
            case 'TextContentBlock':
                return (
                    <TextContent
                        key={component?.id}
                        textContent={component?.textContent}
                    />
                );
            case 'TextGridBlock':
                return (
                    <TextGrid key={component?.id} {...component?.textGrid} />
                );
            case 'TileGridBlock':
                return (
                    component?.tileGrid && (
                        <TileGrid
                            key={component?.id}
                            {...component?.tileGrid}
                        />
                    )
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
