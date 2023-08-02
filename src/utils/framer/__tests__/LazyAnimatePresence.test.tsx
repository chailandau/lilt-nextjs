import { render, screen } from '@testing-library/react';

import LazyAnimatePresence from '../LazyAnimatePresence';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const LazyAnimatePresenceHOC = () => (
    <LazyAnimatePresence>
        <div>Test</div>
    </LazyAnimatePresence>
);

<LazyAnimatePresenceHOC />;

describe('LazyAnimatePresence', () => {
    it('renders children inside LazyAnimatePresence component', () => {
        render(LazyAnimatePresenceHOC());
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    testAxeAndSnapshot({ component: <LazyAnimatePresenceHOC /> });
});
