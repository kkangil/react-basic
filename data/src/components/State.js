import React from 'react';
import ReactDOM from 'react-dom';

class State extends React.Component{
    constructor(){
        super();
        this.state = {
          num : 1,  
        };
    };
    addNum(){
        this.setState({
            num : this.state.num + 1,
        });
    };
    render(){
        return(
            <div>{this.state.num}</div>
        );
    };  
};
export default State;