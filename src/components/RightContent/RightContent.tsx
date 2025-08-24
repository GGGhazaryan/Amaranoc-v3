import React, { useState } from 'react';
import Card from './Card';

type CardData = {
  id: number;
  image?: string;
  title?: string;
  price?: string;
  location?: string;
  people?: string;
  region?: string;
};

type RightContentProps = {
  selectedRegions?: string[];
  priceRange?: {
    start: number;
    end: number;
  };
  cards: CardData[];
};

export default function RightContent({
  selectedRegions = [],
  priceRange,
  cards,
}: RightContentProps): React.ReactElement {
  const [columns, setColumns] = useState(3);

  const startPrice = priceRange?.start ?? 0;
  const endPrice = priceRange?.end ?? Infinity;

  // Filter cards again by price and region if needed
  const filteredCards = cards.filter(card => {
    const cardLocation = card.location?.trim().toLowerCase() || '';
    const regionMatch =
      selectedRegions.length === 0 || selectedRegions.some(region => region.trim().toLowerCase() === cardLocation);

    const priceNum = Number((card.price || '0').replace(/\D/g, ''));
    const priceMatch = priceNum >= startPrice && priceNum <= endPrice;

    return regionMatch && priceMatch;
  });

  const handleGrid2Click = () => {
    setColumns(prev => (prev === 2 ? 3 : 2));
  };

  const handleGrid3Click = () => {
    setColumns(3); // always 3 on this click as per original code
  };

  return (
    <main className="rightContentMain" style={{ marginTop: '5%' }}>
      <div className="container_forGeneralHeader">
        <div className="map">
          <img className="mapIcon" src="../../map.png" alt="map" />
        </div>
      </div>

      <div className="headersContainer" style={{ alignItems: 'center' }}>
        <div
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            borderBottom: '5px solid #ddd',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
          }}
        >
          <i className="fas fa-arrow-left" style={{ fontSize: '24px', cursor: 'pointer' }}></i>
        </div>

        {[1, 2, 3, 4, 5, 6].map(i => (
          <div className="rightContentHeader" key={i}>
            <img className="itemsInHeader" src={`./item${i}.png`} alt={`item${i}`} />
          </div>
        ))}

        <div
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            borderBottom: '5px solid #ddd',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
          }}
        >
          <i className="fas fa-arrow-right" style={{ fontSize: '24px', cursor: 'pointer' }}></i>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '1050px',
          padding: '10px',
          borderBottom: '2px solid #ddd',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Լավագույն առաջարկներ</span>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
          }}
        >
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
          width: '100%',
          gap: '15px',
        }}
      >
        {filteredCards.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666', fontSize: 18 }}>
            Ընտրված պարամետրերի համար առաջարկներ չկան
          </div>
        ) : (
          filteredCards.map(card => <Card key={card.id} card={card} />)
        )}
      </div>
    </main>
  );
}
