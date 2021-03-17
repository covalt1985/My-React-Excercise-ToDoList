import React, { Component } from 'react';

class ListButtons extends Component {
 render() {
  return (
   <div>
    <button>{this.props.func}</button>
   </div>
  );
 }
}

export default ListButtons;
