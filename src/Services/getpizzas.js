import axios from "axios";

const API_FAKE = "https://believed-bristle-mask.glitch.me/";
const endpointPizza = "pizzas";


export const getPizzas = async () => {
  try {
    const { data } = await axios.get(`${API_FAKE}${endpointPizza}`);
    return data;
    
  } catch (error) {
    console.log(error);
    return [];
  }
};
