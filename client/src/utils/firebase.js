// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "authexamnotes-8aba4.firebaseapp.com",
  projectId: "authexamnotes-8aba4",
  storageBucket: "authexamnotes-8aba4.firebasestorage.app",
  messagingSenderId: "326870605914",
  appId: "1:326870605914:web:71b38fa3ee83089dc1f863"
};

// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}