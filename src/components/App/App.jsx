import React from 'react';

import MainPage from '../../pages/MainPage';
import AboutMe from '../../pages/AboutMe';
import PricePage from '../../pages/PricePage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={AboutMe} exact />
          <Route path="/price" component={PricePage} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
