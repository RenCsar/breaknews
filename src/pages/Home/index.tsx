import Banner from "../../components/Banner";
import Culture from "../../components/Culture";
import HeaderStatus from "../../components/HeaderStatus";
import Headline from "../../components/Headline";
import Esporte from "../../components/Esporte";
import Nav from "../../components/Nav";
import Opinion from "../../components/Opinion";
import { Container } from "./Home.Styled";
import Footer from "../../components/Footer";

const Home = () => {

  return (
    <Container>
      <HeaderStatus />
      <Banner />
      <header className="nav-container">
        <Nav />
      </header>
      <Headline />
      <Opinion />
      <Culture />
      <Esporte />
      <div className="divisao">
        <hr />
      </div>
      <Footer mt="40px" />
    </Container>
  )
}

export default Home;