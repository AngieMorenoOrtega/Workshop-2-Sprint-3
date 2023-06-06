 import React, {createContext, useState} from 'react';


// export const CartContext = createContext();

// export const ContextCarritoProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//         setCartItems([...cartItems, product]);
//         console.log("cart items", cartItems)
//     };

//     const removeFromCart = (productId) => {
//         const updatedCartItems = cartItems.filter(
//             (item) => item.id !== productId
//         );
//         setCartItems(updatedCartItems);
//     };

//   return (
//     <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
//         {children}
//     </CartContext.Provider>
//   )
// }
const PizzaContext = createContext();

// Componente Proveedor del contexto
const PizzaProvider = ({ children }) => {
  // Aquí puedes inicializar y manejar los datos de las pizzas
  const pizzas = [
    {
      id: 1,
      nombre: "Pizza Margarita",
      precio: 8.99,
      reviews: 5,
      descripcion: "Deliciosa pizza clásica con tomate, mozzarella y albahaca",
      imagen: "margarita.jpg"
    },
    // ... otras pizzas ...
  ];

  return (
    <PizzaContext.Provider value={pizzas}>
      {children}
    </PizzaContext.Provider>
  );
};

// Hook para acceder al contexto de las pizzas
const usePizzaContext = () => useContext(PizzaContext);

export { PizzaProvider, usePizzaContext };