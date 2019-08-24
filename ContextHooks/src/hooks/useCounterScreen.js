import {useCallback, useEffect, useMemo, useState} from 'react';
import store, {decrement, getTeamCounter, increment} from '../store/AppStore';

export function useCounterScreen(props) {
  let unsubscribe;
  const [updateCounter, setUpdateCounter] = useState(0);
  const increase = useCallback(() => increment(props.teamName), []);
  const teamCounter = useMemo(() => getTeamCounter(props.teamName), [updateCounter]);
  const decrease = useCallback(() => decrement(props.teamName, []));

  useEffect(() => {
    unsubscribe = store.subscribe(() => {
      setUpdateCounter(updateCounter + 1)
    });
    return () => unsubscribe();
  }, [updateCounter]);

  return {
    increase,
    teamCounter,
    decrease
  }
}
