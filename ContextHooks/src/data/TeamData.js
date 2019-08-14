class TeamData {

    constructor(teamJson) {
        this.teamId = teamJson.idTeam;
        this.teamName = teamJson.strTeam;
        this.teamNickname = teamJson.strTeamShort;
        this.foundedYear = teamJson.intFormedYear;
        this.teamManager = teamJson.strManager;
        this.arena = teamJson.strStadium;
        this.teamDecription = teamJson.strDescriptionEN;
        this.teamBadge = teamJson.strTeamBadge;
        this.teamLogo = teamJson.strTeamLogo;
    }
}

export default TeamData