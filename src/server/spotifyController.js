const superagent = require('superagent');

const spotifyController = {};

spotifyController.getArtistId = (req, res, next) => {
  let artist = req.params.artist;
  if (artist.includes(' ')) {
    artist = artist.split(' ').join('%20');
  }

  const body = {
    type: 'artist',
    q: `artist:${artist}`,
    limit: 1,
  };

  // for now -- go to the localhost front end to get access token and paste it here:
  const access_token = '';

  superagent
    .get('https://api.spotify.com/v1/search')
    .set('Authorization', `Bearer ${access_token}`)
    .query(body)
    .then((data) => {
      let url = data.body.artists.items[0].id;
      let urlArr = url.split('/');
      let id = urlArr[urlArr.length - 1];

      res.locals.artist_id = id;
      next();
    })
    .catch((err) => {
      // console.error(err);
      // next({
      //   err,
      // });
      next({
        err: {
          status: 400,
          message: 'Get Artist Id Failed.',
        },
      });
    });
};

module.exports = spotifyController;
