import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav  className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;