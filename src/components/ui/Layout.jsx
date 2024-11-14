import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Toaster
        toastOptions={{
          duration: 3500,
          style: {
            backgroundColor: '#f5cf88',
            border: '1px solid #4e5d72',
          },
        }}
      />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
