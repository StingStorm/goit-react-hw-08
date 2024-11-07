import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p className={css.welcomeText}>Welcome, {user.name}!</p>
      <Button
        endIcon={<LogoutIcon sx={{ marginTop: '-4px' }} />}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
