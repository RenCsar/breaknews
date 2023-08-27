import { Container } from "./Clima.Styled";

import { useEffect } from "react";
import { RootState, Store } from "../../store/store";
import { fetchClima } from "../../store/reducers/climaSlice";
import { useSelector } from "react-redux";

import { IconSelect } from "../../components/IconSelect";
import CircularLoading from "../../components/Loading";
import ClimaAccordion from "../../components/ClimaAccordion";

import Celsius from "../../assets/climate/if-weather-21-2682830_90793.svg";
import ProbIcon from "../../assets/climate/if-weather-44-2682807_90768.svg";
import Sunrise from "../../assets/climate/if-weather-27-2682824_90788.svg";
import Sunset from "../../assets/climate/if-weather-26-2682825_90789.svg";
import Nublado from "../../assets/climate/cloudiness.png";
import Vento from "../../assets/climate/if-weather-9-2682842_90782.svg";
import Gota from "../../assets/climate/weather_raindrops_rain_icon_124168.png";

const Clima = () => {

    useEffect(() => {
        Store.dispatch(fetchClima());
    }, []);

    const clima = useSelector((state: RootState) => state.clima.data);
    const condition = clima ? clima.condition_slug : null;
    const forecast = clima ? clima.forecast : null;
    const imgSource = IconSelect(condition);

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
                                    <img src={imgSource} alt="clima-icon" />
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
                                                <img src={Nublado} alt="status-icon" style={{ width: "25px", height: "20px" }} />
                                            </div>
                                            <div>
                                                <p>Nebulosidade</p>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>{`${clima?.forecast[0].cloudiness}%`}</p>
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
                                <div className="colunas">
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
                                </div>
                            </div>
                            <div className="forecast-container">
                                <ClimaAccordion data={forecast} />
                            </div>
                        </div>
                }
            </div>
        </Container>
    )
}

export default Clima;