import React from "react";

class Clock extends React.Component {
  state = { date: new Date(), count: 0 };

  componentDidMount() {
    console.log("mounted");
    this.ticker = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated");
    if (prevState.count === 10) {
      this.setState({
        count: 0,
      });
    }
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.ticker);
  }

  // I want to call this every second
  tick = () => {
    this.setState({
      date: new Date(),
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <p>count: {this.state.count}</p>
      </div>
    );
  }
}

export default Clock;
