import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <h1>My Blog</h1>
                <div className="menu">
                    <NavLink exact to="/" activeClassName="active">홈</NavLink>
                    <NavLink to="/about" activeClassName="active">소개</NavLink>
                    <NavLink to="/post" activeClassName="active">포스트</NavLink>
                    <NavLink to="/shop" activeClassName="active">쇼핑</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </div>
            </div>
        );
    };
}

export default Header;