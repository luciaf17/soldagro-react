import Login from "./pages/Login";
import CargaPieza from "./forms/cargaPieza";
import 'bootstrap/dist/css/bootstrap.min.css';
import CargaCliente from "./forms/cargaCliente";
import Home from "./pages/Home";
import  Navigationbar  from "./pages/Navigationbar";

function App() {
  return (
    <div className="App">
      <CargaCliente />
    </div>
  );
}

export default App;
