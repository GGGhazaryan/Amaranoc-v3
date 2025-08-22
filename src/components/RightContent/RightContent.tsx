import React, { useState } from 'react';
import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent(): React.ReactElement {
  const [columns, setColumns] = useState(4);

  const handleGrid2Click = () => {
    setColumns(prev => prev === 2 ? 4 : 2);
  };

  const handleGrid3Click = () => {
    setColumns(prev => prev === 3 ? 4 : 3);
  };

  return (
    <main className="rightContentMain" style={{ marginTop: "5%" }}>
      <div className="headersContainer" style={{ alignItems: 'center' }}>
        <div style={{ fontSize: "24px", cursor: "pointer", borderBottom: "5px solid #ddd", width: '30px', height: '30px', borderRadius: '50%' }}>
          <i className="fas fa-arrow-left" style={{ fontSize: "24px", cursor: "pointer" }}></i>
        </div>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div className="rightContentHeader" key={i}>
            <img className="itemsInHeader" src={`./item${i}.png`} alt={`item${i}`} />
          </div>
        ))}
        <div style={{ fontSize: "24px", cursor: "pointer", borderBottom: "5px solid #ddd", width: '30px', height: '30px', borderRadius: '50%' }}>
          <i className="fas fa-arrow-right" style={{ fontSize: "24px", cursor: "pointer" }}></i>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1050px', padding: '10px', borderBottom: "2px solid #ddd" }}>
        <span style={{ fontWeight: 'bold' }}>Լավագույն առաջարկներ</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px', alignItems: 'center' }}>
          <div onClick={handleGrid2Click} style={{ cursor: 'pointer' }}>
            <img className="grid2" src="./grid-2.png" alt="grid2icon" />
          </div>
          <div onClick={handleGrid3Click} style={{ cursor: 'pointer' }}>
            <img className="grid3" src="./grid-3.png" alt="grid3icon" />
          </div>
        </div>
      </div>

      <div
        className="rightContentWrapper"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,

          width: '400px !important',
          gap: '5px'
        }}
      >
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}

      </div>
    </main>
  );
}
