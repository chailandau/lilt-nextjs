import { FC, ReactNode, Ref, forwardRef } from 'react';

export const semanticTags = [
    'button',
    'div',
    'footer',
    'header',
    'nav',
    'section',
    'span',
    'li'
] as const;

export interface ContainerProps {
    /** Section content */
    children?: ReactNode;
    /** Semantic tag */
    as?: (typeof semanticTags)[number];
    /** CSS class */
    className?: string | undefined;
    /** CSS id */
    id?: string | undefined;
    /** `onClick` event */
    onClick?: () => void;
    /** `Forwarded ref */
    ref?: Ref<never>;
    /** Aria label */
    ariaLabel?: string;
}

const Container: FC<ContainerProps> = forwardRef(
    (
        {
            children,
            as: ContainerTag = 'div',
            className,
            id,
            onClick,
            ariaLabel
        },
        ref
    ) => (
        <ContainerTag
            className={className}
            id={id}
            onClick={onClick}
            aria-label={ariaLabel}
            ref={ref}
        >
            {children}
        </ContainerTag>
    )
);

export default Container;
