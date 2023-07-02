import { render, screen } from '@testing-library/react';

import { testAxeViolations, testMatchesSnapshot } from '../../testHelpers';
import LazyMotionDom from '../LazyMotionDom';

const LazyMotionHOC = () => (
    <LazyMotionDom>
        <div>Test</div>
    </LazyMotionDom>
);

describe('LazyMotionDom', () => {
    it('renders children inside LazyMotion component', () => {
        render(LazyMotionHOC());
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    testAxeViolations(<LazyMotionHOC />);
    testMatchesSnapshot(<LazyMotionHOC />);
});
