import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './PagoExitoso.scss'; // Archivo de estilos CSS para las animaciones
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';



 
const PagoExitoso = () => { 
    const navigate = useNavigate();

    const handleHome = () => {
        // Lógica para realizar el pago
        irAHome();
    };

    const irAHome = () => {
        // Realiza alguna acción con la información del contador antes de redirigir
        navigate('/home');
    };
  return (
    <div className="pago-exitoso">
 <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300}>
        <div className="pago-exitoso_div" >
        <Confetti />
          <p className='pago-exitoso_pedido'>Tu pedido está en proceso</p>
          <p className='pago-exitoso_p'>Serás notificado cuando llegue el repartidor</p>
          <div>
            <button onClick={handleHome}>Aceptar</button>
          </div>
          
        </div>
      </CSSTransition>
    </TransitionGroup>
    </div>
   
  )
}

export default PagoExitoso
