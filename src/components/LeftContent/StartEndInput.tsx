import React, { useState } from 'react';
import cards from '../../data/DataBase';
import Popup from '../Popup';

export default function StartEndInput() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearch = () => {
    const startNum = Number(start.replace(/\D/g, '')) || 0;
    const endNum = Number(end.replace(/\D/g, '')) || Infinity;

    const filtered = cards.filter(card => {
      const priceNum = Number((card.price || '0').replace(/\D/g, ''));
      return priceNum >= startNum && priceNum <= endNum;
    });

    setFilteredCards(filtered);
    setShowPopup(true);
  };

  const inputStyle: React.CSSProperties = {
    height: '30px',
    width: '100px',
    borderRadius: '5px',
    marginRight:'3px'
    
  };

  const buttonStyle: React.CSSProperties = {
    padding:'5px',
    cursor: 'pointer',
    

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
      <input
        type="text"
        placeholder="Մինչև"
        value={end}
        onChange={e => setEnd(e.target.value)}
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleSearch}><i className="fa fa-search" aria-hidden="true"></i></button>

      {showPopup && (
        <Popup cards={filteredCards} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
