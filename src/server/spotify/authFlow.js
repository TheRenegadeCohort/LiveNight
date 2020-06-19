const jwt = require('jsonwebtoken');
const spotifyAuthFlow = {};

spotifyAuthFlow.callback = (req, res, next) => {
  // will receive authorization code at req.query.code
  const body = {
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: process.env.REDIRECT_URI,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };

  // SOMEHOW SPOTIFY DIDN'T LIKE FETCH SO HAD TO USE SOMETHING ELSE
  superagent
    .post('https://accounts.spotify.com/api/token')
    .send(body)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then((data) => {
      const { access_token } = data.body;
      jwt.sign(
        { access_token },
        process.env.JWT_SIGNING_SECRET,
        { httpOnly: true },
        (err, token) => {
          if (err) return next(err);
          res.cookie(token);
          return res.redirect(`http://localhost:3000/`);
        }
      );
    })
    .catch((err) => {
      next({
        err,
      });
    });
};

spotifyAuthFlow.isLoggedIn = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(req.cookies, process.env.JWT_SIGNING_SECRET, (err, decoded) => {
      if (err) return res.redirect('/');
      res.locals.access_token = decoded.access_token;
      next();
    });
  }
};

module.exports = spotifyAuthFlow;
