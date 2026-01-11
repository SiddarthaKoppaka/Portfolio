import styles from './CRTOverlay.module.css';

const CRTOverlay = () => {
    return (
        <div className={styles.overlayContainer}>
            <div className={styles.scanlines}></div>
            <div className={styles.vignette}></div>
            <div className={styles.scanlineRolling}></div>
            <div className={styles.flicker}></div>
        </div>
    );
};

export default CRTOverlay;
