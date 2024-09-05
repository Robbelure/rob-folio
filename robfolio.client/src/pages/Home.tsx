import styles from './Home.module.css';
import { useEffect, useState } from 'react';

const Home = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className={`${styles.contentWrapper} ${visible ? styles.visible : ''}`}>
            <div className={styles.textWrapper}>
                <h1>Robin Brendsrød</h1>
                <p className={styles.additionalText}>Explore my digital playground</p>
            </div>
            <div className={styles.imageWrapper}></div>
        </div>
    );
};

export default Home;