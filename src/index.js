import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import store from './config/store';

import Root from './root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
