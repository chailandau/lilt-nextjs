import classNames from 'classnames';
import { m } from 'framer-motion';
import React, { type FC, Ref, forwardRef } from 'react';

import type { iconIds } from './Icon.types';

import styles from './Icon.module.scss';
import { iconValues } from './Icon.types';

export const iconColors = ['blue', 'green', 'gray'] as const;

export const iconSizes = ['sm', 'md', 'lg'] as const;

export interface IconProps {
    /** Icon id */
    id: iconIds;
    /** Icon size */
    size?: (typeof iconSizes)[number];
    /** Icon fill color */
    color?: (typeof iconColors)[number];
    /** Forwarded ref (optional) */
    ref?: Ref<SVGSVGElement>;
}

const Icon: FC<IconProps> = forwardRef(
    ({ id, size = 'sm', color = 'gray' }, ref) => {
        if (!iconValues.includes(id)) {
            return null;
        }
        const classList = classNames(styles[color], styles[size]);

        return (
            <svg className={classList} ref={ref}>
                <use href={`/icons/icon-sprites.svg#${id}`} />
            </svg>
        );
    }
);

export default Icon;

export const MotionIcon = m(Icon);
