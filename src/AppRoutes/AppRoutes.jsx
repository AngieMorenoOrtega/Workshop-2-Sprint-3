import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PizzaProvider } from '../Context/Context';
import Home from "../components/Home/Home"
import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza"
import Layout from "../components/Layout/Layout"
import FormularioDePago from "../components/FormularioDePago/FormularioDePago"
import InicioSesion from '../components/InicioSesion/InicioSesion';
import PagoExitoso from "../components/PagoExitoso/PagoExitoso";
import { CarritoProvider } from "../components/Carrito/Carrito";

const AppRoutes = () => {
  return (
    < BrowserRouter>
      <PizzaProvider>
        <Routes>
          <Route path="/home" element={<InicioSesion/>} />
          <Route element={<CarritoProvider/>}>
          <Route element={<Layout/>}>
            <Route path="/pizza" element={<DetalleDePizza />}/>
          </Route>
          <Route path="/carrito" element={<FormularioDePago/>} />
          </Route>
          <Route path="/pedido-exitoso" element={<PagoExitoso/>}/>
          <Route path="/formulario-pago" element={<FormularioDePago/>}/>
        </Routes>
      </PizzaProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from '../components/Home/Home';
// import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza";

// const AppRoutes = () => {

//   return (
//     <Router>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/pizza/:id" component={DetalleDePizza} />
//     </Switch>
//   </Router>
//   );
//   }

// export default AppRoutes;