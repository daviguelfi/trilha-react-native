import client from '../../client';
import CONSTANTS from '../../constants';
import { types as TopicsTypes } from '../topics/constants';

// CONSTANTS

const types = {
  CREATE_TOPIC: 'CREATE_TOPIC',
  CREATE_TOPIC_SUCCESS: 'CREATE_TOPIC_SUCCESS',
  CREATE_TOPIC_FAIL: 'CREATE_TOPIC_FAIL'
};

const INITIAL_STATE = {
  loading: false
};

// ACTIONS

const createTopic = data => dispatch => {
  dispatch({ type: types.CREATE_TOPIC });

  return client
    .post(`${CONSTANTS.API.TOPICS}`, data)
    .then(async response => {
      await dispatch({
        type: TopicsTypes.ADD_TOPIC,
        payload: response.data
      });

      await dispatch({
        type: types.CREATE_TOPIC_SUCCESS
      });
    })
    .catch(() => {
      dispatch({ type: types.CREATE_TOPIC_FAIL });
      Promise.reject();
    });
};

// REDUCER

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_TOPIC:
      return { ...state, loading: true };

    case types.CREATE_TOPIC_SUCCESS:
    case types.CREATE_TOPIC_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
}

export { createTopic };
