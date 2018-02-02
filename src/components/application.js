import React from 'react'
import {Route} from 'react-router-dom'
import { saveTokenToStorage, getTokenFromStorage } from '../localStorage';

import ManagerView from '../views/manager';
import LoginView from '../views/login';

class App extends React.Component {
  componentDidMount() {
    if (!this.isAuth()) {
      let params = {}
      if (this.props.location.hash) {
        this.props.location.hash.replace('#','').split('&').forEach(
          function (attrStr) {
            let p = attrStr.split('=')
            params[p[0]] = p[1]
          }
        )
      }

      if ('access_token' in params) {
        saveTokenToStorage(params.access_token);
        this.props.Login(params.access_token)
      } else {
        this.props.Login(getTokenFromStorage())
      }
    }
  }
  
  isAuth() {
    return !!this.props.app.token;
  }

  render () {
    return (
      <Route render={
        (navigation) => this.isAuth()
        ? <ManagerView {...this.props} {...navigation}/>
        : <LoginView />
      } />
    )
  }
}

export default App;