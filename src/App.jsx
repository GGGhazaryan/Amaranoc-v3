import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import cards from './data/DataBase';
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
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Main Route */}
      <Route
        path="/"
        element={
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
        }
      />
      
      {/* Sales Route with Header and Footer */}
      <Route
        path="/sales"
        element={
          <>
            <Header />
            <div style={{ marginTop: '80px' }}> {/* This pushes the content below the header */}
              <Sales /> {/* Sales content */}
            </div>
            <GeneralFooter />
            <Footer />
          </>
        }
      />
      
      {/* Services Route with Header and Footer */}
      <Route
        path="/services"
        element={
          <>
            <Header />
            <div style={{ marginTop: '80px' }}> {/* This pushes the content below the header */}
              <Services /> {/* Services content */}
            </div>
            <GeneralFooter />
            <Footer />
          </>
        }
      />
      
      {/* About Us Route with Header and Footer */}
      <Route
        path="/about-us"
        element={
          <>
            <Header />
            <div style={{ marginTop: '80px' }}> {/* This pushes the content below the header */}
              <AboutUs /> {/* About Us content */}
            </div>
            <GeneralFooter />
            <Footer />
          </>
        }
      />

      {/* Chat Route with Header and Footer */}
      <Route
        path="/chat"
        element={
          <>
            <Header />
            <Chat />
            <GeneralFooter />
            <Footer />
          </>
        }
      />
      
      {/* Card Detail Route */}
      <Route
        path="/id/:id"
        element={<CardDetail cards={cards} />}
      />
    </Routes>
  );
}

export default App;
