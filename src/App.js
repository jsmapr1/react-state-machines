import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import HabitTrackerA from './components/HabitTrackerA/HabitTracker';
import HabitTrackerB from './components/HabitTrackerB/HabitTracker';
import HabitTrackerC from './components/HabitTrackerC/HabitTracker';
import HabitTrackerD from './components/HabitTrackerD/HabitTracker';
import List from './components/List/List';
import XstateList from './components/XstateList/XstateList';
import XstateListClass from './components/XstateListClass/XstateList';

class App extends Component {
  render() {
    return (
      <Router>
        <div
          class="menu"
        >
          <ul
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/habit-a">Habit A</Link>
            </li>
            <li>
              <Link to="/habit-b">Habit B</Link>
            </li>
            <li>
              <Link to="/habit-c">Habit C</Link>
            </li>
            <li>
              <Link to="/habit-d">Habit D</Link>
            </li>
            <li>
              <Link to="/basic-hook">Basic</Link>
            </li>
            <li>
              <Link to="/xstate-hook">X State with hooks</Link>
            </li>
          </ul>

          <hr />
          <Route path="/habit-a" component={HabitTrackerA} />
          <Route path="/habit-b" component={HabitTrackerB} />
          <Route path="/habit-c" component={HabitTrackerC} />
          <Route path="/habit-d" component={HabitTrackerD} />
          <Route path="/basic-hook" component={List} />
          <Route path="/xstate-hook" component={XstateList} />
        </div>
      </Router>
    );
  }
}

export default App;
