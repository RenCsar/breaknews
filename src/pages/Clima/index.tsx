import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./Clima.Styled";
import Chuva from "../../assets/climate/chuva-forte.svg";
import Celsius from "../../assets/climate/if-weather-21-2682830_90793.svg"

const Clima = () => {
    return (
        <Container>
            <Nav />
            <div className="container-geral">
                <div className="container">
                    <div className="title-container">
                        <p>Hoje, sexta-feira</p>
                        <h1>Rio de Janeiro, RJ</h1>
                        <p>Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.</p>
                    </div>
                    <div className="clima-icons-geral">
                        <div className="clima-icons">
                            <img src={Chuva} alt="clima-icon" />
                        </div>
                        <div className="min-max">
                            <div className="clima-temp">
                                <div className="text-container">
                                    <p>min</p>
                                    <p>18</p>
                                </div>
                                <img src={Celsius} alt="celsius-icon" />
                            </div>
                            <div className="clima-temp">
                                <div className="text-container">
                                    <p>máx</p>
                                    <p>25</p>
                                </div>
                                <img src={Celsius} alt="celsius-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default Clima;