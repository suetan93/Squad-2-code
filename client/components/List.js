import React from "react";
import axios from "axios";
import ListEntry from "./ListEntry"

class List extends React.Component {
  constructor (props) {
    super (props);
    this.state={}
  }

  render () {
    return (
      <>
        <div id='list'>
          <h1>Grocery List</h1>
          <ListEntry />
        </div>
      </>
    )
  }
}

export default List;