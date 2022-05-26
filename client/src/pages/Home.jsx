import React , {useContext} from "react";
import {AuthContext} from "../auth/AuthContext";


const Home = () => {

  const { authState} = useContext(AuthContext);

  return (
    <>
      <h5 className=" mt-20 d-grid gap-2 col-6 mx-auto pt-2 text-center">
        Bienvenido a Soldagro SRL
      </h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        molestias et repellendus inventore architecto, hic consequuntur
        quibusdam saepe possimus cupiditate maiores corrupti provident fuga quod
        quae, cumque nostrum optio facere.
      </p>
      <p>Hola, {authState.user?.nombre}</p>
    </>
  );
};

export default Home;
