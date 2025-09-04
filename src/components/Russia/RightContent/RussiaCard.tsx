import React, { useState, useRef } from 'react';
import { useLikedStore } from '../../../store';
import { useNavigate } from 'react-router-dom';


type CardData = {
  id: number;
  image?: string;
  images?: string[];
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

function generateImageArray(mainImage: string, count: number = 4): string[] {
  const nameWithoutExt = mainImage.replace(/\.\w+$/, '');
  const ext = mainImage.split('.').pop();
  return Array.from({ length: count }, (_, i) =>
    i === 0 ? mainImage : `${nameWithoutExt}(${i}).${ext}`
  );
}

export default function RussiaCard({ card, selectedCurrency, baseCurrency, largeMode = false }: CardProps) {
  const { likedCards, toggleLike } = useLikedStore();
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const isLiked = likedCards.some(c => c.title === card.title);

  const handleImageLoad = () => {
    setTimeout(() => setLoading(false), 150);
  };

  const convertedPrice = convertPrice(card.price || '0', baseCurrency, selectedCurrency);

  const images = card.images && card.images.length > 0
    ? card.images
    : card.image
      ? generateImageArray(card.image, 4)
      : ['placeholder.jpg'];

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

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
      onMouseEnter={startAutoPlay}
      onMouseLeave={stopAutoPlay}
    >
      <div className={`cardImage ${loading ? 'skeleton' : ''}`} style={{ position: 'relative', flexShrink: 0 }}>
        <img
          src={`/${images[currentIndex]}`}
          alt={card.title || 'No Title'}
          className={loading ? 'blur' : ''}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: largeMode ? '320px' : '260px',
            objectFit: 'cover',
            transition: 'all 0.8s ease',
          }}
        />

        {images.length > 1 && (
          <div
            style={{
              position: 'absolute',
              top: '80%',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
              boxShadow: '1px 1px 1px solid #333'
            }}
          >
            {images.map((_, index) => (
              <span
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                style={{
                  width: currentIndex === index ? '12px' : '8px',
                  height: currentIndex === index ? '12px' : '8px',
                  borderRadius: '50%',
                  background: currentIndex === index ? '#fff' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: currentIndex === index ? '0 0 6px rgba(0,0,0,0.5)' : 'none'
                }}
              />
            ))}
          </div>
        )}

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
        <h3 className="titleRow" style={{ display: 'flex', alignItems: 'center', fontSize: '22px', color: '#333', opacity: '0.7' }}>
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
