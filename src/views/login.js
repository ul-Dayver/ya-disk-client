import React, {Component} from 'react'
import {AUTH_URL} from '../constants'

import logo from '../logo.jpg'

export default class Home extends Component {
  render() {
    return (
      <div className="page-header">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="Логотип Яндек.Диск"/>
          </div>
          <div className="col-md-8 jumbotron">
            <h2>Привет! <br/><small>Пожалуйста, нажми на кнопку</small></h2>
            <p><a href={AUTH_URL} className="btn btn-info btn-lg" role="button">Войти</a></p>
          </div>
        </div>
      </div>
    );
  }
}