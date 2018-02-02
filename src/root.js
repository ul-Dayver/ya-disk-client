import React, { Component } from 'react';

import routes from './config/routes';
import connect from './config/connect';

import { withRouter, HashRouter } from 'react-router-dom'
import App from './components/application'
import { Provider } from 'react-redux';

const Application = withRouter(connect(App));

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}><HashRouter basename="/"><Application routes={routes} /></HashRouter></Provider>
    );
  }
}

export default Root