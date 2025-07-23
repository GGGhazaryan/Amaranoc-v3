import '../../css/App.css'
import RegionFilter from './RegionFilter';
import PriceFilter from './PriceFilter';
import StartEndInput from './StartEndInput';
import PeopleCounter from '../PeopleCounter';
import NightStayFilter from './NightStayFilter';
import RoomFilter from './RoomFilter';
import BathroomFilter from './BathroomFilter';
import PoolFilter from './PoolFilter';
import FeatureFilter from './FeatureFilter';

export default function LeftContent() {
  return (
    <aside className="container">
      <div className="mainLeftContentDiv">
        <RegionFilter />
        <PriceFilter />
        <StartEndInput />
        <PeopleCounter label="Մարդկանց թույլատրելի քանակ" />
        <NightStayFilter />
        <PeopleCounter label="Մարդկանց թույլատրելի քանակ Գիշերակացության համար" />
        <RoomFilter />
        <BathroomFilter />
        <PoolFilter />
        <FeatureFilter />
      </div>
    </aside>
  );
}
