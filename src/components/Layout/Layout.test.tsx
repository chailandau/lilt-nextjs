import { testAxeViolations, testMatchesSnapshot, testRenderChildren } from '../../utils/testHelpers';

import Layout from './Layout';

const LayoutHOC = () => (
    <Layout>
        <div>Test</div>
    </Layout>
);

describe('Layout', () => {
    testRenderChildren(<LayoutHOC />);
    testAxeViolations(<LayoutHOC />);
    testMatchesSnapshot(<LayoutHOC />);
});
