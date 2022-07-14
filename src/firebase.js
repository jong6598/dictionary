import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJGC_D_QyGQRpM4sHyA90Z2DRSCBt7ps0",
  authDomain: "jong-s.firebaseapp.com",
  projectId: "jong-s",
  storageBucket: "jong-s.appspot.com",
  messagingSenderId: "901061252079",
  appId: "1:901061252079:web:5546b3273419f265ccdc1a",
  measurementId: "G-ZH3C9FS9SV"
};

initializeApp(firebaseConfig); //초기화 기초설정
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();

