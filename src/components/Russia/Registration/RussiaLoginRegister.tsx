import "../../../css/LoginRegister.css";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";

const RussiaLoginRegister = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      if (isRegister) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name,
          email,
          createdAt: new Date()
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setError("Ошибка: " + (err.message || "Неизвестная ошибка"));
    }
  };

  return (
    <div className="login-register-container">
      <div className="form-box" style={{ maxWidth: "400px", margin: "100px auto" }}>
        <div className="form-header">
          <h2 className="form-title">
            {isRegister ? "Регистрация" : "Вход"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="form">
          {isRegister && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Имя"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <input
              type="email"
              placeholder="Эл. почта"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Пароль"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">
              {isRegister ? "Зарегистрироваться" : "Войти"}
            </button>
          </div>
        </form>
        {error && <div className="form-error">{error}</div>}
        <div className="form-footer">
          <div className="toggle-text">
            {isRegister ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}
          </div>
          <button
            className="toggle-button"
            onClick={() => setIsRegister(!isRegister)}
            type="button"
          >
            {isRegister ? "Вход" : "Регистрация"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RussiaLoginRegister;
