import React, { createContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [cantidadPizzas, setCantidadPizzas] = useState(0);
  const precio={ precio:22}

  useEffect(() => {
    // Rescatar la cantidad de pizzas del estado local (localStorage) al cargar el contexto
    const storedCantidadPizzas = localStorage.getItem('cantidadPizzas');
    if (storedCantidadPizzas) {
      setCantidadPizzas(parseInt(storedCantidadPizzas));
    }
  }, []);

  const actualizarCantidadPizzas = (cantidad) => {
    setCantidadPizzas(cantidad);
    // Actualizar el estado local (localStorage) con la nueva cantidad de pizzas
    localStorage.setItem('cantidadPizzas', cantidad.toString());
  };

  return (
    <CarritoContext.Provider value={{ cantidadPizzas, actualizarCantidadPizzas }}>
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoContext, CarritoProvider };
