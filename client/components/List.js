import React from "react";
import axios from "axios";

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
          Hello Listy people
        </div>
      </>
    )
  }
}

export default List;