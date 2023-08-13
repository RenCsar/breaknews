import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Provider } from "react-redux";
import { Store } from "../store/store";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/utils/theme';
import Login from "../pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;