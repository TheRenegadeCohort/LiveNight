const express = require("express");
const superagent = require('superagent');
const dotenv = require('dotenv');
const path = require('path');

// set up dotenv
dotenv.config();

const app = express();

app.use(express.static("dist"));

app.get('/callback', (req, res, next) => {
  // after user logs into spotify, spotify will redirect here
  // will receive authorization code at req.query.code
  const body = {
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: process.env.REDIRECT_URI,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
  }

  // SOMEHOW SPOTIFY DIDN'T LIKE FETCH SO HAD TO USE SOMETHING ELSE
  superagent
    .post('https://accounts.spotify.com/api/token')
    .send(body)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then(data => {
      console.log('superagent success')
      const access_token = data.body.access_token;
      // TODO: SEND ACCESS TOKEN TO FRONT END OR SAVE IT SOMEWHERE

      // REDIRECTS THE USER BACK TO TO REACT HOMEPAGE AFTER SPOTIFY SIGNIN
      return res.redirect(`http://localhost:3000/`)
    })
    .catch(err => {
      console.log(err)
      next({
        err
      })
    })
})

// TO DO: ADD ERROR HANDLING

app.listen(8080, () => console.log("Listening on port 8080!"));