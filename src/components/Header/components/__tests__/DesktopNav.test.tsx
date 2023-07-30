import { render, screen } from '@testing-library/react';

import DesktopNav from '../DesktopNav';

import { menuItems } from '@/components/__mocks__/Header.mock';
import { testAxeViolations, testMatchesSnapshot } from '@/utils/testHelpers';

const DesktopNavEl = <DesktopNav menuItems={menuItems} />;

const desktopNavComponent = {
    component: DesktopNavEl
};

describe('DesktopNav', () => {
    it('renders correctly', () => {
        render(DesktopNavEl);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    testAxeViolations(desktopNavComponent);
    testMatchesSnapshot(desktopNavComponent);
});
