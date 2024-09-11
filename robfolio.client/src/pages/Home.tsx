import styles from './Home.module.css';
import { useEffect, useState } from 'react';

const Home = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <h1>Heisann.</h1>
                <p className={styles.additionalText}>
                I'm Robin Brendsrød, a backend developer proficient in .NET, MySQL, API development, and data modeling.
                Additionally, I have hands-on experience with React/TypeScript/JavaScript, AWS and Docker</p>
            </div>
        </div>
    );
};

export default Home;