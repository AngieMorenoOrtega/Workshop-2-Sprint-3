import React from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import { PizzaProvider } from '../Context/Context';
import Home from "../components/Home/Home"
import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza"
import Layout from "../components/Layout/Layout"
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PizzaProvider>
        <Routes>
          <Route exact path="/" component={<Home />} />
          {/* <Route  component={<Layout/>} >
             <Route index path="pizza" component={<DetalleDePizza/>} />
          </Route>       */}
          <Route path="/pizza" element={<Layout><DetalleDePizza /></Layout>} />
   
      </Routes>
    </PizzaProvider>
      </BrowserRouter >

  );
};

export default AppRoutes;