/*
SPOTIFY ENDPOINT: Add Items to Playlist

URL = https://api.spotify.com/v1/playlists/{playlist_id}/tracks

METHOD = POST
HEADER = {
    Authorization: 'Bearer ' + access_token  // required
    Content-Type: 'application/json'    // required
}
PATH PARAM = {playlist_id}
QUERY PARAM = {
    url: Array<SpotifyURIs>, // optional (FORMAT: spotify:track:xxxxxxxxxxxxxxxx)
    position: integer // optional, sets the position to insert the urls
}
BODY = {
    uris: Array[String],  // optional, (FORMAT: spotify:track:xxxxxxxxxxxxxxxx), overriden by the query string if present
    position: integer // optional, sets the position to insert the urls
}


SCOPES = {
    playlist-modify-public
    playlist-modify-private (for private or collaborative playlists only)
}

*/

const baseURL = 'https://api.spotify.com/v1/playlists';

/*
SAMPLE SPOTIFY JSON RESPONSE OBJECT:

ON SUCCESS: Response Code 201
{
    "snapshot_id": "JbtmHBDBAYu3/bt8BOXKjzKx3i0b6LCa/wVjyl6qQ2Yf6nFXkbmzuEa+ZI/U1yF+"
}
*/
