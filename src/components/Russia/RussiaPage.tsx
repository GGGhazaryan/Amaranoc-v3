import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {cards} from '../../data/DataBase';
import RussiaLeftContent from "./LeftContent/RussiaLeftContent";

import RussiaGeneralFooter from "./GeneralFooter/RussiaGeneralFooter";
import RussiaHeader from "./Header/RussiaHeader";
import RussiaFooter from "./Footer/RussiaFooter";
import Chat from "../../components/Chat/Chat/Chat";
import RussiaLogin from "./Registration/RussiaLoginRegister";
import RussiaCardDetail from './RussiaCardDetail';
import RussiaSales from './RussiaSales';
import RussiaServices from './RussiaServices';
import RussiaAboutUs from './RussiaAboutUs';

import "../../css/App.css";
import "../../css/index.css";
import { Routes, Route, useNavigate } from 'react-router-dom';

function RussiaApp() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser) {
        navigate("/ru/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);



  return (
    <Routes>
      <Route path="/ru/login" element={<RussiaLogin />} />
      <Route path="/" element={
        <>
          <RussiaHeader />
          <div className="mainContentWrapper">
            <div className="rightContentWrapper">
              <RussiaLeftContent />
            </div>
          </div>
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/sales" element={
        <>
          <RussiaHeader />
          <div style={{ marginTop: '80px' }}>
            <RussiaSales />
          </div>
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/services" element={
        <>
          <RussiaHeader />
          <div style={{ marginTop: '80px' }}>
            <RussiaServices />
          </div>
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/about-us" element={
        <>
          <RussiaHeader />
          <div style={{ marginTop: '80px' }}>
            <RussiaAboutUs />
          </div>
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/chat" element={
        <>
          <RussiaHeader />
          <Chat />
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/id/:id" element={<RussiaCardDetail cards={cards} />} />
    </Routes>
  );
}

export default RussiaApp;
