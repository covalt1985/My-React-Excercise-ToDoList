import React, { Component } from 'react';
class ListButtons extends Component {
 constructor(props) {
  super(props);

  this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
  this.props.action(this.props.id);
 }

 render() {
  return (
   <div>
    <button className="button" onClick={this.handleClick}>
     {this.props.func}
    </button>
   </div>
  );
 }
}

export default ListButtons;
