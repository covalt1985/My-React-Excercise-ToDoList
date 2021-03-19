import React, { Component } from 'react';

import ListButtons from '../listButtons/index';
import './style.css';

class ToDo extends Component {
 constructor(props) {
  super(props);

  this.state = {
   isEditing: false,
   newValue: this.props.task,
   isCompleted: false,
  };

  this.editButtonHandle = this.editButtonHandle.bind(this);
  this.saveEditedForm = this.saveEditedForm.bind(this);
  this.updateState = this.updateState.bind(this);
  this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this);
 }

 editButtonHandle() {
  this.setState({
   isEditing: !this.state.isEditing,
  });
 }

 updateState(evt) {
  this.setState({ [evt.target.name]: evt.target.value });
 }

 saveEditedForm(evt) {
  //update state and pass it to the parent component state
  evt.preventDefault();
  if (!this.state.newValue) {
   return this.props.remove(this.props.id);
  }
  this.props.editListState(this.props.id, this.state.newValue);
  this.setState({ isEditing: !this.state.isEditing });
 }

 toggleTaskCompletion(evt) {
  this.setState({ isCompleted: evt.target.checked });
 }

 render() {
  let result;

  if (this.state.isEditing) {
   result = (
    <div className="toDo">
     <form onSubmit={this.saveEditedForm}>
      <input
       autoFocus
       type="text"
       name="newValue"
       value={this.state.newValue}
       onChange={this.updateState}
      />
      <button className="button">{<i className="far fa-save"></i>}</button>
     </form>

     <ListButtons
      func={<i className="far fa-trash-alt"></i>}
      id={this.props.id}
      action={this.props.remove}
     />
    </div>
   );
  } else {
   result = (
    <div className="toDo">
     <li
      className={this.state.isCompleted ? 'toDo-task completed' : 'toDo-task'}>
      <label className="container">
       <span className="text">{this.props.task}</span>
       <input
        type="checkbox"
        className="checkbox"
        onChange={this.toggleTaskCompletion}
       />
       <span className="checkmark"></span>
      </label>
     </li>

     <div className="buttons">
      {!this.state.isEditing && !this.state.isCompleted && (
       <ListButtons
        func={<i className="fas fa-edit"></i>}
        action={this.editButtonHandle}
       />
      )}
      <ListButtons
       func={<i className="far fa-trash-alt"></i>}
       id={this.props.id}
       action={this.props.remove}
      />
     </div>
    </div>
   );
  }

  return <div>{result}</div>;
 }
}

export default ToDo;
