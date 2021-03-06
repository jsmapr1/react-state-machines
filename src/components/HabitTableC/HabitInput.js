import React, { useState, useEffect, useMemo } from 'react';
import { interpret } from "xstate";
import HabitInputMachine from './HabitInput.machine';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { matchesState } from "xstate";

export default function HabitInput({ row, save }) {
  const [machine, setCurrent] = useState(HabitInputMachine.initialState);
  const service = useMemo(
    () =>
      interpret(HabitInputMachine.withContext({amount: row.value}))
      .onTransition(state => {
        setCurrent(state);
      })
      .start(),
    [row]
  );
  useEffect(() => {
    return () => service.stop();
  }, []);
  if(machine.value === 'display') {

    return(<span onClick={() => service.send('TOGGLE_INPUT')}>{row.value}</span>
    )
  }
  if(machine.value === 'input') {
    return(

      <div>
        <Input
          value={machine.context.amount}
          onChange={e => service.send({type: 'UPDATE', value: e.target.value})}
        ></Input>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => save(row.id, machine.context.amount)}
      >
        Save
      </Button>
    <Button
      size="small"
      variant="contained"
      color="secondary"
      onClick={() => service.send('TOGGLE_INPUT')}
    >
      Cancel
    </Button>
</div>
    )
  }
}
