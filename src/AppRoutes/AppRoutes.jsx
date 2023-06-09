import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PizzaProvider } from '../Context/Context';
import Home from "../components/Home/Home"
import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza"
import Layout from "../components/Layout/Layout"
import FormularioDePago from "../components/FormularioDePago/FormularioDePago"

import InicioSesion from '../components/InicioSesion/InicioSesion';


const AppRoutes = () => {
  return (
    <Router>
      <PizzaProvider>
        <Routes>
          <Route path="/" element={<InicioSesion/>} />
          <Route path="/pizza" element={<Layout><DetalleDePizza /></Layout>} />
          <Route path="/carrito" element={<FormularioDePago/>} />
          
        </Routes>
      </PizzaProvider>
    </Router>
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