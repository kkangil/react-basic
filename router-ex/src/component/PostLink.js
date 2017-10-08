import React from 'react';
import { Link } from 'react-router-dom';

class PostLink extends React.Component{
    render(){
        return(
            <div className="post-link">
                <Link to="/post/react">React</Link>
                <Link to="/post/redux">Redux</Link>
                <Link to="/post/relay">Relay</Link>
            </div>
        );
    };
}

export default PostLink;