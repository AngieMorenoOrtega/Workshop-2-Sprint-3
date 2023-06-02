import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
    <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza/:id" component={PizzaDetailPage} />
    </Switch>
  </Router>
  }

export default AppRoutes;