import React, { useState } from 'react';
import { useLikedStore } from '../../store';
import { useNavigate } from 'react-router-dom';

type CardData = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  people: string;
  region?: string;
};

type CardProps = {
  card: CardData;
  selectedCurrency: string;
  baseCurrency: string;
  largeMode?: boolean;
};

const rates = {
  '֏': 1,
  '$': 0.0026,
  '€': 0.0024,
  '₽': 0.18,
};

function convertPrice(priceStr: string, fromCurrency: string, toCurrency: string): string {
  const priceNum = Number(priceStr.replace(/\D/g, '')) || 0;
  if (!rates[fromCurrency] || !rates[toCurrency]) return priceStr;
  const converted = (priceNum / rates[fromCurrency]) * rates[toCurrency];
  return `${converted.toFixed(2)} ${toCurrency}`;
}

export default function Card({ card, selectedCurrency, baseCurrency, largeMode = false }: CardProps) {
  const { likedCards, toggleLike } = useLikedStore();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const isLiked = likedCards.some(c => c.title === card.title);

  const handleImageLoad = () => {
    setTimeout(() => setLoading(false), 150);
  };

  const convertedPrice = convertPrice(card.price || '0', baseCurrency, selectedCurrency);

  return (
    <div
      className={`card ${largeMode ? 'large' : ''}`}
      style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        height: largeMode ? '450px' : '380px'
      }}
      onClick={() => navigate(`/id/${card.id}`)}
    >
      <div className={`cardImage ${loading ? 'skeleton' : ''}`} style={{ position: 'relative', flexShrink: 0 }}>
        <img
          src={card.image || ''}
          alt={card.title || 'No Title'}
          className={loading ? 'blur' : ''}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: largeMode ? '320px' : '260px',
            objectFit: 'cover',
            transition: 'all 0.3s ease',
          }}
        />
        <button
          className={`likeButton ${isLiked ? 'liked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(card);
          }}
          aria-label={isLiked ? 'Unlike' : 'Like'}
          type="button"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          <i className="fas fa-heart" style={{ color: isLiked ? 'red' : '#ccc' }}></i>
        </button>
      </div>
      <div className={`cardInfo ${loading ? 'skeleton' : ''}`} style={{ padding: '1px', flexGrow: 1 }}>
      
        <h3 className="titleRow" style={{ display: 'flex', alignItems: 'center', fontSize: '22px', color:'#333',opacity:'0.7' }}>
          <span className="icon skeleton-icon"><i className="fas fa-map-marker-alt"></i></span>
          <span className="locationText skeleton-text">{card.location || 'No Location'}</span>
          <span className="icon peopleIcon skeleton-icon"><i className="fas fa-users"></i></span>
          <span className="peopleText skeleton-text">{card.people || 'N/A'}</span>
        </h3>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
          <span className="icon skeleton-icon"><i className="fas fa-dollar-sign"></i></span>
          <span className="skeleton-text">{convertedPrice}</span>
        </p>
      </div>
    </div>
  );
}
