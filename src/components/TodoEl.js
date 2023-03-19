import React from "react";

export default class TodoEl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-el">
        {this.props.isInEditing ? (
          <input type="text" value={this.props.name} />
        ) : (
          <p className="todo-el-text">{this.props.name}</p>
        )}
        {/* <p className="todo-el-text">{this.props.name}</p> */}
        <button className="todo-el-btn">Edit</button>
        <button
          className="todo-el-btn"
          onClick={this.props.handleDeleteOnClick.bind(this, this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
