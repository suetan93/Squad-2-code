import React from "react";
import axios from "axios";

class NewItemForm extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        item: '',
        quantity: 1,
        unit: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit (e) {
      e.preventDefault()
      this.props.addListItem(this.state)
      this.setState({item: '', quantity: 1, unit: ''})
  }

  render() {
    return (
      <>
        <form id="addForm" onSubmit={this.handleSubmit}>
          <input type="text" name="item" value={this.state.item} placeholder="Item Name" onChange={this.handleChange} required />
          <input type="number" name="quantity" value={this.state.quantity} min="1" placeholder="Item Amount" onChange={this.handleChange} required />
          <input type="text" name="unit" value={this.state.unit} placeholder="Unit" onChange={this.handleChange} required />
          <input id="addBttn" type="submit" value="Add"></input>
        </form>
      </>
    )
  }
}

export default NewItemForm;