import {loadNbaTeams} from "../../services/NbaService";
import {teamsJsonToTeamsArr} from "../../selector/NbaSelector";

export const requestNbaTeamArr = async (dispatch) => {
  setInterval(async () => {
    const nbaTeamRequest = await loadNbaTeams();
    const nbaTeams = await teamsJsonToTeamsArr(nbaTeamRequest);
    dispatch({type: 'NBA_TEAMS', payload: {nbaTeamsArray: nbaTeams}});
  }, 3000)
  // setTimeout(() => {
  //   dispatch({type: 'NBA_TEAMS', payload: {nbaTeamsArray: []}});
  // }, 10000);
};
