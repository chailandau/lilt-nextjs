import { composeStory } from '@storybook/react';
import { render } from '@testing-library/react';

import { MotionIcon, iconColors, iconSizes } from './Icon';
import Meta, { Default, Large, Medium } from './storybook/Icon.stories';

import {
    testAxeViolations,
    testMatchesSnapshot,
    testPropOptions
} from '@/utils/testHelpers';

const getIconInfo = (Variant: typeof Default) => ({
    variant: composeStory(Variant, Meta),
    size: Variant.args?.size as string
});

const iconVariants = [
    getIconInfo(Default),
    getIconInfo(Medium),
    getIconInfo(Large)
];

describe('Icon', () => {
    const Icon = composeStory(Default, Meta);
    testPropOptions({
        component: <Icon />,
        propName: 'size',
        propOptions: iconSizes,
        htmlTag: 'svg'
    });
});

iconVariants.forEach(({ variant: Icon, size }) => {
    const iconComponent = {
        component: <Icon />
    };
    describe(size, () => {
        it("doesn't render if `id` is not valid", () => {
            const { container } = render(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <Icon id='test' color={undefined} size={undefined} />
            );
            const svg = container.querySelector('svg');
            expect(svg).toBeNull();
        });
        test('renders MotionIcon component', () => {
            const { container } = render(<MotionIcon id='caret' />);
            const svg = container.querySelector('svg');
            expect(svg).toBeDefined();
        });
        testPropOptions({
            ...iconComponent,
            propName: 'color',
            propOptions: iconColors,
            htmlTag: 'svg'
        });
        testAxeViolations(iconComponent);
        testMatchesSnapshot(iconComponent);
    });
});
