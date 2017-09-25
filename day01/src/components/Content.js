import React from 'react';

class Content extends React.Component{
    render(){
        return(
            <div>
                <div>Content Section</div>
                <div>Content {this.props.title} {this.props.desc}</div>
            </div>
        );
    };
};

export default Content;