import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchClima } from "../../store/reducers/climaSlice";
import { useSelector } from "react-redux";
import { Container } from "./HeaderStatus.styled";
import { FiExternalLink } from 'react-icons/fi'
import IconWeather from "../IconWeather";
import DateGen from "../DateConversor";
import CurrencyFormat from "../CurrencyFormat";

const HeaderStatus = () => {
  useEffect(() => {
    dispatch(fetchClima());
  }, []);

  const dispatch = useDispatch<any>();
  const dataClima = useSelector((state: any) => state.clima.data);
  // const dataBolsa = useSelector((state: any) => state.bolsa.data);

  return (
    <Container>
      <div className="container-geral">
        <p>{DateGen()}</p>
        <div className="status-container">
          <div className="moeda-container">
            <CurrencyFormat data={dataClima} />
          </div>
          <div className="clima-container">
            <FiExternalLink />
            <p>Previsão completa</p>
          </div>
          <div className="tempo-container">
            <IconWeather data={dataClima} />
            <p>{dataClima ? `${dataClima.temp}°C` : "0°C"}</p>
            <p>|</p>
            <p>{dataClima ? dataClima.city : "Carregando..."}</p>
          </div>
        </div>
      </div>
      <div className="barra" />
    </Container>
  )
}

export default HeaderStatus;