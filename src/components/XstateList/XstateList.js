import React from 'react';
import { useReducer, useMemo, useState, useEffect } from 'react';
import { interpret } from "xstate/lib/interpreter";

import ListMachine from './XstateList.machine';

let timeoutId;
function fakeAPI () {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => resolve(['joe', 'bob']), 1000);
  });
}


export default function XstateList() {
  const [list, updateList] = useState([]);
  const [display, setCurrent] = useState(ListMachine.initialState);

  const service = useMemo(
    () =>
      interpret(ListMachine)
      .onTransition(state => {
        setCurrent(state);
      })
      .start(),
    []
  );

  useEffect(() => {
      fakeAPI()
      .then(json => updateList(json));
      return () => clearTimeout(timeoutId);
  })

  useEffect(() => {
    return () => service.stop();
  }, []);

  return(
    <div>
      <h1>X state!</h1>
      <button onClick={() => service.send('TOGGLE')}>Display</button>
      {display.value === 'open' &&
        list.map(item => <h2 key={item}>{item}</h2>)
      }
    </div>
  )
}
