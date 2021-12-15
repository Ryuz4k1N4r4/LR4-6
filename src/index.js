import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCYYeIP8X2nfLZSjwzHF5PL5LHiHoygbXk",
    authDomain: "chat-react1.firebaseapp.com",
    projectId: "chat-react1",
    storageBucket: "chat-react1.appspot.com",
    messagingSenderId: "923462772470",
    appId: "1:923462772470:web:3dc78de222c70b08906ed7",
    measurementId: "G-GJ4D0RFZS0"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

