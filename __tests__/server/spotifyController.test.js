const supertest = require('supertest');
const nock = require('nock');
const spotifyController = require('../../src/server/spotifyController');
const app = require('../../src/server/app');

const request = supertest(app);

describe('SPOTIFY CONTROLLER', () => {
  const dummyJSONResponse = {
    artists: {
      items: [
        {
          id: 'https://api.spotify.com/artist/testResponse',
        },
      ],
    },
  };

  it('should send a request to spotify', (done) => {
    nock('https://api.spotify.com')
      .get('/v1/search')
      .query(true)
      .reply(200, dummyJSONResponse);

    request.get('/api/artist/testArtist').expect(200, done);
  });

  it('should send a request to spotify with auth headers', (done) => {
    nock('https://api.spotify.com')
      .get('/v1/search')
      .query(true)
      .reply(function () {
        expect(this.req.headers.authorization).toBe('Bearer ');
        return [200, dummyJSONResponse];
      });

    request.get('/api/artist/testArtist').expect(200, done);
  });

  it('should include querystring in spotify request', (done) => {
    nock('https://api.spotify.com')
      .get('/v1/search')
      .query({
        type: 'artist',
        q: 'artist:testArtist',
        limit: 1,
      })
      .reply(200, dummyJSONResponse);

    request.get('/api/artist/testArtist').expect(200, done);
  });

  it('should respond with an error if spotify call fails', (done) => {
    nock('https://api.spotify.com').get('/v1/search').reply(403);

    request.get('/api/artist/testArtist').expect(400, done);
  });
});
