import { useEffect, useState } from 'react';

export default function PriceFilter() {
  const [priceCurrencies, setPriceCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/priceCurrencies.json'
        );
        if (!response.ok) throw new Error('Failed to fetch priceCurrencies');
        const data = await response.json();
        setPriceCurrencies(data);
      } catch (error) {
        console.error('Error fetching priceCurrencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div className="priceRow">
      <span className="label">Արժեք</span>
      <div className="currencies">
        {priceCurrencies.map((currency, index) => (
          <button key={index} className="priceBtns">
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
}
