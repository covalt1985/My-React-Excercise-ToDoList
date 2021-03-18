import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

class NewToDoForm extends Component {
 constructor(props) {
  super(props);

  this.state = { task: '' };

  this.updateState = this.updateState.bind(this);
  this.handleAddingNewToDo = this.handleAddingNewToDo.bind(this);
 }

 updateState(evt) {
  this.setState({ [evt.target.name]: evt.target.value });
 }

 handleAddingNewToDo(evt) {
  evt.preventDefault();

  if (this.state.task) {
   this.props.addToDo({ ...this.state, id: uuid() });
   this.setState({ task: '' });
  }
 }

 render() {
  return (
   <div>
    <form onSubmit={this.handleAddingNewToDo}>
     <label htmlFor="task">New Todo</label>

     <input
      id="task"
      type="text"
      name="task"
      value={this.state.task}
      placeholder="New Todo"
      onChange={this.updateState}
     />

     <button>Add Todo</button>
    </form>
   </div>
  );
 }
}

export default NewToDoForm;
