import React, { Component } from "react";
import "./main.css";

class Band extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      time: "",
      venue: "",
      location: "",
    };
    //bind functions
  }

  render() {
    //need to render banner
    //need to pass location and genre down as props
    //need to render main body - needs access to state
    return (
      <div>
        <Banner
          location={this.state.location}
          genre={this.state.genre}
          eventHandler={this.eventHandler}
        />
        <MainBody location={this.state.location} genre={this.state.genre} />
      </div>
    );
  }
}

export default Main;
