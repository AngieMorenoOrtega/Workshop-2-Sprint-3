import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '../components/Home/Home';
import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza";
import InicioSesion from '../components/InicioSesion/InicioSesion';


const AppRoutes = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioSesion />} />
      {/* <Route path="inicio_Sesion" element={<InicioSesion />} /> */}
      <Route path="pizza:id" elemet={<DetalleDePizza />} />
    </Routes>
  </BrowserRouter>
  );
  }

export default AppRoutes;