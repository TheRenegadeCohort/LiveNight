const supertest = require('supertest');
const dotenv = require('dotenv').config();
const nock = require('nock');

const app = require('../../src/server/app');

const request = supertest(app);

describe('sanity check test', () => {
  it('should hold to the concepts of reality', () => {
    expect(true).toBeTruthy();
    expect(true).not.toBeFalsy();
  });
});

describe('ENV variables', () => {
  it('should have defined environmental variables', () => {
    expect(process.env.REDIRECT_URI).toBeDefined();
    expect(process.env.CLIENT_ID).toBeDefined();
    expect(process.env.CLIENT_SECRET).toBeDefined();
    expect(process.env.TACO_PARTY).toBeUndefined();
  });
});

describe('GET /test', () => {
  it('should respond to a request', (done) => {
    request.get('/test').expect(200, done);
  });
});

describe('GET /callback', () => {
  const queryCode = { code: 'abc' };
  beforeEach(() => {
    nock('https://accounts.spotify.com')
      .post('/api/token')
      .reply(200, { access_token: 'abc' });
  });

  it('should respond to a request with a redirect', (done) => {
    request
      .get('/callback')
      .query(queryCode)
      .expect('Location', /loggedin/g, done);
  });

  it('should respond to a request with an access token', (done) => {
    request
      .get('/callback')
      .query(queryCode)
      .expect('set-cookie', /token/, done);
  });
});
describe('GET /callback Error Handling', () => {
  it('should respond with an error when Spotify fails', (done) => {
    const FORBIDDEN = 403;
    nock('https://accounts.spotify.com').post('/api/token').reply(FORBIDDEN);
    request.get('/callback').expect(FORBIDDEN, done);
  });
});
