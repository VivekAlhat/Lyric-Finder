import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="mb-3">
      <Navbar.Brand>
        <Link
          to="/"
          style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
        >
          Lyric Finder
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
