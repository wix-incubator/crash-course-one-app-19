import React from 'react';
import Home from "./screens/Home";
import {useAppHook} from "./hooks/useAppHook";

export const NbaContext = React.createContext();
const App = (props) => {
  const {state, dispatch} = useAppHook();

  return (
    <NbaContext.Provider value={{componentId: props.componentId, dispatch}}>
      <Home state={state}/>
    </NbaContext.Provider>
  )
};

export default App
