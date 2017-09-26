import React from 'react';
import ReactDOM from 'react-dom';
import PropsChild from './PropsChild';
import PropsEvent from './PropsEvent';

class Props extends React.Component{
  render(){
      let props = {
          one : 1,
          two : 'bar',
          hr : <hr></hr>
      };
      
      return(
        <div>
              <div>{this.props.title}</div>
              <div>{this.props.num}</div>
              <div>Props 컴포넌트의 one : {props.one}</div>  
              <div>Props 컴포넌트의 two : {props.two}</div>
              {props.hr}
              <PropsChild one={props.one} two={props.two} hr={props.hr}  />
              <PropsEvent hr={props.hr}/>
        </div>
      );
  };  
};

Props.propType = {
    title : React.PropTypes.string.isRequired,
    num : React.PropTypes.number
};
export default Props;