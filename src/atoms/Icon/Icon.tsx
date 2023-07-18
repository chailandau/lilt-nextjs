import classNames from 'classnames';

import type { iconIds } from './Icon.types';
import type { FC } from 'react';

import styles from './Icon.module.scss';
import { iconValues } from './Icon.types';

export const iconColors = ['blue', 'green', 'gray'] as const;

export const iconSizes = ['sm', 'md', 'lg'] as const;

export interface IconProps {
    id: iconIds;
    size?: (typeof iconSizes)[number];
    color?: (typeof iconColors)[number];
}

export const Icon: FC<IconProps> = ({ id, size = 'sm', color = 'gray' }) => {
    if (!iconValues.includes(id as (typeof iconValues)[number])) {
        return null;
    }

    const classList = classNames(styles[color], styles[size]);

    return (
        <svg className={classList}>
            <use href={`/icons/icon-sprites.svg#${id}`} />
        </svg>
    );
};

export default Icon;
