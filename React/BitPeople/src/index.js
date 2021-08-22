import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import { createRandomUsers } from './services/createUserList';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

// createRandomUsers().then(result => {
//   console.log(result[0].getFullName());
// })
