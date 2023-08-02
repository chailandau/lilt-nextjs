import { testAxeAndSnapshot, testRenderChildren } from '../../testHelpers';
import LazyMotionDom from '../LazyMotionDom';

const LazyMotionHOC = () => (
    <LazyMotionDom>
        <div>Test</div>
    </LazyMotionDom>
);

const lazyMotionComponent = {
    component: <LazyMotionHOC />
};

describe('LazyMotionDom', () => {
    testRenderChildren(lazyMotionComponent);
    testAxeAndSnapshot(lazyMotionComponent);
});
