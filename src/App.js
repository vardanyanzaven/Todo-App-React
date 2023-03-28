import "./App.css";
import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export default class App extends React.Component {
  state = {
    inputValue: "",
    todoList: [
      {
        name: "Feed the dog",
        id: uuidv4(),
        isCompleted: false,
      },
      {
        name: "Go shopping",
        id: uuidv4(),
        isCompleted: false,
      },
    ],
    filteredToDoList: [],
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAddOnClick = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim() === "") return;
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          name: this.state.inputValue,
          id: uuidv4(),
          isCompleted: false,
        },
      ],
      inputValue: "",
    });
  };

  handleDeleteOnClick = (id) => {
    const delElIndex = this.state.todoList.findIndex((el) => el.id === id);
    const newList = [...this.state.todoList];
    newList.splice(delElIndex, 1);
    this.setState({
      todoList: newList,
    });
  };

  handleSaveOnClick = (id, editingValue) => {
    console.log(editingValue);
    this.setState({
      todoList: this.state.todoList.map((listEl) =>
        listEl.id === id
          ? {
              ...listEl,
              name: editingValue,
            }
          : listEl
      ),
    });
  };

  handleCheckboxChange = (id) => {
    this.setState({
      todoList: this.state.todoList.map((listEl) =>
        listEl.id === id
          ? {
              ...listEl,
              isCompleted: !listEl.isCompleted,
            }
          : listEl
      ),
    });
  };

  render() {
    return (
      <>
        <Header
          handleAddOnClick={(e) => {
            this.handleAddOnClick(e);
          }}
          handleInputChange={(e) => {
            this.handleInputChange(e);
          }}
          inputValue={this.state.inputValue}
        />
        <hr />
        <TodoList
          todoList={this.state.todoList}
          handleDeleteOnClick={this.handleDeleteOnClick}
          handleSaveOnClick={this.handleSaveOnClick}
          handleCheckboxChange={this.handleCheckboxChange}
          handleFilterChange={(e) => {
            this.handleFilterChange(e);
          }}
        />
      </>
    );
  }
}
