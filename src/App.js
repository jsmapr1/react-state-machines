import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import HabitTracker from './components/HabitTracker/HabitTracker';
import ListClass from './components/ListClass/List';
import List from './components/List/List';
import XstateList from './components/XstateList/XstateList';
import XstateListClass from './components/XstateListClass/XstateList';

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
              <Link to="/habit">Habit</Link>
            </li>
            <li>
              <Link to="/basic">Basic</Link>
            </li>
            <li>
              <Link to="/basic-hook">Basic</Link>
            </li>
            <li>
              <Link to="/xstate">X State</Link>
            </li>
            <li>
              <Link to="/xstate-hook">X State with hooks</Link>
            </li>
          </ul>

          <hr />
          <Route path="/habit" component={HabitTracker} />
          <Route path="/basic" component={ListClass} />
          <Route path="/basic-hook" component={List} />
          <Route path="/xstate" component={XstateListClass} />
          <Route path="/xstate-hook" component={XstateList} />
        </div>
      </Router>
    );
  }
}

export default App;
