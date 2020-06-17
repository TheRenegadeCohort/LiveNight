const express = require('express');
const superagent = require('superagent');
const dotenv = require('dotenv');
const path = require('path');

// set up dotenv
dotenv.config();

const app = express();

// Serves the React App after compiled through Babel
app.use(express.static('dist'));

// Endpoint for test only
app.get('/test', (req, res) => {
  res.sendStatus(200);
});

// after user logs into spotify, spotify will redirect here
app.get('/callback', (req, res, next) => {
  // will receive authorization code at req.query.code
  const body = {
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: process.env.REDIRECT_URI,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };

  // SOMEHOW SPOTIFY DIDN'T LIKE FETCH SO HAD TO USE SOMETHING ELSE
  superagent
    .post('https://accounts.spotify.com/api/token')
    .send(body)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then((data) => {
      const access_token = data.body.access_token;

      // REDIRECTS THE USER BACK TO TO REACT HOMEPAGE AFTER SPOTIFY SIGNIN
      // INCLUDES THE ACCESS TOKEN IN QUERY PARAMS
      return res.redirect(
        `http://localhost:3000/?access_token=${access_token}`
      );
    })
    .catch((err) => {
      next({
        err,
      });
    });
});

app.use((err, req, res, next) => {
  //   console.error(err.err.message);
  const { status, message } = err.err;
  res.status(status).json({ message: message });
});

// TO DO: ADD ERROR HANDLING

module.exports = app;
