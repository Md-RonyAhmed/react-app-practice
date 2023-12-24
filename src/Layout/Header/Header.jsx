import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth)

  const logout =()=>{
    signOut(auth)
  }

  return (
    <nav className="nav">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/users'>Users</NavLink>
      {
        user? <Link onClick={logout}>Logout</Link>:<NavLink to='/login'>Login</NavLink>
      }
      <span>{user?.displayName}</span>
      <span>{user?.photoURL?<img src={user?.photoURL}></img>:""}</span>
    </nav>
  );
};

export default Header;
