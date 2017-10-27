import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Action
const INCREMENT = 'INCREMENT';
function increase(diff){
    return{
        type : INCREMENT,
        addBy : diff
    };
}

// Reducer
const initialState = {
    value : 0
};
const counterReducer = (state=initialState,action) =>{
    switch(action.type){
        case INCREMENT :
            return Object.assign({},state,{
                value : state.value + action.addBy
            });
        default : return state;
    }
}

// Store
const store = createStore(counterReducer);

// App Component
class App extends React.Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    };
    onClick(){
        this.props.store.dispatch(increase(1));
    }
    render(){
        let centerStyle = {
            position : 'fixed',
            top : '50%',
            left : '50%',
            transform : 'translate(-50%, -50%)',
            userSelect : 'none',
            cursor : 'pointer'
        };
        return(
            <div onClick={this.onClick} style={centerStyle}>
                <h1>{this.props.store.getState().value}</h1>
            </div>
        );
    };
};

// rendering
const render = () => {
    ReactDOM.render(
        <App store={store} />,document.getElementById('root')
    );
};

store.subscribe(render);
render();
