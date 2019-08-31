import {loadNbaTeams} from "../../services/NbaService";
import {teamsJsonToTeamsMap} from "../../selector/NbaSelector";
import {initialState} from "../AppStore";

export const requestNbaTeamArr = async (dispatch) => {
  const nbaTeamRequest = await loadNbaTeams();
  const nbaTeams = await teamsJsonToTeamsMap(nbaTeamRequest);
  dispatch({type: 'NBA_TEAMS', payload: {nbaTeamsMap: nbaTeams}});
};
