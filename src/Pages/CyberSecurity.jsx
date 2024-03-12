import { Link } from "react-router-dom";

const CyberSecurity = () => {
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
      <h1 style={titleStyle}>CyberSecurity</h1>
      <Link
        to="/cyber-security/project"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div style={cardStyle}>
          <img
            src="https://i.pinimg.com/originals/8b/fd/01/8bfd01c18be1b5059bc0d7770d9dabf1.gif"
            style={cardImgStyle}
            alt="CyberSecurity"
          />
          <div style={cardBodyStyle}>
            <h5 style={cardTitleStyle}>
              What is Cybersecurity? Importance and its uses & challenges in
              2024!
            </h5>
            <p style={cardTextStyle}>
              Cybersecurity is vital for safeguarding data and systems from
              unauthorized access and cyber threats. In 2024, the escalating
              challenges include sophisticated attacks, supply chain
              vulnerabilities, and the rapid evolution of technology,
              necessitating constant adaptation and innovation.
            </p>
            <button style={btnStyle}>Read More</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CyberSecurity;