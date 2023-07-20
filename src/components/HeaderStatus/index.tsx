import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchClima } from "../../store/reducers/climaSlice";
import { Container } from "./HeaderStatus.styled";
import { FiExternalLink } from 'react-icons/fi'
import IconWeather from "../IconWeather";
import DateGen from "../DateConversor";
import CurrencyFormat from "../CurrencyFormat";
import { fetchFinance } from "../../store/reducers/financeSlice";
import { Store, RootState } from "../../store/store";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

const HeaderStatus = () => {

  useEffect(() => {
    Store.dispatch(fetchClima());
    Store.dispatch(fetchFinance());
  }, []);

  const dataClima = useSelector((state: RootState) => state.clima.data);
  const dataFinance = useSelector((state: RootState) => state.finance.data);
  console.log(dataClima)

  return (
    <Container>
      <div className="container-geral">
        <p className="data">{DateGen()}</p>
        <div className="status-container">
          <div className="moeda-container">
            <CurrencyFormat data={dataFinance} />
          </div>
          <div className="weather">
            {!dataClima ?
              <Box
                sx={{
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CircularProgress color="inherit" size={13} />
              </Box>
              :
              <>
                <div className="clima-container">
                  <FiExternalLink />
                  <p>Previsão completa</p>
                </div>
                <div className="tempo-container">
                  <IconWeather data={dataClima} />
                  <p>{dataClima ? `${dataClima.temp}°C` : "Carregando..."}</p>
                  <p>|</p>
                  <p>{dataClima ? dataClima.city : "Carregando..."}</p>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <div className="barra" />
    </Container>
  )
}

export default HeaderStatus;