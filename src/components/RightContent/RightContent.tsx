import React, { useState, useRef } from 'react';
import Card from './Card';
import PopupCalendar from '../PopupCalendar';
import MapPopup from '../MapPopup';

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
  selectedCurrency: string;
  baseCurrency: string;
  selectedNightStay: string;
  selectedRoomCount: string;
  selectedBathroomCount: string;
};

export default function RightContent({
  selectedRegions = [],
  priceRange,
  cards,
  selectedCurrency,
  baseCurrency,
  selectedNightStay,
  selectedRoomCount,
  selectedBathroomCount,
}: RightContentProps): React.ReactElement {
  const [columns, setColumns] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const itemFilters = [
    'Առանձնատներ',
    'Frame houses',
    'Տնակներ',
    'Փակ լողավազան',
    'Աղմուկից հեռու',
    'Շքեղ տեսարան',
    'Պահանջված',
    'Լճի ափին',
    'Գետի ափին',
    'Տաղավար',
  ];

  const togglePopup = () => setIsPopupOpen(prev => !prev);

  const startPrice = priceRange?.start ?? 0;
  const endPrice = priceRange?.end ?? Infinity;

  const halfIndex = Math.floor(cards.length / 2);
  const cardsToShow =
    selectedNightStay === 'Այո'
      ? cards.slice(0, halfIndex)
      : selectedNightStay === 'Ոչ'
      ? cards.slice(halfIndex)
      : cards;

  const filteredCards = cardsToShow.filter(card => {
    const cardLocation = card.location?.trim().toLowerCase() || '';
    const regionMatch =
      selectedRegions.length === 0 ||
      selectedRegions.some(region => region.trim().toLowerCase() === cardLocation);
    const priceNum = Number((card.price || '0').replace(/\D/g, ''));
    const priceMatch = priceNum >= startPrice && priceNum <= endPrice;
    return regionMatch && priceMatch;
  });

  const roomFilteredCards = filteredCards.filter(card => {
    if (selectedRoomCount === 'Բոլորը') return true;
    const roomNumber = selectedRoomCount === '6 և ավելի' ? 6 : Number(selectedRoomCount);
    if (isNaN(roomNumber)) return true;
    return card.id % 6 === roomNumber % 6;
  });

  const bathroomFilteredCards = roomFilteredCards.filter(card => {
    if (selectedBathroomCount === 'Բոլորը') return true;
    if (selectedBathroomCount === '3+') {
      return card.id % 4 >= 3;
    }
    const bathroomNumber = Number(selectedBathroomCount);
    if (isNaN(bathroomNumber)) return true;
    return card.id % 4 === bathroomNumber;
  });

  const getRandomCards = (arr: CardData[], count: number) => {
    if (arr.length <= count) return arr;
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const finalCards =
    selectedItemIndex !== null
      ? getRandomCards(bathroomFilteredCards, Math.floor(Math.random() * 2) + 2)
      : bathroomFilteredCards;

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(prev => (prev === index ? null : index));
  };

  const handleGrid2Click = () => {
    setColumns(prev => (prev === 2 ? 3 : 2));
  };

  const handleGrid3Click = () => {
    setColumns(3);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <main className="rightContentMain" style={{ marginTop: '5%' }}>
      <div className="container_forGeneralHeader">
        <div className="map">
          <div className="qartez" onClick={() => setIsMapOpen(true)}>
            <span className="idqartez">Քարտեզ</span><i style={{ marginLeft: '8px', color: '#333', fontSize: '15px' }} className="fa-solid fa-map"></i>
          </div>
          {isMapOpen && <MapPopup onClose={() => setIsMapOpen(false)} />}
          <div className="calendar" onClick={togglePopup} style={{ cursor: 'pointer' }}>
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      {isPopupOpen && <PopupCalendar onClose={togglePopup} />}

      <div
        className="sliderWrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center',
          width: '1300px',
          paddingLeft: '40px',
          marginRight: '20px',
        }}
      >
        <div
          onClick={scrollLeft}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            cursor: 'pointer',
          }}
        >
          <i className="fas fa-arrow-left" style={{ fontSize: '18px', color: '#333' }}></i>
        </div>

        <div
          className="headersContainer"
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: '20px',
            padding: '5px 0',
          }}
        >
          {itemFilters.map((title, i) => (
            <div
              key={i}
              onClick={() => handleItemClick(i)}
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                borderBottom: selectedItemIndex === i ? '3px solid orange' : '3px solid transparent',
                paddingBottom: '5px',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                className="itemsInHeader"
                src={`./item${i + 1}.png`}
                alt={`item${i + 1}`}
                style={{
                  maxWidth: '190px',
                  height: '55px',
                  opacity: selectedItemIndex === i ? 1 : 0.6,
                  transition: 'opacity 0.3s ease',
                }}
              />
              <p
                style={{
                  marginTop: '5px',
                  fontSize: '14px',
                  color: '#333',
                  fontWeight: 'bold',
                  opacity: selectedItemIndex === i ? 1 : 0.6,
                }}
              >
                {title}
              </p>
            </div>
          ))}

          <div
            onClick={scrollRight}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <i className="fas fa-arrow-right" style={{ fontSize: '18px', color: '#333' }}></i>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '1300px',
          padding: '10px',
          borderBottom: '2px solid #ddd',
        }}
      >
        <span className="span" style={{ fontWeight: 'bold', marginLeft: '5%', opacity: '0.7' }}>Լավագույն առաջարկներ</span>
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
          gridTemplateColumns:
            columns === 2 ? 'repeat(2, minmax(350px, 1fr))' : 'repeat(3, minmax(250px, 1fr))',
          width: '100%',
          gap: '40px',
          justifyContent: 'center',
          marginLeft: '80px',
          transition: 'all 0.4s ease',
        }}
      >
        {finalCards.length === 0 ? (
          <div
            style={{
              width: 'max-content',
              color: '#666',
              fontSize: 18,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Ընտրված պարամետրերի համար առաջարկներ չկան
          </div>
        ) : (
          finalCards.map(card => (
            <Card
              key={card.id}
              card={card}
              selectedCurrency={selectedCurrency}
              baseCurrency={baseCurrency}
              largeMode={columns === 2}
            />
          ))
        )}
      </div>
    </main>
  );
}
