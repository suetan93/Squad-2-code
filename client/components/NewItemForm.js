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

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <>
        <form>
          <input type="text" name="item" value={this.state.item} placeholder="Item Name" onChange={this.handleChange} required />
          <input type="number" name="quantity" value={this.state.quantity} placeholder="Item Amount" onChange={this.handleChange} required />
          <input type="text" name="unit" value={this.state.unit} placeholder="Unit" onChange={this.handleChange} required />
          <input type="button" value="Submit" ></input>
        </form>
      </>
    )
  }
}

export default NewItemForm;