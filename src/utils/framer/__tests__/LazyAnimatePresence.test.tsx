import { render, screen } from '@testing-library/react';

import { testAxeViolations, testMatchesSnapshot } from '../../testHelpers';
import LazyAnimatePresence from '../LazyAnimatePresence';

const LazyAnimatePresenceHOC = () => (
    <LazyAnimatePresence>
        <div>Test</div>
    </LazyAnimatePresence>
);

describe('LazyAnimatePresence', () => {
    it('renders children inside LazyAnimatePresence component', () => {
        render(LazyAnimatePresenceHOC());
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    testAxeViolations(<LazyAnimatePresenceHOC />);
    testMatchesSnapshot(<LazyAnimatePresenceHOC />);
});
