import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/">
      <Redirect to="/Home/Cars" />
    </Route>
    <Route exact path="/Search/:query" render= { routeProps => <App {...routeProps} />}/>
    <Route  exact path="/Home/:query" render= {routeProps => <App {...routeProps} />}/>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
