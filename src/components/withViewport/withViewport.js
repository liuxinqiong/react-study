import React, { Component } from "react";

function withViewport(ComposedComponent) {
  return class WithViewport extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: { width: window.innerWidth, height: window.innerHeight }
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
      window.removeEventListener("orientationchange", this.handleResize);
    }

    handleResize = () => {
      let viewport = { width: window.innerWidth, height: window.innerHeight };
      if (
        this.state.viewport.width !== viewport.width ||
        this.state.viewport.height !== viewport.height
      ) {
        this.setState({ viewport });
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} viewport={this.state.viewport} />
      );
    }
  };
}

export default withViewport;
