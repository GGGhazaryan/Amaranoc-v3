import { useEffect, useState } from 'react';
// import RussiaRoomFilter from './RussiaRoomFilter'
export default function RussiaPoolFilter() {
  const [poolOptions, setPoolOptions] = useState([]);

  useEffect(() => {
    const fetchPoolOptions = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/RuPoolOptions.json'
        );
        if (!response.ok) throw new Error('Failed to fetch poolOptions');
        const data = await response.json();
        setPoolOptions(data);
      } catch (error) {
        console.error('Error fetching poolOptions:', error);
      }
    };

    fetchPoolOptions();
  }, []);

  return (
   <></>
  );
}
