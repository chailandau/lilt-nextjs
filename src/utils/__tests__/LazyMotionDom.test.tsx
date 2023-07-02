import { render } from '@testing-library/react';

import LazyMotionDom from '../framer/LazyMotionDom';
import { testAxeViolations, testMatchesSnapshot } from '../testHelpers';

const LazyMotionHOC = () => (
    <LazyMotionDom>
        <div>Test</div>
    </LazyMotionDom>
);

describe('LazyMotionDom', () => {
    it('renders children inside LazyMotion component', () => {
        const renderResult = render(LazyMotionHOC());
        expect(renderResult.getByText('Test')).toBeInTheDocument();
    });
    testAxeViolations(<LazyMotionHOC />);
    testMatchesSnapshot(<LazyMotionHOC />);
});
