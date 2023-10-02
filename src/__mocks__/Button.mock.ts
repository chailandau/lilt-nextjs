import { CallToAction } from '@/api/graphqlTypes';

export const buttonDataInternal = {
    label: 'Get in touch',
    linkType: 'internal',
    internalLink: {
        title: 'Events',
        slug: 'events'
    },
    color: 'blue'
} as CallToAction;

export const buttonDataExternal = {
    label: 'Get in touch',
    linkType: 'external',
    externalLink: 'https://www.google.com',
    color: 'blue'
} as CallToAction;

export const buttonDataNoLabel = {
    label: '',
    linkType: 'external',
    externalLink: 'https://www.google.com',
    color: 'blue'
} as CallToAction;

export const buttonDataNoLink = {
    label: 'Get in touch',
    linkType: 'external',
    externalLink: '',
    color: 'blue'
} as CallToAction;
