import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

//this root reducer is mapping to the other reducers -- they are aliased on their imports
//that is why the don't have the word reducer in the name
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});
//reducer are used to update the immutable state in a store
export default rootReducer;
