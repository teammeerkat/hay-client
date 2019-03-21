import { createAction } from 'promise-middleware-redux';
import { getPolls }  from '../services/polls';

export const [
  fetchAllPolls,
  FETCH_ALL_POLLS
] = createAction('FETCH_ALL_POLLS', getPolls);

