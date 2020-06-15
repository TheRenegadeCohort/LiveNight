import React, {
  Component
} from 'react';
import './app.css';
import LoginBox from './components/LoginBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Kyle'
    }

    //bind functions


  }

  render() {

    return ( <
      div >
      <
      LoginBox / >
      <
      /div>
    )
  }

}

export default App;