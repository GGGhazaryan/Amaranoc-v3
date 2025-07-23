import { priceCurrencies } from '../../data/DataBase';

export default function PriceFilter() {
  return (
    <div className="priceRow">
      <span className="label">Արժեք</span>
      <div className="currencies">
        {priceCurrencies.map((currency, index) => (
          <button key={index} className="priceBtns">{currency}</button>
        ))}
      </div>
    </div>
  );
}
