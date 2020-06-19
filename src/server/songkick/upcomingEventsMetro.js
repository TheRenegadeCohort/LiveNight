/*
SONGKICK METRO UPCOMING EVENTS: 

URL = https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}

QUERY PARAMS: {
    apikey: String // Required.  Hopefully coming soon.
    metro_area_id: String // Required.  The Metro ID returned by the other songkick endpoint
    min_date: YYYY-MM-DD // Optional, string in format specified 
    max_date: YYYY-MM-DD // Optional, string in format specified 
    page: Integer // Optional, page of results
    per_page: Integer // Optional, results per page
}


*/

/*

SAMPLE RESPONSE:

{
  "resultsPage": {
    "results": {
      "event": [
        {
          "id":11129128,
          "type":"Concert",
          "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
          "start": {
            "time":"20:00:00",
            "date":"2012-04-18",
            "datetime":"2012-04-18T20:00:00-0800"
          },
          "performance": [
            {
              "artist": {
                "id":29835,
                "uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                "displayName":"Wild Flag",
                "identifier": []
              },
              "id":21579303,
              "displayName":"Wild Flag",
              "billingIndex":1,
              "billing":"headline"
            }
          ],
          "location": {
            "city":"San Francisco, CA, US",
            "lng":-122.4332937,
            "lat":37.7842398
          },
          "venue": {
            "id":6239,
            "displayName":"The Fillmore",
            "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            "lng":-122.4332937,
            "lat":37.7842398,
            "metroArea": {
              "id":26330,
              "uri":"http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              "displayName":"SF Bay Area",
              "country": { "displayName":"US" },
              "state": { "displayName":"CA" }
            }
          },
          "status":"ok",
          "popularity":0.012763
        }, ....
      ]
    },
    "totalEntries":24,
    "perPage":50,
    "page":1,
    "status":"ok"
  }
}
*/
