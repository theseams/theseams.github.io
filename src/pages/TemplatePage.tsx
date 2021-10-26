import * as React from 'react';
import {
    makeStyles,
    Box,
    Typography,
    CssBaseline,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
}));

const ExperiencePage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Box className={classes.root}>
                <Typography>
                    Hello world!
                </Typography>
            </Box>
        </>
    );
};

export default ExperiencePage;
