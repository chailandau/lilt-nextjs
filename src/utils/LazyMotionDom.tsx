import { LazyMotion, domAnimation } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface LazyMotionDomProps {
    children: ReactNode;
}

const LazyMotionDom: FC<LazyMotionDomProps> = ({ children }) => (
    <LazyMotion features={domAnimation}>
        {children}
    </LazyMotion>
);

export default LazyMotionDom;
