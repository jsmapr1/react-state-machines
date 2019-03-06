import { Machine } from 'xstate';
const habitMachine = {
  initial: 'dataLoading',
  states: {
    chart: {
      on: {
        TOGGLE: 'table'
      }
    },
    dataLoading: {
      on: {
        LOAD: 'chart'
      }
    },
    table: {
      on: {
        TOGGLE: 'chart'
      }
    }
  }
};

export default Machine(habitMachine);
