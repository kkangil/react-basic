import React from 'react';
import ReactDOM from 'react-dom';
import Props from './components/Props';

class Main extends React.Component{
  render(){
      return(
        <div>
            <Props title={this.props.props_title} num={this.props.props_num}/>
        </div>
      );
  };  
};
Main.defaultProps = {
    props_title : 'Default props',
    props_num : 1,
    state_title : 'Default state'
};
export default Main;