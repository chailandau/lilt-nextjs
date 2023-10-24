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
base64
`;

export const VIDEO_FRAGMENT = `
id
url
placeholderImage {
    ${IMAGE_FRAGMENT}
}
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
        subheading
        content
        cta {
            type
            ctaButtons {
                id
                callToAction {
                    ${CTA_FRAGMENT}
                }
            }
            ctaTiles {
                id
                callToActionTile {
                    id
                    linkType
                    label
                    ${INTERNAL_LINK_FRAGMENT}
                    externalLink
                    icon {
                        ${IMAGE_FRAGMENT}
                    }
                }
            }
        }
    }
}
`;
export const ACCORDION_FRAGMENT = `
...on AccordionBlock {
    __typename
    id
    accordion {
        id 
        heading
        accordionItems {
            id
            heading
            content
        }
    }
}
`;

export const CONVERSION_PANEL_FRAGMENT = `
...on ConversionPanelBlock {
    id
    __typename
    conversionPanel {
        id
        heading
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
    __typename
    featureGrid {
        id 
        heading
        featureTiles {
            id
            heading
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
    __typename
    iconTileGrid {
        id
        heading
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
    __typename
    id
    switchback {
        id
        image {
            ${IMAGE_FRAGMENT}
        }
        imageSide
        heading
        content
    }
}
`;

const TEXT_GRID = `
 textGrid {
    id
    heading
    content
    textTiles {
        id
        text
    }
    callToAction {
        ${CTA_FRAGMENT}
    }
}
`;

export const TEXT_GRID_FRAGMENT = `
...on TextGridBlock {
    __typename
    id
    ${TEXT_GRID}
}
`;

export const TILE_GRID_FRAGMENT = `
...on TileGridBlock {
    id
    tileGrid {
        id
        heading 
        content
        tiles {
            id
            heading
            content
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;
export const FEATURED_MEDIA_FRAGMENT = `
...on FeaturedMediaBlock {
    id
    __typename
    featuredMedia {
        id
        heading 
        content
        assetType
        image {
            ${IMAGE_FRAGMENT}
        }
        video {
            ${VIDEO_FRAGMENT}
        }
        callToAction {
            ${CTA_FRAGMENT}
        }
    }
}
`;

export const SPECIALS_FRAGMENT = `
...on SpecialBlock {
    id
    __typename
    special {
      id
      heading
      subheading
      content
      sideBox
      ${TEXT_GRID}
    }
  }
`;
