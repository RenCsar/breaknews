import Banner from "../../components/Banner";
import HeaderStatus from "../../components/HeaderStatus";
import Nav from "../../components/Nav";
import { Container } from "./Home.Styled";

const Home = () => {
  return (
    <Container>
      <HeaderStatus />
      <Banner />
      <Nav />
    </Container>
  )
}

export default Home;