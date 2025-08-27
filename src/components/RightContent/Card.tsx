import React, { useState } from 'react';
import { useLikedStore } from '../../store';

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
  largeMode?: boolean; // ✅ Add prop
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

  const isLiked = likedCards.some(c => c.title === card.title);

  const handleImageLoad = () => {
    setTimeout(() => setLoading(false), 1500);
  };

  const convertedPrice = convertPrice(card.price || '0', baseCurrency, selectedCurrency);

  return (
    <div
      className={`card ${largeMode ? 'large' : ''}`}
      style={{
        transition: 'all 0.3s ease',
      }}
    >
      <div className={`cardImage ${loading ? 'skeleton' : ''}`}>
        <img
          src={card.image || ''}
          alt={card.title || 'No Title'}
          className={loading ? 'blur' : ''}
          onLoad={handleImageLoad}
          style={{ height: largeMode ? '320px' : '260px', objectFit: 'cover' }}
        />
        <button
          className={`likeButton ${isLiked ? 'liked' : ''}`}
          onClick={() => toggleLike(card)}
          aria-label={isLiked ? 'Unlike' : 'Like'}
          type="button"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className={`cardInfo ${loading ? 'skeleton' : ''}`}>
        <h3 className="titleRow">
          <span className="icon skeleton-icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span className="locationText skeleton-text">{card.location || 'No Location'}</span>
          <span className="icon peopleIcon skeleton-icon">
            <i className="fas fa-users"></i>
          </span>
          <span className="peopleText skeleton-text">{card.people || 'N/A'}</span>
        </h3>
        <p>
          <span className="icon skeleton-icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="skeleton-text">{convertedPrice}</span>
        </p>
      </div>
    </div>
  );
}
