import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div >
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Header;