import React from 'react'
import {Navigate} from "react-router-dom";

const ProtectedRoutes = ({children, redirect = "/login"}) => {
  //const {authState} = useContext(AuthContext);

    /* if (authState.isAuthenticated) {
        return children;
        } else { */
        return <Navigate to={redirect}/>;
        
}

export default ProtectedRoutes