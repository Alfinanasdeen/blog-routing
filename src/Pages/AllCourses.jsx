import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Courses = ({ imgSrc, title, description, link }) => {
  const cardContainerStyle = {
    width: "300px",
    height: "550px",
    marginTop: "30px",
    marginBottom: "20px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    flex: "1",
  };

  const cardImgStyle = {
    width: "100%",
    height: "60%",
    objectFit: "cover",
  };

  const cardBodyStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
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
    alignSelf: "flex-end",
    display: "block",
    marginTop: "auto",
  };

  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={imgSrc} style={cardImgStyle} alt={title} />
          <div style={cardBodyStyle}>
            <div>
              <h5 style={cardTitleStyle}>{title}</h5>
              <p style={cardTextStyle}>{description}</p>
            </div>
            <button style={btnStyle}>Read More</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

Courses.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const AllCourses = () => {
  return (
    <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
      <Courses
        imgSrc="https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"
        title="Full Stack Development"
        description="Best Full Stack Development Projects in 2024"
        link="/full-stack-development/project"
      />
      <Courses
        imgSrc="https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg"
        title="Data Science"
        description="How to become a Data Scientist after Mechanical Engineering?"
        link="/data-science/project"
      />
      <Courses
        imgSrc="https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif"
        title="Cyber Security"
        description="What is Cybersecurity? Importance and its uses & challenges in 2024!"
        link="/cyber-security/project"
      />
      <Courses
        imgSrc="https://www.guvi.in/blog/wp-content/uploads/2022/10/31958-2048x878.jpg"
        title="Career"
        description="6 Reasons Business Analytics Makes Digital Marketing Powerful"
        link="/career-as/project"
      />
    </div>
  );
};

export default AllCourses;