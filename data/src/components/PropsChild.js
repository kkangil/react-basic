import React from 'react';
import ReactDOM from 'react-dom';

class PropsChild extends React.Component{
  render(){
      return(
        <div>
            <div>부모 컴포넌트로 부터 받은 one : {this.props.one}</div>
            <div>부모 컴포넌트로 부터 받은 two : {this.props.two}</div>
            <div>부모 컴포넌트로 부터 받은 hr {this.props.hr}</div>
        </div>
      );
  };  
};

export default PropsChild;