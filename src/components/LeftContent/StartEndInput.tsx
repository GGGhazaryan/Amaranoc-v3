import React, { useState } from 'react';

type CardData = {
  id: number;
  image?: string;
  title?: string;
  price?: string;
  location?: string;
  people?: string;
  region?: string;
};

type StartEndInputProps = {
  cards: CardData[];
  onFilter: (filtered: CardData[]) => void;
};

export default function StartEndInput({ cards, onFilter }: StartEndInputProps) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSearch = () => {
    if (!Array.isArray(cards)) return;

    const startNum = Number(start.replace(/\D/g, '')) || 0;
    const endNum = Number(end.replace(/\D/g, '')) || Infinity;

    const filtered = cards.filter(card => {
      const priceNum = Number((card.price || '0').replace(/\D/g, ''));
      return priceNum >= startNum && priceNum <= endNum;
    });

    onFilter(filtered);
  };

  const inputStyle: React.CSSProperties = {
    height: '40px',
    width: '120px',
    borderRadius: '5px',
    marginRight: '3px',
    border: '1px solid gray',
    opacity: '0.7',
    textAlign: 'center'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '5px',
    cursor: 'pointer',
  };

  const underscoreStyle: React.CSSProperties = {
    padding: '5px'
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Սկսած"
        value={start}
        onChange={e => setStart(e.target.value)}
        style={inputStyle}
      />
      <p style={underscoreStyle}>-</p>
      <input
        type="text"
        placeholder="Մինչև"
        value={end}
        onChange={e => setEnd(e.target.value)}
        style={inputStyle}
        onClick={handleSearch}
      />
  
    </div>
  );
}
