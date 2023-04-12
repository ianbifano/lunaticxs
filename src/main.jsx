import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgqKiNPoNgHWzNP7GZ3hZQ7oAkGv6F5wo",
    authDomain: "lunaticxs-e4166.firebaseapp.com",
    projectId: "lunaticxs-e4166",
    storageBucket: "lunaticxs-e4166.appspot.com",
    messagingSenderId: "1060885147436",
    appId: "1:1060885147436:web:1190cf5b121d496ba58689",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
