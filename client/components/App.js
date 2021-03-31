import React from "react";
import axios from 'axios';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default App;