import React from 'react';
import { useReducer, useMemo, useState, useEffect } from 'react';
import { interpret } from "xstate/lib/interpreter";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import loadData from './service';
import HabitTrackerMachine from './HabitTracker.machine';
import HabitChart from '../HabitChart/HabitChart';
import HabitTable from '../HabitTable/HabitTable';

export default function HabitTracker() {
  const [habits, setHabit] = useState([]);
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
    loadData()
      .then(data => {
        setHabit(data)
        service.send('LOAD')
      })
  }, []);

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
        {display.value === 'chart' ? 'Show Table' : 'Show Graph'}
      </Button>
      <div class="chart-wrapper">

        {display.value === 'dataLoading' &&
            <CircularProgress />
        }
        {display.value === 'chart' &&
          <HabitChart data={habits}/>
        }
        {display.value === 'table' &&
          <HabitTable data={habits}/>
        }
      </div>

    </div>
  )
}
