import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './components/Narbar';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

