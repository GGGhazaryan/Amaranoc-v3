import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function HeaderRight() {
  const [showPopup, setShowPopup] = useState(false);
  const user = auth.currentUser;

  const togglePopup = () => setShowPopup((prev) => !prev);

  const handleLogout = async () => {
    await signOut(auth);
    setShowPopup(false);
  };

  return (
    <div className="headerRightPlaceholder" style={{ position: "relative" }}>
      <div className="mainIcons">
        <i className="fa-solid fa-globe"></i>
        <i
          className="fa fa-user"
          aria-hidden="true"
          onClick={togglePopup}
          style={{ cursor: "pointer", position: "relative" }}
        ></i>
      </div>
      <SearchInput />
      {showPopup && user && (
        <div
          className="user-popup"
          style={{
            position: "absolute",
            top: "40px",
            right: "0",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "1rem",
            width: "220px",
            zIndex: 100,
          }}
        >
          <p>
            <strong>Name:</strong> {user.displayName || "Anonymous"}
          </p>
          <p>
            <strong>Email:</strong> {user.email || "Not provided"}
          </p>
          <button
            onClick={handleLogout}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#ff6600",
              color: "#fff",
              cursor: "pointer",
              width: "100%",
              fontWeight: "bold",
            }}
          >
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}
