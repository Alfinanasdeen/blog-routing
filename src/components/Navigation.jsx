import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  const activeLinkStyle = {
    color: "green",
    borderBottom: "2px solid green",
    paddingBottom: "20px",
  };

  return (
    <nav style={{ textAlign: "center", margin: "30px auto", fontSize: "20px" }}>
      <ul
        style={{
          display: "inline-block",
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              ...(pathname === "/" && activeLinkStyle),
            }}
          >
            All
          </Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link
            to="/full-stack-development"
            style={{
              textDecoration: "none",
              ...(pathname === "/full-stack-development" && activeLinkStyle),
            }}
          >
            Full Stack Development
          </Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link
            to="/data-science"
            style={{
              textDecoration: "none",
              ...(pathname === "/data-science" && activeLinkStyle),
            }}
          >
            Data Science
          </Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link
            to="/cyber-security"
            style={{
              textDecoration: "none",
              ...(pathname === "/cyber-security" && activeLinkStyle),
            }}
          >
            Cyber Security
          </Link>
        </li>
        <li style={{ display: "inline-block", margin: "0 10px" }}>
          <Link
            to="/career-as"
            style={{
              textDecoration: "none",
              ...(pathname === "/career-as" && activeLinkStyle),
            }}
          >
            Career
          </Link>
        </li>
      </ul>
      <hr style={{ width: "100%", margin: "10px auto" }} />
    </nav>
  );
};

export default Navigation;