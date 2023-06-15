import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PizzaProvider } from '../Context/Context';
import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza"
import Layout from "../components/Layout/Layout"
import FormularioDePago from "../components/FormularioDePago/FormularioDePago"
import InicioSesion from '../components/InicioSesion/InicioSesion';
import PagoExitoso from "../components/PagoExitoso/PagoExitoso";
import { CarritoProvider } from "../components/Carrito/Carrito";
import CardsPizzas from "../components/CardsPizzas/CardsPizzas";
import { AuthProvider } from '../Context/UserContext';
import BarraDeNavegacion from '../components/Layout/BarraDeNavegacion/BarraDeNavegacion';
import Busqueda from '../components/Busqueda/Busqueda';
import PrecioTotal from '../components/Carrito/PrecioTotal';
const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PizzaProvider>
          <CarritoProvider>
            <Routes>
              <Route path="/" element={<InicioSesion />} />
              <Route element={<PrecioTotal/>}></Route>
              <Route element={<Layout />}>
                <Route path="/pizza/:id" element={<DetalleDePizza />} />
              </Route>
              <Route path="/pedido-exitoso" element={<PagoExitoso />} />
              <Route path="/formulario-pago" element={<FormularioDePago />} />
              <Route element={<BarraDeNavegacion />}>
                <Route path="/busqueda" element={<Busqueda/>}></Route>
                <Route path="/all" element={<CardsPizzas />} />
    
              </Route>
            </Routes>
          </CarritoProvider>
        </PizzaProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
