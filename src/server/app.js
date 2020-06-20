const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const spotifyController = require('./spotifyController');
const cookieParser = require('cookie-parser');

const app = express();
// set up dotenv
dotenv.config();

app.use(express.json());
app.use(cookieParser());

// Serves the React App after compiled through Babel
app.use(express.static('dist'));

// Endpoint for test only
app.get('/test', (req, res) => res.sendStatus(200));

// after user logs into spotify, spotify will redirect here
app.get('/callback', spotifyController.authFlow.callback);

app.get('/signin', spotifyController.authFlow.signin, (req, res) => {
  res.redirect('/loggedin');
});

app.get(
  '/loggedin',
  spotifyController.authFlow.isLoggedIn,
  (req, res, next) => {
    console.log('where do we go?');
    next();
  },
  (req, res) => res.redirect('/')
);

app.get('/api/auth', spotifyController.authFlow.isLoggedIn, (req, res) => {
  res
    .status(200)
    .json({ loggedIn: true, access_token: res.locals.access_token });
});

app.get('/api/artist/:artist', spotifyController.getArtistId, (req, res) => {
  return res.status(200).json({ artist: res.locals.artist_id });
});

app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  // console.log(err);
  const { status, message } = err.err;
  res.status(status).json({ message });
});

// TO DO: ADD ERROR HANDLING
// console.log(process.env); // prints fine

module.exports = app;
