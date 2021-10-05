import "./styles.css";
import React from 'react';
import ReactDOM from 'react-dom'
 import App from './app.js';
 import Tutorials from './tutorials.js';

// ReactDOM.render(<App/>,document.getElementById('app'));

ReactDOM.render(<Tutorials/>,document.getElementById('app'));

if(module.hot){
  module.hot.accept()
}



