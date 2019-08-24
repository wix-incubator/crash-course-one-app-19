import {useEffect, useMemo, useReducer} from 'react'
import {initialState, rootReducer} from '../store/AppStore';
import {requestNbaTeamArr} from '../store/nba/NbaActions';

export function useHomeHook(props) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const contextData = useMemo(() => ({componentId: props.componentId, dispatch}), []);

  useEffect(() => {
    requestNbaTeamArr(dispatch);
  }, []);

  return {
    state,
    contextData
  }
}
