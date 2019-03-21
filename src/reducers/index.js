import { combineReducers } from 'redux';
import session from './session';
import polls from './Polls';


export default combineReducers({
  session,
  polls
});
