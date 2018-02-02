import WelcomeView from '../views/welcome';

const routes = {
  //login: {path: '/login', component: LoginView},
  home: {path: '/', exact: true, component: WelcomeView}
}

export default routes