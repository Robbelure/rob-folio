import './Projects.css';

const Projects = () => {
    return (
        <div className="content-wrapper">
            <div className="text-wrapper">
                {/*<h1>My Projects</h1>*/}
            </div>
            <div className="project-list">
                <div className="project-card">
                    <h2>ReviewHub</h2>
                    <p>A website where users can create accounts to post reviews, comment on others, and upload movie posters.</p>
                    <a href="https://github.com/Robbelure/ProsjektOppgave.git" className="project-link" target="_blank" rel="noopener noreferrer">
                        View Code on GitHub
                    </a>
                </div>
                <div className="project-card">
                    <h2>DipScooper</h2>
                    <p>A tool for analyzing stock data to help you identify market dips using financial indicators.</p>
                    <a href="https://github.com/Robbelure/dip-scooper.git" className="project-link" target="_blank" rel="noopener noreferrer">
                        View Code on GitHub
                    </a>
                </div> 
                <div className="project-card">
                    <h2>RobFolio</h2>
                    <p>A personal portfolio website.</p>
                    <a href="https://github.com/Robbelure/rob-folio.git" className="project-link" target="_blank" rel="noopener noreferrer">
                        View Code on GitHub
                    </a>
                </div>          
            </div>
        </div>
    );
};

export default Projects;

