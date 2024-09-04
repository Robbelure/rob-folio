import background1 from '../assets/images/background1.jpeg';

const Home = () => {
  return (
    <div className="content-wrapper" style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <div className="text-wrapper" style={{
        position: 'relative',  
        zIndex: 2,  
        textAlign: 'center',
        paddingTop: '0vh',  
        marginTop: '190px'

      }}>
        <h1>Robin Brendsrød</h1>
        <p className="additional-text">
          Explore my digital playground
        </p>
      </div>
      <div className="image-wrapper" style={{
        backgroundImage: `url(${background1})`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',  
        zIndex: 1,  
      }}>
      </div>
    </div>
  );
};

export default Home;