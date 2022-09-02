import Login from '../pages/Login';
import CrearPieza from '../components/forms/CrearPieza';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';
import Navigationbar from '../pages/Navigationbar';
import CrearPedido from '../components/forms/CrearPedido';
import CrearCliente from '../components/forms/CrearCliente';
import CrearPuesto from '../components/forms/CrearPuesto';
import CrearUsuario from '../components/forms/CrearUsuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import CrearRol from '../components/forms/CrearRol';
import CrearContenedor from '../components/forms/CrearContenedor';
import PublicRoute from './PublicRoute';
import CrearTipoPuesto from '../components/forms/CrearTipoPuesto';
import CrearDespacho from '../components/forms/CrearDespacho';
import CrearTipoContenedor from '../components/forms/CrearTipoContenedor';
import CrearDeposito from '../components/forms/CrearDeposito';
import CrearProveedor from '../components/forms/CrearProveedor';
import CrearMaterial from '../components/forms/CrearMaterial';
import CrearMateriaPrima from '../components/forms/CrearMateriaPrima';
import CrearHojaBarra from '../components/forms/CrearHojaBarra';
import CrearInsumo from '../components/forms/CrearInsumo';
import CrearProceso from '../components/forms/CrearProceso';
import ListaPiezas from '../components/lists/ListaPiezas';

const AppRoutes = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route
     path='*'
     element={
      <ProtectedRoutes>
       <Navigationbar />
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/CrearPieza' element={<CrearPieza />} />
        <Route exact path='/CrearPedido' element={<CrearPedido />} />
        <Route exact path='/CrearCliente' element={<CrearCliente />} />
        <Route exact path='/CrearPuesto' element={<CrearPuesto />} />
        <Route exact path='/CrearUsuario' element={<CrearUsuario />} />
        <Route exact path='/CrearRol' element={<CrearRol />} />
        <Route exact path='/CrearContenedor' element={<CrearContenedor />} />
        <Route exact path='/CrearPedido' element={<CrearPedido />} />
        <Route exact path='/CrearTipoPuesto' element={<CrearTipoPuesto />} />
        <Route exact path='/CrearDespacho' element={<CrearDespacho />} />
        <Route exact path='/CrearTipoContenedor' element={<CrearTipoContenedor />} />
        <Route exact path='/CrearDeposito' element={<CrearDeposito />} />
        <Route exact path='/CrearProveedor' element={<CrearProveedor />} />
        <Route exact path='/CrearMaterial' element={<CrearMaterial />} />
        <Route exact path='/CrearMateriaPrima' element={<CrearMateriaPrima />} />
        <Route exact path='/CrearHojaBarra' element={<CrearHojaBarra />} />
        <Route exact path='/CrearInsumo' element={<CrearInsumo />} />
        <Route exact path='/CrearProceso' element={<CrearProceso />} />
        <Route exact path='/ListaPiezas' element={<ListaPiezas />} />
       </Routes>
      </ProtectedRoutes>
     }
    />
    <Route
     exact
     path='/login'
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
