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
  const [habits, setHabit] = useState(habitData);
  const [display, setCurrent] = useState(HabitTrackerMachine.initialState);

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
      style={{
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <h1>Habit Tracker</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => service.send('TOGGLE')}
      >
        {display.value === 'chart' ? 'Show Table' : 'Show Graph'}
      </Button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>

        {display.value === 'chart' &&
          <HabitChart data={habitData}/>
        }
        {display.value === 'table' &&
          <HabitTable data={habitData}/>
        }
      </div>

    </div>
  )
}
