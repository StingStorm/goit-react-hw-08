import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectAuthState } from '../../redux/auth/selectors';
import logo from '../../assets/logo.png';

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuthState);
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" width="40px" height="40px" />
      </Link>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;
