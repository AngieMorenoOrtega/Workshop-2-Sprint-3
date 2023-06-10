import React, { useState, useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import "./Contador.scss"
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../Carrito/Carrito';

const Contador = () => {
  const { cantidadPizzas, actualizarCantidadPizzas } = useContext(CarritoContext);
  const navigate = useNavigate();

  const handlePagarClick = () => {
    localStorage.setItem('cantidadPizzas', cantidadPizzas);
    irAlCarrito();
  };

  const irAlCarrito = () => {
    navigate('/formulario-pago');
  };

  const incrementar = () => {
    actualizarCantidadPizzas(cantidadPizzas + 1);
  };

  const decrementar = () => {
    if (cantidadPizzas > 0) {
      actualizarCantidadPizzas(cantidadPizzas - 1);
    }
  };

  const eliminarContenido = () => {
    actualizarCantidadPizzas(0);
  };

  return (
    <div className=''>
      <div className='contador'>
        <button onClick={decrementar}>-</button>
        <p> {cantidadPizzas}</p>
        <button onClick={incrementar}>+</button>

        <button id="botoneliminar" onClick={eliminarContenido}><FaTrash /></button>

        <button onClick={handlePagarClick}>Pagar</button>
      </div>
    </div>
  );
};

export default Contador;
