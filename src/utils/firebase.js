// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoD0c3teVtg5CNGqYKrBq4ZJZy4nedCSg",
  authDomain: "coder-react-38120-b661e.firebaseapp.com",
  projectId: "coder-react-38120-b661e",
  storageBucket: "coder-react-38120-b661e.appspot.com",
  messagingSenderId: "954506568827",
  appId: "1:954506568827:web:06ae79485c8ffab7102ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// crear una instancia de la base de datos
export const db = getFirestore(app);
