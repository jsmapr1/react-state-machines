import React, { Component } from 'react';
import { interpret } from "xstate/lib/interpreter";

import ListMachine from './XstateList.machine';

let timeoutId;
function fakeAPI () {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => resolve(['joe', 'bob']), 1000);
  });
}

export default class XstateListClass extends Component {
  state = {
    list: [],
    display: ListMachine.initialState
  }

  mounted = false;

  service = interpret(ListMachine)
    .onTransition(state => {
      if(this.mounted) {
        this.setState({
          display: state
        })
      }
    })
    .start();

  componentDidMount(){
    this.mounted = true;
      fakeAPI()
      .then(json => this.setState({
        list: json
      }));
  }

  componentWillUnmount() {
    clearTimeout(timeoutId);
  }

  render() {
    return(
      <div>
        <h1>X state!</h1>
        <button onClick={() => this.service.send('TOGGLE')}>Display</button>
        {this.state.display.value === 'open' &&
          this.state.list.map(item => <h2 key={item}>{item}</h2>)
        }
      </div>
    )
  }
}
