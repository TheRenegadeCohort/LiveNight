const jwt = require('jsonwebtoken');
const superagent = require('superagent');
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

  const CLIENT_URL = process.env.CLIENT_URL;

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
        { expiresIn: 1000 * 60 * 55 },
        (err, token) => {
          if (err) return next(err);
          res.cookie('access_token', token, { httpOnly: true });
          return res.redirect(`/loggedin`);
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
  if (req.cookies.access_token) {
    console.log('has cookie');
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_SIGNING_SECRET,
      (err, decoded) => {
        if (err) return res.redirect('/');
        console.log('cookie good');
        res.locals.access_token = decoded.access_token;
        return next();
      }
    );
  } else {
    return res.redirect('/');
  }
};

spotifyAuthFlow.signin = (req, res, next) => {
  if (req.cookies.access_token) {
    console.log('has cookie');
    jwt.verify(
      req.cookies.access_token,
      process.env.JWT_SIGNING_SECRET,
      (err, decoded) => {
        if (err) return res.redirect('/');
        console.log('cookie good');
        res.locals.access_token = decoded.access_token;
        return next();
      }
    );
  } else {
    const REDIRECT_URI = process.env.REDIRECT_URI;
    const CLIENT_ID = process.env.CLIENT_ID;
    (req, res) => {
      const spotifySigninURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&state=34fFs29kd09`;
      return res.redirect(spotifySigninURL);
    };
  }
};

module.exports = spotifyAuthFlow;
