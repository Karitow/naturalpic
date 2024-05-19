import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> 🏠Home </Link> 
      <Link to="/favoritos" className="nav"> 🩷Favoritos 
      </Link>
    </nav>
  );
};
export default Navbar;