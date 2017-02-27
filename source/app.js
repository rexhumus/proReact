/*import React, { Component } from 'react';

// Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
      <ListItem quantity="1">Bread</ListItem>
      <ListItem quantity="6">Eggs</ListItem>
      <ListItem quantity="2">Milk</ListItem>
      </ul>
    );
  }
}

// Child Component
class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity}× {this.props.children}
      </li>
    );
  }
}

React.render(<GroceryList />,document.getElementById("root"));
*/

import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: "#BD8D31",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book. The complete source can be found image at [github](https://github.com/pro-react)",
    color: "#FFFF00",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
  {
    id: 3,
    title: "Jump up and down",
    description: "Get some excercise",
    color: "#00FFFF",
    status: "todo",
    tasks: [
      {
        id: 11,
        name: "Join Parkrun",
        done: true
      },{
        id: 12,
        name: "Use treadmil",
        done: true
      }
    ]
  },
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
