import React, { useState, useEffect, useContext} from 'react';
import { getPizzas } from '../../Services/getpizzas';
import { PizzaContext } from '../../Context/Context'; // Importa el contexto necesario
import { useNavigate } from 'react-router';
import "./CardsPizzas.scss";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CardsPizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const { setSelectedPizza } = useContext(PizzaContext); // Obtiene la función para establecer la pizza seleccionada

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await getPizzas();
        setPizzas(response);
      } catch (error) {
        console.error("Error al obtener la lista de pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);
  const navigate=useNavigate()
  const handlePizzaSelect = (pizza) => {
    setSelectedPizza(pizza); 
    console.log("Pizza seleccionada:", pizza); 
    navigate("/pizza");  
  };

  return (
    <div className="pizza-container">
      {pizzas.map((pizza) => (
        <Link
          key={pizza.id}
          to={`/pizza/${pizza.id}`} // Ruta dinámica con el ID de la pizza
          className="pizza-card"
          onClick={() => handlePizzaSelect(pizza)}
        >
          <h3>{pizza.nombre}</h3>
          <p>Precio: ${pizza.precio}</p>
        </Link>
      ))}
    </div>
  );
};

export default CardsPizzas;
