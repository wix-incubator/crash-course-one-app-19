import {useEffect, useReducer} from "react";
import {requestNbaTeamArr} from "../store/nba/NbaActions";
import {NbaReducer, NbaStore} from "../store/nba";

export function useAppHook() {
  const [state, dispatch] = useReducer(NbaReducer, NbaStore);

  useEffect(() => {
    requestNbaTeamArr(dispatch);
  }, []);

  return {
    state,
    dispatch
  }
}
