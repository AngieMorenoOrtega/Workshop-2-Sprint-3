import React, { useState, useContext } from 'react';
import { PizzaContext } from '../../Context/Context'; // Reemplaza 'ruta/al/contexto' con la ruta correcta al contexto de las pizzas
import { useParams } from 'react-router-dom';

const Busqueda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { pizzas } = useContext(PizzaContext); // Accede a la lista de pizzas desde el contexto

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredPizzas);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPizzas.map((pizza) => (
        <div key={pizza.id}>
     
        </div>
      ))}
    </div>
  );
};

export default Busqueda;

