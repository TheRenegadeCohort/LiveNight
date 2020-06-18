import React, { Component } from 'react';
import Banner from './banner';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      genre: '',
    };
    //bind functions
    this.locationHandler = this.locationHandler.bind(this);
    this.genreHandler = this.genreHandler.bind(this);
  }

  // location input
  locationHandler(val) {
    //debug console.log if it doesn't work
    console.log(this.state.location);
    this.setState({
      location: val.target.id,
    });
  }

  //genre dropdown?
  genreHandler(val) {
    console.log(this.state.location);
    this.setState({
      genre: val.target.id,
    });
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
          locationHandler={this.locationHandler}
        />
        <div
          data-testid='main'
          location={this.state.location}
          genre={this.state.genre}
        />
      </div>
    );
  }
}

export default Main;
