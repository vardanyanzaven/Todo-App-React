import React from "react";
import TodoEl from "./TodoEl";

export default class TodoList extends React.Component {
  state = {
    filter: "all",
    searchInput: "",
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
  handleSearchbarChange = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  };

  filterOnSearchInput = (arr) => {
    return arr.filter(el => el.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));
  }

  render() {
    const {todoList, handleDeleteOnClick, handleSaveOnClick, handleCheckboxChange } =
      this.props;
    const filteredTodoList =
      this.state.filter === "all"
        ? [...todoList]
        : this.state.filter === "completed"
        ? [...todoList].filter((el) => el.isCompleted === true)
        : this.state.filter === "incomplete"
        ? [...todoList].filter((el) => el.isCompleted === false)
        : [];
    return (
      <>
        <form>
          <input
            type="text"
            className="todo-search-bar"
            placeholder="Search"
            onChange={this.handleSearchbarChange}
          />
        </form>
        <div className="filter-todos-div">
          <p className="filter-text">Filter to-dos:</p>
          <button
            className={`filter-option-btn ${
              this.state.filtered === "all" ? "active-filter-btn" : ""
            }`}
            value="all"
            onClick={this.handleFilterChange}
          >
            All
          </button>
          <button
            className={`filter-option-btn ${
              this.state.filtered === "completed" ? "active-filter-btn" : ""
            }`}
            value="completed"
            onClick={this.handleFilterChange}
          >
            Completed
          </button>
          <button
            className={`filter-option-btn ${
              this.state.filtered === "incomplete" ? "active-filter-btn" : ""
            }`}
            value="incomplete"
            onClick={this.handleFilterChange}
          >
            Incomplete
          </button>
        </div>
        <div className="todo-list">
          {this.filterOnSearchInput(filteredTodoList).map((el) => (
            <TodoEl
              key={el.id}
              id={el.id}
              name={el.name}
              isCompleted={el.isCompleted}
              handleDeleteOnClick={handleDeleteOnClick}
              handleSaveOnClick={handleSaveOnClick}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </>
    );
  }
}
