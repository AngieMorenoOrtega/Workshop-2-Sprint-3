import React, { useState } from "react";
import Slider from "react-slick";

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
    <div>
      <h2>{pizza.nombre}</h2>
      <p>Precio: {pizza.precio}</p>
      <p>Reviews: {pizza.reviews}</p>
      <p>{pizza.descripcion}</p>
      <div className="slider">
        <Slider {...settings} initialSlide={currentImageIndex}>
          <div>
            <img src={pizza.imagen} alt="Pizza 1" />
          </div>
          <div>
            <img src={pizza.imagen2} alt="Pizza 2" />
          </div>
          <div>
            <img src={pizza.imagen3} alt="Pizza 3" />
          </div>
        </Slider>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default DetalleDePizza;
