import { useEffect, useState } from 'react';

type PoolFilterProps = {
  onPoolFilterChange: (poolOption: string) => void; // Функция для изменения фильтра в родительском компоненте
};

export default function PoolFilter({ onPoolFilterChange }: PoolFilterProps) {
  const [poolOptions, setPoolOptions] = useState<string[]>([]);

  // Загружаем опции для фильтра
  useEffect(() => {
    const fetchPoolOptions = async () => {
      try {
        const response = await fetch(
          'https://amaranoc-4b1df-default-rtdb.firebaseio.com/poolOptions.json'
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

  // Обработчик клика по кнопке
  const handleButtonClick = (option: string) => {
    onPoolFilterChange(option); // Передаем выбранную опцию в родительский компонент
  };

  return (
    <div className="poolSection">
      <label className="sectionLabel">Լողավազան</label>
      <div className="poolBtns">
        {poolOptions.map((option, index) => (
          <button
            key={index}
            className={option === 'Բոլորը' ? 'allBtn' : 'poolBtn'}
            onClick={() => handleButtonClick(option)} // Обработчик нажатия
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
