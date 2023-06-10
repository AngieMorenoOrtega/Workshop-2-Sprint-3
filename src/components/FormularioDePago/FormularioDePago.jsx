import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import "./FormularioDePago.scss";

const FormularioDePago = () => {
  const navigate = useNavigate();

  const handleConfirmarPago = () => {
    // Lógica para confirmar el pago y realizar cualquier otra acción necesaria

    // Navegar al usuario a la página de pedido exitoso
    navigate("/pedido-exitoso");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Lógica para manejar los datos del formulario
    console.log(data);
  };

  return (
    <div className="contenedor">
      <button id="todas">&lt;&nbsp;&nbsp;Carrito de Compras</button>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre completo</label>
          <input
            placeholder="Ingresa tu Nombre"
            type="text"
            {...register("fullName", { required: 'El nombre completo es obligatorio' })}
          />
          {errors.fullName && <span className="form-error">{errors.fullName.message}</span>}
        </div>

        <div>
          <label>Número de tarjeta de crédito</label>
          <input
            placeholder="1234 1234 1234 1234"
            type="text"
            {...register("creditCardNumber", { required: 'El número de tarjeta es obligatorio' })}
          />
          {errors.creditCardNumber && <span className="form-error">{errors.creditCardNumber.message}</span>}
        </div>

        <div>
          <label>Fecha de vencimiento</label>
          <input
            placeholder="MM/YY"
            type="text"
            {...register("expirationDate", { required: 'La fecha de vencimiento es obligatoria' })}
          />
          {errors.expirationDate && <span className="form-error">{errors.expirationDate.message}</span>}
        </div>

        <div>
          <label>CVV</label>
          <input type="text" {...register("cvv", { required: 'El CVV es obligatorio' })} />
          {errors.cvv && <span className="form-error">{errors.cvv.message}</span>}
        </div>

        <div>
          <label>Dirección</label>
          <input
            placeholder="Av.Morelos #123"
            type="text"
            {...register("address", { required: 'La dirección es obligatoria' })}
          />
          {errors.address && <span className="form-error">{errors.address.message}</span>}
        </div>
        <div className="button">
          <button type="submit" onClick={handleConfirmarPago} disabled={Object.keys(errors).length !== 0}>
            Pagar ahora
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDePago;
