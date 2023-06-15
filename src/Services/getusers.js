import axios from "axios";

const API_FAKE = "https://believed-bristle-mask.glitch.me/";
const endpointUsuarios = "usuarios";


export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${API_FAKE}${endpointUsuarios}`);
    console.log(data);
    return data; // Return only the 'usuarios' array
  } catch (error) {
    console.log(error);
    return [];
  }
};


