import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import CustomToaster from './CustomToaster/CustomToaster';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <CustomToaster />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
