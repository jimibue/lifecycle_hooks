import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

const UseEffectDemo = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const tick = () => {
    // console.log("tick called");
    // I am not sure why, closure
    // does not
    // setCount(count + 1);
    // works
    setCount((c) => c + 1);
  };

  useEffect(() => {
    console.log("first useEffect called when any state changes");
    // setData("yo");
    // setCount(count + 1);
  });

  useEffect(() => {
    console.log("called only on mount");
    setData("data set on mount");
    const ticker = setInterval(() => {
      tick();
    }, 1000);

    // this componentDidUnmount
    return () => {
      console.log("unmount");
      clearInterval(ticker);
    };
  }, []);

  useEffect(() => {
    console.log("count check, called when count changes");
    if (count === 10) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <p>data: {data}</p>
      <p>count: {count} </p>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <p>toggle: {toggle ? "true" : "false"}</p>
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    </div>
  );
};
export default UseEffectDemo;
