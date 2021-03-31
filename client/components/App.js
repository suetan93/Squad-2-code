import React from "react";
import axios from "axios";
import List from './List';


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      groceryList: [{item:'cereal', quantity: 2, unit: 'oz'}, {item:'steak', quantity: 2, unit: 'oz'}]
    }
  }
  render() {
    return (
      <>
        <List groceryList={this.state.groceryList} />
      </>
    );
  }
}

export default App;
