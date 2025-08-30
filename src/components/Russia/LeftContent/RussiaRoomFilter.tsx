import { useEffect, useState } from 'react';

type Props = {
  selectedRoomCount: string;
  onChange: (value: string) => void;
};

export default function RussiaRoomFilter({ selectedRoomCount, onChange }: Props) {
  const [roomCounts, setRoomCounts] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoomCounts = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/RuRoomCounts.json'
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

  useEffect(() => {
    if (roomCounts.length > 0 && selectedRoomCount === '') {
      onChange(roomCounts[0]);
    }
  }, [roomCounts, selectedRoomCount, onChange]);

  return (
    <div className="roomsCount">
      <label className="roomsLabel">Количество комнат</label>
      <div className="roomBtns">
        {roomCounts.map((count, index) => (
          <button
            key={index}
            onClick={() => onChange(count)}
            className={
              count === 'Все'
                ? 'yesBtn'
                : count === '6 и более'
                ? 'roomBtn roomBtn6'
                : 'roomBtn'
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
