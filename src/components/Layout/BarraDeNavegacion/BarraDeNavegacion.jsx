
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { Outlet, useNavigate } from "react-router-dom";
import "./BarraDeNavegacion.scss";

const BarraDeNavegacion = () => {
  const navigate = useNavigate();
  const onSubmit = () => {

    navigate('/busqueda');
  };
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className='div'>
      <h1>Home</h1>
      <p>Pizzas Disponibles</p>
      <p>Ver todas</p>
      <div class="cupon">
        <div class="cupon_cupones">
          <p>Cupón para frontend</p>   <p> 50% OFF</p>
         
         
        </div> <div class="cupon_cupones"> <p>Cupón para backend</p>   <p> 50% OFF</p></div>
      </div>

      {user && <div className='div_usuario'><p>Que bueno verte  {user.usuario} !</p>
        <img src={user.imagen}></img></div>}
      <Outlet />
      <button onClick={onSubmit}>Busqueda </button>
    </div>
  );
};


export default BarraDeNavegacion