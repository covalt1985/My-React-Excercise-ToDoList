import React, { Component } from 'react';

import ListButtons from '../listButtons/index';
import './style.css';

class ToDo extends Component {
 constructor(props) {
  super(props);

  this.state = { isEditing: false, newValue: '' };
  this.editButtonHandle = this.editButtonHandle.bind(this);
  this.saveEditForm = this.saveEditForm.bind(this);
  this.updateState = this.updateState.bind(this);
 }

 editButtonHandle() {
  this.setState({ isEditing: true });
 }

 updateState(evt) {
  this.setState({ [evt.target.name]: evt.target.value });
 }

 saveEditForm(evt) {
  evt.preventDefault();
  this.props.editListState(this.props.id, this.state.newValue);
  this.setState({ isEditing: false });
 }

 render() {
  let result;

  if (this.state.isEditing) {
   result = (
    <div>
     <form onSubmit={this.saveEditForm}>
      <input
       autoFocus
       type="text"
       name="newValue"
       value={this.state.newValue}
       onChange={this.updateState}
      />
      <button>save</button>
     </form>
    </div>
   );
  } else {
   result = (
    <div className="item">
     <li>{this.props.task}</li>
     <ListButtons func="edit" action={this.editButtonHandle} />
    </div>
   );
  }

  return (
   <div className="item">
    {result}

    <ListButtons func="X" id={this.props.id} action={this.props.remove} />
   </div>
  );
 }
}

export default ToDo;
