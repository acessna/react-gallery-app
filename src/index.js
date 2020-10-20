import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import RouteError from './Components/RouteError'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/">
      <Redirect to="/Home/Cars" />
    </Route>
    <Route path="/Search/:query" render= { routeProps => <App {...routeProps} />}/>
    <Route path="/Home/:query" render= {routeProps => <App {...routeProps} />}/>
    <Route>
      <RouteError />
    </Route>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
