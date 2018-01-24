import React from 'react';
import withViewport from '../withViewport';

class MyViewComponent extends React.Component{
  render() {
    let { width, height } = this.props.viewport;
    return <div>{`Viewport: ${width}x${height}`}</div>;
  }
}

export default withViewport(MyViewComponent);