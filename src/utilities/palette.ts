import colours from './colours';

const palette = {
    primary: {
        contrastText: colours.BLACK,
        main: colours.WHITE,
    },
    secondary: {
        contrastText: colours.WHITE,
        main: colours.PURPLE,
    },
    text: {
        primary: colours.BLACK,
        secondary: colours.PURPLE,
        black: colours.BLACK,
    },
    background: {
        paper: colours.WHITE,
        default: colours.WHITE,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
};

export default palette;
