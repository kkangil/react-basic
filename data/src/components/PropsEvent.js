import React from 'react';
import ReactDOM from 'react-dom';

class PropsEvent extends React.Component{
    handleClick(){
        // ...
    };
    render(){
        return(
            <div>
                <a className="save-btn" onClick={this.handleClick}>save</a>
                {this.props.hr}
            </div>
        );
    };  
};
export default PropsEvent;