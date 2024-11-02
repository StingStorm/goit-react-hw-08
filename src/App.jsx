import './App.css';

import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/utils/Layout';
import RestrictedRoute from './components/utils/RestrictedRoute';
import PrivateRoute from './components/utils/PrivateRoute';
import { refreshUser } from './redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState } from './redux/auth/selectors';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectAuthState);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
