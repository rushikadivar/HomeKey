import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        orange: {
            light: '#e4644e',//will be calculated from palette.primary.main,
            main: '#e2553c',
            dark: '#df452a',//will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        blue: {
            light: '#285ea4',
            main: '#245494',
            dark: '#204b83',
        },
        oxfordBlue: {
            main: '#14213D',
        },
        brown: {
            light: '#F7FBEF',
            main: '#251605',
            dark: '#120B02',
        },
        offWhite: {
            light: '#251605',
            main: '#EAF4D3',
            dark: '#FFFFFF',
        },
        white: {
            main: '#FFFFFF',
        },
        black: {
            main: '#000000',
        },
        darkYellow: {
            main: '#FCA311',
        },
        platinum: {
            main: '#E5E5E5',
        },
        apricot: {
            main: '#FFCDB2',
        },
        englishLavender: {
            main: '#B5838D',
        },
        melon: {
            main: '#FFB4A2',
        },

        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});
