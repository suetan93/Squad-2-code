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
      <div id="container">
        <div id="listName">Grocery List</div>
        <div id='list'>
          <center>
            <div id="title">
                <div className="labels"></div>
                <div className="labels">Qty</div>
                <div className="labels">Unit</div>
                <div className="labels">Item</div>
            </div>
            <div id="divEntries">
                {this.props.groceryList.map((item, i) =>
                    <ListEntry 
                    key={i}
                    item={item} 
                    index={i}
                    deleteListItem={this.props.deleteListItem}
                    />
                )}
            </div>
            <NewItemForm
                addListItem={this.props.addListItem}
            />
          </center>
        </div>
      </div>
    )
  }
}

export default List;