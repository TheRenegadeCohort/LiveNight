const express = require('express');
const dotenv = require('dotenv');
const spotifyController = require('./spotifyController');
const cookieParser = require('cookie-parser');

// set up dotenv
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Serves the React App after compiled through Babel
app.use(express.static('dist'));

// Endpoint for test only
app.get('/test', (req, res) => {
  res.sendStatus(200);
});

// after user logs into spotify, spotify will redirect here
app.get('/callback', spotifyController.authFlow.callback);

app.get('/artist/:artist', spotifyController.getArtistId, (req, res, next) => {
  return res.status(200).json({
    artist: res.locals.artist_id,
  });
});

app.use((err, req, res, next) => {
  const { status, message } = err.err;
  res.status(status).json({ message });
});

// TO DO: ADD ERROR HANDLING

module.exports = app;
