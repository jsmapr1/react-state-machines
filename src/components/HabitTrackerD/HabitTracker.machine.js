import { Machine } from 'xstate';
const habitMachine = {
  key: 'habit',
  initial: 'dataLoading',
  states: {
    chart: {
      on: {
        TOGGLE: 'table'
      },
    },
    dataLoading: {
      on: {
        LOAD: 'table'
      }
    },
    table: {
      on: {
        TOGGLE: 'chart',
        LOAD: 'dataLoading'
      }
    }
  }
};

export default Machine(habitMachine);
