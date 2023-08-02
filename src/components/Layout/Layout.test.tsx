import {
    testAxeAndSnapshot,
    testRenderChildren
} from '../../utils/testHelpers';

import Layout from './Layout';

const LayoutHOC = () => (
    <Layout>
        <div>Test</div>
    </Layout>
);

const layoutComponent = {
    component: <LayoutHOC />
};

describe('Layout', () => {
    testRenderChildren(layoutComponent);
    testAxeAndSnapshot(layoutComponent);
});
