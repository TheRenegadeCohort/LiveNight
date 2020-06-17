const express = require('express');
const superagent = require('superagent');
const dotenv = require('dotenv');
const path = require('path');

// set up dotenv
dotenv.config();

const app = express();

app.use(express.static('dist'));

app.get('/test', (req, res) => {
  res.sendStatus(200);
});

app.get('/callback', (req, res, next) => {
  // after user logs into spotify, spotify will redirect here
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
      //   console.log('superagent success');
      // TODO: SEND ACCESS TOKEN TO FRONT END OR SAVE IT SOMEWHERE
      // WE NEED THIS LATER TO GET SPOTIFY USER INFO LIKE THEIR PLAYLISTS

      // TODO #2: Figure out WHEN we grab their data and send it back to front-end
      // (can't figure out how to do that WITH the redirect after spotify login right now)
      const access_token = data.body.access_token;

      // REDIRECTS THE USER BACK TO TO REACT HOMEPAGE AFTER SPOTIFY SIGNIN
      return res.redirect(
        `http://localhost:3000/?access_token=${access_token}`
      );
    })
    .catch((err) => {
      console.log(err);
      next({
        err,
      });
    });
});

// TO DO: ADD ERROR HANDLING

module.exports = app;
