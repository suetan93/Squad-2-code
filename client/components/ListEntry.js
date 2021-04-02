import React from "react";
import axios from "axios";

class ListEntry extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        
    }

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

    handleCheckbox(e) {
        if(e.target.checked) {
            document.getElementById(this.props.index).setAttribute("style", "font-style: italic; color: #808080; text-decoration: line-through")
        } else {
            document.getElementById(this.props.index).removeAttribute("style")
        }
    }

  render () { 
    return (
      <>
        <div id={this.props.index} className='listEntry'>
          <input id='check' type='checkbox' onClick={(e) => this.handleCheckbox(e)}/>
          <div id='quantity'>{this.props.item.quantity}</div>
          <div id='unit'>{this.props.item.unit}</div>
          <div id='item'>{this.props.item.item}</div>
          <div id="delete">
            <button id="remove" onClick={() => this.props.deleteListItem(this.props.index)}>Remove</button>
          </div>
        </div>
      </>
    )
  }
}

export default ListEntry;