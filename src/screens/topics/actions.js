import client from '../../client';
import CONSTANTS from '../../constants';
import { types } from './constants';

const fetchTopics = () => dispatch => {
  dispatch({ type: types.FETCH_TOPICS });

  client
    .get(`${CONSTANTS.API.TOPICS}`)
    .then(async response => {
      await dispatch({
        type: types.FETCH_TOPICS_SUCCESS,
        payload: response.data
      });
    })
    .catch(() => dispatch({ type: types.FETCH_TOPICS_FAIL }));
};

export { fetchTopics };
