import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components


//Pages
import { Home } from './pages/Home/Home';
import { Favorites } from './pages/Favorites/Favorites';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Bio } from './pages/Bio/Bio';
import { Product } from './pages/Product/Product';

//Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/Bio" component={Bio} />
          <Route exact path="/product/:id" component={Product} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
