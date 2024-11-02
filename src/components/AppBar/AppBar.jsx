import { useSelector } from 'react-redux';
import { selectAuthState } from '../../redux/auth/selectors';

import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuthState);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
