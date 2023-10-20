import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";
import { Container } from "./PaginaPadrao.Styled";

const PaginaPadrao = () => {
    return (
        <Container>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </Container>
    )
}

export default PaginaPadrao;