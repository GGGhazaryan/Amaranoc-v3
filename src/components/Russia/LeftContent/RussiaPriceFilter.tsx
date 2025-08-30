import { useEffect, useState } from 'react';

type PriceFilterProps = {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
};

export default function RussiaPriceFilter({ selectedCurrency, setSelectedCurrency }: PriceFilterProps) {
  const [priceCurrencies, setPriceCurrencies] = useState<string[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/priceCurrencies.json'
        );
        if (!response.ok) throw new Error('Failed to fetch priceCurrencies');
        const data = await response.json();
        setPriceCurrencies(data);
        if (data.length > 0 && !selectedCurrency) setSelectedCurrency(data[0]);
      } catch (error) {
        console.error('Error fetching priceCurrencies:', error);
      }
    };

    fetchCurrencies();
  }, [selectedCurrency, setSelectedCurrency]);

  return (
    <div className="priceRow">
      <span className="label" style={{marginRight:'5px'}}>Цена</span>
      <div className="currencies" style={{marginRight:'7px'}}>
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
