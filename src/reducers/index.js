import { combineReducers } from 'redux';
import auth from './auth-reducer';
import emotions from './emotions-reducer'
const appReducers = combineReducers({
  auth,
  currentEmoPicked: emotions
})

export default appReducers;
