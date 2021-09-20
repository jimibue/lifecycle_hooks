import { render } from "@testing-library/react";
import React, { useReducer, useRef } from "react";
import { Button } from "semantic-ui-react";
const intialData = [
  { id: 1, text: "Learn Redux", complete: false },
  { id: 2, text: "Learn JS", complete: true },
];

const TodolList = () => {
  // a reducer is just a function that takes state and a action
  // and returns a new state

  // with useReducer the action can be anything, number string, object,etc
  // in redux the action is an object that has a type key {type:'string'}
  // in redux it can also have other keys {type:'', payload:anydatatype}

  // dispatch can 'dispatch an action' trigger the reducer to be called
  // dispatch({type:'some string',payload:optional})

  // our reducer need to be a pure function, it doesn't mututate state...
  const todosReducer = (state, action) => {
    console.log(action);
    console.log("state", state);
    switch (action.type) {
      case "ADD_TODO":
        return [action.todo, ...state];
      case "TOGGLE_TODO":
        return state.map((t) =>
          t.id === action.id ? { ...t, complete: !t.complete } : t
        );
      case "DELETE_TODO":
        return state.filter((t) => t.id !== action.id);
      default:
        return state;
    }
  };

  const filterReducer = (state, action) => {
    switch (action.type) {
      case "ALL":
        return "all";
      case "INCOMPLETE":
        return "incomplete";
      case "COMPLETE":
        return "complete";
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todosReducer, intialData);
  const [filter, filterDispatch] = useReducer(filterReducer, "incomplete");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: {
        id: todos.length + 1,
        text: inputRef.current.value,
        completed: false,
      },
    });
    // reset form
    inputRef.current.value = "";
  };

  const renderTodos = () => {
    let filterTodos;
    if (filter == "all") {
      filterTodos = todos;
    } else if (filter == "complete") {
      filterTodos = todos.filter((t) => t.complete);
    } else {
      filterTodos = todos.filter((t) => !t.complete);
    }
    return filterTodos.map((t) => {
      return (
        <div key={t.id}>
          <p style={t.complete ? styles.complete : {}}>
            <span
              onClick={() => {
                dispatch({ type: "TOGGLE_TODO", id: t.id });
              }}
            >
              {t.text}
            </span>
            <span onClick={() => dispatch({ type: "DELETE_TODO", id: t.id })}>
              X
            </span>
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>TodoList: {filter}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      {renderTodos()}
      <div>
        <Button onClick={() => filterDispatch({ type: "ALL" })}>all</Button>
        <Button onClick={() => filterDispatch({ type: "COMPLETE" })}>
          complete
        </Button>
        <Button onClick={() => filterDispatch({ type: "INCOMPLETE" })}>
          incomplete
        </Button>
      </div>
    </div>
  );
};
const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
};
export default TodolList;
