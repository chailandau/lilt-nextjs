import { render, screen } from '@testing-library/react';

import DesktopNav from '../DesktopNav';

import { menuItems } from '@/__mocks__/Header.mock';
import { testAxeAndSnapshot } from '@/utils/testHelpers';

const DesktopNavEl = <DesktopNav menuItems={menuItems} />;

describe('DesktopNav', () => {
    it('renders correctly', () => {
        render(DesktopNavEl);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    testAxeAndSnapshot({ component: DesktopNavEl });
});
