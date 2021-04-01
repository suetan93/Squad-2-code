import React from "react";
import axios from "axios";
import List from './List';

let groceries = [{item:'cereal', quantity: 2, unit: 'oz'}, {item:'steak', quantity: 2, unit: 'oz'}]

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      groceryList: []
    }

    this.deleteListItem = this.deleteListItem.bind(this);
  }

  componentDidMount () {
    //axios call
    this.setState({groceryList: groceries})
  }

  deleteListItem (index) {
    // delete item off of the list
    let copyList = [...this.state.groceryList]
    copyList.splice(index, 1)
    this.setState({groceryList: copyList});
  }



  // updateItemName () {

  // }

  // updateItemAmount () {

  // }

  // updateItemUnit () {

  // }

  render() {
    return (
      <>
        <List 
          groceryList={this.state.groceryList}
          deleteListItem={this.deleteListItem}
        />
      </>
    );
  }
}

export default App;
