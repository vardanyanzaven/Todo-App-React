import React from "react";

export default class TodoEl extends React.Component {
  state = {
    isInEditing: false,
    editingValue: this.props.name,
    editInputValue: this.props.name,
  };

  handleEditOnClick = () => {
    this.setState({
      isInEditing: true,
    });
  };

  handleEditInputChange = (e) => {
    this.setState({
      editInputValue: e.target.value,
    });
  };

  render() {
    const { id, isCompleted, handleDeleteOnClick, handleSaveOnClick, handleCheckboxChange} = this.props;
    return (
      <div className="todo-el">
        {this.state.isInEditing ? (
          <input
            type="text"
            className="edit-todo-input"
            value={this.state.editInputValue}
            onChange={(e) => this.handleEditInputChange(e)}
          />
        ) : (
          <>
            <input 
              type="checkbox" className="todo-el-check"
              checked={isCompleted ? true : false}
              onChange={() => handleCheckboxChange(id)}
            />
            <p className="todo-el-text" style={{textDecorationLine: isCompleted ? "line-through" : "none"}}>{this.state.editingValue}
            </p>
          </>
        )}
        {this.state.isInEditing ? (
          <button
            className="todo-el-btn"
            onClick={() => {
              this.setState({
                editingValue: this.state.editInputValue,
              });
              handleSaveOnClick(id, this.state.editingValue);
              this.setState({
                isInEditing: false,
              });
            }}
          >
            Save
          </button>
        ) : (
          <>
            <button
              className="todo-el-btn"
              onClick={() => this.handleEditOnClick(id)}
            >
              Edit
            </button>
            <button
              className="todo-el-btn"
              onClick={() => handleDeleteOnClick(id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    );
  }
}
