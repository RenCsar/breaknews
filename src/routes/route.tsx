import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Provider } from "react-redux";
import { Store } from "../store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;