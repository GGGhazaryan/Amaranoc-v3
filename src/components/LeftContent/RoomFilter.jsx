import { useEffect, useState } from 'react';

export default function RoomFilter() {
  const [roomCounts, setRoomCounts] = useState([]);

  useEffect(() => {
    const fetchRoomCounts = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/roomCounts.json'
        );
        if (!response.ok) throw new Error('Failed to fetch roomCounts');
        const data = await response.json();
        setRoomCounts(data);
      } catch (error) {
        console.error('Error fetching roomCounts:', error);
      }
    };

    fetchRoomCounts();
  }, []);

  return (
    <div className="roomsCount">
      <label className="roomsLabel">Սենյակների քանակ</label>
      <div className="roomBtns">
        {roomCounts.map((count, index) => (
          <button
            key={index}
            className={
              count === 'Բոլորը' ? 'allBtn' :
              count === '6 և ավելի' ? 'roomBtn roomBtn6' :
              'roomBtn'
            }
          >
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}
