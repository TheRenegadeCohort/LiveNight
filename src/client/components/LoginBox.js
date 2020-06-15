import React, { Component } from "react";
import "../app.css";
import spotifyConnect from "../assets/spotifyConnect.png";

const LoginBox = (props) => {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  // TO DO: add scope to this so we can have access to stuff like modify their
  // public and/or private playlists, etc
  const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&state=34fFs29kd09`;

  return (
    <div>
      <div id="login-box">
        <h1 id="logo"> LiveTonight </h1>{" "}
        <p>
          LiveTonight is your one - stop shop for concert listings each and
          every night.We not only let you know all the bands playing in your
          city tonight, but we will create a Spotify Playlist of all their top
          tracks to help you decide which show you don 't want to miss!{" "}
        </p>{" "}
        <p>
          To get started, click the button below to login to your Spotify
          account and let us take care of the rest!
        </p>{" "}
        <a href={url}>
          <img
            id="spotifyConnectButton"
            src={spotifyConnect}
            alt="Connect to Spotify"
          />
        </a>{" "}
      </div>{" "}
    </div>
  );
};

export default LoginBox;
