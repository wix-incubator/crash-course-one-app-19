jest.mock('../utils/NetworkUtils');
import {requestEndPoint} from '../utils/NetworkUtils';
import * as nbaService from './NbaService'

describe('NBA Service', () => {
  let uut;

  beforeEach(() => {
    jest.resetAllMocks();
    uut = require('./NbaService');
  });
  it('load nba teams', async () => {
    const mockNbaTeams = 'some_team_data';

    requestEndPoint.mockReturnValue(mockNbaTeams);

    await nbaService.loadNbaTeams();

    expect(requestEndPoint).toBeCalled();
  });
  it('should load nba team players', async () => {
    const mockNbaTeams = 'some_team_data';

    requestEndPoint.mockReturnValue(mockNbaTeams);

    await nbaService.loadNbaTeamPlayers();

    expect(requestEndPoint).toBeCalled();

  });
});