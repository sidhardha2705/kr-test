const initialState = [];

const LiveEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LIVE_EVENTS":
      return action.payload.liveEvents;

    default:
      return state;
  }
};

export default LiveEventsReducer;
