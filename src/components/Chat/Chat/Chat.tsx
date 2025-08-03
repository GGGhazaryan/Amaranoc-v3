import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
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

const Chat: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="chat-loading">Loading chat...</div>;
  if (!currentUser) return <div className="chat-login-message">Please log in to view the chat.</div>;

  return (
    <div className="chat-container">

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <span className="chat-sender">{msg.senderName}:</span>
            <span className="chat-text">{msg.text}</span>
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
        <button onClick={handleSend} className="chat-send-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;
