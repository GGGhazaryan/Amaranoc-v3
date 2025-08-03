import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../../../firebase";
import "../../../css/Chat.css";

interface Message {
  id: string;
  text: string;
  senderUid: string;
  senderName: string;
  createdAt: any;
}

interface UserInfo {
  email: string;
  createdAt: any;
  lastSignInTime: string;
  uid: string;
}

const Chat: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUserInfo, setSelectedUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Message, "id">),
      }));
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (!newMessage.trim() || !currentUser) return;
    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage.trim(),
        senderUid: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email || "Anonymous",
        createdAt: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const showUserInfo = async (uid: string) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data() as UserInfo;
      setSelectedUserInfo({
        email: data.email,
        createdAt: data.createdAt?.toDate?.() || null,
        lastSignInTime: data.lastSignInTime,
        uid: data.uid,
      });
    } else {
      alert("User info not found");
    }
  };

  const closeModal = () => {
    setSelectedUserInfo(null);
  };

  if (loading) return <div className="chat-loading">Loading chat...</div>;
  if (!currentUser) return <div className="chat-login-message">Please log in to view the chat.</div>;

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <span
              className="chat-sender"
              style={{ cursor: "pointer"}}
              onClick={() => showUserInfo(msg.senderUid)}
              title="Click to view user info"
            >
              {msg.senderName}
            </span>
            : <span className="chat-text">{msg.text}</span>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
        />
        <button onClick={handleSend} className="chat-send-button">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div>

      {selectedUserInfo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>User Information</h3>
            <p><strong>Identifier:</strong> {selectedUserInfo.email}</p>
            <p><strong>Created:</strong> {selectedUserInfo.createdAt ? selectedUserInfo.createdAt.toString() : "N/A"}</p>
            <p><strong>Signed In:</strong> {selectedUserInfo.lastSignInTime}</p>
            <p><strong>User UID:</strong> {selectedUserInfo.uid}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
