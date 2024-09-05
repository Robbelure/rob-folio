import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home'; 
import Projects from './pages/Projects'; 
import ThemeProviderWrapper from './ThemeProviderWrapper'; 
import styles from './App.module.css';

function App() {
    return (
        <ThemeProviderWrapper>
            <Router>
                <div className={styles.navbar}>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </div>

                <div className={styles.appContainer}>
                    <TransitionGroup>
                        <CSSTransition timeout={300} classNames="fade">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                   
                    <footer className={styles.footer}>
                        <p className={styles.connectTitle}>Let's connect</p>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/Robbelure" target="_blank" rel="noopener noreferrer">GitHub</a> |
                            <a href="https://linkedin.com/in/robin-brendsrød" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                            <a href="mailto:Robinbrendsrod@gmail.com">Email</a>
                        </div>
                        <p className={styles.copyright}>
                            © Robin Brendsrød 2024 | All Rights Reserved
                        </p>
                    </footer>
                </div>
            </Router>
        </ThemeProviderWrapper>
    );
}

export default App;