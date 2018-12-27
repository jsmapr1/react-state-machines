import React from 'react';
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

export default function List() {
  const [list, updateList] = useState([]);
  const [display, action] = useReducer(
    transition,
    basicMachine.initial
  );
  useEffect(() => {
      fakeAPI()
      .then(json => updateList(json));
      return () => clearTimeout(timeoutId);
  })
  return(
    <div>
      <button onClick={() => action('TOGGLE')}>Display</button>
      {display === 'open' &&
        list.map(item => <h2 key={item}>{item}</h2>)
      }
    </div>
  )
}
