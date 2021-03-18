import React, { Component } from 'react';

import NewToDoForm from '../newToDoForm/index';
import ToDo from '../toDo/index';
import './style.css';

class ToDoList extends Component {
 constructor(props) {
  super(props);

  this.state = {
   toDo: [],
  };

  this.addToDo = this.addToDo.bind(this);
  this.remove = this.remove.bind(this);
  this.editState = this.editState.bind(this);
 }

 addToDo(newToDo) {
  this.setState(curSt => ({
   toDo: [...curSt.toDo, newToDo],
  }));
 }

 remove(id) {
  this.setState(curSt => ({
   toDo: curSt.toDo.filter(item => {
    return item.id !== id;
   }),
  }));
 }

 editState(id, newValue) {
  const editedToDo = this.state.toDo.map(el => {
   if (el.id === id) {
    el.task = newValue;
   }
   return el;
  });

  this.setState({ toDo: editedToDo });
 }

 render() {
  const toDo = this.state.toDo.map(toDo => {
   return (
    <div key={toDo.id}>
     <ToDo
      task={toDo.task}
      id={toDo.id}
      remove={this.remove}
      editListState={this.editState}
     />
    </div>
   );
  });

  return (
   <div>
    <h2>Todo List!</h2>
    <p>A simple react Todo app</p>
    <ul>{toDo}</ul>
    <NewToDoForm addToDo={this.addToDo} />
   </div>
  );
 }
}

export default ToDoList;
