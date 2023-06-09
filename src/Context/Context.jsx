import React, { createContext, useState, useEffect } from 'react';
import { getPizzas } from '../Services/getpizzas';
import AppRoutes from '../AppRoutes/AppRoutes';

const PizzaContext = createContext();
const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const pizzasData = await getPizzas();
        setPizzas(pizzasData);
      } catch (error) {
        console.log(error);
        setPizzas([]);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={pizzas}>
      {children}
      <AppRoutes/>
    </PizzaContext.Provider>
  );
};

export { PizzaContext, PizzaProvider };
