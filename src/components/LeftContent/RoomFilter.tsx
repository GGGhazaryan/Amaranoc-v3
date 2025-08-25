import { useEffect, useState } from 'react';

export default function RoomFilter() {
  const [roomCounts, setRoomCounts] = useState<string[]>([]);
  const [selectedRoomCount, setSelectedRoomCount] = useState<string>('');

  useEffect(() => {
    const fetchRoomCounts = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/roomCounts.json'
        );
        if (!response.ok) throw new Error('Failed to fetch roomCounts');
        const data: string[] = await response.json();
        setRoomCounts(data);
      } catch (error) {
        console.error('Error fetching roomCounts:', error);
      }
    };

    fetchRoomCounts();
  }, []);

  // Устанавливаем первый элемент по умолчанию, если есть данные и ничего не выбрано
  useEffect(() => {
    if (roomCounts.length > 0 && selectedRoomCount === '') {
      setSelectedRoomCount(roomCounts[0]);
    }
  }, [roomCounts, selectedRoomCount]);

  return (
    <div className="roomsCount">
      <label className="roomsLabel">Սենյակների քանակ</label>
      <div className="roomBtns">
        {roomCounts.map((count, index) => (
          <button
            key={index}
            onClick={() => setSelectedRoomCount(count)}
            className={
              count === 'Բոլորը' ? 'yesBtn' :
              count === '6 և ավելի' ? 'roomBtn roomBtn6' :
              'roomBtn'
            }
            style={{
              backgroundColor: selectedRoomCount === count ? 'black' : '',
              color: selectedRoomCount === count ? 'white' : '',
              cursor: 'pointer',
            }}
          >
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}
