import React from "react";

export default class Header extends React.Component {
  render() {
    const {handleAddOnClick, handleInputChange, inputValue} = this.props;
    return (
      <div className="header">
        <h1>To-do App</h1>
        <form className="add-todo-form">
          <input
            type="text"
            value={inputValue}
            placeholder="Add something to do..."
            className="add-todo-input"
            onChange={handleInputChange}
          />
          <button
            className="add-todo-btn"
            onClick={handleAddOnClick}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
