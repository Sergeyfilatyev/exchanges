import axios from 'axios';

const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json?';
const API_KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';

export const fetchCurrency = async (lat, lng) => {
  try {
    const { data } = await axios(`${BASE_URL}q=${lat}+${lng}&key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
