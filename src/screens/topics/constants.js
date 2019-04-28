const types = {
  FETCH_TOPICS: 'FETCH_TOPICS',
  FETCH_TOPICS_SUCCESS: 'FETCH_TOPICS_SUCCESS',
  FETCH_TOPICS_FAIL: 'FETCH_TOPICS_FAIL',
  ADD_TOPIC: 'ADD_TOPIC'
};

const INITIAL_STATE = {
  click: 0,
  topic: null,
  topics: []
};

export { INITIAL_STATE, types };
