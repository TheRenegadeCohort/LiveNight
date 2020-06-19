/*
SONGKICK LOCATION SEARCH:

URL=  https://api.songkick.com/api/3.0/search/locations.json?query={search_query}&apikey={your_api_key}

QUERY PARAMS: {
    apikey: String // Required. Some day we will get one
    query: String // Required unless location specified.  The name of the location you are searching for
    location: {  // Required, unless query specified.  One of the following options: 
        geo: <latitude>,<longitude>
        ip: <ip address>
        clientip: <client's ip> // for client-side implementation
    } 
    page: Integer // Optional, specifies results page number
    per_page: Integer // Optional, the number of results to return per page (MAX 50)
}

SHOULD CACHE LOCATION IDS 

*/

/*
SAMPLE RESPONSE: 

 {
    "resultsPage": {
      "results": {
        "location": [
          {
            "city": {
              "displayName":"London",
              "country": { "displayName":"UK" },
              "lng":-0.128,
              "lat":51.5078
            },
            "metroArea": {
              "id":24426,
              "uri":"http://www.songkick.com/metro-areas/24426-uk-london",
              "displayName":"London",
              "country":{"displayName":"UK"},
              "lng":-0.128,
              "lat":51.5078
            }
          },
          {
            "city": {
              "displayName":"London",
              "country":{"displayName":"US"},
              "lng":null,
              "lat":null,
              "state": { "displayName":"KY" }
            },
            "metroArea": {
              "id":24580,
              "uri":"http://www.songkick.com/metro-areas/24580",
              "displayName":"Lexington",
              "country": { "displayName":"US" },
              "lng":-84.4947,
              "lat":38.0297,
              "state": { "displayName":"KY" }
            }
          }
        ]
      },
      "totalEntries":2,
      "perPage":10,
      "page":1,
      "status":"ok"
    }
  }


*/
