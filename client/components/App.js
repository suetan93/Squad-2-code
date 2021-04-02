import React from "react";
import axios from "axios";
import List from './List';
const URL = `http://squad2-api-tekton-argocd-squad2-api.cohort2bootcamp-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud/api/v1`

let groceries = [{id: 1, item:'cereal', quantity: 2, unit: 'oz'}, {id: 2, item:'steak', quantity: 2, unit: 'oz'}]

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      groceryList: []
    }

    this.deleteListItem = this.deleteListItem.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.setGroceries = this.setGroceries.bind(this);
  }

  componentDidMount () {
    //axios call
    this.setGroceries()

    // this.setState({groceryList: groceries})
  }

  setGroceries() {
    axios.get(`${URL}/grocery-items`)
      .then((groceries) => this.setState({groceryList: groceries.data}))
      .catch(console.log)
  }


  deleteListItem (index) {
    // delete item off of the list
    // axios.delete(`${URL}/grocery-items`, {})

    let copyList = [...this.state.groceryList];
    copyList.splice(index, 1);
    this.setState({groceryList: copyList});
  }

  addListItem (newItem) {
    axios.post(`${URL}/grocery-items`, newItem)
      .then(({data}) => this.setState({groceryList: [...this.state.groceryList, data]}))
      .catch(console.log)
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
        {/* <center>
          <h1>Grocery List</h1>
        </center> */}
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
