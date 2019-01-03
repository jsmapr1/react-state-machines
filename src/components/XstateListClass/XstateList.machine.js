import { Machine } from 'xstate';
const basicMachine = {
  initial: 'closed',
  states: {
    open: {
      on: {
        TOGGLE: 'closed'
      }
    },
    closed: {
      on: {
        TOGGLE: 'open'
      }
    }
  }
};

export default Machine(basicMachine);
