import { FC } from 'react';

import { Button as ButtonType } from '@/api/graphqlTypes';
import ButtonMolecule, {
    ButtonMoleculeVariant
} from '@/molecules/ButtonMolecule/ButtonMolecule';
import { getLink } from '@/utils/getLink';

export interface ButtonProps {
    /** Optional classname */
    className?: string;
    /** Button object */
    buttonData: ButtonType | null;
}

const Button: FC<ButtonProps> = ({ buttonData, className }) => {
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
            <ButtonMolecule link={buttonLink} {...buttonProps}>
                {label}
            </ButtonMolecule>
        )
    );
};

export default Button;
