import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Company extends Component{
    constructor(){
        super();
        this.state = {
            data : {
                count : 0,
                company : [],
            }
        }
    };
    componentDidMount(){
        axios.get('http://jolse505.iptime.org:8080/company')
            .then((res)=>{
            this.setState({
                data : res.data
            });
        });
    };
    render(){
        const {company} = this.state.data;
        const companyList = company.map((value)=>{
            const url = `/company/${value.id}`;
            return(
                <div key={value.id}>
                    <Link to={url}>
                        {value.id}번 회사 {value.name}
                    </Link>
                </div>
            );
        });
        return(
            <div>
                {companyList}
            </div>
        );
    };
};

export default Company;