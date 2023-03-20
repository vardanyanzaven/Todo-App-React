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
        name: "asdasda dsa",
        id: uuidv4(),
        isInEditing: false,
      },
      {
        name: "qwerw qwer",
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
    this.setState({
      todoList: newList,
    });
  };

  handleEditOnClick = (id) => {
    this.setState({
      todoList: this.state.todoList.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isInEditing: true,
          };
        }
        return el;
      }),
    });
    // this.state.todoList[editedElIndex].name = inputValue;
  };

  handleSaveOnClick = (id, editingValue) => {
    this.setState({
      todoList: this.state.todoList.map((listEl) =>
        listEl.id === id
          ? {
              name: editingValue,
              id,
              isInEditing: false,
            }
          : listEl
      ),
    });
  };

  // handleSaveOnClick = (id) => {
  //   // this.state.editingValue = this.state.editInputValue;
  //   this.setState({
  //     todoList: this.state.todoList.map((el) =>
  //       el.id === id
  //         ? {
  //             name: this.state.editingValue,
  //             id,
  //             isInEditing: false,
  //           }
  //         : el
  //     ),
  //   });
  // };

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
          handleEditOnClick={this.handleEditOnClick}
          handleInputChange={this.handleInputChange}
          handleSaveOnClick={this.handleSaveOnClick}
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
