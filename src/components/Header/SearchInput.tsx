import React, { useState, useRef } from "react";
import cards from "../../data/DataBase.js";
import Card from "../RightContent/Card";

export default function SearchInput(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.style.display = "none";
    }
  };

  return (
    <div className="inputPlaceholder">
      <input
        type="text"
        placeholder="Որոնում"
        className="inputToSearch"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <i className="fa fa-search" aria-hidden="true"></i>

      {searchTerm && (
        <div className="searchResultsWrapper">
          {filteredCards.length === 0 ? (
            <p>Ոչ մի արդյունք չի գտնվել</p>
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
            <i className="fa fa-times" aria-hidden="true" style={{ cursor: 'pointer', color: 'black' }} onClick={handleClose}></i>
              {filteredCards.map((card) => (
                <Card key={`${card.title}-${card.image}`} card={card} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
