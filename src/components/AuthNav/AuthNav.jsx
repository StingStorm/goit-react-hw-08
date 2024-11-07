import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Button
        component={NavLink}
        to="/register"
        endIcon={<AppRegistrationIcon sx={{ marginTop: '-4px' }} />}
      >
        Sign Up
      </Button>
      <Button
        component={NavLink}
        to="/login"
        endIcon={<LoginIcon sx={{ marginTop: '-4px' }} />}
      >
        Log In
      </Button>
    </div>
  );
};

export default AuthNav;
