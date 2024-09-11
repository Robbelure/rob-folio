import styles from './Projects.module.css';
import { useEffect, useState } from 'react';

const Projects = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className={`${styles.contentWrapper} ${visible ? styles.visible : ''}`}>
            <div className={styles.projectList}>
                <div className={styles.projectCard}>
                    <h2>ReviewHub</h2>
                    <p>A website where users can post movie reviews.</p>
                    <a href="https://github.com/Robbelure/ProsjektOppgave.git" className={styles.projectLink}>
                        View Code on GitHub
                    </a>
                </div>               
                <div className={styles.projectCard}>
                    <h2>RobFolio</h2>
                    <p>A personal portfolio website.</p>
                    <a href="https://github.com/Robbelure/rob-folio.git" className={styles.projectLink}>
                        View Code on GitHub
                    </a>
                </div>
                <div className={styles.projectCard}>
                    <h2>DipScooper</h2>
                    <p>A tool for analyzing stock data.</p>
                    <a href="https://github.com/Robbelure/dip-scooper.git" className={styles.projectLink}>
                        View Code on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;

