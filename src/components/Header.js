import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1>To-do App</h1>
        <form className="add-todo-form">
          <input
            type="text"
            value={this.props.inputValue}
            placeholder="Add something to do..."
            className="add-todo-input"
            onChange={this.props.handleInputChange}
          />
          <button
            className="add-todo-btn"
            onClick={this.props.handleAddOnClick}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
