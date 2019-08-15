import {loadNbaTeams} from "../../services/NbaService";
import {teamsJsonToTeamsArr} from "../../selector/NbaSelector";
import {NbaStore} from "./NbaStore";

export const requestNbaTeamArr = async () => {
  const nbaTeamRequest = await loadNbaTeams();
  NbaStore.nbaTeamsArray = await teamsJsonToTeamsArr(nbaTeamRequest);
};
