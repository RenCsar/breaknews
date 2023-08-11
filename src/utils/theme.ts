import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 370,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;