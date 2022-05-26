import React, {useContext} from "react";
import {AuthContext} from "../auth/AuthContext";
import { types } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import useGetData from '../hooks/useGetData';
import {ThreeDots} from 'react-loader-spinner';

import "../css/login.css";
import logo from "../assets/logo.jpg";

const Login = () => {

  const { authState, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [usuarios, isLoading, isError] = useGetData(
    'http://localhost:3001/api/usuarios'
   );

  const [values, handleChange] = useForm({
    usuario: '',
    password: '',
   });

  const { usuario, password } = values;

  const login = () => {
      if (usuario !== '' && password !== '') {
        const user = usuarios.find((u) => u.nombre.toString().toLowerCase().trim() === usuario.toLowerCase().trim());
        console.log(user);
        if (user) { //acá se debería validar si la password coincide
            dispatch({
              type: types.LOGIN,
              payload: user,
            });
          const formData = new FormData();
          formData.append("usuario", usuario);
          formData.append("password", password);

          navigate("/");
        } else {
          alert("Usuario incorrecto");
        }
      } else {
        alert("Ingrese usuario y contraseña");
      }
  };


  return (
    <>
    {isLoading? (
      <div className="login">
       <div className="container">
          <ThreeDots type="bubble-loop" bgColor={"red"} title={"Cargando..."} color={'red'} size={200} />
        </div>
      </div>
    ) : (
      isError? (
        <p>Hubo un error</p>
      ) : (
    <div className="login">
      <div className="container">
      <div className="row-sm">
        <div className="col-sm-4 offset-4 mt-5">
          <div className="card pt-2">
          <img src={logo} className="card-img-top rounded mx-auto d-block" alt="logo" style={{"width":"60%", "height":"60%"}} />
            <div className="card-header text-center pt-3">
              <h5>💻 Ingreso</h5>
            </div>
            <div className="card-body pt-3 pb-1">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  👤
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="usuario"
                  placeholder="Usuario"
                  onChange={handleChange}
                  value={usuario}
                  aria-label="Usuario"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="card-body pt-1">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  🔒
                </span>
                <input
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                  name="password"
                  value={password}
                  placeholder="Clave"
                  aria-label="Clave"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto pt-2">
                <button onClick={login} className="btn btn-primary" type="submit">
                  Acceder
                </button>
              </div>
              <div className="card-footer mt-4 text-center">
                  <p>Si olvidó su clave, por favor contacte al administrador</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
    )}
    </>
  );
};

export default Login;
