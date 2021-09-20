import React from "react";
import { Button, Container, Divider } from "semantic-ui-react";
import Clock from "./Clock";
import CounterReducer from "./CounterReducer";
import Data from "./Data";
import DVDMove from "./DVDMove";
import TodolList from "./TodoList";
import UseEffectDemo from "./UseEffectDemo";

class App extends React.Component {
  state = { showClock: false, count: 0 };
  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };
  render() {
    return (
      <Container>
        <Divider />
        <TodolList />
        {/* <CounterReducer /> */}
        {/* <UseEffectDemo /> */}
        {/* <Divider />
        {this.state.showClock && <Clock />}
        <Button onClick={this.toggleClock} color="pink">
          Toggle Clock
        </Button>
        <Data />
        <Divider />
        <DVDMove /> */}
      </Container>
    );
  }
}

export default App;
