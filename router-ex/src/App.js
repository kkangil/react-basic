import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './route/Home';
import About from './route/About';
import Post from './route/Post';
import Shopping from './route/Shopping';
import Contact from './route/Contact';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/post" component={Post} />
                        <Route path="/shop" component={Shopping} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </BrowserRouter>
        );
    };
}

export default App;