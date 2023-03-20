import React from "react";

export default class TodoEl extends React.Component {

  state = {
    editingValue: this.props.name,
    editInputValue: this.props.name
  }

  handleEditInputChange = (e) => {
    this.setState({
      editInputValue: e.target.value
    })
  }

  render() {
    return (
      <div className="todo-el">
        {this.props.isInEditing ? (
          <input type="text" className="edit-todo-input" value={this.state.editInputValue} onChange={(e) => this.handleEditInputChange(e)}/>
        ) : (
          <p className="todo-el-text">{this.props.name}</p>
        )}
        {/* <p className="todo-el-text">{this.props.name}</p> */}
        {
          this.props.isInEditing ? (
            <button 
            className="todo-el-btn"
            onClick={() => {
              this.state.editingValue = this.state.editInputValue;
              this.props.handleSaveOnClick(this.props.id, this.state.editingValue)
              }
            }
            >
            Save
          </button>
          ) : (
            <>
              <button 
              className="todo-el-btn"
              onClick={() => this.props.handleEditOnClick(this.props.id)}
            >
              Edit
            </button>
            <button
              className="todo-el-btn"
              onClick={() => this.props.handleDeleteOnClick(this.props.id)}
            >
              Delete
            </button>
            </>
          )
        }
      </div>
    );
  }
}
