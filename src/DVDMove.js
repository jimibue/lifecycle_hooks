import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const DVDMove = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  return (
    <>
      <div style={styles.container}>
        <p style={{ ...styles.dvd, left: xPos, top: yPos }}>DVD</p>
      </div>
      <Button onClick={() => setXPos(xPos + 10)}>move right</Button>
      <Button onClick={() => setYPos((prevState) => prevState + 10)}>
        move down
      </Button>
    </>
  );
};
export default DVDMove;

const styles = {
  container: {
    position: "relative",
    border: "1px solid blue",
    height: "300px",
    width: "300px",
  },
  dvd: {
    position: "absolute",
  },
};
