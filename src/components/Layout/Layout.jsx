import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss"
import Contador from "./Detalles Carrito/Contador";
import BotonVolver from "./Detalles Carrito/BotonVolver";
const Layout = () => {
  return (
    <>
       <div className="Layout">
        <BotonVolver></BotonVolver>
       <Contador></Contador>
       </div>
      <Outlet />
    </>
  );
};

export default Layout;