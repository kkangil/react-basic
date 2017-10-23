import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Company from './Company';
import Details from './Details';

class App extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/company" component={Company} />
                    <Route path="/company/:id" component={Details} />
                </Switch>
            </Router>
        );
    };
};

export default App;