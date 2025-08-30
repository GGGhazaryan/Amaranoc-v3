import React, { useState, useRef } from "react";
import {cards} from "../../data/DataBase.js";  // Импорт всего объекта
import Card from "../RightContent/Card";  // Компонент карточки

export default function SearchInput(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState(""); // Состояние для текста поиска
  const popupRef = useRef<HTMLDivElement>(null);  // Ссылка на всплывающее окно

  // Получаем card

  // Фильтруем карточки по введенному поисковому запросу
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Закрытие всплывающего окна
  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.style.display = "none";
    }
  };

  return (
    <div className="inputPlaceholder">
      <input
        type="text"
        placeholder="Որոնում" // Замена текста на армянский или другой язык, если нужно
        className="inputToSearch"
        onChange={(e) => setSearchTerm(e.target.value)} // Обновляем текст поиска
        value={searchTerm} // Сохраняем значение поиска
      />
      <i className="fa fa-search" aria-hidden="true"></i>

      {searchTerm && ( // Показываем результаты только если есть текст в поиске
        <div className="searchResultsWrapper">
          {filteredCards.length === 0 ? (
            <p>Ոչ մի արդյունք չի գտնվել</p> // Если нет результатов
          ) : (
            <div
              className="popup"
              ref={popupRef}
              style={{
                overflowX: "auto",
                display: "flex",
                gap: "15px",
                color: "white",
                minWidth: "600px",
                maxWidth: "90vw",
                flexWrap: "wrap",
              }}
            >
              <i
                className="fa fa-times"
                aria-hidden="true"
                style={{ cursor: "pointer", color: "black" }}
                onClick={handleClose} // Закрытие popup при клике
              ></i>
              {filteredCards.map((card) => (
                <Card key={`${card.title}-${card.image}`} card={card} /> // Отображение фильтрованных карточек
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
