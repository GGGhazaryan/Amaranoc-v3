import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RussiaSearchInput from "./RussiaSearchInput";
import { auth } from "../../../firebase";
import { signOut, User } from "firebase/auth";
import RussiaLikedPopup from "../RussiaLikedPopup";
import { useLikedStore } from "../../../store";

export default function RussiaHeaderRight(): React.ReactElement {
  const [showPopup, setShowPopup] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false); 
  const [selectedLanguage, setSelectedLanguage] = useState("рус"); 
  const navigate = useNavigate();

  const user: User | null = auth.currentUser;
  const { likedCards } = useLikedStore();
  const likedCount = likedCards.length;

  const togglePopup = () => setShowPopup((prev) => !prev);
  const toggleLikedPopup = () => setShowLiked((prev) => !prev);

  const handleLogout = async () => {
    await signOut(auth);
    setShowPopup(false);
  };

  const toggleLanguages = () => setShowLanguages((prev) => !prev);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);


    if (language === "рус") {
      navigate("/ru"); // Stay on the main page
    } else if (language === "հայ") {
      navigate("/"); // Navigate to /ru
    } else if (language === "eng") {
      navigate("/eng"); // Navigate to /eng
    }
  };

  if (!user)
    return (
      <div className="headerRightPlaceholder">
        <div className="mainIcons">
          <i className="fa-solid fa-globe" onClick={toggleLanguages}></i>
          <i className="fa fa-user" aria-hidden="true" style={{ cursor: "default" }}></i>
        </div>
        <RussiaSearchInput />
      </div>
    );

  return (
    <div className="headerRightPlaceholder" style={{ position: "relative" }}>
      <div className="mainIcons" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <i className="fa-solid fa-globe" style={{ color: "black", cursor: "pointer" }} onClick={toggleLanguages}></i>

        {showLanguages && (
          <div
            className="languages"
            style={{
              position: "absolute",
              top: "30px",
              left: "0",
              background: "#333",
              borderRadius: "8px",
              padding: "0.5rem",
              width: "50px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => handleLanguageChange("հայ")}
              style={{
                background: "#333",
                color: selectedLanguage === "հայ" ? "white" : "gray",
                opacity: selectedLanguage === "հայ" ? 1 : 0.6,
                border: "none",
                padding: "0.5rem",
                borderRadius: "6px",
                width: "100%",
                marginBottom: "5px",
                cursor: "pointer",
              }}
            >
              հայ
            </button>
            <button
              onClick={() => handleLanguageChange("рус")}
              style={{
                background: "#333",
                color: selectedLanguage === "рус" ? "white" : "gray",
                opacity: selectedLanguage === "рус" ? 1 : 0.6,
                border: "none",
                padding: "0.5rem",
                borderRadius: "6px",
                width: "100%",
                marginBottom: "5px",
                cursor: "pointer",
              }}
            >
              рус
            </button>
          
          </div>
        )}

        <div style={{ position: 'relative' }}>
          <i
            className="fa fa-heart"
            style={{ color: "black", cursor: "pointer" }}
            onClick={toggleLikedPopup}
          ></i>
          {likedCount > 0 && (
            <span
              style={{
                position: 'absolute',
                bottom: -8,
                right: -10,
                background: '#ff0000',
                color: '#fff',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                lineHeight: '1',
                fontWeight: 'bold',
                minWidth: '20px',
                textAlign: 'center',
              }}
            >
              {likedCount}
            </span>
          )}
        </div>

        <i
          className="fa fa-user"
          aria-hidden="true"
          onClick={togglePopup}
          style={{ cursor: "pointer", position: "relative" }}
        ></i>
      </div>

      <RussiaSearchInput />

     {showPopup && (
  <div
    className="user-popup-overlay"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
    onClick={() => setShowPopup(false)} 
  >
    <div
      className="user-popup"
      style={{
        background: "white",
        borderRadius: "12px",
        width: "650px",
        padding: "2rem",
        display: "flex",
        gap: "2rem",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()} 
    >
      <img
        src="/user4.webp"
        alt="User"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: "1rem", color: "#333" }}>
          {user.displayName || user.email || "Anonymous"}
        </h2>
        <p><strong>Создалось:</strong> {user.metadata.creationTime || "Unknown"}</p>
        <p><strong>Последний заход:</strong> {user.metadata.lastSignInTime || "Unknown"}</p>
        <p><strong>UID:</strong> {user.uid}</p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#ff6600",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          <i className="fa fa-sign-out" aria-hidden="true"></i> Выйти
        </button>
      </div>
    </div>
  </div>
)}


      {showLiked && (
        <div
          className="liked-popup"
          style={{
            position: "absolute",
            top: "40px",
            right: "50px",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "1rem",
            width: "350px",
            zIndex: 100,
            fontSize: "14px",
            color: "#333",
          }}
        >
          <RussiaLikedPopup />
        </div>
      )}
    </div>
  );
}
