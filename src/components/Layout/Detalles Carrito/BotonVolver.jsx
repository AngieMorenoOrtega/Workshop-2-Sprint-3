import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotonVolver.scss';

const BotonVolver = () => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/all');
  };

  return (
    <div className='Botonvolver'>
      <button id='todas' onClick={handleVolver}>
        &lt;&nbsp;&nbsp;Todas las Pizzas
      </button>
    </div>
  );
};

export default BotonVolver;
