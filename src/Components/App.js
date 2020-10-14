import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NotFound from './NotFound';



const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/">
          <Redirect to="/home/Cars" />
          </Route>
          <Route exact path="/search/:query" component={PhotoContainer}/>
          <Route  exact path="/home/:query" component={PhotoContainer}/>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

