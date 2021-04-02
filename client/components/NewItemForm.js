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

  handleSubmit () {
      this.props.addListItem(this.state)
      this.setState({item: '', quantity: 1, unit: ''})
  }

  render() {
    return (
        <div id="addForm" >
          <input type="text" name="itemName" value={this.state.item} placeholder="Item Name" onChange={this.handleChange} required />
          <input type="number" name="quantity" value={this.state.quantity} min="1" placeholder="Item Amount" onChange={this.handleChange} required />
          <input type="text" name="unit" value={this.state.unit} placeholder="Unit" onChange={this.handleChange} />
          <button id="addBttn" onClick={this.handleSubmit}>Add</button>
        </div>
    )
  }
}

export default NewItemForm;