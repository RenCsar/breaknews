import { Container } from "./LoginForms.Styled";
import { useState } from "react";
import SigninForm from "../SigninForm";
import CadastroForm from "../CadastroForm";

const LoginForms = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        setVisible((prevState) => !prevState);
    };

    return (
        <Container>
            {visible ? <CadastroForm /> : <SigninForm />}
            <div className="signin-container">
                {visible ? (
                    <p>Já tem uma conta? <span onClick={toggleVisible}>Entrar</span></p>
                ) : (
                    <p>Ainda não tem uma conta? <span onClick={toggleVisible}>Criar conta</span></p>
                )}
            </div>
        </Container>
    )
}

export default LoginForms;