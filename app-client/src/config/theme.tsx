import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', 
    },
    secondary: {
      main: '#FF4081',
    },

  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,

  },

});

export { theme };
