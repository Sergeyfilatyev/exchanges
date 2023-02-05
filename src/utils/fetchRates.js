import axios from 'axios';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/convert';
const API_KEY = '686OgvfXO8YQ74tZ8Qb6mzGmmXhh2pdo';

export const fetchRates = async (from, to, amount) => {
  try {
    const { data } = await axios(
      `${BASE_URL}?to=${to}&from=${from}&amount=${amount}`,
      { headers: { apikey: API_KEY } }
    );
    return data.result.toFixed(2);
  } catch (error) {
    console.error(error);
  }
};
