import { Link } from "react-router-dom";
import { Container } from "./NavLogin.Styled";
import Logo from "../../assets/bnh.png";

const NavLogin = () => {
    return (
        <Container>
            <Link to={"/"}>
                <img src={Logo} alt="Logo" />
            </Link>
        </Container>
    )
}

export default NavLogin;