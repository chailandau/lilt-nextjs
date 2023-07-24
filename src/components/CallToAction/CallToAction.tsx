import { FC } from 'react';

import { Button as ButtonType } from '@/api/graphqlTypes';
import Button, { ButtonVariant } from '@/molecules/Button/Button';

export interface CtaProps {
    /** Optional classname */
    className?: string;
    /** CTA object */
    cta: ButtonType | null;
}

const CallToAction: FC<CtaProps> = ({ cta, className }) => {
    const { linkType, color, label, externalLink, internalLink } = cta || {};

    const isExternal = linkType === 'external';

    const buttonProps = {
        variant: color as ButtonVariant,
        className
    };

    return label && isExternal
        ? externalLink && (
              <Button link={externalLink} {...buttonProps}>
                  {label}
              </Button>
          )
        : internalLink?.slug && (
              <Button
                  link={`${process.env.NEXT_PUBLIC_BASE_URL}/${internalLink.slug}`}
                  {...buttonProps}
              >
                  {label}
              </Button>
          );
};

export default CallToAction;
