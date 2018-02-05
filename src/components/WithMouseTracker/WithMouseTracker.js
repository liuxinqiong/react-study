import React, { Component } from "react";

const WithMouseTracker = ComposeComponent =>
  class extends ComposeComponent {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = {
        x: 0,
        y: 0
      };
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      const { x, y } = this.state;
      return (
        <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
          <h1>I am hear</h1>
          <ComposeComponent x={x} y={y} />
        </div>
      );
    }
  };

export default WithMouseTracker;
