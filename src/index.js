import React from 'react';
import firebase from 'firebase';
import store from '../src/store'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Home from '../src/pages/home';
import Menu from '../src/components/menu';
import Chat from '../src/screens/atendimento1/Chat';
import Chat2 from '../src/screens/atendimento2/Chat2';
import Chat3 from '../src/screens/atendimento3/Chat3';
import Chat4 from '../src/screens/atendimento4/Chat4';
import Chat5 from '../src/screens/atendimento5/Chat5';
import Chat6 from '../src/screens/atendimento6/Chat6';

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp ({
  apiKey: "AIzaSyAax61dTrq_gWhb2N1NG-KWCiuAgnjtm8w",
  authDomain: "chatbot-67c36.firebaseapp.com",
  projectId: "chatbot-67c36",
  storageBucket: "chatbot-67c36.appspot.com",
  messagingSenderId: "623900363865",
  appId: "1:623900363865:web:73528ec803281e8f62b548"
});

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()

window.store = store;

ReactDom.render(
  <Provider store={store}>
    <React.StrictMode>
      <Chat2 />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

