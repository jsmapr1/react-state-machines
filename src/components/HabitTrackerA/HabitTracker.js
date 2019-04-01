import React from 'react';
import { useReducer, useMemo, useState, useEffect } from 'react';
import { interpret } from "xstate/lib/interpreter";
import Button from '@material-ui/core/Button';

import HabitTrackerMachine from './HabitTracker.machine';
import HabitChart from '../HabitChart/HabitChart';
import HabitTable from '../HabitTable/HabitTable';

const habitData = [
  {
    date: 'Monday',
    value: 10,
  },
  {
    date: 'Tuesday',
    value: 8,
  },
  {
    date: 'Wednesday',
    value: 9,
  },
  {
    date: 'Thurday',
    value: 5,
  },
  {
    date: 'Friday',
    value: 9,
  },
  {
    date: 'Saturday',
    value: 3,
  },
  {
    date: 'Sunday',
    value: 6,
  },
];
export default function HabitTracker() {
  const [machine, setCurrent] = useState(HabitTrackerMachine.initialState);

  const service = useMemo(
    () =>
      interpret(HabitTrackerMachine)
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
    <div
      class="habit-wrapper"
    >
      <h1>Habit Tracker</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => service.send('TOGGLE')}
      >
        {machine.value === 'chart' ? 'Show Table' : 'Show Graph'}
      </Button>
      <div class="chart-wrapper">

        {machine.value === 'chart' &&
          <HabitChart data={habitData}/>
        }
        {machine.value === 'table' &&
          <HabitTable data={habitData}/>
        }
      </div>

    </div>
  )
}
