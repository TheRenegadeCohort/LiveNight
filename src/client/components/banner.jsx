import React, { Component } from "react";

// need clickable icon for submit

const Banner = props => {
  return (
    <div>
      <input location={props.location} onChange={e => props.eventHandler(e)} />
      <input genre={props.genre} />
    </div>
  );
};

export default Banner;
