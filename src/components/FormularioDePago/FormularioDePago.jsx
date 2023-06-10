import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./FormularioDePago.scss";
import PrecioTotal from "../Carrito/PrecioTotal";

const FormularioDePago = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleConfirmarPago = (data) => {
    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length === 0) {
      console.log(data);
      navigate("/pedido-exitoso");
      reset();
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = (data) => {
    const formErrors = {};
    if (!data.fullName) {
      formErrors.fullName = "El nombre completo es obligatorio";
    }
    if (!data.creditCardNumber) {
      formErrors.creditCardNumber = "El número de tarjeta es obligatorio";
    }
    if (!data.expirationDate) {
      formErrors.expirationDate = "La fecha de vencimiento es obligatoria";
    }
    if (!data.cvv) {
      formErrors.cvv = "El CVV es obligatorio";
    }
    if (!data.address) {
      formErrors.address = "La dirección es obligatoria";
    }
    return formErrors;
  };

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  return (
    <div className="contenedor">
      <button id="todas">&lt;&nbsp;&nbsp;Carrito de Compras</button>
      <PrecioTotal className="contenedor_precio"></PrecioTotal>
      <form className="form" onSubmit={handleSubmit(handleConfirmarPago)}>
        <div>
          <p>Información de pago</p>
          <div className="form_div">
          <label>Nombre completo</label>
          <input
            placeholder="Ingresa tu Nombre"
            type="text"
            {...register("fullName")}
          />
          {errors.fullName && (
            <span className="form-error">{errors.fullName}</span>
          )}
        </div></div>
        <div className="form_div">
          <label>Número de tarjeta de crédito</label>
          <input
            placeholder="1234 1234 1234 1234"
            type="text"
            {...register("creditCardNumber")}
          />
          {errors.creditCardNumber && (
            <span className="form-error">{errors.creditCardNumber}</span>
          )}
        </div>

        <div className="" id="labels">
          <div className="form_div" >
          <label>Fecha de vencimiento</label>
          <input
            placeholder="MM/YY"
            type="text"
            {...register("expirationDate")}
          />
          {errors.expirationDate && (
            <span className="form-error">{errors.expirationDate}</span>
          )}
          </div>
        <div className="form_div">
          <label>CVV</label>
          <input type="text" {...register("cvv")} />
          {errors.cvv && (
            <span className="form-error">{errors.cvv}</span>
          )}
        </div>
        </div>
        <div className="form_div">
          <label>Dirección</label>
          <input
            placeholder="Av.Morelos #123"
            type="text"
            {...register("address")}
          />
          {errors.address && (
            <span className="form-error">{errors.address}</span>
          )}
        </div>
        <div className="button">
          <button
            type="submit"
          >
            Pagar ahora
          </button>
        </div>
      </form>
      </div>
    );};

    export default 
    FormularioDePago