import React, { useState, useEffect, useCallback } from 'react';

// Типы данных карточки
type CardData = {
  id: number;
  image?: string;
  title?: string;
  price?: string;
  location?: string;
  people?: string;
  region?: string;
};

// Типы пропсов компонента
type StartEndInputProps = {
  cards: CardData[];
  onFilter: (filtered: CardData[]) => void;
};

export default function RussiaStartEndInput({ cards, onFilter }: StartEndInputProps) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [startError, setStartError] = useState<string | null>(null);
  const [endError, setEndError] = useState<string | null>(null);

  // Обработчик для изменения start и end
  const handleChange = useCallback(() => {
    const startNum = Number(start.replace(/\D/g, '')) || 0;
    const endNum = Number(end.replace(/\D/g, '')) || Infinity;

    // Валидация значений
    if (startNum > endNum) {
      setStartError('Start price cannot be greater than End price');
      setEndError('End price cannot be less than Start price');
    } else {
      setStartError(null);
      setEndError(null);
    }

    // Фильтрация карточек
    const filtered = cards.filter(card => {
      const priceNum = Number((card.price || '0').replace(/\D/g, ''));
      return priceNum >= startNum && priceNum <= endNum;
    });

    // Вызов родительской функции для обновления фильтрованных карточек
    onFilter(filtered);
  }, [start, end, cards, onFilter]);

  // Используем useEffect для фильтрации с задержкой
  useEffect(() => {
    const timer = setTimeout(() => {
      handleChange();
    }, 500); // Пауза 500ms перед фильтрацией

    return () => clearTimeout(timer);
  }, [start, end, handleChange]);

  const inputStyle: React.CSSProperties = {
    height: '40px',
    width: '120px',
    borderRadius: '5px',
    marginRight: '3px',
    border: '1px solid gray',
    opacity: 0.7,
    textAlign: 'center'
  };

  const underscoreStyle: React.CSSProperties = {
    padding: '5px'
  };

  const errorStyle: React.CSSProperties = {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px'
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Начиная"
        value={start}
        onChange={e => setStart(e.target.value)}
        style={inputStyle}
      />
      <p style={underscoreStyle}>-</p>
      <input
        type="text"
        placeholder="До"
        value={end}
        onChange={e => setEnd(e.target.value)}
        style={inputStyle}
      />
      {startError && <div style={errorStyle}>{startError}</div>}
      {endError && <div style={errorStyle}>{endError}</div>}
    </div>
  );
}
