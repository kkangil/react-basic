import React, { Component } from 'react';


class Controls extends Component {
    
    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubscribe}>-</button>
              <button onClick={this.props.onRandomizeColor}>랜덤</button>
            </div>
        );
    }
}

export default Controls;
