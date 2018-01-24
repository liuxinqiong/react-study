import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello';
import TwoWayBind from './components/TwoWayBind';
import JsStar from './components/JsStar';
import MyViewComponent from './components/MyViewComponent';

ReactDOM.render(<App name="SKY"><span>hello</span><span>world</span></App>, document.getElementById('root'));

ReactDOM.render(<Hello name="SKY"></Hello>, document.getElementById('hello'));

ReactDOM.render(<TwoWayBind></TwoWayBind>, document.getElementById('twoWayBind'));

ReactDOM.render(<JsStar></JsStar>, document.getElementById('star'));

ReactDOM.render(<MyViewComponent></MyViewComponent>, document.getElementById('viewport'));

registerServiceWorker();
