import { FETCH_ALL_POLLS } from '../actions/pollsAction';

const initialState = {
  polls: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ALL_POLLS:
      return { ...state, polls: action.payload };
    default:
      return state;
  }
}
