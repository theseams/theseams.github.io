import * as React from 'react';
import {
    makeStyles,
    Box,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
    },
}));

interface OwnProps {
    children?: React.ReactNode;
}

type Props = OwnProps;

const AppLayout: React.FC<{}> = (props: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <main className={clsx(classes.content, {})}>
                {props.children}
            </main>
        </Box>
    );
};

export default AppLayout;
