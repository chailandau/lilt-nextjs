import * as graphqlFragments from '../graphqlFragments';

describe('Fragments', () => {
    const fragments = {
        ...graphqlFragments
    };

    Object.entries(fragments).forEach(([name, fragment]) => {
        it(`"${name}" matches snapshot`, () => {
            expect(fragment).toMatchSnapshot(name);
        });
    });
});
