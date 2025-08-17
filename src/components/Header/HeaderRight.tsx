import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { auth } from "../../firebase";
import { signOut, User } from "firebase/auth";
import LikedPopup from "../LikedPopup";
import { useLikedStore } from "../../store";

export default function HeaderRight(): React.ReactElement {
  const [showPopup, setShowPopup] = useState(false);
  const [showLiked, setShowLiked] = useState(false);

  const user: User | null = auth.currentUser;
  const { likedCards } = useLikedStore();
  const likedCount = likedCards.length;

  const togglePopup = () => setShowPopup((prev) => !prev);
  const toggleLikedPopup = () => setShowLiked((prev) => !prev);

  const handleLogout = async () => {
    await signOut(auth);
    setShowPopup(false);
  };

  if (!user)
    return (
      <div className="headerRightPlaceholder">
        <div className="mainIcons">
          <i className="fa-solid fa-globe"></i>
          <i className="fa fa-user" aria-hidden="true" style={{ cursor: "default" }}></i>
        </div>
        <SearchInput />
      </div>
    );

  return (
    <div className="headerRightPlaceholder" style={{ position: "relative" }}>
      <div className="mainIcons" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <i className="fa-solid fa-globe" style={{ color: "black", cursor: "pointer" }}></i>

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

      <SearchInput />

      {showPopup && (
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
            width: "380px",
            zIndex: 100,
            fontSize: "14px",
            color: "#333",
          }}
        >
          <p>
            <strong>Identifier:</strong>{" "}
            {user.displayName || user.email || "Anonymous"}
          </p>
          <p>
            <strong>Created:</strong> {user.metadata.creationTime || "Unknown"}
          </p>
          <p>
            <strong>Signed In:</strong> {user.metadata.lastSignInTime || "Unknown"}
          </p>
          <p>
            <strong>User UID:</strong> {user.uid}
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
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </button>
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
          <LikedPopup />
        </div>
      )}
    </div>
  );
}
