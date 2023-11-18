import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";
import { Container } from "./PaginaPadrao.Styled";
import CategoryBanner from "../CategoryBanner";

const PaginaPadrao = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const category = pathSegments[pathSegments.length - 1];

    return (
        <Container>
            <CategoryBanner category={category}/>            
            <header className="nav-container">
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