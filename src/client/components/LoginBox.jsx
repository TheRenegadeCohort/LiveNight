import React from 'react';
import '../app.css';
import spotifyConnect from '../assets/spotifyConnect.png';

const LoginBox = (props) => {
  // TO DO: add scope to this so we can have access to stuff like modify their
  // public and/or private playlists, etc
  const url = `/signin`;

  return (
    <div>
      <div id='login-box'>
        <h1 id='logo'> LiveTonight </h1>
        <p>
          LiveTonight is your one - stop shop for concert listings each and
          every night.We not only let you know all the bands playing in your
          city tonight, but we will create a Spotify Playlist of all their top
          tracks to help you decide which show you don 't want to miss!
        </p>
        <p>
          To get started, click the button below to login to your Spotify
          account and let us take care of the rest!
        </p>
        <a href={url}>
          <img
            id='spotifyConnectButton'
            src={spotifyConnect}
            alt='Connect to Spotify'
          />
        </a>
      </div>
    </div>
  );
};

export default LoginBox;
