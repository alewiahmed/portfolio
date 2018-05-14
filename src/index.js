import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
