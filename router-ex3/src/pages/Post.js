import React, { Component } from 'react';

class Post extends Component {
    render() {
      const {params} = this.props.match;
        return(
            <div>포스트 {params.id}</div>
        );
    }
}

export default Post;
