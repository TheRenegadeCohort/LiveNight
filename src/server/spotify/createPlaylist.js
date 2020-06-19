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

/*
SAMPLE SPOTIFY JSON RESPONSE OBJECT:
{
    "collaborative": false, 
    "description": null, 
    "external_urls": {
        "spotify": "http://open.spotify.com/user/thelinmichael/playlist/7d2D2S200NyUE5KYs80PwO"
    },
    "followers": {
        "href": null,
        "total": 0
    },
    "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO",
    "id": "7d2D2S200NyUE5KYs80PwO", 
    "images": [],
    "name": "A New Playlist",  
    "owner": {
        "external_urls": {
            "spotify": "http://open.spotify.com/user/thelinmichael"
        },
        "href": "https://api.spotify.com/v1/users/thelinmichael",
        "id": "thelinmichael",
        "type": "user",
        "uri": "spotify:user:thelinmichael"
    },
    "public": false,
    "snapshot_id": "s0o3TSuYnRLl2jch+oA4OEbKwq/fNxhGBkSPnvhZdmWjNV0q3uCAWuGIhEx8SHIx",
    "tracks": {
        "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO/tracks",
        "items": [],
        "limit": 100,
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 0
    },
    "type": "playlist",
    "uri": "spotify:user:thelinmichael:playlist:7d2D2S200NyUE5KYs80PwO"
}
*/
