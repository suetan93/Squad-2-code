import React from "react";
import axios from "axios";
import List from './List';
const URL = `http://squad2-api-tekton-argocd-squad2-api.cohort2bootcamp-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud/api/v1`


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
    this.setGroceries()
  }

  setGroceries() {
    axios.get(`${URL}/grocery-items`)
      .then((groceries) => this.setState({groceryList: groceries.data}))
      .catch(console.log)
  }

  deleteListItem (id) {
    axios.delete(`${URL}/grocery-items/${id}`)
      .then(() => this.setGroceries())
      .catch(console.log)
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
