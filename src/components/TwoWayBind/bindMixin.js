/*
class bindMixin {
    handleChange(key) {
        var that = this;
        return function (event) {
            var newState = {};
            newState[key] = event.target.value;
            that.setState(newState);
        }
    }
}

export default bindMixin;
*/

import React from "react";

var Enhance = ComposeComponent =>
  class extends ComposeComponent {
    static displayName = "ComponentEnhanced";

    handleChange(key) {
      var that = this;
      return function(event) {
        var newState = {};
        newState[key] = event.target.value;
        that.setState(newState);
      };
    }

    render() {
      return <ComposeComponent onChange={this.handleChange("text")} />;
    }
  };

export default Enhance;
