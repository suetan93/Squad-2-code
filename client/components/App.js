import React from "react";
import axios from "axios";
import List from './List';
const URL = `http://squad2-api-tekton-argocd-squad2-api.cohort2bootcamp-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud`

let groceries = [{item:'cereal', quantity: 2, unit: 'oz'}, {item:'steak', quantity: 2, unit: 'oz'}]

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      groceryList: []
    }

    this.deleteListItem = this.deleteListItem.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  componentDidMount () {
    //axios call
    // axios.get(`${URL}/api/v1/grocery-items`)
    //   .then(console.log)
    //   .then((groceries) => this.setState({groceryList: groceries}))
    //   .catch(console.log)

    this.setState({groceryList: groceries})
  }
  

  deleteListItem (index) {
    // delete item off of the list
    axios.delete(`${URL}/api/v1/grocery-items`, {})

    let copyList = [...this.state.groceryList]
    copyList.splice(index, 1)
    this.setState({groceryList: copyList});
  }

  addListItem (newItem) {
    let copyList = [...this.state.groceryList, newItem]
    this.setState({groceryList: copyList})
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
          addListItem={this.addListItem}
        />
      </>
    );
  }
}

export default App;
