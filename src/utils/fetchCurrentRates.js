import axios from 'axios';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/';
const API_KEY = '686OgvfXO8YQ74tZ8Qb6mzGmmXhh2pdo';

export const fetchCurrentRates = async () => {
  try {
    const { data } = await axios(`${BASE_URL}latest?symbols=EUR,GBP&base=USD`, {
      headers: { apikey: API_KEY },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
