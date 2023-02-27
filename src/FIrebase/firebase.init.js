// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2qe3NxUV22dKRDFalwV_fMQqMQAUAkH4",
  authDomain: "blockchain-dfba8.firebaseapp.com",
  projectId: "blockchain-dfba8",
  storageBucket: "blockchain-dfba8.appspot.com",
  messagingSenderId: "850919389388",
  appId: "1:850919389388:web:381206722f54a2f5722a69",
  measurementId: "G-Z79BGJPV9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;