import React from 'react';
import { useForm } from 'react-hook-form';
// import { NavLink } from "react-router-dom";
import logo from "./../../Assets/logo.png";
// import Imagen_fondo from "./../../Assets/Imagen_fondo.jpg";
import './InicioSesion.scss';



const InicioSesion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    // Aquí puedes realizar la lógica de inicio de sesión
    console.log(data);
  };

  return (
    <div className='Imagen_fondo'>

      <main className='main'>
        
       
        <nav className='navBar'>
          <section>
            <figure className="navBar__figure">
              <img src={logo} alt="logo" />
            </figure>
            {/* <NavLink className={"navBar__link"} to="/">Cartelera</NavLink> */}
          </section>
        </nav>
        <div className='titulo'>
          <h1>PiSassScript</h1>
        </div>
        <div className='inicio_de_sesion'>
          <h2>Inicia sesion en tu cuenta</h2>
        </div>
        <div className='Subtitulo'>
          <h4>Disfruta de la mejor pizza creada para las personas amantes del codigo.</h4>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Usuario</label>
              <input {...register('email', { required: 'Email es requerido' })} />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
              <label>Contraseña</label>
              <input {...register('password', { required: 'Contraseña es requerida' })} />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Restablecer contraseña</label>
              {/* <input {...register('password', { required: 'Nueva contraseña' })} />
            {errors.password && <span>{errors.contraseña.message}</span>} */}
            </div>
            {/* <div>
            <label>Contraseña</label>
            <input {...register('password', { required: 'Contraseña es requerida' })} />
            {errors.password && <span>{errors.password.message}</span>}
          </div> */}
            <div className='Nueva_cuenta'>
              <span>¿No tienes una cuenta?</span>
            </div>
            <button type="submit">Registrate aqui</button>
          </form>
        </div>
      </main>
    </div>
  );
};

// const Restablecer = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     // Aquí puedes realizar la lógica de creación de usuario
//     console.log(data);
//   };

//   return (
//     <div>
//       <h2>Crear nuevo usuario</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Email</label>
//           <input {...register('email', { required: 'Email es requerido' })} />
//           {errors.email && <span>{errors.email.message}</span>}
//         </div>
//         <div>
//           <label>Contraseña</label>
//           <input {...register('password', { required: 'Contraseña es requerida' })} />
//           {errors.password && <span>{errors.password.message}</span>}
//         </div>
//         <button type="submit">Crear usuario</button>
//       </form>
//     </div>
//   );
// };

// const Inicio = () => {
//   return (
//     <div>
//       {/* <InicioSesion /> */}
//       <Signup />
//     </div>
//   );
// };

export default InicioSesion;

