import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";


const FormularioDePago = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Realizar el envío del formulario o cualquier otra acción
      console.log(formData);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Validar nombre completo
    if (!data.fullName) {
      errors.fullName = "El nombre completo es obligatorio";
    }

    // Validar número de tarjeta de crédito
    if (!data.creditCardNumber) {
      errors.creditCardNumber = "El número de tarjeta es obligatorio";
    } else if (!isValidCreditCardNumber(data.creditCardNumber)) {
      errors.creditCardNumber = "El número de tarjeta es inválido";
    }

    // Validar fecha de vencimiento
    if (!data.expirationDate) {
      errors.expirationDate = "La fecha de vencimiento es obligatoria";
    } else if (!isValidExpirationDate(data.expirationDate)) {
      errors.expirationDate = "La fecha de vencimiento es inválida";
    }

    // Validar CVV
    if (!data.cvv) {
      errors.cvv = "El CVV es obligatorio";
    } else if (!isValidCVV(data.cvv)) {
      errors.cvv = "El CVV es inválido";
    }

    // Validar dirección
    if (!data.address) {
      errors.address = "La dirección es obligatoria";
    }

    return errors;
  };

  const isValidCreditCardNumber = (creditCardNumber) => {
    // Lógica de validación del número de tarjeta de crédito
    // Implementa tu propia lógica de validación aquí
    return creditCardNumber.length === 16;
  };

  const isValidExpirationDate = (expirationDate) => {
    // Lógica de validación de la fecha de vencimiento
    // Implementa tu propia lógica de validación aquí
    return expirationDate.length === 4;
  };

  const isValidCVV = (cvv) => {
    // Lógica de validación del CVV
    // Implementa tu propia lógica de validación aquí
    return cvv.length === 3;
  };
  const navigate = useNavigate();

  const handleConfirmarPago = () => {
    // Lógica para confirmar el pago y realizar cualquier otra acción necesaria

    // Navegar al usuario a la página de pedido exitoso
    navigate("/pedido-exitoso");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre completo:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span>{errors.fullName}</span>}
      </div>

      <div>
        <label>Número de tarjeta de crédito:</label>
        <input
          type="text"
          name="creditCardNumber"
          value={formData.creditCardNumber}
          onChange={handleChange}
        />
        {errors.creditCardNumber && <span>{errors.creditCardNumber}</span>}
      </div>

      <div>
        <label>Fecha de vencimiento:</label>
        <input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />
        {errors.expirationDate && <span>{errors.expirationDate}</span>}
      </div>

      <div>
        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
        />
        {errors.cvv && <span>{errors.cvv}</span>}
      </div>

      <div>
        <label>Dirección:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span>{errors.address}</span>}
      </div>

      <button type="submit" onClick={handleConfirmarPago}>Pagar ahora</button>
    </form>
  );
};

export default FormularioDePago;
