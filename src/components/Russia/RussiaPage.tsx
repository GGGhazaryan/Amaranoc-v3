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
import CardDetail from '../CardDetail';
import Sales from '../Sales';
import Services from '../Services';
import AboutUs from '../AboutUs';

import RussiaPage from './RussiaPage'


import  "../../css/App.css";
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
        navigate("/login");
        console.error('no login')
      }
    });

    return () => unsubscribe();
  }, [navigate]);



  return (
    <Routes>
      <Route path="/login" element={<RussiaLogin />} />
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
            <Sales />
          </div>
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/services" element={
        <>
          <RussiaHeader />
          <div style={{ marginTop: '80px' }}>
            <Services />
          </div>
          <RussiaGeneralFooter />
          <RussiaFooter />
        </>
      } />
      <Route path="/about-us" element={
        <>
          <RussiaHeader />
          <div style={{ marginTop: '80px' }}>
            <AboutUs />
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
      <Route path="/id/:id" element={<CardDetail cards={cards} />} />
      <Route path="/ru" element={<RussiaPage />} />

    </Routes>
  );
}

export default RussiaApp;
