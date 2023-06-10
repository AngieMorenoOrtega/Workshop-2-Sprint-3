import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import "./Contador.scss"
import { useNavigate } from 'react-router-dom';

const Contador = () => {

    const navigate = useNavigate();

    const handlePagarClick = () => {
        // Lógica para realizar el pago
        irAlCarrito();
    };

    const irAlCarrito = () => {
        // Realiza alguna acción con la información del contador antes de redirigir
        navigate('/carrito');
    };

    const [counter, setCounter] = useState(0);

    const incrementar = () => {
        setCounter(counter + 1);
    };

    const decrementar = () => {
        setCounter(counter - 1);
    };

    const eliminarContenido = () => {
        setCounter(0);
    };


    return (
        <div className=''>
            <div className='contador'>
            <button onClick={decrementar}>-</button>
            <p> {counter}</p>
            <button onClick={incrementar}>+</button>

            <button id="botoneliminar" onClick={eliminarContenido}><FaTrash /></button>

            <button onClick={handlePagarClick}>Pagar</button>

            </div>
            
        </div>
    );
};

export default Contador;