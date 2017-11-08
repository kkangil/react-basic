import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from '../containers/CounterListContainer';

import {connect} from 'react-redux';
import * as actions from '../actions';

import {getRandomColor} from '../utils';

class App extends Component {
  render() {
    const {onCreate, onRemove} = this.props;
    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onCreate : () => dispatch(actions.create(getRandomColor())),
    onRemove : () => dispatch(actions.remove())
  }
}

export default connect(null,mapDispatchToProps)(App);