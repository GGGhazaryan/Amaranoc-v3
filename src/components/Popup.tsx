import React from 'react';
import Card from './RightContent/Card';

type PopupProps = {
  cards: {
    id: number;
    image?: string;
    title?: string;
    price?: string;
    location?: string;
    people?: string;
  }[];
  onClose: () => void;
};

export default function Popup({ cards, onClose }: PopupProps) {
  const popupStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const popupContentStyle: React.CSSProperties = {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
    position: 'relative'
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    border: 'none',
    background: 'none'
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '20px'
  };

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>✖</button>
        <div style={cardsContainerStyle}>
          {cards.length ? (
            cards.map(card => <Card key={card.id} card={card} />)
          ) : (
            <p>Ոչինչ չի գտնվել</p>
          )}
        </div>
      </div>
    </div>
  );
}
