const initialState = null;

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HAS_ERROR":
      return action.error;

    default:
      return state;
  }
};

export default ErrorReducer;
