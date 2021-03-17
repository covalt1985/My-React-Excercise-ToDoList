import React, { Component } from 'react';

import ListButtons from '../listButtons/index';

class ToDo extends Component {
 render() {
  return (
   <div>
    <li>{this.props.item}</li>
   </div>
  );
 }
}

export default ToDo;
