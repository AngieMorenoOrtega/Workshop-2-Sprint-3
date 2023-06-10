import React, { useContext } from 'react';
import { CarritoContext } from '../../Carrito/Carrito';

const PrecioTotal = () => {
  const { cantidadPizzas } = useContext(CarritoContext);
  const precio = 22;
  const precioTotal = cantidadPizzas * precio;

  return (
    <div>
      <p>Cantidad de pizzas: {cantidadPizzas}</p>
      <p>Precio total: {precioTotal}</p>
    </div>
  );
};

export default PrecioTotal;
