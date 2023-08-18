import { Container } from "./LoginForms.Styled";
import { useState } from "react";
import SigninForm from "../SigninForm";
import CadastroForm from "../CadastroForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CircularLoading from '../Loading';

const LoginForms = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        setVisible((prevState) => !prevState);
    };

    const { loginLoading } = useSelector((state: RootState) => state.auth);
    const { cadastroLoading } = useSelector((state: RootState) => state.cadastro);

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
                    </>
            }
        </Container>
    )
}

export default LoginForms;