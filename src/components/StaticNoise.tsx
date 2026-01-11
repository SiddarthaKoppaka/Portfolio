import { forwardRef } from 'react';
import styles from './StaticNoise.module.css';

interface StaticNoiseProps {
    currentChannel: number;
}

const StaticNoise = forwardRef<HTMLDivElement, StaticNoiseProps>(({ currentChannel }, ref) => {
    return (
        <div ref={ref} className={styles.staticContainer}>
            <div className={styles.noise}></div>
            <div className={styles.channelText}>CH 0{currentChannel + 1}</div>
        </div>
    );
});

export default StaticNoise;
