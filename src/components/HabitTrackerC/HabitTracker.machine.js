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
        LOAD: 'chart'
      }
    },
    table: {
      on: {
        TOGGLE: 'chart',
        LOAD: 'dataLoading'
      },
      initial: 'display',
      states: {
        input: {
          on: {
            TOGGLE_INPUT: 'display',
          }
        },
        display: {
          on: {
            TOGGLE_INPUT: 'input',
          }
        }
      }
    }
  }
};

export default Machine(habitMachine);
