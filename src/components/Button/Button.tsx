import { FC } from 'react';

import { Button as ButtonType } from '@/api/graphqlTypes';
import ButtonMolecule, {
    ButtonMoleculeVariant
} from '@/molecules/ButtonMolecule/ButtonMolecule';

export interface ButtonProps {
    /** Optional classname */
    className?: string;
    /** Button object */
    buttonData: ButtonType | null;
}

const Button: FC<ButtonProps> = ({ buttonData, className }) => {
    const { linkType, color, label, externalLink, internalLink } =
        buttonData || {};

    const isExternal = linkType === 'external';

    const getLink = () => {
        if (isExternal && externalLink) {
            return `${externalLink}`;
        } else if (internalLink?.slug) {
            return `${process.env.NEXT_PUBLIC_BASE_URL}/${internalLink.slug}`;
        } else {
            return '';
        }
    };

    const buttonProps = {
        variant: color as ButtonMoleculeVariant,
        className
    };

    return (
        label && (
            <ButtonMolecule link={getLink()} {...buttonProps}>
                {label}
            </ButtonMolecule>
        )
    );
};

export default Button;
