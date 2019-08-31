import {createStore} from '../FluxLibrary.js'

export const initialState = {
  nbaTeamsMap: {}
};

export function rootReducer(state = initialState, action) {
  let stateCopy = {...state};
  const teamName = action.payload.teamName;
  const oldValue = state.nbaTeamsMap[teamName] ? state.nbaTeamsMap[teamName].counter : 0;
  switch(action.type) {
    case 'INCREMENT':
      stateCopy.nbaTeamsMap[teamName] = {...state.nbaTeamsMap[teamName], ...{counter: oldValue + 1}};
      return {...stateCopy};
    case 'DECREMENT':
      stateCopy.nbaTeamsMap[teamName] = {...state.nbaTeamsMap[teamName], ...{counter: oldValue - 1}};
      return {...stateCopy};
    case 'NBA_TEAMS':
      stateCopy = {...state, ...action.payload};
      return {...stateCopy};
    default:
      return state;
  }
}


const store = createStore(rootReducer);

export const getTeamArrFromTeamMap = () => {
  const teamArr = [];
  Object.keys(store.getState().nbaTeamsMap).forEach((key) => {
    teamArr.push(store.getState().nbaTeamsMap[key]);
  });
  return teamArr;
}

export default store;
export const getTeamCounter = (teamName) => {
  let nbaTeamsMapElement = store.getState().nbaTeamsMap[teamName];
  if (nbaTeamsMapElement) {
    return nbaTeamsMapElement.counter;
  }
  return 0;
};
export const increment = (teamName) => store.dispatch({type: 'INCREMENT', payload: {teamName}});

export const decrement = (teamName) => store.dispatch({type: 'DECREMENT', payload: {teamName}});

