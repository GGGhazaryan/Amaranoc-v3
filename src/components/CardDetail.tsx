import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cards from '../data/DataBase';
import { useLikedStore } from '../store';

type CardData = {
  id: number;
  image?: string;
  images?: string[];
  title: string;
  price: string;
  location: string;
  people: string;
  region?: string;
  phone?: string; // добавим поле с телефоном (если есть)
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

function generateImageArray(mainImage: string, count: number = 3): string[] {
  const nameWithoutExt = mainImage.replace(/\.\w+$/, '');
  const ext = mainImage.split('.').pop();
  return Array.from({ length: count }, (_, i) =>
    i === 0 ? mainImage : `${nameWithoutExt}(${i}).${ext}`
  );
}

function generatePhoneNumber(seed: number): string {
  // Генерируем уникальный номер телефона для каждой карточки, например армянский формат +374 XX XXX XXX
  const getRandomDigits = (len: number) =>
    Array.from({ length: len }, () => Math.floor(seed * 9) % 10).join('');

  const part1 = ((seed * 17) % 90 + 10).toString(); // двухзначный код
  const part2 = ((seed * 31) % 900 + 100).toString();
  const part3 = ((seed * 13) % 900 + 100).toString();
  return `+374 ${part1} ${part2} ${part3}`;
}

export default function CardDetail({
  selectedCurrency = '$',
  baseCurrency = '֏',
}: {
  selectedCurrency: string;
  baseCurrency: string;
}) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // флаг флипа
  const { likedCards, toggleLike } = useLikedStore();

  const card: CardData | undefined = cards.find(c => c.id === Number(id));

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [id]);

  if (!card) {
    return <div style={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>Տվյալ քարտը չի գտնվել։</div>;
  }

  const isLiked = likedCards.some(c => c.id === card.id);
  const images = card.images?.length
    ? card.images
    : card.image
    ? generateImageArray(card.image)
    : ['placeholder.jpg'];

  const convertedPrice = convertPrice(card.price, baseCurrency, selectedCurrency);

  // Генерируем уникальный номер телефона для текущей карточки + текущего изображения
  const phoneNumber = generatePhoneNumber(card.id + currentIndex + 1);

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: '#f1f1f1',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}></i> Վերադառնալ
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Контейнер для флипа */}
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          style={{
            width: '100%',
            height: '500px',
            perspective: '1500px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              transition: 'transform 0.8s',
              transformStyle: 'preserve-3d',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Передняя сторона — картинка */}
            <img
              src={`/${images[currentIndex]}`}
              alt={card.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                backfaceVisibility: 'hidden',
                userSelect: 'none',
              }}
              draggable={false}
            />

     
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#ffda7a',
                color: '#333',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.5rem',
                fontWeight: '700',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                userSelect: 'none',
                padding: '0 20px',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{color:'white',opacity:'0.7'}}>Հեռախոսահամար</div>
              <div style={{ marginTop: '1rem',color:'white', fontSize: '3rem', letterSpacing: '3px' }}>{phoneNumber}</div>
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-10px',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt={`Նկար ${i}`}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsFlipped(false); 
                }}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: currentIndex === i ? '3px solid orange' : '1px solid #ccc',
                  borderRadius: '10px',
                  boxShadow: currentIndex === i ? '0 4px 12px rgba(30, 144, 255, 0.3)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        )}

        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>{card.title}</h1>

        <p style={{ fontSize: '1.2rem', color: '#555', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-map-marker-alt" style={{ color: 'orange' }}></i> Տեղակայություն: {card.location}
        </p>
        <p style={{ fontSize: '1.2rem', color: '#555', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-users" style={{ color: 'orange' }}></i> Մարդկանց քանակը: {card.people}
        </p>
        <p style={{ fontSize: '1.2rem', color: '#555', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-money-bill" style={{ color: 'orange' }}></i> Գին: {convertedPrice}
        </p>

        <button
          onClick={() => toggleLike(card)}
          style={{
            background: isLiked ? '#ffebeb' : '#f1f1f1',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: isLiked ? 'red' : '#999',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
}
