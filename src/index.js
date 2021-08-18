// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";

// import './index.css';
// import Taiwo from './App';

// import App from "./ClassApp";
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
  
//     {/* <Taiwo /> */}
  
   
//       <Taiwo/>
   
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
<BrowserRouter>
    <App/>
</BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
