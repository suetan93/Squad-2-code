import React from "react";

class NewItemForm extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        itemName: '',
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
      this.setState({itemName: '', quantity: 1, unit: ''})
  }

  render() {
    return (
        <form id="addForm" onSubmit={(e) => {this.handleSubmit(e)}}>
          <input type="text" name="itemName" value={this.state.itemName} placeholder="Item Name" onChange={(e) => {this.handleChange(e)}} required />
          <input type="number" name="quantity" value={this.state.quantity} min="1" placeholder="Item Amount" onChange={(e) => {this.handleChange(e)}} required />
          <input type="text" name="unit" value={this.state.unit} placeholder="Unit" onChange={(e) => {this.handleChange(e)}} />
          <button id="addBttn">Add</button>
        </form>
    )
  }
}

export default NewItemForm;