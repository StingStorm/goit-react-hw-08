import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: '#FAFAFA',
      light: '#FFFFF',
      dark: '#F2E4CA',
      contrastText: '#FAFAFA',
    },
    secondary: {
      main: '#F5CF88',
    },
  },
});

export default theme;
