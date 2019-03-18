import { Machine } from 'xstate';
const habitInputMachine = {
  key: 'habitInput',
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
};

export default Machine(habitInputMachine);
