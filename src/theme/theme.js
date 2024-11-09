import { createTheme, outlinedInputClasses } from '@mui/material';

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
    accent: {
      main: '#C65C5C',
    },
    border: {
      main: '#4E5D72',
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#4E5D72',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderColor)',
          },
          '& .MuiOutlinedInput-notchedOutline:hover': {
            borderColor: 'transparent',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'transparent',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
        },
      },
    },
  },
});

export default theme;
