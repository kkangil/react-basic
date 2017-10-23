import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Link to="/company">채용회사 보기</Link>
            </div>
        );
    };
};

export default Main;