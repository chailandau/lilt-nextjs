import { AnimatePresence } from 'framer-motion';
import { FC, ReactNode } from 'react';

import LazyMotionDom from './LazyMotionDom';

interface LazyAnimatePresenceProps {
    children: ReactNode;
}

const LazyAnimatePresence: FC<LazyAnimatePresenceProps> = ({ children }) => (
    <LazyMotionDom>
        <AnimatePresence>{children}</AnimatePresence>
    </LazyMotionDom>
);

export default LazyAnimatePresence;
