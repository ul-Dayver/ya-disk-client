import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
//import {AUTH} from '../constants'


class App extends React.Component {
  
  constructor(props) {
    super(props);
    //this.renderChildren = this.renderChildren.bind(this);
    
  }

  componentDidMount() {
  }
  
  isAuth() {
    return false;
  }

  renderChildren(route, props) {
    const Wrapper = (route.wrapper);
    return route.wrapper
     ? (navigation) => (<Wrapper {...props} {...navigation}><route.component {...props} {...navigation} /></Wrapper>)
     : () => (<route.component {...props} />)
  }

  renderRoutes (list, props, layout) {
	return list.map(
	  (route, key) => (
	    route.redirect 
		  ? (<Redirect key={key} from={route.path} to={route.redirect} />)
          : (<Route key={key} path={route.path} exact={!!route.exact} render={this.renderChildren(route, props)} />)
	  )
	)
  }

  render () {
      /*
    if (this.isAuth()) {
      
      const home = this.props.routes.home.path;

      let routes = [
        this.props.routes.welcome,
        //{path: this.props.routes.login.path, redirect: home}
      ];
      
      return (
        <Switch>
          {this.renderRoutes(routes, this.props)}
        </Switch>
      )
    }
    */
    return (
      <div>
        {this.renderRoutes([this.props.routes.home], this.props)}
      </div>
    )
  }
}

export default App;