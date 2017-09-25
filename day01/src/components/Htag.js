import React from 'react';
import Child from './Child';

class Htag extends React.Component{
    constructor(){
        super();
        this.state = {
            number : 10,
        };
    };
    addNumber(){
        this.setState({
            number : this.state.number + 1 ,
        });
    };
    minusNumber(){
        this.setState({
            number : this.state.number - 1,
        });
    };
    render(){
        return(
            <div>
                <h2>부모컴포넌트가 준 데이터는 {this.props.aa} </h2>
                <div>현재 값 : {this.state.number} </div>
                <Child num={this.state.number} />
                <button onClick={this.addNumber.bind(this)}>숫자 증가</button>
                <button onClick={this.minusNumber.bind(this)}>숫자 감소</button>
            </div>
        );
    };
};

export default Htag;