import { useEffect, useState } from 'react';
import { fetchCurrency } from 'utils/fetchCurrency';
import { fetchRates } from 'utils/fetchRates';

export const HomePage = () => {
  const [currency, setCurrency] = useState(null);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('GBP');
  const [amount, setAmount] = useState(null);
  const [result, setResult] = useState(null);

  const success = pos => {
    const { latitude, longitude } = pos.coords;
    fetchCurrency(latitude, longitude).then(response =>
      setCurrency(response.results[0].annotations.currency.iso_code)
    );
  };

  const error = err => {
    setCurrency('USD');
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (!amount) {
      return;
    }
    fetchRates(from, to, amount).then(setResult);
  }, [from, to, amount]);

  const submitHandler = event => {
    event.preventDefault();
    const value = event.target.elements.value.value;
    const array = value.split(' ');
    setFrom(array[1]);
    setTo(array[3]);
    setAmount(array[0]);
  };

  return (
    <>
      <h1>Home</h1>
      {currency ? <p>Your currency: {currency}</p> : <p>Loading...</p>}
      <form onSubmit={submitHandler}>
        <input placeholder="15 USD in UAH" name="value" />
        <button type="submit">go</button>
      </form>
      {result && <p>{result}</p>}
    </>
  );
};
