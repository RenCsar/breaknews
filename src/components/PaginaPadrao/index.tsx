import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";
import { Container } from "./PaginaPadrao.Styled";

const PaginaPadrao = () => {
    return (
        <Container>
            <Nav />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default PaginaPadrao;