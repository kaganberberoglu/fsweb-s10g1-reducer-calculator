import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, STORE_MEMORY, MEMORY_TOTAL, MEMORY_RESET, CLEAR_DISPLAY } from './../actions';

export const initialState = {
  total: 0,
  operation: "*",
  memory: 0
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total,
          Number(action.payload),
          state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });

    case (STORE_MEMORY):
      return ({
        ...state,
        memory: state.total
      });

    case (MEMORY_TOTAL):
      return ({
        ...state,
        total: calculateResult(state.total, state.memory, state.operation)
      });

    case (MEMORY_RESET):
      return ({
        ...state,
        memory: initialState.memory
      });

    case (CLEAR_DISPLAY):
      return ({
        ...state,
        total: 0
      });

    default:
      return state;
  }
}

export default reducer;