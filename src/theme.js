// src/theme.js
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        card: {
            main: '#11609f',
            contrastText: '#eff8f9',
            maxWidth: 220
        },
    },
    components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
    //          color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '0.82rem',
            },
          },
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              color: '#eff8f9',
              '&.Mui-checked': {
                color: '#11609f',
              },
            },
          },
        },
  },
});

export default theme;
