import React from 'react';
import Contacts from './Contacts';
import Input from './Input';

class App extends React.Component{
    render(){
        return(
            <div>
                <Contacts />
                <Input />
            </div>
        );
    };
}

export default App;