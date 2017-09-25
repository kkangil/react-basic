import React from 'react';
import Htag from './Htag';
import Ptag from './Ptag';

class Header extends React.Component{
    render(){
        let header_title = this.props.title;
        let header_desc = this.props.desc;
        return(
            <div>
                <div className="header">Header Section</div>
                <div>Header {header_title} {header_desc} </div>
                <Htag aa={header_title} />
                <Ptag bb ={header_title} />
            </div>
        );
    };
};

export default Header;