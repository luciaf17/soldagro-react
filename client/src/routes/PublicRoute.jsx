import React from 'react'
import {Navigate} from "react-router-dom";

const PublicRoute = ({children, redirect = "/"}) => {
  //const {authState} = useContext(AuthContext);

    /* if (authState.isAuthenticated) {
      return <Navigate to={redirect}/>;
        
        } else { */
      //   return children;
      // }
     
      }
export default PublicRoute

//localStorage.setItem('token', '123456');