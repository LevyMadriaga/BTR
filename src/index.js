import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import App from './Components/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
                <App/>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
