import { Container } from "./LoginForms.Styled";
import { useState } from "react";
import SigninForm from "../SigninForm";
import CadastroForm from "../CadastroForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CircularLoading from '../Loading';
import CustomizedSnackbars from "../SnackBar";

const LoginForms = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        setVisible((prevState) => !prevState);
    };

    const { loginLoading, loginMessage } = useSelector((state: RootState) => state.auth);
    const cadastroLoading = false;
    const cadastroMessage = "";

    return (
        <Container>
            {
                (loginLoading || cadastroLoading) ?
                    <CircularLoading />
                    :
                    <>
                        {visible ? <CadastroForm /> : <SigninForm />}
                        <div className="signin-container">
                            {visible ? (
                                <p>Já tem uma conta? <span onClick={toggleVisible}>Entrar</span></p>
                            ) : (
                                <p>Ainda não tem uma conta? <span onClick={toggleVisible}>Criar conta</span></p>
                            )}
                        </div>
                        <CustomizedSnackbars error={(loginMessage || cadastroMessage)} />
                    </>
            }
        </Container>
    )
}

export default LoginForms;