import { Container } from "./Clima.Styled";
import Chuva from "../../assets/climate/chuva-forte.svg";
import Celsius from "../../assets/climate/if-weather-21-2682830_90793.svg";
import ProbIcon from "../../assets/climate/if-weather-44-2682807_90768.svg";
import Sunrise from "../../assets/climate/if-weather-27-2682824_90788.svg";
import Sunset from "../../assets/climate/if-weather-26-2682825_90789.svg";
import RaiosUV from "../../assets/climate/if-weather-45-2682806_90761.svg";
import Vento from "../../assets/climate/if-weather-9-2682842_90782.svg";
import Gota from "../../assets/climate/weather_raindrops_rain_icon_124168.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CircularLoading from "../../components/Loading";

const Clima = () => {

    const clima = useSelector((state: RootState) => state.clima.data);

    return (
        <Container>
            <div className="container-geral">
                {
                    clima == null ?
                        <CircularLoading />
                        :
                        <div className="container">
                            <div className="title-container">
                                <p>Hoje, sexta-feira</p>
                                <h1>{clima?.city}</h1>
                                <p>A descrição do clima para hoje será de: <strong>{clima?.description}</strong>.</p>
                            </div>
                            <div className="clima-icons-geral">
                                <div className="clima-icons">
                                    <img src={Chuva} alt="clima-icon" />
                                </div>
                                <div className="min-max">
                                    <div className="clima-temp">
                                        <div className="text-container">
                                            <p>min</p>
                                            <p>{clima?.forecast[0].min}</p>
                                        </div>
                                        <img src={Celsius} alt="celsius-icon" />
                                    </div>
                                    <div className="clima-temp">
                                        <div className="text-container">
                                            <p>máx</p>
                                            <p>{clima?.forecast[0].max}</p>
                                        </div>
                                        <img src={Celsius} alt="celsius-icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="data-table">
                                <div className="colunas">
                                    <div className="status-container">
                                        <div className="group-container">
                                            <div className="img-container">
                                                <img src={Gota} alt="status-icon" />
                                            </div>
                                            <div>
                                                <p>Prob. de Chuva</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>{`${clima?.forecast[0].rain_probability}%`}</p>
                                        </div>
                                    </div>
                                    <div className="status-container">
                                        <div className="group-container">
                                            <div className="img-container">
                                                <img src={Sunrise} alt="status-icon" />
                                            </div>
                                            <div>
                                                <p>Nascer do Sol</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>{clima?.sunrise}</p>
                                        </div>
                                    </div>
                                    <div className="status-container">
                                        <div className="group-container">
                                            <div className="img-container">
                                                <img src={Sunset} alt="status-icon" />
                                            </div>
                                            <div>
                                                <p>Pôr do Sol</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>{clima?.sunset}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="colunas">
                                    <div className="status-container">
                                        <div className="group-container">
                                            <div className="img-container">
                                                <img src={Vento} alt="status-icon" />
                                            </div>
                                            <div>
                                                <p>Vento</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>{clima?.wind_speedy}</p>
                                        </div>
                                    </div>
                                    <div className="status-container">
                                        <div className="group-container">
                                            <div className="img-container">
                                                <img src={RaiosUV} alt="status-icon" />
                                            </div>
                                            <div>
                                                <p>Raios UV</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>Alto</p>
                                        </div>
                                    </div>
                                    <div className="status-container">
                                        <div className="group-container">
                                            <div className="img-container">
                                                <img src={ProbIcon} alt="status-icon" />
                                            </div>
                                            <div>
                                                <p>Umidade</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>{`${clima?.humidity}%`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </Container>
    )
}

export default Clima;