import React from 'react';
import ReactDOM from 'react-dom';
import Random from './Random';

class App extends React.Component{
    constructor(){
        super();
        this.state ={ 
            value : Math.floor(Math.random() * 100 ) + 1
        };
        this.onUpdate = this.onUpdate.bind(this);
    };
    onUpdate(random_value){
        this.setState({
            value : random_value
        });
    };
    render(){
        return(
            <Random value = {this.state.value} update = {this.onUpdate}/>
        );
    };
};

export default App;