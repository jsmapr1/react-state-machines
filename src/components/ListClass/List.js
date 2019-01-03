import React, { Component } from 'react';
import { useReducer, useState, useEffect } from 'react';

let timeoutId;
function fakeAPI () {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => resolve(['joe', 'bob']), 1000);
  });
}

const basicMachine = {
  initial: 'closed',
  states: {
    open: {
      on: {
        TOGGLE: 'closed'
      }
    },
    closed: {
      on: {
        TOGGLE: 'open'
      }
    }
  }
};

const transition = (state, event) => {
  return basicMachine.states[state].on[event] || state;
}

export default class ListClass extends Component {
  state = {
    list: [],
    display: basicMachine.initial
  }
  componentDidMount() {
      fakeAPI()
      .then(json => this.setState({ list: json}));
  }

  componentWillUnmount() {
    clearTimeout(timeoutId);
  }

  toggleDisplay(action) {
    this.setState(state => {
      const update = transition(state.display, action)
      return {
        display: update
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={() => this.toggleDisplay('TOGGLE')}>Display</button>
        {this.state.display === 'open' &&
          this.state.list.map(item => <h2 key={item}>{item}</h2>)
        }
      </div>
    )
  }

}
