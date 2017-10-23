import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Details extends Component{
    constructor(){
        super();
        this.state = {
            company : null
        };
    };
    componentDidMount(){
        const {params} = this.props.match;
        axios.get(`http://jolse505.iptime.org:8080/company/${params.id}`).then((res)=>{
            this.setState({
                company : res.data
            })
        })
    };
    _infoCompany(){
        const {company} = this.state;
        
        return(
            <div>
                <h3>{company.name}</h3>
                <div>{company.recruit}</div>
            </div>
        );
    };
    render(){
        return(
            <div>
                {this.state.company && this._infoCompany()}
                <Link to="/company">뒤로 가기</Link>    
            </div>
        );
    };
};

export default Details;