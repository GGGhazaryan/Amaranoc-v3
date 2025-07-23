import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import LeftContent from './components/LeftContent/LeftContent';
import RightContent from './components/RightContent/RightContent';
import GeneralFooter from './components/GeneralFooter/GeneralFooter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './css/App.css';
import './css/index.css';
import { useNavigate } from "react-router-dom";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    
    return null;
  }

  return (
    <div className="App">
      <Header />
      <div className="mainContentWrapper">
        <div className="rightContentWrapper">
          <LeftContent />
          <RightContent />
        </div>
      </div>
      <GeneralFooter />
      <Footer />
    </div>
  );
}

export default App;
