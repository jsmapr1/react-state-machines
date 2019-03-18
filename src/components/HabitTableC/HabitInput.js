import React, { useState, useEffect, useMemo } from 'react';
import { interpret } from "xstate";
import HabitInputMachine from './HabitInput.machine';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { matchesState } from "xstate";

export default function HabitInput({ row, save }) {
  const [control, updateValue] = useState(row.value);
  const [display, setCurrent] = useState(HabitInputMachine.initialState);
  const service = useMemo(
    () =>
      interpret(HabitInputMachine)
      .onTransition(state => {
        setCurrent(state);
      })
      .start(),
    []
  );
  useEffect(() => {
    return () => service.stop();
  }, []);
   if(display.value === 'display') {
    
      return(<span onClick={() => service.send('TOGGLE_INPUT')}>{row.value}</span>
      )
    }
  if(display.value === 'input') {
    return(

      <div>
        <Input
          value={control}
          onChange={e => updateValue(e.target.value)}
        ></Input>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => save(row.id, control)}
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
