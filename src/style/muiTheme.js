import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    primary: { main: '#487DA1' },
    secondary: { main: '#76c2af' },
    text: {
      secondary: '#fff',
      primary: '#000',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h3',
        subtitle2: 'h4',
        body1: 'span',
        body2: 'span',
      },
    },
  },
  typography: {
    h4: { fontSize: '0.85rem' },
    h5: {
      fontSize: '0.75rem',
    },
    h6: {
      fontSize: '0.45rem',
    },
    subtitle1: {
      fontSize: '0.40rem',
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      // fontStyle: '',
    },
  },
});
export default muiTheme;
