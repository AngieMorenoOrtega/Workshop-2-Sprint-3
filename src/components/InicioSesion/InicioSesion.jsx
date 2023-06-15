import React,{useContext, useEffect} from 'react';
import { useForm } from 'react-hook-form';
// import { NavLink } from "react-router-dom";
import logo from "./../../Assets/logo.png";
// import Imagen_fondo from "./../../Assets/Imagen_fondo.jpg";
import './InicioSesion.scss';
import { getUsers } from '../../Services/getusers';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Context/UserContext';


const InicioSesion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const users = [];

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      users.push(...fetchedUsers);
    };

    fetchUsers();
  }, []);


  const onSubmit = (data) => {
    const foundUser = users.find((user) => user.email === data.email && user.contraseña === data.password);
  
    if (foundUser) {
      // Inicio de sesión exitoso
    
        login(foundUser);
    console.log(foundUser);navigate("/all");  // Redirige a la página de dashboard
    } else {
      // Credenciales incorrectas
      console.log("Credenciales incorrectas");
    }
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

export default InicioSesion;

