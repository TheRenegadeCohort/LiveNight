const getArtistId = require('./spotify/getArtistID');
const authFlow = require('./spotify/authFlow');

const spotifyController = { authFlow: {} };

spotifyController.getArtistId = getArtistId;
spotifyController.authFlow.callback = authFlow.callback;
spotifyController.authFlow.isLoggedIn = authFlow.isLoggedIn;
spotifyController.authFlow.signin = authFlow.signin;

module.exports = spotifyController;
