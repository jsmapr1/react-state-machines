import React, { useState} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { matchesState } from "xstate";

export default function HabitInput({ row, save, service }) {
  const [control, updateValue] = useState(row.value);
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
        onClick={() => service.send('TOGGLE')}
      >
        Cancel
      </Button>
    </div>
  )
}
