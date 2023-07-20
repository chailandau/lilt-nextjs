import { FC, ReactNode, Ref } from 'react';

export const semanticTags = [
    'button',
    'div',
    'footer',
    'header',
    'nav',
    'section',
    'span'
] as const;

export interface ContainerProps {
    /** Section content */
    children?: ReactNode;
    /** Semantic tag */
    as?: (typeof semanticTags)[number];
    /** CSS class */
    className?: string | undefined;
    /** `onClick` event */
    onClick?: () => void;
    /** `ref */
    ref?: Ref<HTMLElement>;
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
