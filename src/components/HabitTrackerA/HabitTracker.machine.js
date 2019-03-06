import { Machine } from 'xstate';
const habitMachine = {
  initial: 'chart',
  states: {
    chart: {
      on: {
        TOGGLE: 'table'
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
