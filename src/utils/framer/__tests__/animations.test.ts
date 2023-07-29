import * as framerAnimations from '../animations';
import { dropdownAnimations } from '../animations';

describe('dropdownAnimations', () => {
    it('returns correct animation when laptop is true', () => {
        const isLaptop = true;
        const result = dropdownAnimations(isLaptop);
        expect(result).toMatchSnapshot();
    });
    it('returns correct animation when laptop is false', () => {
        const isLaptop = false;
        const result = dropdownAnimations(isLaptop);
        expect(result).toMatchSnapshot();
    });
});
describe('Framer animations', () => {
    Object.keys(framerAnimations).forEach((animationName) => {
        const animation =
            framerAnimations[animationName as keyof typeof framerAnimations];
        it(`${animationName} matches snapshot`, () => {
            expect(animation).toMatchSnapshot();
        });
    });
});
