import Banner from "../../components/Banner";
import HeaderStatus from "../../components/HeaderStatus";
import { Container } from "./Home.Styled";

const Home = () => {
  return (
    <Container>
      <HeaderStatus />
      <Banner />
    </Container>
  )
}

export default Home;