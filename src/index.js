import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage';
import Login from './Login';
import Dashboard from'./Dashboard';
import Userdashboard1 from'./Userdashboard1';
import Userdashboard2 from './Userdashboard2';
import Userdashboard3 from './Userdashboard3';
import Userdashboard4 from './Userdashboard4';
import Userdashboard5 from './Userdashboard5';
import Userdashboard6 from './Userdashboard6';

ReactDOM.render(
  <React.StrictMode>
    <Userdashboard6 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
