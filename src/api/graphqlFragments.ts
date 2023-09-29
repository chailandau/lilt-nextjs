export const INTERNAL_LINK_FRAGMENT = `
internalLink {
    id
    title
    slug
}
`;

export const IMAGE_FRAGMENT = `
id
alt
url
width
height
`;

export const MENU_ITEMS_FRAGMENT = `
id
label
linkType
${INTERNAL_LINK_FRAGMENT}
externalLink
`;

export const CTA_FRAGMENT = `
id
label
linkType
${INTERNAL_LINK_FRAGMENT}
externalLink
color
`;

export const HERO_FRAGMENT = `
...on HeroBlock {
    __typename
    id
    hero {
        id
        heading
        headingTag
        subheading
        content
        cta {
            ctaTiles {
                id
                callToActionTile {
                    id
                    linkType
                    ${INTERNAL_LINK_FRAGMENT}
                    externalLink
                }
                ctaButtons {
                    id
                    callToAction {
                        ${CTA_FRAGMENT}
                    }
                }
            }
        }
    }
}
`;
export const ACCORDION_FRAGMENT = `
...on AccordionBlock {
    id
    accordion {
        id 
        heading
        headingTag
        accordionItems {
            id
            heading
            headingTag
            content
        }
    }
}
`;

export const CONVERSION_PANEL_FRAGMENT = `
...on ConversionPanelBlock {
    id
    blockName
    blockType
    conversionPanel {
        id
        heading
        headingTag
        content
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;

export const FEATURE_GRID_FRAGMENT = `
...on FeatureGridBlock {
    id
    featureGrid {
        id 
        heading
        headingTag
        featureTiles {
            id
            heading
            headingTag
            image {
                ${IMAGE_FRAGMENT}
            }
            content
        }
    }
}
`;
export const ICON_TILE__GRID_FRAGMENT = `
...on IconTileGridBlock {
    id
    iconTileGrid {
        id
        heading
        headingTag
        content
        iconTiles {
            id
            label
            icon {
                ${IMAGE_FRAGMENT}
            }
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;

export const PROCESS_FRAGMENT = `
...on ProcessBlock {
    id
    process {
        id
        steps {
            id
            heading
            headingTag
            content
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;

export const SWITCHBACK_FRAGMENT = `
...on SwitchbackBlock {
    id
    switchback {
        id
        image {
            ${IMAGE_FRAGMENT}
        }
        imageSide
        heading
        headingTag
        content
    }
}
`;

export const TEXT_GRID_FRAGMENT = `
...on TextGridBlock {
    id
    textGrid {
        id
        heading
        headingTag
        content
        textTiles {
            id
            text
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;

export const TILE_GRID_FRAGMENT = `
...on TileGridBlock {
    id
    tileGrid {
        id
        heading 
        headingTag
        content
        tiles {
            id
            heading
            headingTag
            content
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;
