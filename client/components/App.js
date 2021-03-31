import React from "react";
import axios from "axios";
import List from './List';


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }
  render() {
    return (
      <>
        <List />
      </>
    );
  }
}

export default App;
