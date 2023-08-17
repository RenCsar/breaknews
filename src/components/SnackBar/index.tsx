import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import { CustomizedSnackbarsProps, TransitionProps } from '../../utils/types';
import { Store } from '../../store/store';
import { clearMessage } from '../../store/reducers/AuthSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
}

export default function CustomizedSnackbars({ error, tipo }: CustomizedSnackbarsProps) {
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState<React.ComponentType<SlideProps> | undefined>(undefined);

    React.useEffect(() => {
        if (error) {
            setOpen(true)
            setTransition(() => TransitionRight)
        } else {
            setOpen(false)
        }
    }, [error])


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        Store.dispatch(clearMessage());
        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                TransitionComponent={transition}>
                <Alert onClose={handleClose} severity={tipo} sx={{ width: '100%' }}>
                    {error ? error : "Ocorreu algo inesperado!"}
                </Alert>
            </Snackbar>
        </Stack>
    );
}