import React from 'react';
import cards from '../../data/DataBase';
import Card from './Card';

export default function RightContent(): React.ReactElement {
  return (
    <main className="rightContentMain" style={{ marginTop: "5%" }}>
      <div className="headersContainer">
        <div className="rightContentHeader"><img src="./public/item1.png" alt="item1" /></div>
        <div className="rightContentHeader"><img src="./public/item2.png" alt="item2" /></div>
        <div className="rightContentHeader"><img src="./public/item3.png" alt="item3" /></div>
        <div className="rightContentHeader"><img src="./public/item4.png" alt="item4" /></div>
        <div className="rightContentHeader"><img src="./public/item5.png" alt="item5" /></div>
        <div className="rightContentHeader"><img src="./public/item6.png" alt="item6" /></div>
      </div>
      <div className="rightContentWrapper">
        {cards.map(card => (  
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}
