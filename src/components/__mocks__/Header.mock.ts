import { Header_MenuItems } from '@/api/graphqlTypes';

export const menuItems = [
    {
        id: '64b5de126f8aff5a95a3e971',
        label: null,
        linkType: 'internal',
        internalLink: {
            id: '64a62599d9cb5a4115cd2325',
            title: 'Booking',
            slug: 'booking'
        },
        externalLink: null,
        submenuItems: []
    },
    {
        id: '64bde53c6fa52aae7dedab64',
        label: null,
        linkType: 'internal',
        internalLink: {
            id: '64a62394d9cb5a4115cd225d',
            title: 'Events',
            slug: 'events'
        },
        externalLink: null,
        submenuItems: []
    },
    {
        id: '64b5de2b6f8aff5a95a3e972',
        label: null,
        linkType: 'internal',
        internalLink: {
            id: '64a622a5d9cb5a4115cd224d',
            title: 'Schools & Camps',
            slug: 'schools-camps'
        },
        externalLink: null,
        submenuItems: []
    },
    {
        id: '64bde5496fa52aae7dedab65',
        label: 'About',
        linkType: 'submenu',
        internalLink: {
            id: '64a62399d9cb5a4115cd2265',
            title: 'About Us',
            slug: 'about-us'
        },
        externalLink: null,
        submenuItems: [
            {
                id: '64bde5576fa52aae7dedab66',
                label: null,
                linkType: 'internal',
                internalLink: {
                    id: '64a62399d9cb5a4115cd2265',
                    title: 'About Us',
                    slug: 'about-us'
                },
                externalLink: null
            },
            {
                id: '64bde55e6fa52aae7dedab67',
                label: null,
                linkType: 'internal',
                internalLink: {
                    id: '64a62383d9cb5a4115cd2255',
                    title: 'Our Tech',
                    slug: 'our-tech'
                },
                externalLink: null
            }
        ]
    }
] as Header_MenuItems[];
