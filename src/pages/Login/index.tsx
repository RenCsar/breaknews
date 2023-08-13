import Footer from '../../components/Footer';
import LoginForms from '../../components/LoginForms';
import NavLogin from '../../components/NavLogin';
import { Container } from './Login.Styled';

const Login = () => {
    return (
        <Container>
            <NavLogin />
            <LoginForms />
            <Footer display='none' />
        </Container>
    )
}

export default Login;