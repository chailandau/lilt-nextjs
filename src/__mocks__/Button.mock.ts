import { Button } from '@/api/graphqlTypes';

export const buttonDataInternal = {
    label: 'Get in touch',
    linkType: 'internal',
    internalLink: {
        title: 'Events',
        slug: 'events'
    },
    color: 'blue'
} as Button;

export const buttonDataExternal = {
    label: 'Get in touch',
    linkType: 'external',
    externalLink: 'https://www.google.com',
    color: 'blue'
} as Button;

export const buttonDataNoLabel = {
    label: '',
    linkType: 'external',
    externalLink: 'https://www.google.com',
    color: 'blue'
} as Button;

export const buttonDataNoLink = {
    label: 'Get in touch',
    linkType: 'external',
    externalLink: '',
    color: 'blue'
} as Button;
