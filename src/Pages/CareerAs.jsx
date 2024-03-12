import { Link } from "react-router-dom";

const CareerAs = () => {
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
      <h1 style={titleStyle}>Career</h1>
      <Link
        to="/career-as/project"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div style={cardStyle}>
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2022/10/31958-2048x878.jpg"
            style={cardImgStyle}
            alt="CareerAs"
          />
          <div style={cardBodyStyle}>
            <h5 style={cardTitleStyle}>
              6 Reasons Business Analytics Makes Digital Marketing Powerful
            </h5>
            <p style={cardTextStyle}>
              Business analytics empowers digital marketing by providing
              insights into customer behavior, optimizing ad campaigns,
              identifying trends, enhancing personalized targeting, measuring
              ROI, and fostering data-driven decision-making, resulting in more
              effective strategies and improved business outcomes.
            </p>
            <button style={btnStyle}>Read More</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CareerAs;