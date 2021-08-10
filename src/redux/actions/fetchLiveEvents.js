import { APIKey } from "../../keys/apikey";
import { HasError } from "./hasError";

export const FetchLiveEvents = () => {
  //Checks if there's any localStorage item was set before
  const existingCache = window.localStorage.getItem("LIVE_EVENTS");

  /*
    Redux thunk comes in handy here! Instead of returning a plain object the action can return a function
    Thank function then dispatches the regular actions
  */
  return function (dispatch) {
    //If the cache is already set
    if (existingCache) {
      //Calculates how long ago the cache was set (in minutues) with the help of appended timeStamp object at the time of setting the cache
      const timeDiff =
        Math.floor(new Date() - new Date(JSON.parse(existingCache).timeStamp)) /
        (1000 * 60);

      if (timeDiff > 2) {
        MakeNewRequest(dispatch);
      } else {
        //If the cache is still valid, it will dispatch an action with existing data instead of making a new request
        dispatch({
          type: "FETCH_LIVE_EVENTS",
          payload: JSON.parse(existingCache),
        });
      }
      //If there's no cache set previously, it will make a new request
    } else {
      MakeNewRequest(dispatch);
    }
  };
};

const MakeNewRequest = (dispatch) => {
  //Clears cache before making a new request
  window.localStorage.clear();

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=${APIKey}&callback=fetchLiveEvents`;

  //If there's a network error, it will dispatch an action
  script.onerror = function (e) {
    dispatch(HasError(e));
  };

  //Appends a script tag into body
  document.body.appendChild(script);

  //Listens for the callback from JSON-P server
  window.fetchLiveEvents = function (data) {
    //Sets the cache with data from server and dispatches an action with that payload
    SetCache(data);
    dispatch({
      type: "FETCH_LIVE_EVENTS",
      payload: data,
    });
  };
};

const SetCache = (data) => {
  const dataToSet = data;
  //Appends a timeStamp along with data into the cache
  dataToSet["timeStamp"] = new Date();

  window.localStorage.setItem("LIVE_EVENTS", JSON.stringify(dataToSet));
};
