import React from 'react';
import firebase from 'firebase';
import store from '../src/store'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import BOT from '../src/pages/bot';

var firebaseConfig = {
  apiKey: "AIzaSyAax61dTrq_gWhb2N1NG-KWCiuAgnjtm8w",
  authDomain: "chatbot-67c36.firebaseapp.com",
  projectId: "chatbot-67c36",
  storageBucket: "chatbot-67c36.appspot.com",
  messagingSenderId: "623900363865",
  appId: "1:623900363865:web:73528ec803281e8f62b548"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDom.render(
  <Provider store={store}>
    <React.StrictMode>
      <BOT />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

