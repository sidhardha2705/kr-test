import LiveEventsReducer from "../liveEventsReducer";

it("Handles FETCH_LIVE_EVENTS and returns liveEvents correctly", () => {
  const defaultState = [];

  const action = {
    type: "FETCH_LIVE_EVENTS",
    payload: { liveEvents: ["something"] },
  };

  const reducerToTest = LiveEventsReducer(defaultState, action);
  expect(reducerToTest).toEqual(["something"]);
});
