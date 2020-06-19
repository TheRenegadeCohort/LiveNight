const getArtistId = require('./spotify/getArtistID');
const authFlow = require('./spotify/authFlow');

const spotifyController = {};

spotifyController.getArtistId = getArtistId;
spotifyController.authFlow.callback = authFlow.callback;

module.exports = spotifyController;
