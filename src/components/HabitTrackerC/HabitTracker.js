import React from 'react';
import { useReducer, useMemo, useState, useEffect } from 'react';
import { interpret } from "xstate";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import loadData, {saveData} from './service';
import HabitTrackerMachine from './HabitTracker.machine';
import HabitChart from '../HabitChart/HabitChart';
import HabitTable from '../HabitTableB/HabitTable';

export default function HabitTracker() {
  const [habits, setHabit] = useState([]);
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

  useEffect(async () => {
    const data = await loadData()
    setHabit(data)
    service.send('LOAD')
  }, []);

  useEffect(() => {
    return () => service.stop();
  }, []);

  const save = async (id, value) => {
    service.send('LOAD')
    const update = habits.find(habit => habit.id === id);
    await saveData(id, {
      ...update,
      value: Number(value),
    })
    const data = await loadData()
    setHabit(data)
    service.send('LOAD')
  }

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

        {machine.value === 'dataLoading' &&
            <CircularProgress />
        }
        {machine.value === 'chart' &&
          <HabitChart data={habits}/>
        }
        {machine.value.table &&
        <HabitTable
          data={habits}
          service={service}
          machine={machine}
          save={save}
        />
        }
      </div>

    </div>
  )
}
