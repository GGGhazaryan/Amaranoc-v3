import { useEffect, useState } from 'react';

export default function PriceFilter() {
  const [priceCurrencies, setPriceCurrencies] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/priceCurrencies.json'
        );
        if (!response.ok) throw new Error('Failed to fetch priceCurrencies');
        const data = await response.json();
        setPriceCurrencies(data);
        if (data.length > 0) setSelectedCurrency(data[0]);
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
          <button
            key={index}
            className="priceBtns"
            onClick={() => setSelectedCurrency(currency)}
            style={{
              backgroundColor: selectedCurrency === currency ? 'black' : '',
              color: selectedCurrency === currency ? 'white' : ''
            }}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
}
