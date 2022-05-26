import '../src/css/bootstrap.min.css';
import React, {useEffect, useReducer} from 'react';
import {AuthContext} from './auth/AuthContext';
import AppRoutes from "./routes/AppRoutes";
import {authInitState, authReducer} from './auth/authReducer';

function App() {

const [authState, dispatch] = useReducer(authReducer, {}, authInitState);

useEffect(() => {
    if (authState.isAuthenticated) {
        localStorage.setItem("auth", JSON.stringify(authState));
    } else {
        localStorage.removeItem("auth");
    }
}, [authState.isAuthenticated]);

  return (
    <>
    <AuthContext.Provider
      value={{
        authState,
        dispatch,
      }}
    >
      <AppRoutes />
    </AuthContext.Provider>
    </>
  );
}

export default App;
