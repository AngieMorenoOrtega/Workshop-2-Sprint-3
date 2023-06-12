import axios from "axios";

const API_Usuarios = "https://believed-bristle-mask.glitch.me/usuarios";
const endpointPizza = "usuarios";


export const getUsuarios = async () => {
  try {
    const { data } = await axios.get(`${API_Usuarios}`);
    console.log(data);
    return data;
    
  } catch (error) {
    console.log(error);
    return [];
  }
};
