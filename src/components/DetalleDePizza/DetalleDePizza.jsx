import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import "./DetalleDePizza.scss";
const DetalleDePizza = () => {
  const pizza = {
    id: 1,
    nombre: "Pizza Margarita",
    precio: 8.99,
    reviews: 5,
    descripcion: "Deliciosa pizza clásica con tomate, mozzarella y albahaca",
    imagen: "https://th.bing.com/th/id/OIP.980GqsRwoZjg94qTuVdBZwHaJ_?pid=ImgDet&rs=1",
    imagen2: "https://th.bing.com/th/id/OIP.980GqsRwoZjg94qTuVdBZwHaJ_?pid=ImgDet&rs=1",
    imagen3: "https://th.bing.com/th/id/OIP.980GqsRwoZjg94qTuVdBZwHaJ_?pid=ImgDet&rs=1",
  }
const avatar={
  imagen:"https://i.ytimg.com/vi/YMREsp96YUo/maxresdefault.jpg"
}
  
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
          <div className="slider_figure">
            <img className="slider_images" src={pizza.imagen} alt="Pizza 1" />
          </div>
          <div className="slider_figure">
            <img className="slider_images"src={pizza.imagen2} alt="Pizza 2" />
          </div>
          <div className="slider_figure">
            <img className="slider_images" src={pizza.imagen3} alt="Pizza 3" />
          </div>
        </Slider>
        {/* <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button> */}

      <section>
      <h2 className="slider_name">{pizza.nombre}</h2>
      <div>
         <p className="slider_precio">Precio: {pizza.precio}</p>
      <p className="slider_review">Reviews: {pizza.reviews}</p>
      </div>
     <div>
      <p>Descripción</p>
      <p className="slider_descripcion">{pizza.descripcion}</p>
     </div>
     <div className="slider_comentarios">
      <div className="slider_avatar">
         <img src={avatar.imagen} className=""></img>
      </div>
     
     <div >
      <p>Marcos Toledo</p>
      <p> <FaStar /> <FaStar /> <FaStar /></p>
      <p>{comment1}</p>
     </div>
       </div>
       </section>
    </div>
  );
};

export default DetalleDePizza;
