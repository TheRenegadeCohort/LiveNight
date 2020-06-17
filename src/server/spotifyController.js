const superagent = require("superagent");

const spotifyController = {};

spotifyController.getArtistId = (req, res, next) => {
  let artist = req.params.artist;
  if (artist.includes(' ')) {
    artist = artist.split(' ').join('%20')
  }

  const body = {
    type: 'artist',
    q: `artist:${artist}`,
    limit: 1
  };

  const access_token = 'BQD7SKZ9q3UBoY99HUOhe9NfViudPT7nG9RGdEa3Rtomldj6EVGMDyKzRmic8qsbN9fnhoeKpXDKanqm0Aen10vw6TeE-uXDd0OCFuk0_c5zDU1-b-tib53qeq_3njbyXWXTQmOg7eEQ';

  superagent
    .get("https://api.spotify.com/v1/search")
    .set("Authorization", `Bearer ${access_token}`)
    .query(body)
    .then(data => {
      let url = data.body.artists.items[0].id;
      let urlArr = url.split('/');
      let id = urlArr[urlArr.length - 1];

      res.locals.artist_id = id;
      next();
    })
    .catch((err) => {
      console.log(err.status);
      // next({
      //   err,
      // });
      next({
        err: {
          status: 400,
          message: 'Get Artist Id Failed.'
        }
      });
    });
};

module.exports = spotifyController;