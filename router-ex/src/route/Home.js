import React from 'react';
import { Link } from 'react-router-dom';

//<Link to="/post"><button className="btn post-btn">포스트로 이동</button></Link>

class Home extends React.Component{
    render(){
        return(
            <div className="content">
                <h2>홈</h2>
                <button className="btn post-btn" onClick={()=>{
                        this.props.history.push('/post');
                    }}>포스트로 이동</button>
            </div>
        );
    };
}

export default Home;