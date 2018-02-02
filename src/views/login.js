import React, {Component} from 'react'
import {AUTH_URL} from '../constants'

export default class Home extends Component {
  render() {
    return (
      <div className="login jumbotron">
        <h1>Hello, please login!</h1>
        <p><a href={AUTH_URL} className="btn btn-info btn-lg" role="button">Login</a></p>
      </div>
    );
  }
}