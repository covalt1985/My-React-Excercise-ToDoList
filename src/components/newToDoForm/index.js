import React, { Component } from 'react';

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
   this.props.addToDo(this.state);
   this.setState({ task: '' });
  }
 }

 render() {
  return (
   <div>
    <form onSubmit={this.handleAddingNewToDo}>
     <label>New Todo</label>
     <input
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
