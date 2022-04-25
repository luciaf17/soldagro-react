import React from "react";
import "../css/login.css";
import logo from "../assets/logo.jpg";

const Login = () => {
  return (
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
                  placeholder="Usuario"
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
                  placeholder="Clave"
                  aria-label="Clave"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto pt-2">
                <button className="btn btn-primary" type="button">
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
  );
};

export default Login;
