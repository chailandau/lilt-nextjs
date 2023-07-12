import { menuAnimations } from '../animations';

describe('menuAnimations', () => {
    it('should match the snapshot', () => {
        expect(menuAnimations).toMatchSnapshot();
    });
});
