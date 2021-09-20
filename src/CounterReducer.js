import React, { useReducer, useState } from "react";
import { Button } from "semantic-ui-react";

// reduce => taking two or more values and combining to 1
const CounterReducer = () => {
  // we get state(toggle) and a way to set state (setToggle)
  const [toggle, setToggle] = useState(false);

  // nice for more complicted data
  // useReducer we get back state(count) and dispatch(way to dispatch an 'action')
  const reducerFunction = (state, action) => {
    console.log("state:", state);
    console.log("action:", action);
    switch (action) {
      case "add":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducerFunction, 0);
  return (
    <>
      <h1>UseReducer example</h1>
      <p>count: {count}</p>
      <Button onClick={() => dispatch("add")}>add</Button>
      <Button onClick={() => dispatch("minus")}>minus</Button>
    </>
  );
};

export default CounterReducer;
