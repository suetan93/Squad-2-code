import React from "react";
import axios from "axios";

class ListEntry extends React.Component {
  constructor (props) {
    super (props);
    this.state={}
  }

  render () { 
    return (
      <>
        <div id='ListEntry'>
          <input type="checkbox" />
          <div id='quantity'>{this.props.item.quantity}</div>
          <div id='unit'>{this.props.item.unit}</div>
          <div id='item'>{this.props.item.item}</div>
          <button onClick={() => this.props.deleteListItem(this.props.index)}>Delete</button>
        </div>
      </>
    )
  }
}

export default ListEntry;