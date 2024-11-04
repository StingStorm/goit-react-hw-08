import { useSelector } from 'react-redux';
import { selectAuthState } from '../../redux/auth/selectors';

import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Container } from '@mui/material';

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuthState);

  return (
    <header className={css.header}>
      <Container maxWidth="lg" className={css.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};

export default AppBar;
