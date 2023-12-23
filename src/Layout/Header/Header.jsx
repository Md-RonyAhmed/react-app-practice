import { NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
  return (
    <nav className="nav">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/users'>Users</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
  );
};

export default Header;
