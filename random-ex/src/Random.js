import React from 'react';
import ReactDOM from 'react-dom';

class Random extends React.Component{
    constructor(){
        super();
        this.updateRandom = this.updateRandom.bind(this);
    };
    updateRandom(){
        let new_value = Math.floor(Math.random() * 100 ) + 1;
        this.props.update(new_value);
    };
    render(){
        return(
            <div>
                <h1>1 ~ 100 숫자 중 랜덤으로 표시</h1>
                <h2>랜덤 결과 값 : <span className="value">{this.props.value}</span></h2>
                <button className="btn" onClick={this.updateRandom}>실행</button>
            </div>
        );
    };
};

export default Random;