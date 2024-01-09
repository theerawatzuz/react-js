import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: undefined,
    };
  }

  render() {
    return (
      <>
        {this.state.color === "yellow" && (
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "12px",
              background: "yellow",
            }}
          >
            YELLOW
          </div>
        )}

        {this.state.color === "blue" && (
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "12px",
              background: "blue",
            }}
          >
            BLUE
          </div>
        )}
        {this.state.color === "black" && (
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "12px",
              background: "black",
              color: "white"
            }}
          >
            BLACK
          </div>
        )}

        <button onClick={() => this.setState({ color: "yellow" })}>
          Show Yellow
        </button>
        <button onClick={() => this.setState({ color: "blue" })}>
          Show Blue
        </button>
        <button onClick={() => this.setState({ color: "black" })}>
          Show Black
        </button>
      </>
    );
  }
}

export default App;
