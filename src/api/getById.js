import axios from 'axios';

const getById = async (id) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return data;
  } catch (err) {
    return {};
  }
}

export default getById;
