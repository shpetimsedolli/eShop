import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components


//Pages
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Bio } from './pages/Bio/Bio';

//Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Bio" component={Bio} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
