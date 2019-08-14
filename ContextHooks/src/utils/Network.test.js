import {requestEndPoint} from './NetworkUtils';
import fetchMock from 'fetch-mock'


describe('test network utils', () => {
  let uut;
  const fakeUrl = 'http://fake.com';
  const errorMessage = 'some_error';

  beforeEach(() => {
    jest.resetAllMocks();
    fetchMock.reset();
    uut = require('./NetworkUtils');
  });

  describe('should test request end point', () => {

    it('should send a request and return json', async () => {
      const testData = {data: 'data'};

      fetchMock.mock(fakeUrl, testData);

      const fetchResult = await requestEndPoint(fakeUrl, errorMessage);

      expect(fetchResult.data).toEqual('data');
    });
    it('should send a request and catch exception when fail', async () => {

      fetchMock.mock(fakeUrl, 403);
      let fetchResult;

      try {
        fetchResult = await requestEndPoint(fakeUrl, errorMessage);
      } catch (e) {
        expect(e).toEqual(new Error(errorMessage));
      }
      expect(fetchResult).toBe(undefined);
    });
  });
});