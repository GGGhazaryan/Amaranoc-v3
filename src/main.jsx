import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // импортируем BrowserRouter
import App from "./App.jsx";
import LoginRegister from "./components/Registration/LoginRegister.jsx";
import { AuthProvider, useAuth } from "./AuthContext.jsx";
import "./css/index.css";

const AppWrapper = () => {
  const { user } = useAuth();
  return user ? <App /> : <LoginRegister />;
};

createRoot(document.getElementById("root")).render(

    <BrowserRouter>       {/* ОБЕРНУЛИ В BrowserRouter */}
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </BrowserRouter>

);
