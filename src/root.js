import React, { Component } from 'react';

import connect from './config/connect';

import { withRouter, BrowserRouter } from 'react-router-dom'
import App from './components/application'
import { Provider } from 'react-redux';

const Application = withRouter(connect(App));

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Application />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root