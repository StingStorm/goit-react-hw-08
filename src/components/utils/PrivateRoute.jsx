import { useSelector } from 'react-redux';
import { selectAuthState } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuthState);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
