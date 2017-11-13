import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends Component {
  render(){
    const activeStyle = {
      color : 'green',
      fontSize : '2em'
    }
    return(
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
          </li>
          <li>
            <NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink>
          </li>
        </ul>
        <hr/>
      </div>
    )
  }
};

export default Menu;
