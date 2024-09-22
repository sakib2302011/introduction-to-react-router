import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;