import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBCzZBUJMz3rGms5euNTHZPttxGH7HXI60",
  authDomain: "coderhouse-50925.firebaseapp.com",
  projectId: "coderhouse-50925",
  storageBucket: "coderhouse-50925.appspot.com",
  messagingSenderId: "629181470921",
  appId: "1:629181470921:web:6d7e83980587e04884d518"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
