import { Link } from 'react-router-dom';

const FullStackDevelopment = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer', 
  };

  const cardImgStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  const cardBodyStyle = {
    padding: '20px',
  };

  const cardTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const cardTextStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  };

  const btnStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Full Stack Development</h1>
      <Link to="/full-stack-development/project" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={cardStyle}>
          <img 
            src="https://www.freecodecamp.org/news/content/images/2022/11/hire-full-stack-developers1546507474317-1.gif" 
            style={cardImgStyle} 
            alt="Full Stack Development" 
          />
          <div style={cardBodyStyle}>
            <h5 style={cardTitleStyle}>Best Full Stack Development Projects in 2024</h5>
            <p style={cardTextStyle}>
              Explore some of the most innovative and exciting full stack development projects that are making waves in 2024.
            </p>
            <button style={btnStyle}>Read More</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FullStackDevelopment;