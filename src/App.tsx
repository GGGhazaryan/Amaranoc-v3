import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase";
import LeftContent from './components/LeftContent/LeftContent';
import RightContent from './components/RightContent/RightContent';
import GeneralFooter from './components/GeneralFooter/GeneralFooter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Chat from './components/Chat/Chat/Chat';
import Login from './components/Registration/LoginRegister'; 
import './css/App.css';
import './css/index.css';
import { Routes, Route, useNavigate } from "react-router-dom";

function App(): React.ReactElement {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="mainContentWrapper">
            <LeftContent />
            <RightContent />
          </div>
        } />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <GeneralFooter />
      <Footer />
    </>
  );
}

export default App;
