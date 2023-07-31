import Banner from "../../components/Banner";
import HeaderStatus from "../../components/HeaderStatus";
import Headline from "../../components/Headline";
import HomeNews from "../../components/HomeNews";
import Nav from "../../components/Nav";
import Opinion from "../../components/Opinion";
import { Container } from "./Home.Styled";

const Home = () => {
  return (
    <Container>
      <HeaderStatus />
      <Banner />
      <div className="nav-container">
        <Nav />
      </div>
      <Headline />
      <HomeNews />
      <Opinion />
    </Container>
  )
}

export default Home;