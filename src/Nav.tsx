import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/Labs/a3"
            className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>Assigment 3 Lab</Link>
      <Link to="/Labs/a4"
            className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>Assigment 4 Lab</Link>
      <Link to="/Kanbas"
            className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>React Kanbas</Link>
      <Link to="/hello"
            className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
    </nav>
);}

export default Nav;
