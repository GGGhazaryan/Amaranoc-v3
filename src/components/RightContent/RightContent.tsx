import React from 'react';
import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent(): React.ReactElement {
  return (
    <main className="rightContentMain" style={{ marginTop: "5%" }}>
      <div className="headersContainer">
        <div style={{ fontSize: "24px", cursor: "pointer", borderBottom: "5px solid #ddd", width: '30px', height: '30px', borderRadius: '50%' }}> <i className="fas fa-arrow-left" style={{ fontSize: "24px", cursor: "pointer" }}></i></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item1.png" alt="item1" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item2.png" alt="item2" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item3.png" alt="item3" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item4.png" alt="item4" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item5.png" alt="item5" /></div>
        <div className="rightContentHeader"><img className="itemsInHeader" src="./public/item6.png" alt="item6" /></div>
        <div style={{ fontSize: "24px", cursor: "pointer", borderBottom: "5px solid #ddd", width: '30px', height: '30px', borderRadius: '50%' }}> <i className="fas fa-arrow-right" style={{ fontSize: "24px", cursor: "pointer" }}></i></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1050px', padding: '10px', borderBottom: "2px solid #ddd" }}>
        <span style={{ fontWeight: 'bold' }}>Լավագույն առաջարկներ</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <div>
            <div><img className="grid2" src="./public/grid-2.png" alt="grid2icon" /></div>
          </div>
          <div>
            <div><img className="grid3" src="./public/grid-3.png" alt="grid3icon" /></div>
          </div>
        </div>
      </div>
      <div className="rightContentWrapper">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}
