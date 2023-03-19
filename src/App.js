import "./App.css";
import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    inputValue: "",
    todoList: [
      {
        name: "regiurghr",
        id: uuidv4(),
        isInEditing: false,
      },
      {
        name: "fdeujf fdekf rty",
        id: uuidv4(),
        isInEditing: false,
      },
    ],
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(this.state.inputValue);
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
          isInEditing: false,
        },
      ],
      inputValue: "",
    });
  };

  handleDeleteOnClick = (id) => {
    const delElIndex = this.state.todoList.findIndex((el) => el.id === id);
    const newList = [...this.state.todoList];
    newList.splice(delElIndex, 1);
    console.log(newList);
    this.setState({
      todoList: newList,
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
        />
      </>
    );
  }
}

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
</div> */
}
