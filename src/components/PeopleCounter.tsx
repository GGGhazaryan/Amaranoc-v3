import React from 'react';

type PeopleCounterProps = {
  label: string;
  min?: number;
  max?: number;
  onChange: (count: number) => void;
  initialValue?: number;
};

export default function PeopleCounter({
  label,
  min = 1,
  max = 20,
  onChange,
  initialValue = 1,
}: PeopleCounterProps) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <label style={{ display: 'block', marginBottom: '6px' }}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button className="countBtn" onClick={decrement} disabled={count <= min}>
          -
        </button>
        <input  type="number"
        className="peoplecountInput"
         value={count}/>
        <button className="countBtn" onClick={increment} disabled={count >= max}>
          +
        </button>

      </div>
    </div>
  );
}
