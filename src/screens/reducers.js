import { combineReducers } from 'redux';
import topics from './topics/reducers';
import newTopic from './new-topic/duck';
import signup from './signup/duck';

export default combineReducers({
  topics,
  newTopic,
  signup
});
