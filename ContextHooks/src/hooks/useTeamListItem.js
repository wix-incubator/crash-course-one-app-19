import {useCallback, useEffect, useState} from 'react'
import {openScreen} from "../services/Navigation";
import store, {getTeamCounter} from "../store/AppStore";
export function useTeamListItem(componentId, nbaTeamData) {
  let unsubscribe;
  const [lastCounterValue, setLastCounterValue] = useState(0);
  const openCounterScreen = useCallback(() => openScreen(componentId, 'CounterScreen', {teamName: nbaTeamData.teamName}), []);

  useEffect(() => {
    unsubscribe = store.subscribe(() => {
      const newVal = getTeamCounter(nbaTeamData.teamName);
      if(lastCounterValue !== newVal){
        setLastCounterValue(newVal);
      }
      return () => unsubscribe();
    });
  }, [nbaTeamData]);

  return {
    openCounterScreen
  }
}
