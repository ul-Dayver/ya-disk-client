import React from 'react';
import ReactDOM from 'react-dom';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';

import store from './config/store';

import Root from './root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
