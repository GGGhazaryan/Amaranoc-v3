import { roomCounts } from '../../data/DataBase';

export default function RoomFilter() {
  return (
    <div className="roomsCount">
      <label className="roomsLabel">Սենյակների քանակ</label>
      <div className="roomBtns">
        {roomCounts.map((count, index) => (
          <button key={index} className={
            count === 'Բոլորը' ? 'allBtn' :
            count === '6 և ավելի' ? 'roomBtn roomBtn6' :
            'roomBtn'}>
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}
