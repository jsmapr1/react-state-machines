import { Machine, assign } from 'xstate';
const habitInputMachine = {
  key: 'habitInput',
  initial: 'display',
  context: {
    amount: 0
  },
  states: {
    input: {
      on: {
        UPDATE: {
          actions: assign({
            amount: (context, e) => e.value
          })
        },
        TOGGLE_INPUT: 'display',
      }
    },
    display: {
      on: {
        TOGGLE_INPUT: 'input',
      }
    }
  },
};
export default Machine(habitInputMachine);
