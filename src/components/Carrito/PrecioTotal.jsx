import React, { useContext } from 'react';
import { CarritoContext } from '../Carrito/Carrito';
import "./PrecioTotal.scss";
import { PizzaContext, PizzaProvider } from '../../Context/Context';

const PrecioTotal = () => {
  const { cantidadPizzas } = useContext(CarritoContext);
  const { selectedPizza } = useContext(PizzaContext);

  const precio = selectedPizza.precio;
  console.log(precio);
  const precioTotal = cantidadPizzas * precio;


  return (
    <div className="precio">
      <div className=''>
        <figure><img src={selectedPizza.imagen}  alt="Pizza"></img> </figure></div>
      <div className='precio_container'>
      <p> {selectedPizza.nombre}</p>
      <div className='precio_containerparrafo'>
        <p>Cantidad de pizzas: {cantidadPizzas}</p>
      <p>Precio total: {precioTotal}</p>   
      </div>
      </div>
    </div>
  );
};

export default PrecioTotal;
