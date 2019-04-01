import React from 'react';
import { useReducer, useEffect, useMemo, useState } from 'react';
import { interpret } from "xstate/lib/interpreter";

import ListMachine from './XstateList.machine';

export default function XstateList() {
  const [machine, setCurrent] = useState(ListMachine.initialState);

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
    return () => service.stop();
  }, []);

  return(
    <div>
      <h1>X state!</h1>
      <button onClick={() => service.send('TOGGLE')}>Display</button>
      {machine.value === 'open' &&
          <h1>Open!</h1>
      }
    </div>
  )
}
