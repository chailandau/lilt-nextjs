import { FC, ReactNode } from 'react';

export const semanticTags = ['div', 'footer', 'header', 'nav', 'section'] as const;

interface ContainerProps {
    /** Section content */
    children: ReactNode;
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
