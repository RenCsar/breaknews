import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchClima } from "../../store/reducers/climaSlice";
import { useSelector } from "react-redux";
import { Container } from "./Header.styled";
import { FiExternalLink } from 'react-icons/fi'
import IconWeather from "../IconWeather";
import DateGen from "../DateConversor";

const Header = () => {
  useEffect(() => {
    dispatch(fetchClima());
    // console.log(data.date)
  }, []);

  const dispatch = useDispatch<any>();
  const data = useSelector((state: any) => state.clima.data);

  return (
    <Container>
      <header>
        <p>{DateGen()}</p>
        <div className="clima-container">
          <div className="previsao-container">            
            <FiExternalLink />
            <p>Previsão completa</p>
          </div>
          <div className="tempo-container">
            <IconWeather data={data} />
            <p>{data ? `${data.temp}°C` : "0°C"}</p>
            <p>|</p>
            <p>{data ? data.city : "Carregando..."}</p>
          </div>
        </div>
      </header>
    </Container>
  )
}

export default Header;