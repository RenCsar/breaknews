import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CustomizedSnackbars from '../SnackBar';

type TGlobalSnackbarProps = {
    children: ReactNode;
}

function GlobalSnackbar({ children }: TGlobalSnackbarProps) {
    const { loginMessage, status: authStatus } = useSelector((state: RootState) => state.auth);
    const { cadastroMessage, status: cadastroStatus } = useSelector((state: RootState) => state.cadastro);

    const [snackbarsType, setSnackbarsType] = useState("success");

    useEffect(() => {
        if (authStatus === 'success' || cadastroStatus === 'success') {
            setSnackbarsType("success");
        } else if (authStatus === 'error' || cadastroStatus === 'error') {
            setSnackbarsType('error');
        }
    }, [authStatus, cadastroStatus]);

    return (
        <div>
            {children}
            <CustomizedSnackbars tipo={snackbarsType} error={(loginMessage || cadastroMessage)} />
        </div>
    );
}

export default GlobalSnackbar;