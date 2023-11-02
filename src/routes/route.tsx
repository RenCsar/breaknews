import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Provider } from "react-redux";
import { Store } from "../store/store";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/utils/theme';
import Login from "../pages/Login";
import GlobalSnackbar from "../components/SnackBarsGlobal";
import Clima from "../pages/Clima";
import PaginaPadrao from "../components/PaginaPadrao";
import News from "../pages/News";
import Opiniao from "../pages/Opiniao";
import Cultura from "../pages/Cultura";
import Esporte from "../pages/Esporte";
import Financas from "../pages/Financas";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <GlobalSnackbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PaginaPadrao />}>
                <Route path="/News" element={<News />} />
                <Route path="/Opiniao" element={<Opiniao />} />
                <Route path="/Cultura" element={<Cultura />} />
                <Route path="/Esporte" element={<Esporte />} />
                <Route path="/Financas" element={<Financas />} />
                <Route path="/clima" element={<Clima />} />
              </Route>
            </Routes>
          </GlobalSnackbar>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;