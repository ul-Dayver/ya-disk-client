import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import { saveTokenToStorage, getTokenFromStorage, delTokenToStorage} from '../localStorage';

import Layout from '../views/layout';
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

  logout() {
    delTokenToStorage()
    this.props.Logout()
  }

  render () {
    return (
      <Layout>
        <Switch>
          <Redirect from='/token' to='/'/>
          <Route render={
            (navigation) => this.isAuth()
            ? <ManagerView onLogout={this.logout.bind(this)} {...this.props} {...navigation}/>
            : <LoginView />
          } />
        </Switch>
      </Layout>
    )
  }
}

export default App;