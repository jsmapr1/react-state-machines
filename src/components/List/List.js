import React from 'react';
import { useReducer } from 'react';

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

const transition = (machineState, event) => {
  return basicMachine.states[machineState].on[event] || machineState;
}

export default function List() {
  const [display, action] = useReducer(
    transition,
    basicMachine.initial
  );
  return(
    <div>
      <button onClick={() => action('TOGGLE')}>Display</button>
      {display === 'open' &&
          <h1>Open!</h1>
      }
    </div>
  )
}
