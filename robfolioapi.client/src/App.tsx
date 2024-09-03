import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import './pages/Contact.css';
import ThemeProviderWrapper from './ThemeProviderWrapper'; 

function App() {
    return (
        <ThemeProviderWrapper> {/* Legger ThemeProviderWrapper rundt alt innhold */}
            <Router>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </ThemeProviderWrapper>
    );
}

export default App;