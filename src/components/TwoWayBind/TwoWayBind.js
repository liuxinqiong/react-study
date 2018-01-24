import React, { Component } from 'react';
import bindMixin from './bindMixin';

class TwoWayBind extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.mixins = [bindMixin]; ES6中不能使用
    }

    getInitialState() {
        return {
            text: ''
        }
    }

    handleChange(key) {
        var that = this;
        return function (event) {
            var newState = {};
            newState[key] = event.target.value;
            that.setState(newState);
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange('text')} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default TwoWayBind;