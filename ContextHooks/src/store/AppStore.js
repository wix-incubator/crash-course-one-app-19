import {createStore} from '../FluxLibrary.js'

const initialState = {
  counterByTeams: {}
};

function rootReducer(state = initialState, action) {
  const teamName = action.payload.teamName;
  const oldValue = state.counterByTeams[teamName] || 0;
  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {counterByTeams: {...state.counterByTeams, [teamName]: oldValue + 1}});
    case 'DECREMENT':
      return Object.assign({}, state, {counterByTeams: {...state.counterByTeams, [teamName]: oldValue - 1}});
    default:
      return state;
  }
}

const store = createStore(rootReducer);



export default store;
export const getTeamCounter = (teamName) => store.getState().counterByTeams[teamName] || 0;
export const increment = (teamName) => store.dispatch({type: 'INCREMENT', payload: {teamName}});

export const decrement = (teamName) => store.dispatch({type: 'DECREMENT', payload: {teamName}});

