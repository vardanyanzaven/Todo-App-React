import React from "react";
import TodoEl from "./TodoEl";

export default class TodoList extends React.Component {

  state = {
    todoList: this.props.todoList,
  };

  render() {
    return (
      <div className="todo-list">
        {this.props.todoList.map((el) => (
          <TodoEl
            key={el.id}
            id={el.id}
            name={el.name}
            isInEditing={el.isInEditing}
            handleDeleteOnClick={this.props.handleDeleteOnClick}
            handleEditOnClick={this.props.handleEditOnClick}
            handleInputChange={this.props.handleInputChange}
            handleSaveOnClick={this.props.handleSaveOnClick}
          />
        ))}
      </div>
    );
  }
}
