import React from "react";
import axios from "axios";

class NewItemForm extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        item: '',
        quantity: 0,
        unit: ''
    }
  }

  render() {
    return (
      <>
        <form>
            <input type="text" name="item" value={this.state.item} placeholder="Item Name"></input>
            <input type="number" name="quantity" value={this.state.quantity} placeholder="Item Amount"></input>
            <input type="text" name="unit" value={this.state.unit} placeholder="Unit"></input>
            <input type="button" value="Submit"></input>
        </form>
      </>
    )
  }
} 

export default NewItemForm;