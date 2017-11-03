import color from './color';
import number from './number';

import {combineReducers} from 'redux';

const reducers = combineReducers({
  color, number
})

export default reducers;
