import LazyMotionDom from '../LazyMotionDom';
import { testAxeViolations, testMatchesSnapshot, testRenderChildren } from '../testHelpers';

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
