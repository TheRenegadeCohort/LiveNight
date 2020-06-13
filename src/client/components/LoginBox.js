import React, { Component } from "react";
import "../app.css";
import spotifyConnect from "../assets/spotifyConnect.png";

const LoginBox = (props) => {
  return (
    <div>
      <div id="login-box">
        <h1 id="logo">LiveTonight</h1>
        <p>
          LiveTonight is your one-stop shop for concert listings each and every
          night. We not only let you know all the bands playing in your city
          tonight, but we will create a Spotify Playlist of all their top tracks
          to help you decide which show you don't want to miss!
        </p>
        <p>
          To get started, click the button below to login to your Spotify
          account and let us take care of the rest!
        </p>
        <a href="https://accounts.spotify.com/authorize?client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URL>&scope=user-read-private%20user-read-email%20user-read-birthdate%20playlist-modify-private%20playlist-modify-public&response_type=token">
          <img
            id="spotifyConnectButton"
            src={spotifyConnect}
            alt="Connect to Spotify"
          />
        </a>
      </div>
    </div>
  );
};

export default LoginBox;
