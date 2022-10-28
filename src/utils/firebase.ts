// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc1Urb18nCW-0_KuaYDSPFytljWd01Xaw",
  authDomain: "test-project-3e454.firebaseapp.com",
  databaseURL: "https://test-project-3e454-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-project-3e454",
  storageBucket: "test-project-3e454.appspot.com",
  messagingSenderId: "369218486822",
  appId: "1:369218486822:web:b6f17c25446f5837635ce7",
  measurementId: "G-1ZQMPNF3YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
