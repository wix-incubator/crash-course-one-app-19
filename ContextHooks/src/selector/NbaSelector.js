import TeamData from '../data/TeamData'
import NbaPlayerData from "../data/PlayerData";

export function teamsJsonToTeamsArr(teamsJson) {
  const teamsData = [];
  if (teamsJson !== undefined && teamsJson.teams !== undefined) {
    teamsJson.teams.forEach((teamJson) => {
      teamsData.push(new TeamData(teamJson));
    });
  }
  return teamsData
}

export function playerJsonToPlayerArr(playersJson) {
  const playersData = [];
  if (playersJson !== undefined && playersJson.player !== undefined) {
    playersJson.player.forEach((playerData) => {
      playersData.push(new NbaPlayerData(playerData));
    });
  }
  return playersData
}
