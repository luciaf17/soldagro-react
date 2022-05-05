import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import CargaPieza from "./forms/CargaPieza";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import  Navigationbar  from "./pages/Navigationbar";
import CargaPedido from "./forms/CargaPedido";
import CargaCliente from "./forms/CargaCliente";
import CargaPuesto from "./forms/CargaPuesto";
import CargaUsuario from "./forms/CargaUsuario";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
        <Navigationbar />
        <Routes>
        <Route path="*" element={<Page404 />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CargaPieza" element={<CargaPieza />} />
        <Route exact path="/CargaPedido" element={<CargaPedido />} />
        <Route exact path="/CargaCliente" element={<CargaCliente />} />
        <Route exact path="/CargaPuesto" element={<CargaPuesto />} />
        <Route exact path="/CargaUsuario" element={<CargaUsuario />} />
        <Route exact path="/login" element={<Login />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
