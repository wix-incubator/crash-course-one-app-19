class PlayerData {

    constructor(playerJson) {
      this.playerId = playerJson.idPlayer;
      this.teamId = playerJson.idTeam;
      this.dateBorn = playerJson.dateBorn;
      this.strBirthLocation = playerJson.strBirthLocation;
      this.strDescriptionEN = playerJson.strDescriptionEN;
      this.strHeight = playerJson.strHeight;
      this.playerName = playerJson.strPlayer;
      this.strPosition = playerJson.strPosition;
      this.strThumb = playerJson.strThumb;
    }
}

export default PlayerData