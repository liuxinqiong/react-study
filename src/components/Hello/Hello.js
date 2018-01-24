import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 1.0
        }
    }

    getInitialState() {
        return {
            opacity: 1.0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            var opacity = this.state.opacity;
            opacity -= 0.5;
            if (opacity < 0.1) {
                opacity = 1;
            }
            this.setState({
                opacity: opacity
            });
        }, 1000);
    }

    render() {
        return (
            <div className="hello" style={{ opacity: this.state.opacity }}>
                hello，my react =>{this.props.name}</div>
        );
    }
}

export default Hello;