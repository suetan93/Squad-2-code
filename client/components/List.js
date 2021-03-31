import React from "react";
import axios from "axios";
import ListEntry from "./ListEntry"
import NewItemForm from "./NewItemForm"

class List extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        showForm: false
    }
  }

  render () {
    return (
      <>
        <div id='list'>
          <h1>Grocery List</h1>
          {this.props.groceryList.map((item, i) =>
            <ListEntry 
              key={i}
              item={item} 
              index={i}
              deleteListItem={this.props.deleteListItem}
            />
          )}
          <NewItemForm /> 
        </div>
      </>
    )
  }
}

export default List;