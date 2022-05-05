import React from 'react'
import {
  Link
} from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>Esta página no existe</h1>
      <Link to="/">Volver a la página principal</Link>
    </div>
  )
}

export default Page404;
