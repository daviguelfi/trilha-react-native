import { INITIAL_STATE, types } from './constants';

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        topics: action.payload
      };

    case types.ADD_TOPIC:
      return {
        ...state,
        topics: [action.payload, ...state.topics]
      };

    default:
      return state;
  }
}
