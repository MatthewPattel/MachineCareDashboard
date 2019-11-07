import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

//Components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';
//import Sidebar from './components/Sidebar';

import Axios from 'axios';

//Pages
import login from './pages/login';

import dashboard from './pages/dashboard';
import servicios from './pages/servicios';

import especialistas from './pages/especialistas';
import supervisores from './pages/supervisores';
import gerentes from './pages/gerentes';

import invitados from './pages/invitados';
import clientes from './pages/clientes';
import supervisoresClientes from './pages/supervisoresClientes';

import clienteAdd from './pages/clienteAdd';
import especialistaAdd from './pages/especialistaAdd';
import servicio from './pages/servicio';

const appTheme = createMuiTheme(themeFile);

//let authenticated;
const token = localStorage.FBAuth;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    Axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={appTheme}>
      <Provider store={store}>
          <Router>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={dashboard} />
                <AuthRoute exact path="/login" component={login}/>
                <Route exact path="/especialistas" component={especialistas} />
                <Route exact path="/supervisores" component={supervisores} />
                <Route exact path="/gerentes" component={gerentes} />
                <Route exact path="/invitados" component={invitados} />
                <Route exact path="/clientes" component={clientes} />
                <Route exact path="/supervisoresClientes" component={supervisoresClientes} />
                <Route exact path="/servicios" component={servicios} />
                
                <Route exact path="/servicio" component={servicio} />
                <Route exact path="/especialistaAdd" component={especialistaAdd} />
                <Route exact path="/clienteAdd" component={clienteAdd} />
              </Switch>
            </div>
          </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
