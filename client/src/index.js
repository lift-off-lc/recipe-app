import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCnKQbZ86REEzb9l-af5IXubRurtXommjM",
  authDomain: "recipe-app-1a1b0.firebaseapp.com",
  projectId: "recipe-app-1a1b0",
  storageBucket: "recipe-app-1a1b0.appspot.com",
  messagingSenderId: "776628122529",
  appId: "1:776628122529:web:af77b17f10175bc38c51e0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
