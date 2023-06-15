import React, { useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { PizzaContext } from "../../Context/Context";
import "./DetalleDePizza.scss";
import { useParams } from 'react-router-dom';


const DetalleDePizza = () => {
  const { id } = useParams(); // Obtiene el ID de la pizza de los parámetros de la ruta
  const { pizzas } = useContext(PizzaContext);
  const selectedPizza = pizzas.find((pizza) => pizza.id === Number(id)); // Busca la pizza por el ID

  // if (!selectedPizza) {
  //   return <p>Pizza no encontrada</p>; // Manejo de caso de pizza no encontrada
  // }


  const avatar = {
    imagen: "https://i.ytimg.com/vi/YMREsp96YUo/maxresdefault.jpg",
  };

  // Lista de comentarios falsos de ejemplo
  const fakeComments = [
    "Excelente producto, lo recomiendo totalmente.",
    "El servicio al cliente fue excepcional, muy amables y atentos.",
    "Buena relación calidad-precio. Volvería a comprarlo.",
    "No quedé satisfecho con el producto, tuve algunos problemas.",
    "El envío fue rápido y el artículo llegó en perfectas condiciones.",
  ];

  // Función para generar un comentario falso aleatorio
  const generateFakeComment = () => {
    const randomIndex = Math.floor(Math.random() * fakeComments.length);
    return fakeComments[randomIndex];
  };

  // Ejemplo de uso
  const comment1 = generateFakeComment();
  const comment2 = generateFakeComment();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentImageIndex(next),
  };
  return (
    <div className="slider">
      <Slider {...settings} initialSlide={currentImageIndex}>
        { selectedPizza && (
          <div className="slider_figure">
            <img className="slider_images" src={ selectedPizza.imagen} alt="Pizza 1" />
          </div>
        )}
        { selectedPizza && (
          <div className="slider_figure">
            <img className="slider_images" src={ selectedPizza.imagen2} alt="Pizza 2" />
          </div>
        )}
        { selectedPizza && (
          <div className="slider_figure">
            <img className="slider_images" src={ selectedPizza.imagen3} alt="Pizza 3" />
          </div>
        )}
      </Slider>
      <section>
        { selectedPizza && (
          <>
            <h2 className="slider_name">{ selectedPizza.nombre}</h2>
            <div className="slider_div">
              <p className="slider_precio">${ selectedPizza.precio} MXN</p>
              <p className="slider_review"><span class="star"></span>&nbsp;{ selectedPizza.reviews} Reviews</p>
            </div>
            <div className="slider_descripcion">
              <p id="descripcion">Descripción</p>
              <p >{ selectedPizza.descripcion}</p>
            </div>
          </>
        )}
        <div className="slider_comentarios">
          <div className="slider_avatar">
            <img src={avatar.imagen} alt="Avatar" />
          </div>
          <div>
            <p>Marcos Toledo</p>
            <p>
              <FaStar /> <FaStar /> <FaStar />
            </p>
            <p>{comment1}</p>
          </div>
        </div>
      </section>
    </div>
  );
  
};

export default DetalleDePizza;
