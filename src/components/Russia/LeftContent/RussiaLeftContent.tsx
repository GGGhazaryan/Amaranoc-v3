import React, { useState, useEffect, useMemo } from 'react';
import '../../../css/App.css';
import RussiaRegionFilter from './RussiaRegionFilter';
import RussiaPriceFilter from './RussiaPriceFilter';
import RussiaStartEndInput from './RussiaStartEndInput';
import RussiaPeopleCounter from '../RussiaPeopleCounter';
import RussiaNightStayFilter from './RussiaNightStayFilter';
import RussiaRoomFilter from './RussiaRoomFilter';
import RussiaBathroomFilter from './RussiaBathroomFilter';
import RussiaPoolFilter from './RussiaPoolFilter';

import RussiaRightContent from '../RightContent/RussiaRightContent';
import { Rucard } from '../../../data/DataBase';

export default function RussiaLeftContent(): React.ReactElement {
  const [loaded, setLoaded] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedNightStay, setSelectedNightStay] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('₽');
  const [selectedRoomCount, setSelectedRoomCount] = useState('Все');
  const [selectedBathroomCount, setSelectedBathroomCount] = useState('Все');
  const [priceRange, setPriceRange] = useState({ start: 0, end: Infinity });
  const baseCurrency = '₽';

  const [filteredCards, setFilteredCards] = useState(Rucard); // State для отфильтрованных карточек

  // Simulate data load with a delay
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Memoize filteredCards based on selected filters
  const filteredCardsMemoized = useMemo(() => {
    return Rucard.filter(card => {
      const cardLocation = card.location?.trim().toLowerCase() || '';
      const regionMatch =
        selectedRegions.length === 0 ||
        selectedRegions.some(region => region.trim().toLowerCase() === cardLocation);

      const cardPeopleNum = Number(card.people) || 0;
      const peopleMatch = cardPeopleNum >= peopleCount;

      const priceNum = Number((card.price || '0').replace(/\D/g, ''));
      const priceMatch = priceNum >= priceRange.start && priceNum <= priceRange.end;

      return regionMatch && peopleMatch && priceMatch;
    });
  }, [selectedRegions, peopleCount, priceRange]);

  // Handler for region change
  const handleRegionChange = (regions: string[]) => {
    setSelectedRegions(regions);
  };

  // Skeleton loader while content is loading
  if (!loaded) {
    return (
      <aside
        className="container"
        style={{ marginTop: '19%', height: 'max-content', padding: '15 25' }}
      >
        <div className="mainLeftContentDiv skeleton" style={{ height: '500px' }}></div>
      </aside>
    );
  }

  return (
    <>
      <div className="father">
        <aside className="container" style={{ marginTop: '19%', height: 'max-content' }}>
          <div className="mainLeftContentDiv">
            <RussiaRegionFilter onRegionChange={handleRegionChange} />
            <RussiaPriceFilter
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
            <RussiaStartEndInput
              cards={Rucard}
              onFilter={setFilteredCards} // Передаем setFilteredCards в дочерний компонент
            />
            <RussiaPeopleCounter
              label="Количество разрешенных человек"
              min={1}
              max={20}
              onChange={setPeopleCount}
            />
            <RussiaNightStayFilter
              selectedNightStay={selectedNightStay}
              onChange={setSelectedNightStay}
            />
            <RussiaRoomFilter
              selectedRoomCount={selectedRoomCount}
              onChange={setSelectedRoomCount}
            />
            <RussiaBathroomFilter
              selectedBathroomCount={selectedBathroomCount}
              onBathroomCountChange={setSelectedBathroomCount}
            />
            <RussiaPoolFilter />
       
          </div>
        </aside>
      </div>

      <RussiaRightContent
        selectedRegions={selectedRegions}
        priceRange={priceRange}
        cards={filteredCardsMemoized}
        selectedCurrency={selectedCurrency}
        baseCurrency={baseCurrency}
        selectedNightStay={selectedNightStay}
        selectedRoomCount={selectedRoomCount}
        selectedBathroomCount={selectedBathroomCount}
      />
    </>
  );
}
