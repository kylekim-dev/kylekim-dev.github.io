import { ThemeOptions } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {

    },
    secondary: {
      main: blue['600'],
      // contrastText: '#000',
    }
    // primary: blue,
    // secondary: {
    //   main: '#000000',
    //   // light: '#000000',
    //   // dark: '#ffffff'
    // },
  },
};

export default lightThemeOptions;