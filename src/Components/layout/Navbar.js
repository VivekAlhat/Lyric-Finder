import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand className="m-auto">
        <Link
          to="/"
          style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
        >
          Lyric Finder
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
