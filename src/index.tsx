import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCYFii1YP5kfyKIklL2DLrgsuQBthLDZEk",
//   authDomain: "nihongo-c998c.firebaseapp.com",
//   projectId: "nihongo-c998c",
//   storageBucket: "nihongo-c998c.firebasestorage.app",
//   messagingSenderId: "684713803438",
//   appId: "1:684713803438:web:759c0d4490729d6e21373f"
// };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
