import client from '../../client';
import CONSTANTS from '../../constants';
import { types as TopicsTypes } from '../topics/constants';

// CONSTANTS
const types = {
  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAIL: 'REGISTER_USER_FAIL'
};

const INITIAL_STATE = {
  loading: false
};
// ACTIONS

const registerUser = data => dispatch => {
  dispatch({ type: types.REGISTER_USER });

  return client
    .post(`${CONSTANTS.API.REGISTER}`, data, {
      headers: {
        Token: '6a4dc8edfce1a8bf8a89cdfeab0d836a2ef32275'
      }
    })
    .then(async response => {
      await dispatch({
        type: TopicsTypes.ADD_TOPIC,
        payload: response.data
      });

      await dispatch({
        type: types.REGISTER_USER_SUCCESS
      });
    })
    .catch(() => {
      dispatch({ type: types.REGISTER_USER_FAIL });
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

export { registerUser };
