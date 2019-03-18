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
            amount: (ctx, e) => e.value
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

const actions = {
  actions: {
    updateAmount: (context, event) => {
      console.log(context)
      console.log(event)
      return {
        amount: 10,
      }
    },
  }
}
export default Machine(habitInputMachine, actions);
