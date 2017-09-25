import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

class Main extends React.Component{

    render(){
        
        let title = 'React'
        let desc = 'Description';
        
        return(
            <div>
                <h1>Hello {title} World</h1>
                <Header title={title} desc={desc} />
                <Content title={title} desc={desc} />
            </div>
        );
    };
};

export default Main;