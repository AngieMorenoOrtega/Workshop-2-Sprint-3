import React, { createContext, useState, useEffect } from 'react';
import { getPizzas } from '../Services/getpizzas';

const PizzaContext = createContext();
const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null); // State for the selected pizza

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
    <PizzaContext.Provider value={{ pizzas, selectedPizza, setSelectedPizza }}>
      {children}  
    </PizzaContext.Provider>
  );
};

export { PizzaContext, PizzaProvider };

