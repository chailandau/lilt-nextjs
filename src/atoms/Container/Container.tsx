import { FC, ReactNode } from 'react';

export const semanticTags = ['button', 'div', 'footer', 'header', 'nav', 'section'] as const;

export interface ContainerProps {
    /** Section content */
    children?: ReactNode;
    /** Semantic tag */
    as?: typeof semanticTags[number];
    /** CSS class */
    className?: string | undefined;
    /** `onClick` event */
    onClick?: () => void;
}

const Container: FC<ContainerProps> = ({
    children,
    as: ContainerTag = 'div',
    className,
    onClick
}) => (
    <ContainerTag className={className} onClick={onClick}>
        {children}
    </ContainerTag>
);

export default Container;
