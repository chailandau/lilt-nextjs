import { FC } from 'react';

import { CallToAction } from '@/api/graphqlTypes';
import ButtonMolecule, {
    ButtonMoleculeVariant
} from '@/molecules/ButtonMolecule/ButtonMolecule';
import { getLink } from '@/utils/getLink';

export interface ButtonProps {
    /** Optional classname */
    className?: string;
    /** Button object */
    buttonData: CallToAction | null;
    /** Optional `onClick` event */
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ buttonData, className, onClick }) => {
    const { linkType, color, label, externalLink, internalLink } =
        buttonData || {};

    const buttonLink = getLink({
        linkType,
        externalLink,
        internalLink
    });

    const buttonProps = {
        variant: color as ButtonMoleculeVariant,
        className
    };

    return (
        label && (
            <ButtonMolecule
                link={buttonLink}
                onClick={onClick}
                {...buttonProps}
            >
                {label}
            </ButtonMolecule>
        )
    );
};

export default Button;
