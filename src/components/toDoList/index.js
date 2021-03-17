import React, { Component } from 'react';

import NewToDoForm from '../newToDoForm/index';
import ListButtons from '../listButtons/index';
import ToDo from '../toDo/index';
import './style.css';

class ToDoList extends Component {
 constructor(props) {
  super(props);

  this.state = {
   toDo: [],
  };

  this.addToDo = this.addToDo.bind(this);
 }

 addToDo(newToDo) {
  this.setState((curSt) => ({
   toDo: [...curSt.toDo, newToDo],
  }));
 }

 render() {
  const toDo = this.state.toDo.map((toDo) => {
   return (
    <div className="item">
     <ToDo item={toDo.task} />
     <ListButtons func="edit" /> <ListButtons func="delete" />
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
