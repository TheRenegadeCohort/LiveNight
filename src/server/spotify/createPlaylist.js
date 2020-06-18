/*
SPOTIFY ENDPOINT: Create a Playlist

URL = https://api.spotify.com/v1/users/{user_id}/playlists
METHOD = POST
HEADER = {
    Authorization: 'Bearer ' + access_token  // required
    Content-Type: 'application/json'    // required
}
QUERY PARAM = {user_id}
BODY = {
    name: <Playlist Name>,  // required
    public: boolean, // optional, defaults true
    collaborative: boolean, // optional, defaults false
    description: string, // optional
}


SCOPES = {
    playlist-modify-public
    playlist-modify-private (for private or collaborative playlists only)
}

*/

const baseURL = 'https://api.spotify.com/v1/users';
