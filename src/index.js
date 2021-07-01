import React from 'react';
import firebase from 'firebase';
import store from '../src/store'
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Home from '../src/pages/home';
import salaAtendimento from '../src/pages/HomePage';


import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp ({
  apiKey: "AIzaSyA0ZmMfzYD6uVsc4BlsnwzwOhElb12bhK0",
  authDomain: "web-chat-9c7e3.firebaseapp.com",
  projectId: "web-chat-9c7e3",
  storageBucket: "web-chat-9c7e3.appspot.com",
  messagingSenderId: "742400540644",
  appId: "1:742400540644:web:be7303294b42664eced1f1",
  measurementId: "G-VD0Z9905V1"

});

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()

window.store = store;

ReactDom.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/HomePage' component={salaAtendimento} />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();