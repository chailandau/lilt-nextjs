import { testAxeViolations, testMatchesSnapshot, testRenderChildren } from '../../testHelpers';
import LazyMotionDom from '../LazyMotionDom';

const LazyMotionHOC = () => (
    <LazyMotionDom>
        <div>Test</div>
    </LazyMotionDom>
);

describe('LazyMotionDom', () => {
    testRenderChildren(<LazyMotionHOC />);
    testAxeViolations(<LazyMotionHOC />);
    testMatchesSnapshot(<LazyMotionHOC />);
});
