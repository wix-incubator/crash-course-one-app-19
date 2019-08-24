import {loadNbaTeams} from "../../services/NbaService";
import {teamsJsonToTeamsArr} from "../../selector/NbaSelector";
import {NbaStore} from "./NbaStore";

export const requestNbaTeamArr = async () => {
  const nbaTeamRequest = await loadNbaTeams();
  NbaStore.nbaTeamsArray = await teamsJsonToTeamsArr(nbaTeamRequest);
};


// export const requestNbaTeamArr = async (dispatch) => {
//   const nbaTeamRequest = await loadNbaTeams();
//   const nbaTeams = await teamsJsonToTeamsArr(nbaTeamRequest);
//   dispatch({type: 'NBA_TEAMS', payload: {nbaTeamsArray: nbaTeams, dataWasLoaded: true}});
// };
