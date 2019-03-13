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
      },
      initial: 'display',
      states: {
        input: {
          on: {
            TOGGLE: 'display',
          }
        },
        display: {
          on: {
            TOGGLE: 'input',
          }
        }
      }
    }
  }
};

export default Machine(habitMachine);
