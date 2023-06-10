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
          <Outlet />
       </div>
      
    </>
  );
};

export default Layout;