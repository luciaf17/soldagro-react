import Login from "../pages/Login";
import CargaPieza from "../components/forms/CargaPieza";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import Navigationbar from "../pages/Navigationbar";
import CargaPedido from "../components/forms/CargaPedido";
import CargaCliente from "../components/forms/CargaCliente";
import CargaPuesto from "../components/forms/CargaPuesto";
import CargaUsuario from "../components/forms/CargaUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
//import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </ProtectedRoutes>
          }
        />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CargaPieza" element={<CargaPieza />} />
        <Route exact path="/CargaPedido" element={<CargaPedido />} />
        <Route exact path="/CargaCliente" element={<CargaCliente />} />
        <Route exact path="/CargaPuesto" element={<CargaPuesto />} />
        <Route exact path="/CargaUsuario" element={<CargaUsuario />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
