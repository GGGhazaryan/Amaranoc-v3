import "../../css/LoginRegister.css";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { setDoc, doc } from "firebase/firestore";

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
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
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-register-container">
      <div className="form-box" style={{ maxWidth: "400px", margin: "100px auto" }}>
        <div className="form-header">
          <h2 className="form-title">{isRegister ? "Register" : "Login"}</h2>
        </div>
        <form onSubmit={handleSubmit} className="form">
          {isRegister && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
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
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">
              {isRegister ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
        {error && <div className="form-error">{error}</div>}
        <div className="form-footer">
          <div className="toggle-text">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </div>
          <button
            className="toggle-button"
            onClick={() => setIsRegister(!isRegister)}
            type="button"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
