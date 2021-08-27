import { SET_SEARCH }  from '../actions';

const INITIAL_STATE = {
  searchInput: '',
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SEARCH:
    return { ...state, searchInput: action.payload };
  default:
    return state;
  }
};

export default search;