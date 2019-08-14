const updateState = (state, payload) => ({...state, ...payload});
export const NbaReducer = (state, action) => {
  if (action.type === 'NBA_TEAMS') {
    return updateState(state, action.payload);
  }
};
