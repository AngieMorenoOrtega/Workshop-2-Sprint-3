import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import DetalleDePizza from "../components/DetalleDePizza/DetalleDePizza";

const AppRoutes = () => {

  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizza/:id" component={DetalleDePizza} />
    </Switch>
  </Router>
  );
  }

export default AppRoutes;