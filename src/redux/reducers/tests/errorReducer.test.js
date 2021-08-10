import ErrorReducer from "../errorReducer";

it("Handles HAS_ERROR action correctly", () => {
  const defaultState = null;

  const action = {
    type: "HAS_ERROR",
    error: "It has error",
  };
  const reducerToTest = ErrorReducer(defaultState, action);

  expect(reducerToTest).toEqual("It has error");
});
