import { Link } from "react-router-dom";

const DataScience = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer", 
  };

  const cardImgStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  };

  const cardBodyStyle = {
    padding: "20px",
  };

  const cardTitleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const cardTextStyle = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  };

  const btnStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "block",
    textAlign: "center",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Data Science</h1>
      <Link
        to="/data-science/project"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div style={cardStyle}>
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg"
            style={cardImgStyle}
            alt="DataScience"
          />
          <div style={cardBodyStyle}>
            <h5 style={cardTitleStyle}>
              How to become a Data Scientist after Mechanical Engineering?
            </h5>
            <p style={cardTextStyle}>
              Transition to data science after mechanical engineering by
              leveraging your analytical skills, learning programming languages
              like Python and R, and pursuing specialized courses in data
              analysis and machine learning.
            </p>
            <button style={btnStyle}>Read More</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataScience;