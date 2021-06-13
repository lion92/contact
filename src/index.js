import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from '../src/titre'
import Horloge from '../src/Horloge'
import ContainerCV from'../src/container/ContainerCV'
import Photos from '../src/Photo'
ReactDOM.render(
  
  <React.StrictMode>
    <ContainerCV/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
