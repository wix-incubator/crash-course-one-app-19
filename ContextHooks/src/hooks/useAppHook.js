import {useEffect, useMemo, useReducer} from "react";
import {requestNbaTeamArr} from "../store/nba/NbaActions";
import {NbaReducer, NbaStore} from "../store/nba";

export function useAppHook() {
  const [state, dispatch] = useReducer(NbaReducer, NbaStore);
  const contextData = useMemo(() => ({componentId: props.componentId, dispatch}), []);

  useEffect(() => {
    requestNbaTeamArr(dispatch);
  }, []);

  return {
    state,
    contextData
  }
}
