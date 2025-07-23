import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAW07t9MELPPJXnSPLQrrgU0gHEnf5c-Zg",
    authDomain: "amaranoc-4b1df.firebaseapp.com",
    projectId: "amaranoc-4b1df",
    storageBucket: "amaranoc-4b1df.firebasestorage.app",
    messagingSenderId: "568821049435",
    appId: "1:568821049435:web:64faa173208b1bf695b77e",
    measurementId: "G-2XTDX58Y7Z"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };