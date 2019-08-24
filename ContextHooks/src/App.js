import React, {useMemo} from 'react';
import Home from "./screens/Home";
import {useAppHook} from './hooks/useAppHook';

export const NbaContext = React.createContext();

const App = (props) => {
  const {state, contextData} = useAppHook(props);
  return (
    <NbaContext.Provider value={contextData}>
      <Home state={state}/>
    </NbaContext.Provider>
  )
};

export default App
