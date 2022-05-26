import Login from "../pages/Login";
import CargaPieza from "../components/forms/CargaPieza";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import Navigationbar from "../pages/Navigationbar";
import CargaPedido from "../components/forms/CargaPedido";
import CargaCliente from "../components/forms/CargaCliente";
import CargaPuesto from "../components/forms/CargaPuesto";
import CargaUsuario from "../components/forms/CargaUsuario";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import CargaRol from "../components/forms/CargaRol";
import CargaContenedor from "../components/forms/CargaContenedor";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Navigationbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/CargaPieza" element={<CargaPieza />} />
                <Route exact path="/CargaPedido" element={<CargaPedido />} />
                <Route exact path="/CargaCliente" element={<CargaCliente />} />
                <Route exact path="/CargaPuesto" element={<CargaPuesto />} />
                <Route exact path="/CargaUsuario" element={<CargaUsuario />} />
                <Route exact path="/CargaRol" element={<CargaRol />} />
                <Route exact path="/CargaContenedor" element={<CargaContenedor />} />
              </Routes>
            </ProtectedRoutes>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
