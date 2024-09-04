import background2 from '../assets/images/background2.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-sidebar">
        <h1>About Me</h1>
        <p>blablabla
        </p>
      </div>
      
      <div className="about-content" style={{  
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: '1', 
        height: '100vh', 
        marginLeft: '300px',
      }}>
      </div>
    </div>
  );
};

export default About;
