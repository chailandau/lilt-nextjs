import { FC, ReactNode } from 'react';

export const semanticTags = ['button', 'div', 'footer', 'header', 'nav', 'section', 'span'] as const;

export interface ContainerProps {
    /** Section content */
    children?: ReactNode;
    /** Semantic tag */
    as?: typeof semanticTags[number];
    /** CSS class */
    className?: string | undefined;
}

const Container: FC<ContainerProps> = ({
    children,
    as: ContainerTag = 'div',
    className
}) => (
    <ContainerTag className={className}>
        {children}
    </ContainerTag>
);

export default Container;
