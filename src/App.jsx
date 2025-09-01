import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import {cards} from './data/DataBase';
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";
import GeneralFooter from "./components/GeneralFooter/GeneralFooter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat/Chat";
import Login from "./components/Registration/LoginRegister";
import CardDetail from './components/CardDetail';
import Sales from './components/Sales';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import RussiaPage from './components/Russia/RussiaPage'; 
import EnglishPage from './components/English/EnglishPage';

import "./css/App.css";
import "./css/index.css";
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser) {
        navigate("/login");
        console.error('no login')
      }
    });

    return () => unsubscribe();
  }, [navigate]);



  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <>
          <Header />
          <div className="mainContentWrapper">
            <div className="rightContentWrapper">
              <LeftContent />
            </div>
          </div>
          <GeneralFooter />
          <Footer />
        </>
      } />
      <Route path="/sales" element={
        <>
          <Header />
          <div style={{ marginTop: '80px' }}>
            <Sales />
          </div>
          <GeneralFooter />
          <Footer />
        </>
      } />
      <Route path="/services" element={
        <>
          <Header />
          <div style={{ marginTop: '80px' }}>
            <Services />
          </div>
          <GeneralFooter />
          <Footer />
        </>
      } />
      <Route path="/about-us" element={
        <>
          <Header />
          <div style={{ marginTop: '80px' }}>
            <AboutUs />
          </div>
          <GeneralFooter />
          <Footer />
        </>
      } />
      <Route path="/chat" element={
        <>
          <Header />
          <Chat />
          <GeneralFooter />
          <Footer />
        </>
      } />
      <Route path="/id/:id" element={<CardDetail cards={cards} />} />
      <Route path="/ru" element={<RussiaPage />} />
      <Route path="/eng" element={<EnglishPage />} />
    </Routes>
  );
}

export default App;
