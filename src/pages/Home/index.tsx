import Banner from "../../components/Banner";
import Culture from "../../components/Culture";
import HeaderStatus from "../../components/HeaderStatus";
import Headline from "../../components/Headline";
import Esporte from "../../components/Esporte";
import Nav from "../../components/Nav";
import Opinion from "../../components/Opinion";
import { Container } from "./Home.Styled";
import Footer from "../../components/Footer";
import CustomizedSnackbars from "../../components/SnackBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Home = () => {
  const { loginMessage } = useSelector((state: RootState) => state.auth);
  const { cadastroMessage } = useSelector((state: RootState) => state.cadastro);

  return (
    <Container>
      <HeaderStatus />
      <Banner />
      <div className="nav-container">
        <Nav />
      </div>
      <Headline />
      <Opinion />
      <Culture />
      <Esporte />
      <div className="divisao">
        <hr />
      </div>
      <CustomizedSnackbars tipo={"success"} error={(loginMessage || cadastroMessage)} />
      <Footer mt="40px" />
    </Container>
  )
}

export default Home;