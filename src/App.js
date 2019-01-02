import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import List from './components/List/List';
import XstateList from './components/XstateList/XstateList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basic">Basic</Link>
            </li>
            <li>
              <Link to="/xstate">X State</Link>
            </li>
          </ul>

          <hr />
          <Route path="/basic" component={List} />
          <Route path="/xstate" component={XstateList} />
        </div>
      </Router>
    );
  }
}

export default App;
