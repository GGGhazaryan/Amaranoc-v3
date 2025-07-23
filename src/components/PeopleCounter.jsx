import { useState } from 'react';

export default function PeopleCounter({ label, min = 1, max = 99 }) {
  const [count, setCount] = useState(min);

  const increase = () => {
    setCount(prev => (prev < max ? prev + 1 : prev));
  };

  const decrease = () => {
    setCount(prev => (prev > min ? prev - 1 : prev));
  };

  return (
    <div className="peopleCount">
      {label && <div className="h3second">{label}</div>}
      <div className="peopleCounter">
        <button className="minusBtn countBtn" onClick={decrease}>-</button>
        <input
          type="number"
          className="peoplecountInput"
          value={count}
          readOnly
        />
        <button className="plusBtn countBtn" onClick={increase}>+</button>
      </div>
    </div>
  );
}
