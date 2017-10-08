import React from 'react';
import { Link } from 'react-router-dom';

class PostLink extends React.Component{
    render(){
        return(
            <div className="post-link">
                <Link to="/react">React</Link>
                <Link to="/redux">Redux</Link>
                <Link to="/relay">Relay</Link>
            </div>
        );
    };
}

export default PostLink;