import { fetchCurrentRates } from 'utils/fetchCurrentRates';
import { useEffect } from 'react';
import { useState } from 'react';

export const Rates = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetchCurrentRates().then(data => {
      setRates(data.rates);
    });
  }, []);

  return (
    <>
      <h1>Rates</h1>
      <p>One USD is</p>
      {rates && (
        <ul>
          {Object.entries(rates).map(([key, value]) => {
            return (
              <li key={key}>
                {key}: {(1 / value).toFixed(2)}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
