import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PostLink from '../component/PostLink';
import ReactPost from './ReactPost';
import Redux from './Redux';
import Relay from './Relay';

class Post extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className="content">
                    <h2>포스트</h2>
                    <PostLink />
                    <Route path="/react" component={ReactPost}/>
                    <Route path="/redux" component={Redux}/>
                    <Route path="/relay" component={Relay}/>
                </div>
            </BrowserRouter>
        );
    };
}

export default Post;